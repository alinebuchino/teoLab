"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-foreground"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.01}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.4, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

function parseTitle(title: string): { word: string; isGradient: boolean }[] {
    const result: { word: string; isGradient: boolean }[] = [];
    const regex = /<gradient>(.*?)<\/gradient>/g;

    let match;
    let currentIndex = 0;

    while ((match = regex.exec(title)) !== null) {
        const [fullMatch, gradientContent] = match;
        const gradientStart = match.index;

        // Texto antes do <gradient>
        const normalText = title.slice(currentIndex, gradientStart);
        if (normalText) {
            result.push(
                ...normalText
                    .trim()
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((word) => ({
                        word,
                        isGradient: false,
                    }))
            );
        }

        // Texto dentro do <gradient>
        result.push(
            ...gradientContent
                .trim()
                .split(/\s+/)
                .filter(Boolean)
                .map((word) => ({
                    word,
                    isGradient: true,
                }))
        );

        // Atualiza o índice para continuar depois do </gradient>
        currentIndex = gradientStart + fullMatch.length;
    }

    // Texto restante depois do último </gradient>
    if (currentIndex < title.length) {
        const remainingText = title.slice(currentIndex);
        if (remainingText) {
            result.push(
                ...remainingText
                    .trim()
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((word) => ({
                        word,
                        isGradient: false,
                    }))
            );
        }
    }

    return result;
}


export function BackgroundPaths({
    title = "Background Paths",
    subtitle,
    children,
}: {
    title?: string;
    subtitle?: string;
    children?: ReactNode;
}) {
    const parsedWords = parseTitle(title);

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-32">
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {parsedWords.map(({ word, isGradient }, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-2 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className={`inline-block ${isGradient
                                            ? "text-transparent bg-clip-text text-gradient-divine"
                                            : "text-foreground"
                                            }`}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h2>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>

                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="relative z-10"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
