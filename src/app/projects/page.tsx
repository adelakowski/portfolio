import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    const [featured, ...rest] = PROJECTS;

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col justify-center min-h-[80vh]">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Selected Work
                </h1>
                <p className="text-lg text-gray-300 relative z-10 leading-relaxed">
                    Production systems across clinical AI, cloud infrastructure, and healthcare software.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="md:col-span-2 lg:col-span-3">
                    <ProjectCard project={featured} index={0} featured />
                </div>
                {rest.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index + 1} />
                ))}
            </div>
        </div>
    );
}
