"use client";

import { useRef, useEffect } from "react";

interface ClickSparkProps {
    sparkColor?: string;
    sparkSize?: number;
    sparkCount?: number;
    duration?: number;
}

interface Spark {
    x: number;
    y: number;
    angle: number;
    speed: number;
    size: number;
    life: number;
}

const ClickSpark = ({
    sparkColor = "#fff",
    sparkSize = 10,
    sparkCount = 8,
    duration = 400,
}: ClickSparkProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sparksRef = useRef<Spark[]>([]);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const createSparks = (x: number, y: number) => {
            for (let i = 0; i < sparkCount; i++) {
                const angle = (Math.PI * 2 * i) / sparkCount;
                sparksRef.current.push({
                    x,
                    y,
                    angle,
                    speed: 2 + Math.random() * 2,
                    size: sparkSize * (0.5 + Math.random() * 0.5),
                    life: 1,
                });
            }
            if (!startTimeRef.current) {
                startTimeRef.current = performance.now();
                requestAnimationFrame(animate);
            }
        };

        const animate = (time: number) => {
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            sparksRef.current.forEach((spark, index) => {
                spark.x += Math.cos(spark.angle) * spark.speed;
                spark.y += Math.sin(spark.angle) * spark.speed;
                spark.life -= 16 / duration; // approx 60fps
                spark.size *= 0.95;

                if (spark.life <= 0) {
                    sparksRef.current.splice(index, 1);
                } else {
                    ctx.fillStyle = sparkColor;
                    ctx.beginPath();
                    ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            if (sparksRef.current.length > 0) {
                requestAnimationFrame(animate);
            } else {
                startTimeRef.current = null;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };

        const handleClick = (e: MouseEvent) => {
            createSparks(e.clientX, e.clientY);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("click", handleClick);
        };
    }, [sparkColor, sparkSize, sparkCount, duration]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
        />
    );
};

export default ClickSpark;
