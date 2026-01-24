import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-8 flex flex-col justify-center min-h-[80vh]">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">
                    Selected Work
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-200 relative z-10">
                    A collection of projects highlighting modern software solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}
