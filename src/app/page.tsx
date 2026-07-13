"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeIn, fadeInUp } from "@/lib/motion";

export default function Home() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between flex-grow px-4 max-w-6xl mx-auto w-full gap-12 py-12 md:py-16">
      <div className="space-y-8 flex-1 text-center md:text-left">
        <motion.div
          variants={fadeInUp(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white pb-2">
            Hello, I&apos;m
            <span className="block text-primary">Axel</span>
            <span className="block text-primary">Delakowski</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            Founding engineer building production systems from zero to scale — full-stack, ML, and cloud infrastructure.
          </p>

          <div className="space-y-4 text-center md:text-left relative z-10">
            <h2 className="text-xl md:text-2xl text-gray-200 font-medium">
              Project Engineer <span className="text-muted">@</span>{" "}
              <a
                href="https://www.organox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm"
              >
                OrganOx
              </a>
            </h2>
            <h2 className="text-xl md:text-2xl text-gray-200 font-medium">
              Software Engineer <span className="text-muted">@</span>{" "}
              <a
                href="https://www.healthcareaiguy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm"
              >
                HealthcareAIGuy
              </a>
            </h2>
            <p className="text-lg text-gray-300 pt-2 leading-relaxed max-w-xl mx-auto md:mx-0">
              Pursuing a Master of Applied Science in Computer Science - AI Concentration at{" "}
              <a
                href="https://online.seas.upenn.edu/degrees/mas-cs-online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 font-medium hover:text-accent transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm"
              >
                UPenn
              </a>
              .
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn(reducedMotion, reducedMotion ? 0 : 0.15)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link
            href="/projects"
            className="group px-8 py-3 text-lg font-medium text-white bg-primary rounded-full hover:bg-blue-700 transition-colors motion-safe:hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-accent/40 min-h-11"
          >
            View Projects
            <ArrowRight size={20} className="motion-safe:group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 text-lg font-medium text-gray-100 bg-transparent border border-border rounded-full hover:bg-white/5 hover:border-gray-500 transition-colors motion-safe:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/40 min-h-11 flex items-center justify-center"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn(reducedMotion, reducedMotion ? 0 : 0.1)}
        initial="hidden"
        animate="visible"
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
          <Image
            src="/assets/profile.jpg"
            alt="Axel Delakowski"
            width={600}
            height={600}
            className="w-auto h-auto max-w-[320px] md:max-w-[480px] object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
