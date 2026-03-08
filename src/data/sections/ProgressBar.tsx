/**
 * Progress Bar and Rewards System
 * ================================
 *
 * Shows course progress and celebrates correct answers
 */

import { type ReactElement, useEffect, useState } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { useVar, useVariableStore } from "@/stores";
import { motion, AnimatePresence } from "framer-motion";

// Section info for progress tracking
const SECTIONS = [
    { id: 1, title: "What is Algebra?" },
    { id: 2, title: "Shape Puzzles" },
    { id: 3, title: "Balance Scale" },
    { id: 4, title: "Terminology" },
    { id: 5, title: "Like Terms" },
    { id: 6, title: "Indices" },
    { id: 7, title: "Solving Equations" },
    { id: 8, title: "Quiz" },
];

// Progress bar component
function CourseProgress() {
    const correctAnswers = useVar('correctAnswers', 0) as number;
    const currentStreak = useVar('currentStreak', 0) as number;
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(100, (window.scrollY / scrollHeight) * 100);
            setScrollProgress(progress);

            // Determine active section based on scroll position
            const sectionIndex = Math.min(
                SECTIONS.length,
                Math.ceil((progress / 100) * SECTIONS.length) || 1
            );
            setActiveSection(sectionIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-3">
                {/* Top row: Section title and stats */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-600">
                            Section {activeSection}: {SECTIONS[activeSection - 1]?.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Correct answers */}
                        <div className="flex items-center gap-1.5">
                            <span className="text-lg">⭐</span>
                            <span className="text-sm font-bold text-amber-600">{correctAnswers}</span>
                        </div>
                        {/* Streak */}
                        {currentStreak >= 2 && (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-orange-100 rounded-full">
                                <span className="text-sm">🔥</span>
                                <span className="text-sm font-bold text-orange-600">{currentStreak}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)',
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${scrollProgress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                    {/* Section markers */}
                    {SECTIONS.map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-0 bottom-0 w-0.5 bg-white/50"
                            style={{ left: `${((i + 1) / SECTIONS.length) * 100}%` }}
                        />
                    ))}
                </div>

                {/* Section dots */}
                <div className="flex justify-between mt-1.5">
                    {SECTIONS.map((section, i) => (
                        <div
                            key={section.id}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                i + 1 <= activeSection ? 'bg-indigo-500' : 'bg-slate-200'
                            }`}
                            title={section.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Celebration component for correct answers
export function CelebrationOverlay() {
    const [show, setShow] = useState(false);
    const [celebrationType, setCelebrationType] = useState<'correct' | 'streak'>('correct');
    const correctAnswers = useVar('correctAnswers', 0) as number;
    const currentStreak = useVar('currentStreak', 0) as number;
    const [lastCorrect, setLastCorrect] = useState(0);
    const [lastStreak, setLastStreak] = useState(0);

    useEffect(() => {
        if (correctAnswers > lastCorrect) {
            setCelebrationType('correct');
            setShow(true);
            setLastCorrect(correctAnswers);
            setTimeout(() => setShow(false), 1500);
        }
    }, [correctAnswers, lastCorrect]);

    useEffect(() => {
        if (currentStreak > lastStreak && currentStreak >= 3 && currentStreak % 3 === 0) {
            setCelebrationType('streak');
            setShow(true);
            setLastStreak(currentStreak);
            setTimeout(() => setShow(false), 2000);
        }
    }, [currentStreak, lastStreak]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {celebrationType === 'correct' ? (
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text-6xl"
                        >
                            ⭐
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg"
                        >
                            <span className="text-2xl font-bold">🔥 {currentStreak} Streak!</span>
                        </motion.div>
                    )}

                    {/* Confetti particles */}
                    {celebrationType === 'streak' && (
                        <>
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 rounded-full"
                                    style={{
                                        backgroundColor: ['#6366f1', '#8b5cf6', '#f59e0b', '#22c55e', '#ef4444'][i % 5],
                                        left: '50%',
                                        top: '50%',
                                    }}
                                    initial={{ x: 0, y: 0, opacity: 1 }}
                                    animate={{
                                        x: (Math.random() - 0.5) * 400,
                                        y: (Math.random() - 0.5) * 400,
                                        opacity: 0,
                                    }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                />
                            ))}
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Hook to increment correct answers
export function useRewardCorrectAnswer() {
    const setVar = useVariableStore(s => s.setVariable);
    const correctAnswers = useVar('correctAnswers', 0) as number;
    const currentStreak = useVar('currentStreak', 0) as number;

    return {
        onCorrect: () => {
            setVar('correctAnswers', correctAnswers + 1);
            setVar('currentStreak', currentStreak + 1);
        },
        onIncorrect: () => {
            setVar('currentStreak', 0);
        },
    };
}

// Export progress bar as a block
export const progressBarBlocks: ReactElement[] = [
    <StackLayout key="layout-progress-bar" maxWidth="full">
        <Block id="progress-bar" padding="none">
            <CourseProgress />
        </Block>
    </StackLayout>,
];

export { CourseProgress };
