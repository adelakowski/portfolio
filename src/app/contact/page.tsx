import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col justify-center min-h-[80vh]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white relative z-10">
                Get in Touch
            </h1>
            <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
                Whether you have a question about my work, a project to discuss, or just want to say hello, I&apos;d love to hear from you.
            </p>

            <div className="max-w-xl mx-auto w-full relative z-10">
                <ContactForm />
            </div>
        </div>
    );
}
