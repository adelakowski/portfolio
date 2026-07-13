"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeInUp } from "@/lib/motion";

interface ProjectCardProps {
    project: Project;
    index: number;
    featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp(reducedMotion, reducedMotion ? 0 : index * 0.05)}
            initial="hidden"
            animate="visible"
            whileHover={reducedMotion ? undefined : { y: -4 }}
            className={`group relative bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                featured ? "md:flex-row md:min-h-[280px]" : ""
            }`}
            aria-label={`${project.title} (opens in new tab)`}
        >
            <div
                className={`relative bg-surface-elevated overflow-hidden shrink-0 ${
                    featured ? "md:w-2/5 h-56 md:h-auto" : "h-48"
                }`}
            >
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        className="object-cover w-full h-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-surface-elevated flex items-center justify-center">
                        <span className="text-muted text-sm">No Image</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 motion-safe:group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className={`p-6 flex flex-col flex-grow ${featured ? "md:justify-center" : ""}`}>
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <ExternalLink
                        size={18}
                        className="text-muted shrink-0 mt-1 motion-safe:group-hover:text-accent transition-colors"
                        aria-hidden
                    />
                </div>

                <p className="text-sm font-medium text-accent mb-3">{project.highlight}</p>

                <p className="text-gray-300 mb-6 text-sm flex-grow leading-relaxed line-clamp-4 md:line-clamp-none">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 text-xs font-medium bg-surface-elevated text-gray-300 border border-border rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.a>
    );
}
