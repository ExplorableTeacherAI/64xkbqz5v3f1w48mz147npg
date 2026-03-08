/**
 * Section 4: The Language of Algebra — Terminology and Conventions
 * =================================================================
 *
 * Introduces key algebraic vocabulary and writing conventions
 * Terms, coefficients, constants, variables, and proper notation
 */

import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout, SplitLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableParagraph,
    InlineScrubbleNumber,
    InlineClozeInput,
    InlineClozeChoice,
    InlineFeedback,
    InlineTooltip,
    InlineSpotColor,
} from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import {
    getVariableInfo,
    numberPropsFromDefinition,
    clozePropsFromDefinition,
    choicePropsFromDefinition,
    spotColorPropsFromDefinition,
} from "../variables";
import { useVar } from "@/stores";

// Term anatomy visualization
function TermAnatomyVisual() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex flex-col items-center gap-6">
                {/* Large term display */}
                <div className="text-6xl font-bold flex items-end">
                    <span style={{ color: '#ef4444' }}>5</span>
                    <span style={{ color: '#8b5cf6' }}>x</span>
                </div>

                {/* Labels */}
                <div className="flex gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
                            style={{ backgroundColor: '#ef4444' }}
                        >
                            5
                        </div>
                        <span className="text-sm font-medium text-slate-700">Coefficient</span>
                        <span className="text-xs text-slate-500">(the number)</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
                            style={{ backgroundColor: '#8b5cf6' }}
                        >
                            x
                        </div>
                        <span className="text-sm font-medium text-slate-700">Variable</span>
                        <span className="text-xs text-slate-500">(the letter)</span>
                    </div>
                </div>

                {/* Explanation box */}
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <p className="text-slate-600">
                        <strong>5x</strong> means "5 times x" or "5 lots of x"
                    </p>
                </div>
            </div>
        </div>
    );
}

// Interactive term builder
function TermBuilderDemo() {
    const coeff = useVar('coefficientValue', 3) as number;

    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="text-center mb-4">
                <span className="text-sm text-slate-500">Build your own term:</span>
            </div>
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                    <InlineScrubbleNumber
                        varName="coefficientValue"
                        {...numberPropsFromDefinition(getVariableInfo('coefficientValue'))}
                    />
                    <span className="text-4xl font-bold" style={{ color: '#8b5cf6' }}>y</span>
                </div>
                <span className="text-2xl text-slate-400">=</span>
                <div className="flex items-center gap-2 flex-wrap justify-center">
                    {Array.from({ length: coeff }).map((_, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white font-bold"
                            style={{ backgroundColor: '#8b5cf6' }}
                        >
                            y
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-4 text-center text-slate-600">
                {coeff}y means {coeff} copies of y added together
            </div>
        </div>
    );
}

// Writing conventions comparison
function ConventionsComparison() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Wrong ways */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">✗</span>
                        Avoid these
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <code className="text-lg">3 × y</code>
                            <span className="text-slate-500 text-sm">× looks like x</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <code className="text-lg">3 * y</code>
                            <span className="text-slate-500 text-sm">not standard notation</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <code className="text-lg">y3</code>
                            <span className="text-slate-500 text-sm">number should come first</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <code className="text-lg">1x</code>
                            <span className="text-slate-500 text-sm">just write x</span>
                        </div>
                    </div>
                </div>

                {/* Correct ways */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</span>
                        Write these instead
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <code className="text-lg font-bold" style={{ color: '#22c55e' }}>3y</code>
                            <span className="text-slate-500 text-sm">clean and clear</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <code className="text-lg font-bold" style={{ color: '#22c55e' }}>3y</code>
                            <span className="text-slate-500 text-sm">number directly before letter</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <code className="text-lg font-bold" style={{ color: '#22c55e' }}>3y</code>
                            <span className="text-slate-500 text-sm">coefficient first, then variable</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <code className="text-lg font-bold" style={{ color: '#22c55e' }}>x</code>
                            <span className="text-slate-500 text-sm">1 is implied</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Expression breakdown
function ExpressionBreakdown() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-center mb-6">
                <span className="text-3xl font-mono">
                    <span style={{ color: '#ef4444' }}>3</span>
                    <span style={{ color: '#8b5cf6' }}>x</span>
                    <span className="text-slate-500"> + </span>
                    <span style={{ color: '#ef4444' }}>2</span>
                    <span style={{ color: '#8b5cf6' }}>y</span>
                    <span className="text-slate-500"> + </span>
                    <span style={{ color: '#f97316' }}>5</span>
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-2">
                        <span style={{ color: '#ef4444' }}>3</span>
                        <span style={{ color: '#8b5cf6' }}>x</span>
                    </div>
                    <span className="text-sm text-slate-600">First term</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-2">
                        <span style={{ color: '#ef4444' }}>2</span>
                        <span style={{ color: '#8b5cf6' }}>y</span>
                    </div>
                    <span className="text-sm text-slate-600">Second term</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-2">
                        <span style={{ color: '#f97316' }}>5</span>
                    </div>
                    <span className="text-sm text-slate-600">
                        Third term<br />
                        <span className="text-xs">(constant)</span>
                    </span>
                </div>
            </div>

            <div className="mt-4 text-center text-slate-600 text-sm">
                This expression has <strong>3 terms</strong>, separated by + or − signs
            </div>
        </div>
    );
}

export const section4TerminologyBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-terms-title" maxWidth="xl">
        <Block id="terms-title" padding="lg">
            <EditableH2 id="h2-terms-title" blockId="terms-title">
                The Language of Algebra
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-terms-intro" maxWidth="xl">
        <Block id="terms-intro" padding="sm">
            <EditableParagraph id="para-terms-intro" blockId="terms-intro">
                Just like any subject, algebra has its own vocabulary. Learning these words will help you understand instructions, explain your thinking, and communicate with other mathematicians. Don't worry, there are only a few key terms to learn!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Variables
    <StackLayout key="layout-terms-variable-heading" maxWidth="xl">
        <Block id="terms-variable-heading" padding="sm">
            <EditableParagraph id="para-terms-variable-heading" blockId="terms-variable-heading">
                <strong>Variables</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-variable-text" maxWidth="xl">
        <Block id="terms-variable-text" padding="sm">
            <EditableParagraph id="para-terms-variable" blockId="terms-variable-text">
                A{" "}
                <InlineTooltip
                    id="tooltip-variable-def"
                    tooltip="From the Latin 'variare' meaning 'to change'. A variable can take different values in different situations."
                >
                    variable
                </InlineTooltip>
                {" "}is a letter that represents an unknown number. The most common variables are{" "}
                <InlineSpotColor varName="spotVariable" {...spotColorPropsFromDefinition(getVariableInfo('spotVariable'))}>x</InlineSpotColor>,{" "}
                <InlineSpotColor varName="spotVariable" {...spotColorPropsFromDefinition(getVariableInfo('spotVariable'))}>y</InlineSpotColor>, and{" "}
                <InlineSpotColor varName="spotVariable" {...spotColorPropsFromDefinition(getVariableInfo('spotVariable'))}>z</InlineSpotColor>, but you can use any letter. Variables are called "variables" because the number they represent can vary from problem to problem.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Coefficients
    <StackLayout key="layout-terms-coefficient-heading" maxWidth="xl">
        <Block id="terms-coefficient-heading" padding="sm">
            <EditableParagraph id="para-terms-coefficient-heading" blockId="terms-coefficient-heading">
                <strong>Coefficients</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-coefficient-text" maxWidth="xl">
        <Block id="terms-coefficient-text" padding="sm">
            <EditableParagraph id="para-terms-coefficient" blockId="terms-coefficient-text">
                A{" "}
                <InlineTooltip
                    id="tooltip-coefficient-def"
                    tooltip="From Latin, meaning 'to work together with'. The coefficient tells you how many of the variable you have."
                >
                    coefficient
                </InlineTooltip>
                {" "}is the number that multiplies a variable. In the term 5x, the{" "}
                <InlineSpotColor varName="spotCoefficient" {...spotColorPropsFromDefinition(getVariableInfo('spotCoefficient'))}>5</InlineSpotColor>
                {" "}is the coefficient. It tells you how many x's you have. Think of it like this: 5x means "5 lots of x" or "x + x + x + x + x".
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Term anatomy visual
    <StackLayout key="layout-terms-anatomy" maxWidth="xl">
        <Block id="terms-anatomy" padding="md" hasVisualization>
            <TermAnatomyVisual />
        </Block>
    </StackLayout>,

    // Interactive term builder
    <StackLayout key="layout-terms-builder" maxWidth="xl">
        <Block id="terms-builder" padding="md" hasVisualization>
            <TermBuilderDemo />
        </Block>
    </StackLayout>,

    // Constants
    <StackLayout key="layout-terms-constant-heading" maxWidth="xl">
        <Block id="terms-constant-heading" padding="sm">
            <EditableParagraph id="para-terms-constant-heading" blockId="terms-constant-heading">
                <strong>Constants</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-constant-text" maxWidth="xl">
        <Block id="terms-constant-text" padding="sm">
            <EditableParagraph id="para-terms-constant" blockId="terms-constant-text">
                A{" "}
                <InlineTooltip
                    id="tooltip-constant-def"
                    tooltip="'Constant' means unchanging. Unlike variables, constants always have the same value."
                >
                    constant
                </InlineTooltip>
                {" "}is a number on its own, with no variable attached. In the expression 3x + 7, the{" "}
                <InlineSpotColor varName="spotConstant" {...spotColorPropsFromDefinition(getVariableInfo('spotConstant'))}>7</InlineSpotColor>
                {" "}is a constant. Constants don't change, they just stay as they are.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Terms
    <StackLayout key="layout-terms-term-heading" maxWidth="xl">
        <Block id="terms-term-heading" padding="sm">
            <EditableParagraph id="para-terms-term-heading" blockId="terms-term-heading">
                <strong>Terms</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-term-text" maxWidth="xl">
        <Block id="terms-term-text" padding="sm">
            <EditableParagraph id="para-terms-term" blockId="terms-term-text">
                A{" "}
                <InlineTooltip
                    id="tooltip-term-def"
                    tooltip="Terms are the building blocks of algebraic expressions. Each term is separated by + or − signs."
                >
                    term
                </InlineTooltip>
                {" "}is a single piece of an algebraic expression. It can be a variable (like x), a coefficient times a variable (like 3x), or a constant (like 7). Terms are separated by + or − signs.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Expression breakdown visual
    <StackLayout key="layout-terms-breakdown" maxWidth="xl">
        <Block id="terms-breakdown" padding="md" hasVisualization>
            <ExpressionBreakdown />
        </Block>
    </StackLayout>,

    // Writing conventions heading
    <StackLayout key="layout-terms-conventions-heading" maxWidth="xl">
        <Block id="terms-conventions-heading" padding="sm">
            <EditableParagraph id="para-terms-conventions-heading" blockId="terms-conventions-heading">
                <strong>Writing Conventions</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-conventions-text" maxWidth="xl">
        <Block id="terms-conventions-text" padding="sm">
            <EditableParagraph id="para-terms-conventions" blockId="terms-conventions-text">
                Mathematicians have agreed on certain ways to write algebra to keep things clear and consistent. The most important rule is: we don't write the multiplication sign between a number and a variable. Instead of writing 3 × y, we simply write 3y. This avoids confusion with the variable x!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Conventions comparison visual
    <StackLayout key="layout-terms-conventions-viz" maxWidth="xl">
        <Block id="terms-conventions-viz" padding="md" hasVisualization>
            <ConventionsComparison />
        </Block>
    </StackLayout>,

    // More conventions
    <StackLayout key="layout-terms-more-conventions" maxWidth="xl">
        <Block id="terms-more-conventions" padding="sm">
            <EditableParagraph id="para-terms-more-conventions" blockId="terms-more-conventions">
                A few more conventions: when the coefficient is 1, we don't write it at all. Instead of 1x, we just write x. The 1 is understood to be there. Similarly, we put numbers before letters (write 3x, not x3), and when multiplying variables together, we use alphabetical order (write xy, not yx).
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Assessment questions
    <StackLayout key="layout-terms-q1" maxWidth="xl">
        <Block id="terms-q1" padding="md">
            <EditableParagraph id="para-terms-q1" blockId="terms-q1">
                In the term 5x, the coefficient is{" "}
                <InlineFeedback
                    varName="answer_term_coefficient"
                    correctValue="5"
                    successMessage="Correct! The coefficient is the number in front of the variable"
                    failureMessage="Look at the number part"
                    hint="The coefficient is the number that multiplies the variable"
                >
                    <InlineClozeInput
                        varName="answer_term_coefficient"
                        correctAnswer="5"
                        {...clozePropsFromDefinition(getVariableInfo('answer_term_coefficient'))}
                    />
                </InlineFeedback>
                {" "}and the variable is{" "}
                <InlineFeedback
                    varName="answer_term_variable"
                    correctValue="x"
                    successMessage="That's right! x is the variable, the letter representing an unknown"
                    failureMessage="Look at the letter part"
                    hint="The variable is the letter in the term"
                >
                    <InlineClozeChoice
                        varName="answer_term_variable"
                        correctAnswer="x"
                        options={['5', 'x', '5x', 'none']}
                        {...choicePropsFromDefinition(getVariableInfo('answer_term_variable'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-q2" maxWidth="xl">
        <Block id="terms-q2" padding="md">
            <EditableParagraph id="para-terms-q2" blockId="terms-q2">
                Which is the correct way to write "3 times y"?{" "}
                <InlineFeedback
                    varName="answer_convention_correct"
                    correctValue="3y"
                    successMessage="Exactly! We write the coefficient directly before the variable with no multiplication sign"
                    failureMessage="Remember the writing convention"
                    hint="In algebra, we don't use × between numbers and letters"
                >
                    <InlineClozeChoice
                        varName="answer_convention_correct"
                        correctAnswer="3y"
                        options={['3 × y', 'y3', '3y', 'y × 3']}
                        {...choicePropsFromDefinition(getVariableInfo('answer_convention_correct'))}
                    />
                </InlineFeedback>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-terms-transition" maxWidth="xl">
        <Block id="terms-transition" padding="sm">
            <EditableParagraph id="para-terms-transition" blockId="terms-transition">
                Now that you know the vocabulary, let's learn one of the most useful skills in algebra: grouping like terms. This technique lets you simplify complicated expressions into something much easier to work with.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
