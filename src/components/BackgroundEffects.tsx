"use client";

import { usePathname } from "next/navigation";
import Beams from "@/components/Beams";
import ClickSpark from "@/components/ClickSpark";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function BackgroundEffects() {
    const pathname = usePathname();
    const reducedMotion = useReducedMotion();
    const showBeams = pathname === "/" && !reducedMotion;

    if (reducedMotion) {
        return (
            <div
                aria-hidden
                className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0a0f1a] to-black pointer-events-none"
            />
        );
    }

    return (
        <>
            {showBeams && <Beams />}
            <ClickSpark />
        </>
    );
}
