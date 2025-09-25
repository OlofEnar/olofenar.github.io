import {codeProjects, designProjects} from "@/_data/projectItems";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import {useState} from "react";

export default function Projects() {
    const [section, setSection] = useState<"design" | "code">("design");

    return (
        <section className={styles.section}>
            <div>
                <div>
                    <h1 className={styles.heading}>Work</h1>
                    <p className={styles.description}>
                        Here's a bunch of different projects i've made through the years.
                        Some through work, freelance or just for fun.
                    </p>
                </div>

                <div className={styles.category}>
                    <button
                        className={styles.filterButton}
                        onClick={() => setSection("design")}
                    >
                        DESIGN
                    </button>
                    <button
                        className={styles.filterButton}
                        onClick={() => setSection("code")}
                    >
                        CODING
                    </button>
                </div>
            </div>

            {section === "design" && (
                <div className={styles.gridWrapper}>
                    {designProjects.map((project) => (
                        <ProjectCard {...project} key={project.slug}/>
                    ))}
                </div>
            )}

            {section === "code" && (
                <div className={styles.gridWrapper}>
                    {codeProjects.map((project) => (
                        <ProjectCard {...project} key={project.slug}/>
                    ))}
                </div>
            )}
        </section>
    );
}
