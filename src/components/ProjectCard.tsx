"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                {project.imageUrl ? (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                        {/* Placeholder for now until images are added */}
                        <span className="text-sm">Image: {project.title}</span>
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-800 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-700 transition-colors"
                    >
                        View Project <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
