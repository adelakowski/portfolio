"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between flex-grow px-4 max-w-6xl mx-auto w-full gap-12">
      <div className="space-y-8 flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            Hello, I&apos;m Axel Delakowski
          </h1>

          <div className="space-y-4 text-left relative z-10">
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Biomedical Engineer <span className="text-gray-400">@</span> <a href="https://www.organox.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">OrganOx</a>
            </h2>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Software Engineer <span className="text-gray-400">@</span> <a href="https://www.healthcareaiguy.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">HealthcareAIGuy</a>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 pt-2 leading-relaxed max-w-xl">
              Pursuing a Master of Science in Computer Information Technology at <a href="https://online.seas.upenn.edu/degrees/mcit-online/academics/" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors hover:underline">UPenn</a>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start py-8"
        >
          <Link
            href="/projects"
            className="group px-8 py-3 text-lg font-medium text-white bg-primary rounded-full hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl shadow-blue-500/20"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 text-lg font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all hover:scale-105 dark:bg-transparent dark:text-white dark:border-gray-700 dark:hover:bg-white/5"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
          <Image
            src="/assets/profile.jpg"
            alt="Axel Delakowski"
            width={600}
            height={600}
            className="w-auto h-auto max-w-[320px] md:max-w-[600px] object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
