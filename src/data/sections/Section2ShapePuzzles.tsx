/**
 * Section 2: Shape Puzzles — Algebra in Disguise
 * ===============================================
 *
 * Uses shape puzzles (circles, triangles, squares) to teach algebraic thinking
 * Students solve for unknown shape values before learning letter notation
 */

import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout, SplitLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableParagraph,
    InlineClozeInput,
    InlineFeedback,
} from "@/components/atoms";
import {
    getVariableInfo,
    clozePropsFromDefinition,
} from "../variables";

// Shape SVG components
function Circle({ size = 40, color = "#3b82f6" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill={color} />
        </svg>
    );
}

function Triangle({ size = 40, color = "#ef4444" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40">
            <polygon points="20,2 38,38 2,38" fill={color} />
        </svg>
    );
}

function Square({ size = 40, color = "#22c55e" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40">
            <rect x="4" y="4" width="32" height="32" fill={color} />
        </svg>
    );
}

// Puzzle 1 visualization: Circle + Circle + Triangle = 10, Circle = 4
function Puzzle1Visualization() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="space-y-6">
                {/* First equation */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <Circle />
                    <span className="text-2xl font-medium text-slate-400">+</span>
                    <Circle />
                    <span className="text-2xl font-medium text-slate-400">+</span>
                    <Triangle />
                    <span className="text-2xl font-medium text-slate-400">=</span>
                    <span className="text-3xl font-bold text-slate-700">10</span>
                </div>

                {/* Second equation (given clue) */}
                <div className="flex items-center justify-center gap-3">
                    <Circle />
                    <span className="text-2xl font-medium text-slate-400">=</span>
                    <span className="text-3xl font-bold text-slate-700">4</span>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-slate-300 pt-4">
                    <div className="flex items-center justify-center gap-3">
                        <Triangle />
                        <span className="text-2xl font-medium text-slate-400">=</span>
                        <span className="text-3xl font-bold text-slate-400">?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Puzzle 2 visualization: More complex puzzle
function Puzzle2Visualization() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="space-y-6">
                {/* First equation */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <Square />
                    <span className="text-2xl font-medium text-slate-400">+</span>
                    <Square />
                    <span className="text-2xl font-medium text-slate-400">+</span>
                    <Circle />
                    <span className="text-2xl font-medium text-slate-400">=</span>
                    <span className="text-3xl font-bold text-slate-700">17</span>
                </div>

                {/* Second equation (given clue) */}
                <div className="flex items-center justify-center gap-3">
                    <Circle />
                    <span className="text-2xl font-medium text-slate-400">=</span>
                    <span className="text-3xl font-bold text-slate-700">7</span>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-slate-300 pt-4">
                    <div className="flex items-center justify-center gap-3">
                        <Square />
                        <span className="text-2xl font-medium text-slate-400">=</span>
                        <span className="text-3xl font-bold text-slate-400">?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Connection to algebra visualization
function ShapeToAlgebraVisual() {
    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Shape version */}
                <div className="text-center">
                    <p className="text-sm text-slate-500 mb-4 font-medium">Using Shapes</p>
                    <div className="flex items-center justify-center gap-2">
                        <Circle size={32} />
                        <span className="text-xl text-slate-400">+</span>
                        <Circle size={32} />
                        <span className="text-xl text-slate-400">+</span>
                        <Triangle size={32} />
                        <span className="text-xl text-slate-400">=</span>
                        <span className="text-2xl font-bold text-slate-700">10</span>
                    </div>
                </div>

                {/* Algebra version */}
                <div className="text-center">
                    <p className="text-sm text-slate-500 mb-4 font-medium">Using Letters</p>
                    <div className="flex items-center justify-center gap-2 text-2xl">
                        <span style={{ color: '#3b82f6' }} className="font-bold">x</span>
                        <span className="text-slate-400">+</span>
                        <span style={{ color: '#3b82f6' }} className="font-bold">x</span>
                        <span className="text-slate-400">+</span>
                        <span style={{ color: '#ef4444' }} className="font-bold">y</span>
                        <span className="text-slate-400">=</span>
                        <span className="font-bold text-slate-700">10</span>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-center gap-8 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                        <Circle size={24} />
                        <span>=</span>
                        <span style={{ color: '#3b82f6' }} className="font-bold">x</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Triangle size={24} />
                        <span>=</span>
                        <span style={{ color: '#ef4444' }} className="font-bold">y</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Square size={24} />
                        <span>=</span>
                        <span style={{ color: '#22c55e' }} className="font-bold">z</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const section2ShapePuzzlesBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-shapes-title" maxWidth="xl">
        <Block id="shapes-title" padding="lg">
            <EditableH2 id="h2-shapes-title" blockId="shapes-title">
                Shape Puzzles: Algebra in Disguise
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction to shape puzzles
    <StackLayout key="layout-shapes-intro" maxWidth="xl">
        <Block id="shapes-intro" padding="sm">
            <EditableParagraph id="para-shapes-intro" blockId="shapes-intro">
                Before we dive deeper into algebra with letters, let's warm up with some shape puzzles. These puzzles are actually algebra problems in disguise! Each shape represents an unknown number, and your job is to figure out what number each shape stands for. The thinking you use here is exactly the same thinking you'll use in algebra.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Puzzle 1 heading
    <StackLayout key="layout-shapes-puzzle1-heading" maxWidth="xl">
        <Block id="shapes-puzzle1-heading" padding="sm">
            <EditableParagraph id="para-shapes-puzzle1-heading" blockId="shapes-puzzle1-heading">
                <strong>Puzzle 1:</strong> Each circle has the same value, and the triangle has its own value. Use the clues to find what the triangle is worth.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Puzzle 1 visualization
    <SplitLayout key="layout-shapes-puzzle1" ratio="1:1" gap="lg">
        <Block id="shapes-puzzle1-viz" padding="md" hasVisualization>
            <Puzzle1Visualization />
        </Block>
        <Block id="shapes-puzzle1-explanation" padding="md">
            <EditableParagraph id="para-shapes-puzzle1-explain" blockId="shapes-puzzle1-explanation">
                Here's how to think about it: if each circle is worth 4, then two circles together are worth 4 + 4 = 8. The whole equation says circle + circle + triangle = 10, which means 8 + triangle = 10. So the triangle must be worth 10 − 8 = 2.
            </EditableParagraph>
        </Block>
    </SplitLayout>,

    // Puzzle 1 answer
    <StackLayout key="layout-shapes-puzzle1-answer" maxWidth="xl">
        <Block id="shapes-puzzle1-answer" padding="md">
            <EditableParagraph id="para-shapes-puzzle1-answer" blockId="shapes-puzzle1-answer">
                The triangle is worth{" "}
                <InlineFeedback
                    varName="answer_shapes_triangle"
                    correctValue="2"
                    successMessage="Well done! Two circles (4 + 4 = 8) plus the triangle equals 10, so the triangle must be 10 − 8 = 2"
                    failureMessage="Not quite right!"
                    hint="If each circle = 4, then two circles = 8. What do you add to 8 to get 10?"
                >
                    <InlineClozeInput
                        varName="answer_shapes_triangle"
                        correctAnswer="2"
                        {...clozePropsFromDefinition(getVariableInfo('answer_shapes_triangle'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Puzzle 2 heading
    <StackLayout key="layout-shapes-puzzle2-heading" maxWidth="xl">
        <Block id="shapes-puzzle2-heading" padding="sm">
            <EditableParagraph id="para-shapes-puzzle2-heading" blockId="shapes-puzzle2-heading">
                <strong>Puzzle 2:</strong> Now try a slightly trickier one. Each square has the same value. Use the clue to find what one square is worth.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Puzzle 2 visualization
    <SplitLayout key="layout-shapes-puzzle2" ratio="1:1" gap="lg">
        <Block id="shapes-puzzle2-viz" padding="md" hasVisualization>
            <Puzzle2Visualization />
        </Block>
        <Block id="shapes-puzzle2-explanation" padding="md">
            <EditableParagraph id="para-shapes-puzzle2-explain" blockId="shapes-puzzle2-explanation">
                Start with what you know: the circle is worth 7. The equation says square + square + circle = 17. Substituting the circle's value: square + square + 7 = 17. That means two squares equal 17 − 7 = 10. If two squares equal 10, then one square equals 10 ÷ 2 = 5.
            </EditableParagraph>
        </Block>
    </SplitLayout>,

    // Puzzle 2 answer
    <StackLayout key="layout-shapes-puzzle2-answer" maxWidth="xl">
        <Block id="shapes-puzzle2-answer" padding="md">
            <EditableParagraph id="para-shapes-puzzle2-answer" blockId="shapes-puzzle2-answer">
                Each square is worth{" "}
                <InlineFeedback
                    varName="answer_shapes_square"
                    correctValue="5"
                    successMessage="Excellent reasoning! Two squares + 7 = 17 means two squares = 10, so one square = 5"
                    failureMessage="Let's think through this step by step"
                    hint="First find what two squares equal: 17 − 7 = 10. Then divide by 2 to find one square"
                >
                    <InlineClozeInput
                        varName="answer_shapes_square"
                        correctAnswer="5"
                        {...clozePropsFromDefinition(getVariableInfo('answer_shapes_square'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Connection to algebra
    <StackLayout key="layout-shapes-connection-heading" maxWidth="xl">
        <Block id="shapes-connection-heading" padding="sm">
            <EditableParagraph id="para-shapes-connection-heading" blockId="shapes-connection-heading">
                <strong>The Big Reveal:</strong> Shapes Are Just Like Letters!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-shapes-connection-viz" maxWidth="xl">
        <Block id="shapes-connection-viz" padding="md" hasVisualization>
            <ShapeToAlgebraVisual />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-shapes-connection-text" maxWidth="xl">
        <Block id="shapes-connection-text" padding="sm">
            <EditableParagraph id="para-shapes-connection" blockId="shapes-connection-text">
                The exact same puzzle could be written with letters instead of shapes! When mathematicians write algebra, they simply replace the shapes with letters. The circle becomes x, the triangle becomes y, and the square becomes z. The puzzles work exactly the same way, but letters are quicker to write and easier to work with on paper. You've already been doing algebra. You just didn't know it yet!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-shapes-transition" maxWidth="xl">
        <Block id="shapes-transition" padding="sm">
            <EditableParagraph id="para-shapes-transition" blockId="shapes-transition">
                Now that you've seen how shapes and letters represent the same idea, let's look at an even more powerful way to think about algebra: the balance scale. This visual will help you understand why algebraic rules work the way they do.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
