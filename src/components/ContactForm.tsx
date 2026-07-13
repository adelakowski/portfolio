"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeInUp } from "@/lib/motion";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const inputClass = (hasError: boolean) =>
    `w-full px-3 py-2 rounded-lg border bg-surface-elevated text-white focus:ring-2 focus:ring-primary/30 outline-none transition-all min-h-11 ${
        hasError
            ? "border-red-500 focus:border-red-500"
            : "border-border focus:border-primary"
    }`;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const reducedMotion = useReducedMotion();

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
        setSubmitError(null);

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
                setSubmitError("Failed to send message. Please try again or email me directly.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setSubmitError("An error occurred. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            variants={fadeInUp(reducedMotion)}
            initial="hidden"
            animate="visible"
            className="bg-surface/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-border"
        >
            <h2 className="text-xl font-bold mb-4 text-white">Send me a message</h2>

            {isSuccess ? (
                <motion.div
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    role="status"
                    aria-live="polite"
                    className="bg-green-950/40 border border-green-800 rounded-xl p-6 text-center space-y-4"
                >
                    <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto text-green-300">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-200">Message Sent!</h3>
                    <p className="text-green-300">
                        Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="text-sm font-medium text-green-400 hover:text-green-200 underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                    >
                        Send another message
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    {submitError && (
                        <div
                            role="alert"
                            aria-live="polite"
                            className="flex items-start gap-2 rounded-lg border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-200"
                        >
                            <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden />
                            <div>
                                <p>{submitError}</p>
                                <a
                                    href="mailto:axeldelakowski@gmail.com"
                                    className="mt-1 inline-block font-medium text-red-100 underline hover:text-white"
                                >
                                    axeldelakowski@gmail.com
                                </a>
                            </div>
                        </div>
                    )}

                    <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-200">
                            Name
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            autoComplete="name"
                            className={inputClass(!!errors.name)}
                            placeholder="Your name"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                            <p id="name-error" className="flex items-center text-sm text-red-400 mt-1">
                                <AlertCircle size={14} className="mr-1" aria-hidden />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-200">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            autoComplete="email"
                            className={inputClass(!!errors.email)}
                            placeholder="you@example.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="flex items-center text-sm text-red-400 mt-1">
                                <AlertCircle size={14} className="mr-1" aria-hidden />
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="message" className="text-sm font-medium text-gray-200">
                            Message
                        </label>
                        <textarea
                            {...register("message")}
                            id="message"
                            rows={4}
                            autoComplete="off"
                            className={`${inputClass(!!errors.message)} resize-none`}
                            placeholder="How can I help you?"
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        {errors.message && (
                            <p id="message-error" className="flex items-center text-sm text-red-400 mt-1">
                                <AlertCircle size={14} className="mr-1" aria-hidden />
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-8 py-3 min-h-11 text-white bg-primary rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-accent/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md cursor-pointer"
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white motion-reduce:animate-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    aria-hidden
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send size={18} className="ml-2" aria-hidden />
                            </>
                        )}
                    </button>
                </form>
            )}
        </motion.div>
    );
}
