import type {CodeProject, DesignProject} from "@/types";
import styles from "./ProjectCard.module.scss";
import {ExternalLink} from "lucide-react";

type Props = DesignProject | CodeProject;

export default function ProjectCard(project: Props) {
    const {title, description, tags} = project;

    return (
        <article className={styles.card}>
            {"coverImgUrl" in project && (
                <div className={styles.cover}>
                    <img src={project.coverImgUrl} alt={title}/>
                </div>
            )}

            <header>
                <div className={styles.title}>
                    <h3>{title}</h3>
                    {"url" in project && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                        >
                            <ExternalLink size={20}/>
                        </a>
                    )}
                </div>

                <p>{description}</p>
            </header>

            <footer className={styles.footer}>
                <div className="tags">
                    {tags.map((tag, i) => (
                        <span key={i} className="badge">
              {tag}
            </span>
                    ))}
                </div>
            </footer>
        </article>
    );
}
