import { Camera, Music, BookOpen } from "lucide-react";

export default function Hobbies() {
    const hobbies = [
        {
            name: "Photography",
            description: "Capturing moments and landscapes.",
            icon: Camera,
        },
        {
            name: "Music Production",
            description: "Creating beats and soundscapes.",
            icon: Music,
        },
        {
            name: "Reading",
            description: "Exploring new worlds through sci-fi novels.",
            icon: BookOpen,
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center text-primary dark:text-white">Hobbies & Interests</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                        <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-sm text-accent">
                            <hobby.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{hobby.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{hobby.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
