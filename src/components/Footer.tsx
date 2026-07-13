import { Github, Linkedin, Mail, FileText } from "lucide-react";

type FooterProps = React.HTMLAttributes<HTMLElement>;

const socialLinkClass =
    "inline-flex items-center justify-center min-w-11 min-h-11 rounded-lg text-gray-400 hover:text-white hover:bg-surface-elevated transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40";

export default function Footer({ className, ...props }: FooterProps) {
    return (
        <footer
            className={`bg-black border-t border-border py-10 mt-auto ${className ?? ""}`}
            {...props}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <p className="text-sm text-gray-300">
                            © {new Date().getFullYear()} Axel Delakowski. All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <a
                            href="/assets/Axel_Delakowski_Resume_2026.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialLinkClass}
                        >
                            <FileText size={20} />
                            <span className="sr-only">Resume (PDF)</span>
                        </a>
                        <a
                            href="https://github.com/adelakowski"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialLinkClass}
                        >
                            <Github size={20} />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adelakowski/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialLinkClass}
                        >
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn account</span>
                        </a>
                        <a href="mailto:axeldelakowski@gmail.com" className={socialLinkClass}>
                            <Mail size={20} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
