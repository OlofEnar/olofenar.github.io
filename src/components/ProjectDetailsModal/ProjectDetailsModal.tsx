import * as Dialog from "@radix-ui/react-dialog";
import {X} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import {useCallback, useEffect, useMemo, useState} from "react";
import styles from "./ProjectDetailsModal.module.scss";
import type {DesignProject} from "@/types";

type Props = {
    project: DesignProject;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function ProjectDetailsModal({project, open, onOpenChange}: Props) {
    const images = useMemo(
        () => (project.gallery?.length ? project.gallery : [project.coverImgUrl]),
        [project.gallery, project.coverImgUrl]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    // Main carousel
    const [mainRef, mainApi] = useEmblaCarousel({loop: images.length > 1});

    // Thumbnails carousel
    const [thumbsRef, thumbsApi] = useEmblaCarousel({
        align: "center",
        containScroll: "keepSnaps",
        dragFree: true,
    });

    // Sync selected index from main → thumbs
    const onSelect = useCallback(() => {
        if (!mainApi) return;
        const i = mainApi.selectedScrollSnap();
        setSelectedIndex(i);
        thumbsApi?.scrollTo(i, true);
    }, [mainApi, thumbsApi]);

    // Reset when project or dialog opens
    useEffect(() => {
        setSelectedIndex(0);
        mainApi?.scrollTo(0, true);
        thumbsApi?.scrollTo(0, true);
    }, [project, open, mainApi, thumbsApi]);

    // Wire selection events
    useEffect(() => {
        if (!mainApi) return;
        mainApi.on("select", onSelect);
        mainApi.on("reInit", onSelect);
        onSelect();
        return () => {
            mainApi.off("select", onSelect);
            mainApi.off("reInit", onSelect);
        };
    }, [mainApi, onSelect]);

    // Keyboard nav on modal
    useEffect(() => {
        if (!open || !mainApi || images.length <= 1) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") mainApi.scrollNext();
            if (e.key === "ArrowLeft") mainApi.scrollPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, mainApi, images.length]);

    const onThumbClick = (index: number) => {
        mainApi?.scrollTo(index);
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay}/>
                <Dialog.Content className={styles.content} aria-describedby="proj-desc">
                    <div className={styles.header}>
                        <Dialog.Title className={styles.title}>{project.title}</Dialog.Title>
                        <Dialog.Close className={styles.close} aria-label="Close">
                            <X size={18}/>
                        </Dialog.Close>
                    </div>

                    {/* COVER area (main carousel) */}
                    <div className={styles.media} aria-roledescription="carousel"
                         aria-label={`${project.title} images`}>
                        <div className={styles.viewport} ref={mainRef}>
                            <div className={styles.container}>
                                {images.map((src, i) => (
                                    <div className={styles.slide} key={`${project.slug ?? project.title}-${i}`}
                                         aria-hidden={i !== selectedIndex}>
                                        <img src={src} alt={`${project.title} – image ${i + 1} of ${images.length}`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* THUMBNAILS  */}
                    {images.length > 1 && (
                        <div className={styles.thumbs}>
                            <div className={styles.thumbsViewport} ref={thumbsRef}>
                                <div className={styles.thumbsContainer}>
                                    {images.map((src, i) => {
                                        const active = i === selectedIndex;
                                        return (
                                            <button
                                                key={`thumb-${i}`}
                                                type="button"
                                                onClick={() => onThumbClick(i)}
                                                className={`${styles.thumb} ${active ? styles.thumbActive : ""}`}
                                                aria-label={`Show image ${i + 1}`}
                                                aria-selected={active}
                                            >
                                                <img src={src} alt={`Thumbnail ${i + 1}`}/>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    <p className={styles.lead}>{project.description}</p>
                    <div id="proj-desc" className={styles.long}>
                        {project.longDescription}
                    </div>

                    <div className={styles.meta}>
                        <div className={styles.tags}>
                            <span className={styles.cat}>{project.category}</span>
                            {project.tags.map((t, i) => (
                                <span key={i} className={styles.tag}>
                  {t}
                </span>
                            ))}
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
