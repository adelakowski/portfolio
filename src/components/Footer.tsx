import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps extends React.HTMLAttributes<HTMLElement> { }

export default function Footer({ className, ...props }: FooterProps) {
    return (
        <footer className={`bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8 mt-auto ${className}`} {...props}>
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {new Date().getFullYear()} Axel Delakowski. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                    <a
                        href="https://github.com/adelakowski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Github size={20} />
                        <span className="sr-only">GitHub account</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adelakowski/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn account</span>
                    </a>
                    <a
                        href="mailto:axeldelakowski@gmail.com"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
