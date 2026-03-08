/**
 * Section 3: The Balance Scale — Understanding Equations
 * =======================================================
 *
 * Uses an interactive balance scale to teach equation concepts
 * Shows why both sides must stay equal and introduces the concept of balancing
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
import {
    getVariableInfo,
    numberPropsFromDefinition,
    clozePropsFromDefinition,
} from "../variables";
import { useVar } from "@/stores";

// Interactive balance scale component
function BalanceScaleDemo() {
    const leftWeight = useVar('scaleLeftWeight', 10) as number;
    const rightWeight = useVar('scaleRightWeight', 10) as number;

    const difference = leftWeight - rightWeight;
    const isBalanced = difference === 0;
    const tiltAngle = Math.max(-15, Math.min(15, difference * 1.5));

    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <svg width="100%" height="220" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
                {/* Base */}
                <polygon points="160,200 240,200 220,220 180,220" fill="#64748b" />

                {/* Stand */}
                <rect x="195" y="60" width="10" height="140" fill="#64748b" />

                {/* Fulcrum triangle */}
                <polygon points="200,60 185,75 215,75" fill="#475569" />

                {/* Beam with rotation */}
                <g transform={`rotate(${tiltAngle}, 200, 67)`}>
                    <rect x="50" y="62" width="300" height="10" fill="#94a3b8" rx="3" />

                    {/* Left pan strings */}
                    <line x1="80" y1="72" x2="60" y2="120" stroke="#64748b" strokeWidth="2" />
                    <line x1="80" y1="72" x2="100" y2="120" stroke="#64748b" strokeWidth="2" />

                    {/* Right pan strings */}
                    <line x1="320" y1="72" x2="300" y2="120" stroke="#64748b" strokeWidth="2" />
                    <line x1="320" y1="72" x2="340" y2="120" stroke="#64748b" strokeWidth="2" />

                    {/* Left pan */}
                    <ellipse cx="80" cy="125" rx="45" ry="12" fill="#6366f1" />
                    <text x="80" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                        {leftWeight}
                    </text>

                    {/* Right pan */}
                    <ellipse cx="320" cy="125" rx="45" ry="12" fill="#f97316" />
                    <text x="320" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                        {rightWeight}
                    </text>
                </g>
            </svg>

            {/* Controls */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Left side:</span>
                    <InlineScrubbleNumber
                        varName="scaleLeftWeight"
                        {...numberPropsFromDefinition(getVariableInfo('scaleLeftWeight'))}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Right side:</span>
                    <InlineScrubbleNumber
                        varName="scaleRightWeight"
                        {...numberPropsFromDefinition(getVariableInfo('scaleRightWeight'))}
                    />
                </div>
            </div>

            {/* Status */}
            <div className="mt-4 text-center">
                {isBalanced ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.854-9.354a.5.5 0 00-.708-.708L7.5 8.586 5.854 6.94a.5.5 0 10-.708.708l2 2a.5.5 0 00.708 0l4-4z" />
                        </svg>
                        Balanced! Both sides are equal.
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7 4a1 1 0 112 0v4a1 1 0 01-2 0V4zm1 8a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                        Unbalanced! {difference > 0 ? 'Left side is heavier.' : 'Right side is heavier.'}
                    </span>
                )}
            </div>
        </div>
    );
}

// Equation as balance scale visualization
function EquationBalanceDemo() {
    const xValue = useVar('scaleXValue', 3) as number;
    const leftSide = xValue + 4;
    const rightSide = 16;
    const isBalanced = leftSide === rightSide;
    const tiltAngle = Math.max(-15, Math.min(15, (leftSide - rightSide) * 1.5));

    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <svg width="100%" height="200" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                {/* Base */}
                <polygon points="160,180 240,180 220,200 180,200" fill="#64748b" />

                {/* Stand */}
                <rect x="195" y="50" width="10" height="130" fill="#64748b" />

                {/* Fulcrum */}
                <polygon points="200,50 185,65 215,65" fill="#475569" />

                {/* Beam with rotation */}
                <g transform={`rotate(${tiltAngle}, 200, 57)`}>
                    <rect x="50" y="52" width="300" height="10" fill="#94a3b8" rx="3" />

                    {/* Left side - x + 4 */}
                    <g transform="translate(80, 90)">
                        <rect x="-35" y="0" width="30" height="30" rx="4" fill="#8b5cf6" />
                        <text x="-20" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">x</text>

                        <text x="0" y="22" textAnchor="middle" fill="#64748b" fontSize="18">+</text>

                        <rect x="10" y="0" width="30" height="30" rx="4" fill="#f97316" />
                        <text x="25" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">4</text>
                    </g>

                    {/* Left pan */}
                    <line x1="80" y1="62" x2="60" y2="80" stroke="#64748b" strokeWidth="2" />
                    <line x1="80" y1="62" x2="100" y2="80" stroke="#64748b" strokeWidth="2" />
                    <ellipse cx="80" cy="130" rx="45" ry="10" fill="#6366f1" opacity="0.3" />

                    {/* Right side - 16 */}
                    <g transform="translate(320, 90)">
                        <rect x="-20" y="0" width="40" height="30" rx="4" fill="#22c55e" />
                        <text x="0" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">16</text>
                    </g>

                    {/* Right pan */}
                    <line x1="320" y1="62" x2="300" y2="80" stroke="#64748b" strokeWidth="2" />
                    <line x1="320" y1="62" x2="340" y2="80" stroke="#64748b" strokeWidth="2" />
                    <ellipse cx="320" cy="130" rx="45" ry="10" fill="#f97316" opacity="0.3" />
                </g>
            </svg>

            {/* Equation display */}
            <div className="mt-4 text-center text-xl">
                <span className="font-mono">
                    <span style={{ color: '#8b5cf6' }} className="font-bold">x</span>
                    {" + "}
                    <span style={{ color: '#f97316' }} className="font-bold">4</span>
                    {" = "}
                    <span style={{ color: '#22c55e' }} className="font-bold">16</span>
                </span>
            </div>

            <div className="mt-2 text-center text-slate-600">
                If x ={" "}
                <InlineScrubbleNumber
                    varName="scaleXValue"
                    {...numberPropsFromDefinition(getVariableInfo('scaleXValue'))}
                />
                , then the left side equals{" "}
                <span className="font-bold" style={{ color: leftSide === rightSide ? '#22c55e' : '#ef4444' }}>
                    {leftSide}
                </span>
            </div>

            {/* Status */}
            <div className="mt-3 text-center">
                {isBalanced ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium text-sm">
                        ✓ Perfect! x = {xValue} makes the equation true.
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium text-sm">
                        Keep adjusting x to balance the scale!
                    </span>
                )}
            </div>
        </div>
    );
}

// Subtracting from both sides demonstration
function SubtractBothSidesDemo() {
    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="space-y-6">
                {/* Step 1: Original equation */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Step 1: Original equation</span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-indigo-200">
                            <span className="text-xl font-bold" style={{ color: '#8b5cf6' }}>x</span>
                            <span className="text-xl text-slate-400">+</span>
                            <span className="text-xl font-bold" style={{ color: '#f97316' }}>4</span>
                        </div>
                        <span className="text-2xl text-slate-400">=</span>
                        <div className="px-4 py-3 bg-white rounded-lg border-2 border-green-200">
                            <span className="text-xl font-bold" style={{ color: '#22c55e' }}>16</span>
                        </div>
                    </div>
                </div>

                {/* Arrow down */}
                <div className="flex flex-col items-center">
                    <svg width="24" height="40" viewBox="0 0 24 40">
                        <path d="M12 0 L12 32 M4 24 L12 34 L20 24" stroke="#94a3b8" strokeWidth="2" fill="none" />
                    </svg>
                    <span className="text-sm text-slate-600 font-medium">Subtract 4 from BOTH sides</span>
                </div>

                {/* Step 2: After subtracting */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Step 2: After subtracting 4</span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-indigo-200">
                            <span className="text-xl font-bold" style={{ color: '#8b5cf6' }}>x</span>
                            <span className="text-xl text-slate-400 line-through opacity-50">+ 4</span>
                            <span className="text-sm text-red-500">− 4</span>
                        </div>
                        <span className="text-2xl text-slate-400">=</span>
                        <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-green-200">
                            <span className="text-xl font-bold" style={{ color: '#22c55e' }}>16</span>
                            <span className="text-sm text-red-500">− 4</span>
                        </div>
                    </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center">
                    <svg width="24" height="30" viewBox="0 0 24 30">
                        <path d="M12 0 L12 22 M4 14 L12 24 L20 14" stroke="#94a3b8" strokeWidth="2" fill="none" />
                    </svg>
                </div>

                {/* Step 3: Simplified */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Step 3: Simplified</span>
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-3 bg-white rounded-lg border-2 border-indigo-300">
                            <span className="text-xl font-bold" style={{ color: '#8b5cf6' }}>x</span>
                        </div>
                        <span className="text-2xl text-slate-400">=</span>
                        <div className="px-4 py-3 bg-white rounded-lg border-2 border-green-300">
                            <span className="text-xl font-bold" style={{ color: '#22c55e' }}>12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const section3BalanceScaleBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-balance-title" maxWidth="xl">
        <Block id="balance-title" padding="lg">
            <EditableH2 id="h2-balance-title" blockId="balance-title">
                The Balance Scale: Understanding Equations
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-balance-intro" maxWidth="xl">
        <Block id="balance-intro" padding="sm">
            <EditableParagraph id="para-balance-intro" blockId="balance-intro">
                One of the most powerful ways to think about equations is to imagine a{" "}
                <InlineTooltip
                    id="tooltip-balance"
                    tooltip="A balance scale has two pans. When both pans hold the same weight, the scale is level. When one side is heavier, it tips down."
                >
                    balance scale
                </InlineTooltip>
                . An equation is like a scale that's perfectly balanced: whatever is on the left side has exactly the same value as whatever is on the right side. This simple idea is the foundation of all equation solving.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Interactive balance demo
    <StackLayout key="layout-balance-demo" maxWidth="xl">
        <Block id="balance-demo" padding="md" hasVisualization>
            <BalanceScaleDemo />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-balance-demo-explain" maxWidth="xl">
        <Block id="balance-demo-explain" padding="sm">
            <EditableParagraph id="para-balance-demo-explain" blockId="balance-demo-explain">
                Play with the balance scale above. When both sides have the same weight, the scale is balanced and level. When one side is heavier, the scale tips. An equation works the same way: the equals sign (=) means "is balanced with" or "has the same value as".
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // The golden rule
    <StackLayout key="layout-balance-rule-heading" maxWidth="xl">
        <Block id="balance-rule-heading" padding="sm">
            <EditableParagraph id="para-balance-rule-heading" blockId="balance-rule-heading">
                <strong>The Golden Rule of Equations</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-balance-rule" maxWidth="xl">
        <Block id="balance-rule" padding="sm">
            <EditableParagraph id="para-balance-rule" blockId="balance-rule">
                Here's the most important rule in algebra: <strong>Whatever you do to one side of an equation, you must do to the other side too.</strong> Think about it with the scale: if you add weight to the left pan, you must add the same weight to the right pan to keep it balanced. If you take weight away from one side, you must take the same weight away from the other side. This rule is why algebra works!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Equation as balance
    <StackLayout key="layout-balance-equation-heading" maxWidth="xl">
        <Block id="balance-equation-heading" padding="sm">
            <EditableParagraph id="para-balance-equation-heading" blockId="balance-equation-heading">
                <strong>Finding the Unknown</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-balance-equation" maxWidth="xl">
        <Block id="balance-equation" padding="md" hasVisualization>
            <EquationBalanceDemo />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-balance-equation-explain" maxWidth="xl">
        <Block id="balance-equation-explain" padding="sm">
            <EditableParagraph id="para-balance-equation-explain" blockId="balance-equation-explain">
                In this interactive, x represents an unknown weight. The left pan contains x plus 4 extra units, and the right pan contains 16 units. Adjust x until the scale balances. When x = 12, the left side (12 + 4 = 16) equals the right side (16), and the equation is true.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Solving by keeping balance
    <StackLayout key="layout-balance-solving-heading" maxWidth="xl">
        <Block id="balance-solving-heading" padding="sm">
            <EditableParagraph id="para-balance-solving-heading" blockId="balance-solving-heading">
                <strong>Solving Equations: Keeping the Balance</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-balance-solving-text" maxWidth="xl">
        <Block id="balance-solving-text" padding="sm">
            <EditableParagraph id="para-balance-solving-text" blockId="balance-solving-text">
                To solve an equation, we want to get x by itself on one side. We do this by removing everything else, while keeping the scale balanced. If x + 4 = 16 and we want x alone, we need to remove the 4. But remember the golden rule: we must remove 4 from both sides!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Subtract both sides demo
    <StackLayout key="layout-balance-subtract" maxWidth="xl">
        <Block id="balance-subtract" padding="md" hasVisualization>
            <SubtractBothSidesDemo />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-balance-subtract-explain" maxWidth="xl">
        <Block id="balance-subtract-explain" padding="sm">
            <EditableParagraph id="para-balance-subtract-explain" blockId="balance-subtract-explain">
                This is why the "sign changes" when we move a number to the other side! When we subtract 4 from the left side, we're removing it. When we subtract 4 from the right side (16 − 4 = 12), the 4 appears to have "moved across" and changed from +4 to −4. But really, we're just subtracting 4 from both sides to keep the scale balanced.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Practice question
    <StackLayout key="layout-balance-question" maxWidth="xl">
        <Block id="balance-question" padding="md">
            <EditableParagraph id="para-balance-question" blockId="balance-question">
                Try this: If x + 8 = 12, what is x? Using the balance scale idea, subtract 8 from both sides: x = 12 − 8 ={" "}
                <InlineFeedback
                    varName="answer_balance_x"
                    correctValue="4"
                    successMessage="Brilliant! Subtracting 8 from both sides gives x = 4, and we can check: 4 + 8 = 12 ✓"
                    failureMessage="Think about the balance"
                    hint="If x + 8 = 12, subtract 8 from both sides to find x"
                >
                    <InlineClozeInput
                        varName="answer_balance_x"
                        correctAnswer="4"
                        {...clozePropsFromDefinition(getVariableInfo('answer_balance_x'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-balance-transition" maxWidth="xl">
        <Block id="balance-transition" padding="sm">
            <EditableParagraph id="para-balance-transition" blockId="balance-transition">
                Now that you understand how equations work like a balance scale, let's learn the proper language mathematicians use. Knowing the right words will help you communicate your ideas clearly and understand more complex problems.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
