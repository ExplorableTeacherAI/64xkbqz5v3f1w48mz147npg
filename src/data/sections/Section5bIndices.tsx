/**
 * Section 5b: Variables with Indices
 * ===================================
 *
 * Explains why y² ≠ y and ab ≠ a+b
 * Shows that like terms must have EXACTLY the same variable parts
 */

import { type ReactElement } from "react";
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

// Visual comparison of y vs y²
function IndicesComparisonVisual() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* y = y */}
                <div className="text-center space-y-4">
                    <div className="text-4xl font-bold" style={{ color: '#8b5cf6' }}>y</div>
                    <div className="flex justify-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-violet-500 flex items-center justify-center text-white font-bold">y</div>
                    </div>
                    <p className="text-sm text-slate-600">One y</p>
                </div>

                {/* y² = y × y */}
                <div className="text-center space-y-4">
                    <div className="text-4xl font-bold" style={{ color: '#ef4444' }}>y²</div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold">y</div>
                        <span className="text-xl text-slate-400">×</span>
                        <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold">y</div>
                    </div>
                    <p className="text-sm text-slate-600">y multiplied by y</p>
                </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-center text-amber-800 font-medium">
                    These are NOT the same thing and cannot be combined!
                </p>
            </div>
        </div>
    );
}

// Not like terms examples
function NotLikeTermsGrid() {
    const examples = [
        {
            left: "y",
            right: "y²",
            reason: "Different powers",
            canCombine: false,
            leftColor: "#8b5cf6",
            rightColor: "#ef4444",
        },
        {
            left: "x",
            right: "x³",
            reason: "Different powers",
            canCombine: false,
            leftColor: "#3b82f6",
            rightColor: "#f97316",
        },
        {
            left: "ab",
            right: "a + b",
            reason: "ab means a×b, not a+b",
            canCombine: false,
            leftColor: "#22c55e",
            rightColor: "#ec4899",
        },
        {
            left: "2x²",
            right: "5x²",
            reason: "Same powers ✓",
            canCombine: true,
            leftColor: "#6366f1",
            rightColor: "#6366f1",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {examples.map((ex, i) => (
                <div
                    key={i}
                    className={`p-4 rounded-xl border-2 ${
                        ex.canCombine
                            ? 'bg-green-50 border-green-200'
                            : 'bg-red-50 border-red-200'
                    }`}
                >
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-2xl font-bold" style={{ color: ex.leftColor }}>{ex.left}</span>
                        <span className="text-slate-400">and</span>
                        <span className="text-2xl font-bold" style={{ color: ex.rightColor }}>{ex.right}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span className={ex.canCombine ? 'text-green-600' : 'text-red-600'}>
                            {ex.canCombine ? '✓ Like terms' : '✗ NOT like terms'}
                        </span>
                    </div>
                    <p className="text-xs text-slate-500 text-center mt-1">{ex.reason}</p>
                </div>
            ))}
        </div>
    );
}

// ab vs a+b visualization
function MultiplicationVsAddition() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ab = a × b */}
                <div className="text-center space-y-3">
                    <div className="text-3xl font-bold" style={{ color: '#22c55e' }}>ab</div>
                    <div className="text-sm text-slate-500">means</div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-2xl font-bold" style={{ color: '#22c55e' }}>a</span>
                        <span className="text-xl text-slate-400">×</span>
                        <span className="text-2xl font-bold" style={{ color: '#22c55e' }}>b</span>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700">If a=3, b=4: ab = 3×4 = <strong>12</strong></p>
                    </div>
                </div>

                {/* a + b */}
                <div className="text-center space-y-3">
                    <div className="text-3xl font-bold" style={{ color: '#ec4899' }}>a + b</div>
                    <div className="text-sm text-slate-500">means</div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-2xl font-bold" style={{ color: '#ec4899' }}>a</span>
                        <span className="text-xl text-slate-400">+</span>
                        <span className="text-2xl font-bold" style={{ color: '#ec4899' }}>b</span>
                    </div>
                    <div className="p-3 bg-pink-50 rounded-lg">
                        <p className="text-sm text-pink-700">If a=3, b=4: a+b = 3+4 = <strong>7</strong></p>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center text-slate-600 text-sm">
                12 ≠ 7, so <strong>ab ≠ a + b</strong>
            </div>
        </div>
    );
}

// Simplification example with indices
function SimplifyWithIndices() {
    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="text-center mb-4">
                <span className="text-sm text-slate-500">Simplify:</span>
                <span className="text-2xl font-mono ml-3">
                    <span style={{ color: '#6366f1' }}>3x²</span>
                    <span className="text-slate-400"> + </span>
                    <span style={{ color: '#22c55e' }}>2x</span>
                    <span className="text-slate-400"> + </span>
                    <span style={{ color: '#6366f1' }}>x²</span>
                </span>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-sm text-slate-600">Find like terms (same variable AND same power)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">2</span>
                    <span className="font-mono">
                        <span style={{ color: '#6366f1' }}>3x² + x²</span>
                        <span className="text-slate-400"> = </span>
                        <span style={{ color: '#6366f1' }}>4x²</span>
                    </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">✓</span>
                    <span className="font-mono text-lg">
                        <span style={{ color: '#6366f1' }}>4x²</span>
                        <span className="text-slate-400"> + </span>
                        <span style={{ color: '#22c55e' }}>2x</span>
                    </span>
                    <span className="text-sm text-slate-500 ml-2">(cannot simplify further)</span>
                </div>
            </div>
        </div>
    );
}

export const section5bIndicesBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-indices-title" maxWidth="xl">
        <Block id="indices-title" padding="lg">
            <EditableH2 id="h2-indices-title" blockId="indices-title">
                Watch Out: Powers Matter!
            </EditableH2>
        </Block>
    </StackLayout>,

    // Brief intro
    <StackLayout key="layout-indices-intro" maxWidth="xl">
        <Block id="indices-intro" padding="sm">
            <EditableParagraph id="para-indices-intro" blockId="indices-intro">
                When grouping like terms, the variables must be <strong>exactly</strong> the same. This includes any powers (indices). Let's see why y and y² are completely different things.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Visual comparison
    <StackLayout key="layout-indices-compare" maxWidth="xl">
        <Block id="indices-compare" padding="md" hasVisualization>
            <IndicesComparisonVisual />
        </Block>
    </StackLayout>,

    // Not like terms grid
    <StackLayout key="layout-indices-grid" maxWidth="xl">
        <Block id="indices-grid" padding="md" hasVisualization>
            <NotLikeTermsGrid />
        </Block>
    </StackLayout>,

    // ab vs a+b
    <StackLayout key="layout-indices-mult-heading" maxWidth="xl">
        <Block id="indices-mult-heading" padding="sm">
            <EditableParagraph id="para-indices-mult-heading" blockId="indices-mult-heading">
                <strong>Another Common Confusion: ab vs a + b</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-indices-mult" maxWidth="xl">
        <Block id="indices-mult" padding="md" hasVisualization>
            <MultiplicationVsAddition />
        </Block>
    </StackLayout>,

    // Simplification example
    <StackLayout key="layout-indices-simplify" maxWidth="xl">
        <Block id="indices-simplify" padding="md" hasVisualization>
            <SimplifyWithIndices />
        </Block>
    </StackLayout>,

    // Question 1
    <StackLayout key="layout-indices-q1" maxWidth="xl">
        <Block id="indices-q1" padding="md">
            <EditableParagraph id="para-indices-q1" blockId="indices-q1">
                Can y² and y be combined as like terms?{" "}
                <InlineFeedback
                    varName="answer_indices_ysquared"
                    correctValue="No"
                    successMessage="Correct! y² means y×y, which is different from just y"
                    failureMessage="Think about what y² means"
                    hint="y² = y × y, while y is just y. Are they the same?"
                >
                    <InlineClozeChoice
                        varName="answer_indices_ysquared"
                        correctAnswer="No"
                        options={['Yes', 'No']}
                        {...choicePropsFromDefinition(getVariableInfo('answer_indices_ysquared'))}
                    />
                </InlineFeedback>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 2
    <StackLayout key="layout-indices-q2" maxWidth="xl">
        <Block id="indices-q2" padding="md">
            <EditableParagraph id="para-indices-q2" blockId="indices-q2">
                Simplify 3x² + 2x + x². The answer is{" "}
                <InlineFeedback
                    varName="answer_indices_simplify"
                    correctValue="4x² + 2x"
                    successMessage="Perfect! 3x² + x² = 4x², and 2x stays separate because it has a different power"
                    failureMessage="Group the x² terms together"
                    hint="Only combine terms with the same power: 3x² and x² are like terms, but 2x is different"
                >
                    <InlineClozeInput
                        varName="answer_indices_simplify"
                        correctAnswer="4x² + 2x"
                        {...clozePropsFromDefinition(getVariableInfo('answer_indices_simplify'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
