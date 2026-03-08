/**
 * Section 8: Checkout Quiz
 * =========================
 *
 * Final quiz to test understanding of all concepts
 * With scoring and celebration
 */

import { type ReactElement, useMemo } from "react";
import { Block } from "@/components/templates";
import { StackLayout, SplitLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableParagraph,
    InlineClozeInput,
    InlineClozeChoice,
    InlineFeedback,
} from "@/components/atoms";
import {
    getVariableInfo,
    clozePropsFromDefinition,
    choicePropsFromDefinition,
} from "../variables";
import { useVar } from "@/stores";
import { motion } from "framer-motion";

// Star SVG component
function Star({ size = 40, color = "#f59e0b" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40">
            <polygon
                points="20,2 24,15 38,15 27,24 31,38 20,29 9,38 13,24 2,15 16,15"
                fill={color}
            />
        </svg>
    );
}

function Pentagon({ size = 40, color = "#8b5cf6" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40">
            <polygon
                points="20,2 38,14 32,36 8,36 2,14"
                fill={color}
            />
        </svg>
    );
}

// Quiz shape puzzle
function QuizShapePuzzle() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <Star />
                    <span className="text-2xl text-slate-400">+</span>
                    <Pentagon />
                    <span className="text-2xl text-slate-400">+</span>
                    <Pentagon />
                    <span className="text-2xl text-slate-400">=</span>
                    <span className="text-3xl font-bold">21</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Pentagon />
                    <span className="text-2xl text-slate-400">=</span>
                    <span className="text-3xl font-bold">8</span>
                </div>
                <div className="border-t border-dashed border-slate-300 pt-3">
                    <div className="flex items-center justify-center gap-3">
                        <Star />
                        <span className="text-2xl text-slate-400">=</span>
                        <span className="text-3xl text-slate-400">?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Score display component
function QuizScore() {
    const q1 = useVar('quiz_q1', '') as string;
    const q2 = useVar('quiz_q2', '') as string;
    const q3 = useVar('quiz_q3', '') as string;
    const q4 = useVar('quiz_q4', '') as string;
    const q5 = useVar('quiz_q5', '') as string;

    const score = useMemo(() => {
        let s = 0;
        if (q1.toLowerCase().replace(/\s/g, '') === '9y+2') s++;
        if (q2 === '3') s++;
        if (q3 === '4x and 7x') s++;
        if (q4 === '5') s++;
        if (q5 === '8') s++;
        return s;
    }, [q1, q2, q3, q4, q5]);

    const allAnswered = q1 && q2 && q3 && q4 && q5;

    if (!allAnswered) {
        return (
            <div className="bg-slate-100 rounded-xl p-6 text-center">
                <p className="text-slate-500">Complete all questions to see your score!</p>
            </div>
        );
    }

    const percentage = (score / 5) * 100;
    const message = score === 5
        ? "Perfect score! You've mastered the basics of algebra! 🎉"
        : score >= 4
        ? "Excellent work! You've got a strong grasp of algebra!"
        : score >= 3
        ? "Good job! Review the sections where you struggled."
        : "Keep practicing! Review the earlier sections and try again.";

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`rounded-xl p-6 text-center ${
                score === 5
                    ? 'bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300'
                    : score >= 3
                    ? 'bg-green-50 border-2 border-green-200'
                    : 'bg-amber-50 border-2 border-amber-200'
            }`}
        >
            <div className="text-6xl font-bold mb-2">
                {score}/5
            </div>
            <div className="text-lg font-medium text-slate-700 mb-4">
                {percentage}% Correct
            </div>

            {/* Stars display */}
            <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Star
                            size={32}
                            color={i < score ? '#f59e0b' : '#e2e8f0'}
                        />
                    </motion.div>
                ))}
            </div>

            <p className="text-slate-600">{message}</p>

            {score === 5 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold"
                >
                    🏆 Algebra Champion!
                </motion.div>
            )}
        </motion.div>
    );
}

export const section8QuizBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-quiz-title" maxWidth="xl">
        <Block id="quiz-title" padding="lg">
            <EditableH2 id="h2-quiz-title" blockId="quiz-title">
                Final Quiz: Test Your Skills!
            </EditableH2>
        </Block>
    </StackLayout>,

    // Intro
    <StackLayout key="layout-quiz-intro" maxWidth="xl">
        <Block id="quiz-intro" padding="sm">
            <EditableParagraph id="para-quiz-intro" blockId="quiz-intro">
                Let's see how much you've learned! Answer all 5 questions to get your score.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 1: Like terms
    <StackLayout key="layout-quiz-q1" maxWidth="xl">
        <Block id="quiz-q1" padding="md">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">1</span>
                    <span className="font-medium text-slate-700">Simplify: 6y + 2 + 3y</span>
                </div>
                <EditableParagraph id="para-quiz-q1" blockId="quiz-q1">
                    Answer:{" "}
                    <InlineFeedback
                        varName="quiz_q1"
                        correctValue="9y + 2"
                        successMessage="Correct! 6y + 3y = 9y ⭐"
                        failureMessage="Try again"
                        hint="Combine the y terms: 6y + 3y = ?"
                    >
                        <InlineClozeInput
                            varName="quiz_q1"
                            correctAnswer="9y + 2"
                            {...clozePropsFromDefinition(getVariableInfo('quiz_q1'))}
                        />
                    </InlineFeedback>
                </EditableParagraph>
            </div>
        </Block>
    </StackLayout>,

    // Question 2: Solving equations
    <StackLayout key="layout-quiz-q2" maxWidth="xl">
        <Block id="quiz-q2" padding="md">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">2</span>
                    <span className="font-medium text-slate-700">Solve: 5x + 3 = 18</span>
                </div>
                <EditableParagraph id="para-quiz-q2" blockId="quiz-q2">
                    x ={" "}
                    <InlineFeedback
                        varName="quiz_q2"
                        correctValue="3"
                        successMessage="Correct! 5x = 15, so x = 3 ⭐"
                        failureMessage="Try again"
                        hint="First subtract 3: 5x = 15. Then divide by 5."
                    >
                        <InlineClozeInput
                            varName="quiz_q2"
                            correctAnswer="3"
                            {...clozePropsFromDefinition(getVariableInfo('quiz_q2'))}
                        />
                    </InlineFeedback>
                </EditableParagraph>
            </div>
        </Block>
    </StackLayout>,

    // Question 3: Like terms identification
    <StackLayout key="layout-quiz-q3" maxWidth="xl">
        <Block id="quiz-q3" padding="md">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">3</span>
                    <span className="font-medium text-slate-700">Which pair are like terms?</span>
                </div>
                <EditableParagraph id="para-quiz-q3" blockId="quiz-q3">
                    <InlineFeedback
                        varName="quiz_q3"
                        correctValue="4x and 7x"
                        successMessage="Correct! Both have the same variable x ⭐"
                        failureMessage="Try again"
                        hint="Like terms must have exactly the same variable part"
                    >
                        <InlineClozeChoice
                            varName="quiz_q3"
                            correctAnswer="4x and 7x"
                            options={['4x and 7y', '4x and 7x', '4x² and 7x', '4 and 7x']}
                            {...choicePropsFromDefinition(getVariableInfo('quiz_q3'))}
                        />
                    </InlineFeedback>
                </EditableParagraph>
            </div>
        </Block>
    </StackLayout>,

    // Question 4: Shape puzzle
    <SplitLayout key="layout-quiz-q4" ratio="1:1" gap="md">
        <Block id="quiz-q4-viz" padding="md" hasVisualization>
            <QuizShapePuzzle />
        </Block>
        <Block id="quiz-q4" padding="md">
            <div className="bg-white rounded-xl p-5 border border-slate-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">4</span>
                    <span className="font-medium text-slate-700">What is the star worth?</span>
                </div>
                <EditableParagraph id="para-quiz-q4" blockId="quiz-q4">
                    Star ={" "}
                    <InlineFeedback
                        varName="quiz_q4"
                        correctValue="5"
                        successMessage="Correct! 21 - 16 = 5 ⭐"
                        failureMessage="Try again"
                        hint="Pentagon = 8, so two pentagons = 16. Star = 21 - 16"
                    >
                        <InlineClozeInput
                            varName="quiz_q4"
                            correctAnswer="5"
                            {...clozePropsFromDefinition(getVariableInfo('quiz_q4'))}
                        />
                    </InlineFeedback>
                </EditableParagraph>
            </div>
        </Block>
    </SplitLayout>,

    // Question 5: Coefficient
    <StackLayout key="layout-quiz-q5" maxWidth="xl">
        <Block id="quiz-q5" padding="md">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">5</span>
                    <span className="font-medium text-slate-700">What is the coefficient in 8x?</span>
                </div>
                <EditableParagraph id="para-quiz-q5" blockId="quiz-q5">
                    The coefficient is{" "}
                    <InlineFeedback
                        varName="quiz_q5"
                        correctValue="8"
                        successMessage="Correct! The coefficient is the number in front ⭐"
                        failureMessage="Try again"
                        hint="The coefficient is the number that multiplies the variable"
                    >
                        <InlineClozeChoice
                            varName="quiz_q5"
                            correctAnswer="8"
                            options={['x', '8', '8x', 'none']}
                            {...choicePropsFromDefinition(getVariableInfo('quiz_q5'))}
                        />
                    </InlineFeedback>
                </EditableParagraph>
            </div>
        </Block>
    </StackLayout>,

    // Score display
    <StackLayout key="layout-quiz-score" maxWidth="xl">
        <Block id="quiz-score" padding="lg" hasVisualization>
            <QuizScore />
        </Block>
    </StackLayout>,

    // Completion message
    <StackLayout key="layout-quiz-complete" maxWidth="xl">
        <Block id="quiz-complete" padding="md">
            <EditableParagraph id="para-quiz-complete" blockId="quiz-complete">
                Well done for completing this introduction to algebra! You now have the foundation to tackle more advanced topics. Keep practicing and remember: algebra is just about finding mystery numbers while keeping everything balanced!
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
