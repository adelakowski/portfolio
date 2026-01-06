"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
      <div className="space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            Hello, I'm Axel
          </h1>

          <h2 className="text-2xl md:text-4xl font-light text-gray-700 dark:text-gray-300">
            Biomedical Engineer turned Software Engineer
          </h2>

          <p className="text-xl text-gray-500 dark:text-gray-400 font-light">
            Masters Candidate at UPenn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center py-8"
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
    </div>
  );
}
