import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary dark:text-white">Get in Touch</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                Whether you have a question about my work, a project to discuss, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 order-2 md:order-1">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h3>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                                    <a href="mailto:axel@example.com" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">axel@example.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Philadelphia, PA</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
