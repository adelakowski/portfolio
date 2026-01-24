import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary dark:text-white">Get in Touch</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                Whether you have a question about my work, a project to discuss, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="max-w-2xl mx-auto">
                <ContactForm />
            </div>
        </div>
    );
}
