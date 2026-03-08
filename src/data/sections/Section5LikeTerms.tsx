/**
 * Section 5: Grouping Like Terms
 * ===============================
 *
 * Teaches how to identify and combine like terms
 * Visual demonstrations of why 3x + 2x = 5x
 */

import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout, SplitLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableParagraph,
    InlineScrubbleNumber,
    InlineClozeInput,
    InlineFeedback,
    InlineTooltip,
} from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import {
    getVariableInfo,
    numberPropsFromDefinition,
    clozePropsFromDefinition,
} from "../variables";
import { useVar } from "@/stores";

// Visual demonstration of like terms
function LikeTermsVisual() {
    const a = useVar('likeTermsA', 3) as number;
    const b = useVar('likeTermsB', 2) as number;
    const total = a + b;

    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="space-y-6">
                {/* First row: a boxes of x */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-slate-500">
                        <InlineScrubbleNumber
                            varName="likeTermsA"
                            {...numberPropsFromDefinition(getVariableInfo('likeTermsA'))}
                        />x means {a} boxes of x:
                    </span>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {Array.from({ length: a }).map((_, i) => (
                            <div
                                key={`a-${i}`}
                                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: '#3b82f6' }}
                            >
                                x
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plus sign */}
                <div className="flex justify-center">
                    <span className="text-3xl font-bold text-slate-400">+</span>
                </div>

                {/* Second row: b boxes of x */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-slate-500">
                        <InlineScrubbleNumber
                            varName="likeTermsB"
                            {...numberPropsFromDefinition(getVariableInfo('likeTermsB'))}
                        />x means {b} boxes of x:
                    </span>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {Array.from({ length: b }).map((_, i) => (
                            <div
                                key={`b-${i}`}
                                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: '#3b82f6' }}
                            >
                                x
                            </div>
                        ))}
                    </div>
                </div>

                {/* Equals sign */}
                <div className="flex justify-center">
                    <span className="text-3xl font-bold text-slate-400">=</span>
                </div>

                {/* Result: total boxes */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-slate-500">Together: {total}x</span>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {Array.from({ length: total }).map((_, i) => (
                            <div
                                key={`total-${i}`}
                                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: '#22c55e' }}
                            >
                                x
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formula */}
                <div className="text-center pt-4 border-t border-slate-200">
                    <span className="text-2xl font-mono">
                        <span style={{ color: '#3b82f6' }}>{a}x</span>
                        <span className="text-slate-400"> + </span>
                        <span style={{ color: '#3b82f6' }}>{b}x</span>
                        <span className="text-slate-400"> = </span>
                        <span style={{ color: '#22c55e' }}>{total}x</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

// Like vs unlike terms comparison
function LikeUnlikeComparison() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Like terms */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</span>
                        Like terms (can combine)
                    </h4>
                    <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">3x + 2x</span>
                                <span className="text-slate-400">=</span>
                                <span className="font-mono text-lg font-bold text-green-600">5x</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Both terms have x</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">4y + 7y</span>
                                <span className="text-slate-400">=</span>
                                <span className="font-mono text-lg font-bold text-green-600">11y</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Both terms have y</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">5 + 3</span>
                                <span className="text-slate-400">=</span>
                                <span className="font-mono text-lg font-bold text-green-600">8</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Both are constants</p>
                        </div>
                    </div>
                </div>

                {/* Unlike terms */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">✗</span>
                        Unlike terms (cannot combine)
                    </h4>
                    <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">3x + 2y</span>
                                <span className="text-slate-400">=</span>
                                <span className="font-mono text-lg text-red-600">3x + 2y</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Different variables</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">4x + 5</span>
                                <span className="text-slate-400">=</span>
                                <span className="font-mono text-lg text-red-600">4x + 5</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">One has x, one is constant</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">x² + x</span>
                                <span className="text-slate-400">=</span>
                                <span className="font-mono text-lg text-red-600">x² + x</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Different powers of x</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Step-by-step simplification
function SimplificationSteps() {
    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="text-center mb-4">
                <span className="text-sm text-slate-500 uppercase tracking-wide">Simplify: 4x + 3 + 2x + 5</span>
            </div>

            <div className="space-y-4">
                {/* Step 1: Original */}
                <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-600">1</span>
                    <div className="flex-1 p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-mono">
                            <span style={{ color: '#3b82f6' }}>4x</span>
                            <span className="text-slate-400"> + </span>
                            <span style={{ color: '#f97316' }}>3</span>
                            <span className="text-slate-400"> + </span>
                            <span style={{ color: '#3b82f6' }}>2x</span>
                            <span className="text-slate-400"> + </span>
                            <span style={{ color: '#f97316' }}>5</span>
                        </span>
                        <span className="text-xs text-slate-500 ml-4">Identify like terms (same colours)</span>
                    </div>
                </div>

                {/* Step 2: Group */}
                <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-600">2</span>
                    <div className="flex-1 p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-mono">
                            <span className="text-slate-400">(</span>
                            <span style={{ color: '#3b82f6' }}>4x + 2x</span>
                            <span className="text-slate-400">) + (</span>
                            <span style={{ color: '#f97316' }}>3 + 5</span>
                            <span className="text-slate-400">)</span>
                        </span>
                        <span className="text-xs text-slate-500 ml-4">Group like terms together</span>
                    </div>
                </div>

                {/* Step 3: Combine */}
                <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold text-white">3</span>
                    <div className="flex-1 p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-mono text-lg font-bold">
                            <span style={{ color: '#22c55e' }}>6x + 8</span>
                        </span>
                        <span className="text-xs text-slate-500 ml-4">Add the coefficients and constants</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const section5LikeTermsBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-like-title" maxWidth="xl">
        <Block id="like-title" padding="lg">
            <EditableH2 id="h2-like-title" blockId="like-title">
                Grouping Like Terms
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-like-intro" maxWidth="xl">
        <Block id="like-intro" padding="sm">
            <EditableParagraph id="para-like-intro" blockId="like-intro">
                Imagine you have 3 apples and someone gives you 2 more apples. How many apples do you have? Obviously 5 apples! You can add them because they're the same type of fruit. But if someone gives you 3 apples and 2 oranges, you can't just say "5 fruits" and combine them. You'd say "3 apples and 2 oranges." The same logic applies in algebra with{" "}
                <InlineTooltip
                    id="tooltip-like-terms"
                    tooltip="Like terms have exactly the same variable parts. For example, 3x and 5x are like terms, but 3x and 5y are not."
                >
                    like terms
                </InlineTooltip>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // What are like terms
    <StackLayout key="layout-like-what-heading" maxWidth="xl">
        <Block id="like-what-heading" padding="sm">
            <EditableParagraph id="para-like-what-heading" blockId="like-what-heading">
                <strong>What Are Like Terms?</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-like-what-text" maxWidth="xl">
        <Block id="like-what-text" padding="sm">
            <EditableParagraph id="para-like-what" blockId="like-what-text">
                Like terms are terms that have exactly the same variable part. The numbers in front (the coefficients) can be different, but the letters must be the same. For example, 3x and 7x are like terms because they both contain x. But 3x and 3y are not like terms, because one has x and the other has y.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Visual demonstration
    <StackLayout key="layout-like-visual" maxWidth="xl">
        <Block id="like-visual" padding="md" hasVisualization>
            <LikeTermsVisual />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-like-visual-explain" maxWidth="xl">
        <Block id="like-visual-explain" padding="sm">
            <EditableParagraph id="para-like-visual-explain" blockId="like-visual-explain">
                When you add like terms, you simply add the coefficients (the numbers in front) and keep the variable the same. It's just like counting: if you have 3 boxes of x and add 2 more boxes of x, you now have 5 boxes of x!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Comparison visual
    <StackLayout key="layout-like-comparison" maxWidth="xl">
        <Block id="like-comparison" padding="md" hasVisualization>
            <LikeUnlikeComparison />
        </Block>
    </StackLayout>,

    // Simplifying expressions
    <StackLayout key="layout-like-simplify-heading" maxWidth="xl">
        <Block id="like-simplify-heading" padding="sm">
            <EditableParagraph id="para-like-simplify-heading" blockId="like-simplify-heading">
                <strong>Simplifying Expressions</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-like-simplify-text" maxWidth="xl">
        <Block id="like-simplify-text" padding="sm">
            <EditableParagraph id="para-like-simplify" blockId="like-simplify-text">
                When you have a long expression with many terms, you can simplify it by grouping and combining like terms. This makes the expression shorter and easier to work with. Let's see how to simplify 4x + 3 + 2x + 5 step by step.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Step-by-step demonstration
    <StackLayout key="layout-like-steps" maxWidth="xl">
        <Block id="like-steps" padding="md" hasVisualization>
            <SimplificationSteps />
        </Block>
    </StackLayout>,

    // Assessment: Simple question
    <StackLayout key="layout-like-q1" maxWidth="xl">
        <Block id="like-q1" padding="md">
            <EditableParagraph id="para-like-q1" blockId="like-q1">
                Simplify 3x + 2x. The answer is{" "}
                <InlineFeedback
                    varName="answer_like_terms_simple"
                    correctValue="5x"
                    successMessage="Perfect! 3 lots of x plus 2 lots of x equals 5 lots of x"
                    failureMessage="Remember to add the coefficients"
                    hint="Add the numbers in front: 3 + 2 = ?, then keep the x"
                >
                    <InlineClozeInput
                        varName="answer_like_terms_simple"
                        correctAnswer="5x"
                        {...clozePropsFromDefinition(getVariableInfo('answer_like_terms_simple'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Assessment: Mixed question
    <StackLayout key="layout-like-q2" maxWidth="xl">
        <Block id="like-q2" padding="md">
            <EditableParagraph id="para-like-q2" blockId="like-q2">
                Simplify 4x + 3 + 2x + 5. Group the x terms and the constants separately. The simplified answer is{" "}
                <InlineFeedback
                    varName="answer_like_terms_mixed"
                    correctValue="6x + 8"
                    successMessage="Excellent work! 4x + 2x = 6x, and 3 + 5 = 8, giving us 6x + 8"
                    failureMessage="Group the x terms and the numbers separately"
                    hint="First add 4x + 2x, then add 3 + 5, and write your answer as 'ax + b'"
                >
                    <InlineClozeInput
                        varName="answer_like_terms_mixed"
                        correctAnswer="6x + 8"
                        {...clozePropsFromDefinition(getVariableInfo('answer_like_terms_mixed'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-like-transition" maxWidth="xl">
        <Block id="like-transition" padding="sm">
            <EditableParagraph id="para-like-transition" blockId="like-transition">
                Now that you can simplify expressions by grouping like terms, you're ready for the final skill: solving equations. This is where everything comes together. You'll use the balance scale idea to isolate the variable and find its value.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
