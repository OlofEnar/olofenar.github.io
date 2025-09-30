import {codeProjects, designProjects} from "@/_data/projectItems";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import {useState} from "react";
import type {DesignProject} from "@/types.tsx";
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";

type Section = "design" | "coding";

type ProjectsProps = {
    section: Section;
};

export default function Projects({section}: ProjectsProps) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<DesignProject | null>(null);

    return (
        <section className={styles.section}>
            {section === "design" ? (
                <div className={styles.gridWrapper}>
                    {designProjects.map((project) => (
                        <button
                            key={project.slug ?? project.title}
                            className={styles.cardButton}
                            onClick={() => {
                                setActive(project);
                                setOpen(true);
                            }}
                            aria-label={`Open details for ${project.title}`}
                        >
                            <ProjectCard {...project} />
                        </button>
                    ))}

                    {active && (
                        <ProjectDetailsModal
                            project={active}
                            open={open}
                            onOpenChange={(o) => {
                                if (!o) setActive(null);
                                setOpen(o);
                            }}
                        />
                    )}
                </div>
            ) : (
                <div className={styles.gridWrapper}>
                    {codeProjects.map((project) => (
                        <ProjectCard {...project} key={project.slug ?? project.title}/>
                    ))}
                </div>
            )}
        </section>
    );
}
