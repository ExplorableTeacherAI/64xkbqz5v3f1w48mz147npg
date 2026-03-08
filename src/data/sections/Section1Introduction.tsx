/**
 * Section 1: What is Algebra?
 * ===========================
 *
 * Introduces the concept of algebra as "finding mystery numbers"
 * Shows how algebra uses letters to represent unknown values
 */

import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH1,
    EditableH2,
    EditableParagraph,
    InlineScrubbleNumber,
    InlineClozeInput,
    InlineTooltip,
    InlineFeedback,
} from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import {
    getVariableInfo,
    numberPropsFromDefinition,
    clozePropsFromDefinition,
} from "../variables";
import { useVar } from "@/stores";

// Reactive component that shows the mystery number calculation
function MysteryNumberDemo() {
    const mysteryNumber = useVar('mysteryNumber', 5) as number;
    const result = mysteryNumber + 2;

    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="flex items-center justify-center gap-4 text-2xl font-medium">
                <div className="flex items-center gap-2">
                    <span className="text-slate-500">I'm thinking of a number:</span>
                    <span
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-white font-bold"
                        style={{ backgroundColor: '#8b5cf6' }}
                    >
                        ?
                    </span>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-xl">
                <span className="text-slate-600">If I add 2 to it, I get</span>
                <span
                    className="inline-flex items-center justify-center px-4 h-10 rounded-lg text-white font-bold"
                    style={{ backgroundColor: '#3b82f6' }}
                >
                    {result}
                </span>
            </div>
            <div className="mt-4 text-center text-slate-500 text-sm">
                (The mystery number is secretly{' '}
                <InlineScrubbleNumber
                    varName="mysteryNumber"
                    {...numberPropsFromDefinition(getVariableInfo('mysteryNumber'))}
                />)
            </div>
        </div>
    );
}

// Visual showing ? → x transformation
function SymbolTransformation() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                    <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold text-white mb-2"
                        style={{ backgroundColor: '#f97316' }}
                    >
                        ?
                    </div>
                    <span className="text-sm text-slate-500">Question mark</span>
                </div>
                <div className="flex items-center">
                    <svg width="60" height="24" viewBox="0 0 60 24">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                            </marker>
                        </defs>
                        <line x1="0" y1="12" x2="50" y2="12" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    </svg>
                </div>
                <div className="text-center">
                    <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold text-white mb-2"
                        style={{ backgroundColor: '#8b5cf6' }}
                    >
                        x
                    </div>
                    <span className="text-sm text-slate-500">The letter x</span>
                </div>
            </div>
            <p className="text-center mt-4 text-slate-600">
                In algebra, we replace the question mark with a letter like <strong>x</strong>
            </p>
        </div>
    );
}

export const section1IntroductionBlocks: ReactElement[] = [
    // Title
    <StackLayout key="layout-intro-title" maxWidth="xl">
        <Block id="intro-title" padding="lg">
            <EditableH1 id="h1-intro-title" blockId="intro-title">
                Introduction to Algebra
            </EditableH1>
        </Block>
    </StackLayout>,

    // Hook: The mystery number game
    <StackLayout key="layout-intro-hook" maxWidth="xl">
        <Block id="intro-hook" padding="sm">
            <EditableParagraph id="para-intro-hook" blockId="intro-hook">
                "I'm thinking of a number. When I add 2 to it, I get 7. What's my number?" If you guessed 5, you've just done algebra!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Interactive mystery number demo
    <StackLayout key="layout-intro-mystery-demo" maxWidth="xl">
        <Block id="intro-mystery-demo" padding="md" hasVisualization>
            <MysteryNumberDemo />
        </Block>
    </StackLayout>,

    // What is algebra explanation
    <StackLayout key="layout-intro-what-is" maxWidth="xl">
        <Block id="intro-what-is" padding="sm">
            <EditableH2 id="h2-intro-what-is" blockId="intro-what-is">
                So What is Algebra, Really?
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-intro-definition" maxWidth="xl">
        <Block id="intro-definition" padding="sm">
            <EditableParagraph id="para-intro-definition" blockId="intro-definition">
                <InlineTooltip
                    id="tooltip-algebra"
                    tooltip="From Arabic 'al-jabr' meaning 'reunion of broken parts'"
                >
                    Algebra
                </InlineTooltip>
                {" "}uses letters to represent unknown numbers. We call these letters{" "}
                <InlineTooltip
                    id="tooltip-variable"
                    tooltip="A container that can hold different values"
                >
                    variables
                </InlineTooltip>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Symbol transformation visual
    <StackLayout key="layout-intro-symbol-viz" maxWidth="xl">
        <Block id="intro-symbol-viz" padding="md" hasVisualization>
            <SymbolTransformation />
        </Block>
    </StackLayout>,

    // Why do we need algebra
    <StackLayout key="layout-intro-why-heading" maxWidth="xl">
        <Block id="intro-why-heading" padding="sm">
            <EditableH2 id="h2-intro-why" blockId="intro-why-heading">
                Why Do We Need Algebra?
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-intro-why-text" maxWidth="xl">
        <Block id="intro-why-text" padding="sm">
            <EditableParagraph id="para-intro-why" blockId="intro-why-text">
                You can solve "What plus 2 equals 7?" in your head. But what about "multiply by 3, then add 17, equals 50"? Algebra gives you a system to solve problems too complex for mental maths.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // The key difference from arithmetic
    <StackLayout key="layout-intro-difference-heading" maxWidth="xl">
        <Block id="intro-difference-heading" padding="sm">
            <EditableH2 id="h2-intro-difference" blockId="intro-difference-heading">
                From Numbers to Letters
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-intro-difference-text" maxWidth="xl">
        <Block id="intro-difference-text" padding="sm">
            <EditableParagraph id="para-intro-difference" blockId="intro-difference-text">
                In{" "}
                <InlineTooltip
                    id="tooltip-arithmetic"
                    tooltip="Adding, subtracting, multiplying and dividing known numbers"
                >
                    arithmetic
                </InlineTooltip>
                , all numbers are known: 5 + 3 = 8. In algebra, we find unknowns: x + 3 = 10, so x = 7.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Simple formula example
    <StackLayout key="layout-intro-formula" maxWidth="xl">
        <Block id="intro-formula" padding="lg">
            <FormulaBlock
                latex="x + 3 = 10"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-intro-formula-explain" maxWidth="xl">
        <Block id="intro-formula-explain" padding="sm">
            <EditableParagraph id="para-intro-formula-explain" blockId="intro-formula-explain">
                Here x stands for a mystery number. What plus 3 gives 10? The answer: x = 7.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Assessment question
    <StackLayout key="layout-intro-question" maxWidth="xl">
        <Block id="intro-question" padding="md">
            <EditableParagraph id="para-intro-question" blockId="intro-question">
                Here's a puzzle for you: If x + 2 = 7, what is the value of x? The answer is{" "}
                <InlineFeedback
                    varName="answer_intro_mystery"
                    correctValue="5"
                    successMessage="Exactly right! Since 5 + 2 = 7, the mystery number x must be 5"
                    failureMessage="Not quite!"
                    hint="Think about it: what number do you add to 2 to get 7?"
                >
                    <InlineClozeInput
                        varName="answer_intro_mystery"
                        correctAnswer="5"
                        {...clozePropsFromDefinition(getVariableInfo('answer_intro_mystery'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Transition to next section
    <StackLayout key="layout-intro-transition" maxWidth="xl">
        <Block id="intro-transition" padding="sm">
            <EditableParagraph id="para-intro-transition" blockId="intro-transition">
                Let's practise with shape puzzles next. Same thinking, just with pictures instead of letters!
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
