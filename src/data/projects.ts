export interface Project {
    title: string;
    description: string;
    highlight: string;
    techStack: string[];
    link: string;
    imageUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        title: "The Builder Series",
        description: "A NYC founder community curating high-value relationships through intentional, experience-driven events. Weekly programming connects founders, operators, and investors in real rooms — not panels or pitch nights — with membership, events, and partner programming across a 45,000+ builder network.",
        highlight: "45,000+ member founder community in NYC",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        link: "https://thebuilderseries.co/",
        imageUrl: "/assets/projects/builderseries.png"
    },
    {
        title: "VisionLink",
        description: "VisionLink bridges the gap between advanced AI perception and clinical dialogue to provide automated ophthalmic triage in resource-limited settings. By combining vision-language models with medical reasoning, we enable early detection and appropriate referral for sight-threatening conditions like diabetic retinopathy and glaucoma.",
        highlight: "Clinical AI triage for sight-threatening conditions",
        techStack: ["LangGraph", "PaliGemma", "GCP", "Vertex AI", "React"],
        link: "https://visionlinktriage.web.app/",
        imageUrl: "/assets/projects/visionlink.png"
    },
    {
        title: "BoxAlarm",
        description: "NERIS-ready incident reporting for fire departments moving beyond NFIRS-era workflows. Import dispatch data, complete guided incident reports by type, catch validation issues before submission, and test safely in a NERIS sandbox — without replacing CAD or full records systems.",
        highlight: "70%+ dispatch fields prefilled from import",
        techStack: ["React", "Firebase", "TypeScript", "NERIS API"],
        link: "https://ardolexboxalarm.web.app/",
        imageUrl: "/assets/projects/boxalarm.png"
    },
    {
        title: "Javier",
        description: "A Manhattan-first rental concierge that scans listings across Craigslist, StreetEasy, and more — ranking matches with smart pricing insights, freshness checks, and conversational recommendations so renters spend less time refreshing listings and more time finding a place.",
        highlight: "AI-ranked NYC apartment discovery",
        techStack: ["Next.js", "React", "TypeScript", "OpenAI"],
        link: "https://javier.rent/",
        imageUrl: "/assets/projects/javier.png"
    },
    {
        title: "Kinemax Fusion Engine",
        description: "A high-performance backend service for kinetic data analysis, deployed on Google Cloud Run with GPU acceleration.",
        highlight: "GPU-accelerated kinetic analysis on Cloud Run",
        techStack: ["Python", "FastAPI", "Docker", "GCP", "NVIDIA L4 GPU"],
        link: "https://kinemax-engine.web.app/",
        imageUrl: "/assets/projects/kinemax.png"
    },
    {
        title: "Automated Job Board",
        description: "Scalable serverless data pipeline on GCP utilizing OpenAI to parse unstructured HTML, serving 15,000+ active users.",
        highlight: "15,000+ active users on serverless GCP",
        techStack: ["Python", "React", "GCP", "OpenAI"],
        link: "https://haig-engine.web.app/",
        imageUrl: "/assets/projects/dashboard.png"
    },
    {
        title: "Secure Member Directory",
        description: "RESTful backend middleware acting as a secure proxy to the Airtable API with role-based access control.",
        highlight: "Secure RBAC proxy for member data",
        techStack: ["Java", "Spring Boot", "Docker", "GCP", "Airtable"],
        link: "https://haig-directory.web.app/",
        imageUrl: "/assets/projects/directory.png"
    },
    {
        title: "HARP SPARC",
        description: "Accessible data analysis platform using Echo State Networks and RNNs to democratize advanced neural network research.",
        highlight: "Neural network research platform on Vertex AI",
        techStack: ["GCP", "Firebase", "Vertex AI", "Neural Networks"],
        link: "https://www.harpsparc.com/",
        imageUrl: "/assets/projects/harp.png"
    }
];
