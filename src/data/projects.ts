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
        link: "https://kinemax-engine.web.app/",
        imageUrl: "/assets/projects/kinemax.png"
    },
    {
        title: "Automated Job Board",
        description: "Scalable serverless data pipeline on GCP utilizing OpenAI to parse unstructured HTML, serving 10,000+ active users.",
        techStack: ["Python", "React", "GCP", "OpenAI"],
        link: "https://haig-engine.web.app/",
        imageUrl: "/assets/projects/dashboard.png"
    },
    {
        title: "Secure Member Directory",
        description: "RESTful backend middleware acting as a secure proxy to the Airtable API with role-based access control.",
        techStack: ["Java", "Spring Boot", "Docker", "GCP", "Airtable"],
        link: "https://haig-directory.web.app/",
        imageUrl: "/assets/projects/directory.png"
    },
    {
        title: "HARP SPARC",
        description: "Accessible data analysis platform using Echo State Networks and RNNs to democratize advanced neural network research.",
        techStack: ["GCP", "Firebase", "Vertex AI", "Neural Networks"],
        link: "https://www.harpsparc.com/",
        imageUrl: "/assets/projects/harp.png"
    }
];
