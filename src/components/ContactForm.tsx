"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// Define validation schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset();
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 dark:bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100/20 dark:border-gray-800/50"
        >
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Send me a message</h2>

            {isSuccess ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center space-y-4"
                >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-300">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Message Sent!</h3>
                    <p className="text-green-700 dark:text-green-300">
                        Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 underline"
                    >
                        Send another message
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className={`w-full px-3 py-2 rounded-lg border bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all
                ${errors.name
                                    ? "border-red-300 focus:border-red-500 dark:border-red-800"
                                    : "border-gray-200 dark:border-gray-700 focus:border-primary"
                                }
                dark:text-white
              `}
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <p className="flex items-center text-sm text-red-500 mt-1">
                                <AlertCircle size={14} className="mr-1" />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            className={`w-full px-3 py-2 rounded-lg border bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all
                ${errors.email
                                    ? "border-red-300 focus:border-red-500 dark:border-red-800"
                                    : "border-gray-200 dark:border-gray-700 focus:border-primary"
                                }
                dark:text-white
              `}
                            placeholder="axel@example.com"
                        />
                        {errors.email && (
                            <p className="flex items-center text-sm text-red-500 mt-1">
                                <AlertCircle size={14} className="mr-1" />
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            {...register("message")}
                            id="message"
                            rows={3}
                            className={`w-full px-3 py-2 rounded-lg border bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none
                ${errors.message
                                    ? "border-red-300 focus:border-red-500 dark:border-red-800"
                                    : "border-gray-200 dark:border-gray-700 focus:border-primary"
                                }
                dark:text-white
              `}
                            placeholder="How can I help you?"
                        />
                        {errors.message && (
                            <p className="flex items-center text-sm text-red-500 mt-1">
                                <AlertCircle size={14} className="mr-1" />
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-8 py-3 text-white bg-primary rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send size={18} className="ml-2" />
                            </>
                        )}
                    </button>
                </form>
            )}
        </motion.div>
    );
}
