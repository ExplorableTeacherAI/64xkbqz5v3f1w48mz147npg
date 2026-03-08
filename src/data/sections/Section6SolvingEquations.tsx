/**
 * Section 6: Solving Simple Equations
 * ====================================
 *
 * Brings together balance scale concept with solving techniques
 * Step-by-step guide to solving equations like 2x + 4 = 10
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

// Interactive equation solver with balance scale
function EquationSolverDemo() {
    const step = useVar('equationCoeff', 2) as number;

    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-center mb-6">
                <span className="text-2xl font-mono">
                    <span style={{ color: '#8b5cf6' }}>2x</span>
                    <span className="text-slate-400"> + </span>
                    <span style={{ color: '#f97316' }}>4</span>
                    <span className="text-slate-400"> = </span>
                    <span style={{ color: '#22c55e' }}>10</span>
                </span>
            </div>

            {/* Balance scale visualization */}
            <svg width="100%" height="160" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid meet">
                {/* Base */}
                <polygon points="170,140 230,140 220,155 180,155" fill="#64748b" />
                <rect x="195" y="40" width="10" height="100" fill="#64748b" />
                <polygon points="200,40 188,52 212,52" fill="#475569" />

                {/* Beam - balanced */}
                <rect x="60" y="48" width="280" height="8" fill="#94a3b8" rx="2" />

                {/* Left side: 2x + 4 */}
                <g transform="translate(100, 70)">
                    {/* Two x boxes */}
                    <rect x="-50" y="0" width="28" height="28" rx="4" fill="#8b5cf6" />
                    <text x="-36" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">x</text>
                    <rect x="-18" y="0" width="28" height="28" rx="4" fill="#8b5cf6" />
                    <text x="-4" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">x</text>

                    {/* Plus */}
                    <text x="22" y="20" textAnchor="middle" fill="#94a3b8" fontSize="16">+</text>

                    {/* 4 box */}
                    <rect x="34" y="0" width="28" height="28" rx="4" fill="#f97316" />
                    <text x="48" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
                </g>

                {/* Left pan */}
                <line x1="100" y1="56" x2="80" y2="100" stroke="#64748b" strokeWidth="2" />
                <line x1="100" y1="56" x2="120" y2="100" stroke="#64748b" strokeWidth="2" />

                {/* Right side: 10 */}
                <g transform="translate(300, 70)">
                    <rect x="-20" y="0" width="40" height="28" rx="4" fill="#22c55e" />
                    <text x="0" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">10</text>
                </g>

                {/* Right pan */}
                <line x1="300" y1="56" x2="280" y2="100" stroke="#64748b" strokeWidth="2" />
                <line x1="300" y1="56" x2="320" y2="100" stroke="#64748b" strokeWidth="2" />
            </svg>
        </div>
    );
}

// Step-by-step solution with balance visualization
function SolveStepByStep() {
    return (
        <div className="space-y-6">
            {/* Step 1: Original equation */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-lg font-bold text-indigo-600 shrink-0">1</span>
                    <div className="flex-1">
                        <h4 className="font-semibold text-slate-700 mb-2">Start with the equation</h4>
                        <div className="text-2xl font-mono text-center py-3">
                            <span style={{ color: '#8b5cf6' }}>2x</span>
                            <span className="text-slate-400"> + </span>
                            <span style={{ color: '#f97316' }}>4</span>
                            <span className="text-slate-400"> = </span>
                            <span style={{ color: '#22c55e' }}>10</span>
                        </div>
                        <p className="text-sm text-slate-600">Our goal is to get x by itself on one side.</p>
                    </div>
                </div>
            </div>

            {/* Step 2: Remove the constant */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-lg font-bold text-indigo-600 shrink-0">2</span>
                    <div className="flex-1">
                        <h4 className="font-semibold text-slate-700 mb-2">Remove the +4 by subtracting 4 from both sides</h4>

                        {/* Balance visual */}
                        <div className="bg-slate-50 rounded-lg p-4 mb-3">
                            <div className="flex items-center justify-center gap-8 text-sm">
                                <div className="text-center">
                                    <div className="font-mono text-lg">2x + 4</div>
                                    <div className="text-red-500 font-medium">− 4</div>
                                </div>
                                <span className="text-2xl text-slate-400">=</span>
                                <div className="text-center">
                                    <div className="font-mono text-lg">10</div>
                                    <div className="text-red-500 font-medium">− 4</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-2xl font-mono text-center py-2">
                            <span style={{ color: '#8b5cf6' }}>2x</span>
                            <span className="text-slate-400"> = </span>
                            <span style={{ color: '#22c55e' }}>6</span>
                        </div>
                        <p className="text-sm text-slate-600">The +4 and −4 cancel out on the left. On the right, 10 − 4 = 6.</p>
                    </div>
                </div>
            </div>

            {/* Step 3: Divide to find x */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-lg font-bold text-indigo-600 shrink-0">3</span>
                    <div className="flex-1">
                        <h4 className="font-semibold text-slate-700 mb-2">Divide both sides by 2 to find x</h4>

                        <div className="bg-slate-50 rounded-lg p-4 mb-3">
                            <div className="flex items-center justify-center gap-8 text-sm">
                                <div className="text-center">
                                    <div className="font-mono text-lg">2x</div>
                                    <div className="text-blue-500 font-medium">÷ 2</div>
                                </div>
                                <span className="text-2xl text-slate-400">=</span>
                                <div className="text-center">
                                    <div className="font-mono text-lg">6</div>
                                    <div className="text-blue-500 font-medium">÷ 2</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-2xl font-mono text-center py-2">
                            <span style={{ color: '#8b5cf6' }}>x</span>
                            <span className="text-slate-400"> = </span>
                            <span style={{ color: '#22c55e' }}>3</span>
                        </div>
                        <p className="text-sm text-slate-600">2x ÷ 2 = x (the coefficient disappears). 6 ÷ 2 = 3.</p>
                    </div>
                </div>
            </div>

            {/* Step 4: Check */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg font-bold text-green-600 shrink-0">✓</span>
                    <div className="flex-1">
                        <h4 className="font-semibold text-green-700 mb-2">Check your answer</h4>
                        <p className="text-sm text-slate-600 mb-2">Substitute x = 3 back into the original equation:</p>
                        <div className="font-mono text-center">
                            2(3) + 4 = 6 + 4 = 10 ✓
                        </div>
                        <p className="text-sm text-green-600 mt-2 font-medium">It works! Our answer x = 3 is correct.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Quick reference for inverse operations
function InverseOperationsCard() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4 text-center">
                Inverse Operations
            </h4>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">➕ ↔ ➖</div>
                    <p className="text-sm text-slate-600">Addition undoes subtraction</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">✕ ↔ ÷</div>
                    <p className="text-sm text-slate-600">Multiplication undoes division</p>
                </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-4">
                To isolate x, use the inverse (opposite) operation
            </p>
        </div>
    );
}

export const section6SolvingEquationsBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-solve-title" maxWidth="xl">
        <Block id="solve-title" padding="lg">
            <EditableH2 id="h2-solve-title" blockId="solve-title">
                Solving Simple Equations
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-solve-intro" maxWidth="xl">
        <Block id="solve-intro" padding="sm">
            <EditableParagraph id="para-solve-intro" blockId="solve-intro">
                Now let's put it all together and solve real equations!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // The goal
    <StackLayout key="layout-solve-goal-heading" maxWidth="xl">
        <Block id="solve-goal-heading" padding="sm">
            <EditableParagraph id="para-solve-goal-heading" blockId="solve-goal-heading">
                <strong>The Goal: Isolate the Variable</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-solve-goal-text" maxWidth="xl">
        <Block id="solve-goal-text" padding="sm">
            <EditableParagraph id="para-solve-goal" blockId="solve-goal-text">
                Get the{" "}
                <InlineTooltip
                    id="tooltip-isolate"
                    tooltip="Get x alone on one side"
                >
                    variable
                </InlineTooltip>
                {" "}by itself on one side. Whatever you do to one side, do to the other!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Example equation with balance
    <StackLayout key="layout-solve-example-viz" maxWidth="xl">
        <Block id="solve-example-viz" padding="md" hasVisualization>
            <EquationSolverDemo />
        </Block>
    </StackLayout>,

    // Inverse operations card
    <StackLayout key="layout-solve-inverse" maxWidth="xl">
        <Block id="solve-inverse" padding="md" hasVisualization>
            <InverseOperationsCard />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-solve-inverse-explain" maxWidth="xl">
        <Block id="solve-inverse-explain" padding="sm">
            <EditableParagraph id="para-solve-inverse-explain" blockId="solve-inverse-explain">
                Use{" "}
                <InlineTooltip
                    id="tooltip-inverse"
                    tooltip="Opposite operations"
                >
                    inverse
                </InlineTooltip>
                {" "}operations to undo: +4 → subtract 4, ×2 → divide by 2.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Step-by-step heading
    <StackLayout key="layout-solve-steps-heading" maxWidth="xl">
        <Block id="solve-steps-heading" padding="sm">
            <EditableParagraph id="para-solve-steps-heading" blockId="solve-steps-heading">
                <strong>Solving 2x + 4 = 10 Step by Step</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Step-by-step solution
    <StackLayout key="layout-solve-steps" maxWidth="xl">
        <Block id="solve-steps" padding="md" hasVisualization>
            <SolveStepByStep />
        </Block>
    </StackLayout>,

    // Why the sign changes
    <StackLayout key="layout-solve-sign-heading" maxWidth="xl">
        <Block id="solve-sign-heading" padding="sm">
            <EditableParagraph id="para-solve-sign-heading" blockId="solve-sign-heading">
                <strong>Why Does the Sign "Change"?</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-solve-sign-text" maxWidth="xl">
        <Block id="solve-sign-text" padding="sm">
            <EditableParagraph id="para-solve-sign" blockId="solve-sign-text">
                When you subtract 4 from both sides, the +4 on the left cancels out (+4 − 4 = 0), and the right decreases by 4. It looks like the number "moved and changed sign", but really you're just keeping the balance!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Practice questions
    <StackLayout key="layout-solve-practice-heading" maxWidth="xl">
        <Block id="solve-practice-heading" padding="sm">
            <EditableParagraph id="para-solve-practice-heading" blockId="solve-practice-heading">
                <strong>Practice Time</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 1: Find what 2x equals
    <StackLayout key="layout-solve-q1" maxWidth="xl">
        <Block id="solve-q1" padding="md">
            <EditableParagraph id="para-solve-q1" blockId="solve-q1">
                Solve 2x + 4 = 10. First, subtract 4 from both sides. What does 2x equal?{" "}
                <InlineFeedback
                    varName="answer_solve_step1"
                    correctValue="6"
                    successMessage="Correct! 10 − 4 = 6, so 2x = 6"
                    failureMessage="Subtract 4 from the right side"
                    hint="If 2x + 4 = 10, then 2x = 10 − 4"
                >
                    <InlineClozeInput
                        varName="answer_solve_step1"
                        correctAnswer="6"
                        {...clozePropsFromDefinition(getVariableInfo('answer_solve_step1'))}
                    />
                </InlineFeedback>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 2: Find x
    <StackLayout key="layout-solve-q2" maxWidth="xl">
        <Block id="solve-q2" padding="md">
            <EditableParagraph id="para-solve-q2" blockId="solve-q2">
                Now that you know 2x = 6, divide both sides by 2. What is x?{" "}
                <InlineFeedback
                    varName="answer_solve_final"
                    correctValue="3"
                    successMessage="Brilliant! 6 ÷ 2 = 3, so x = 3. Check: 2(3) + 4 = 10 ✓"
                    failureMessage="Divide 6 by 2"
                    hint="If 2x = 6, then x = 6 ÷ 2"
                >
                    <InlineClozeInput
                        varName="answer_solve_final"
                        correctAnswer="3"
                        {...clozePropsFromDefinition(getVariableInfo('answer_solve_final'))}
                    />
                </InlineFeedback>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 3: Full problem
    <StackLayout key="layout-solve-q3" maxWidth="xl">
        <Block id="solve-q3" padding="md">
            <EditableParagraph id="para-solve-q3" blockId="solve-q3">
                Try this one on your own: Solve 3x + 5 = 14. What is x?{" "}
                <InlineFeedback
                    varName="answer_practice_q1"
                    correctValue="3"
                    successMessage="Excellent! Subtract 5: 3x = 9. Divide by 3: x = 3. Check: 3(3) + 5 = 14 ✓"
                    failureMessage="Work through the steps"
                    hint="First subtract 5 from both sides to get 3x = 9, then divide by 3"
                >
                    <InlineClozeInput
                        varName="answer_practice_q1"
                        correctAnswer="3"
                        {...clozePropsFromDefinition(getVariableInfo('answer_practice_q1'))}
                    />
                </InlineFeedback>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-solve-transition" maxWidth="xl">
        <Block id="solve-transition" padding="sm">
            <EditableParagraph id="para-solve-transition" blockId="solve-transition">
                Great work! Next up: a final review and quiz to test your skills.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
