import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">
                    Selected Work
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    A collection of projects highlighting modern software solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}
