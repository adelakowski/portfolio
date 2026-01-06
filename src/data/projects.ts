export interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    imageUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Kinemax Fusion Engine",
        description: "A high-performance backend service for kinetic data analysis, deployed on Google Cloud Run with GPU acceleration.",
        techStack: ["Python", "FastAPI", "Docker", "GCP", "NVIDIA L4 GPU"],
        link: "#",
        imageUrl: "/assets/projects/kinemax.jpg"
    },
    {
        title: "Member Directory System",
        description: "A robust full-stack application for managing organizational members with role-based access control.",
        techStack: ["React", "Spring Boot", "PostgreSQL", "Firebase"],
        link: "#",
        imageUrl: "/assets/projects/directory.jpg"
    },
    {
        title: "Clinical Data Dashboard",
        description: "Interactive visualization tool for analyzing patient outcomes and treatment efficacy trends.",
        techStack: ["Next.js", "D3.js", "TypeScript", "Tailwind CSS"],
        link: "#",
        imageUrl: "/assets/projects/dashboard.jpg"
    },
    {
        title: "Portfolio V1",
        description: "The first iteration of my personal portfolio, showcasing early web development skills.",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "#",
        imageUrl: "/assets/projects/portfolio-v1.jpg"
    }
];
