import type { Transition, Variants } from "framer-motion";

export const motionTransition = (reducedMotion: boolean, delay = 0): Transition =>
    reducedMotion
        ? { duration: 0 }
        : { duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] };

export const fadeInUp = (reducedMotion: boolean, delay = 0): Variants => ({
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: motionTransition(reducedMotion, delay) },
});

export const fadeIn = (reducedMotion: boolean, delay = 0): Variants => ({
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0 },
    visible: { opacity: 1, transition: motionTransition(reducedMotion, delay) },
});
