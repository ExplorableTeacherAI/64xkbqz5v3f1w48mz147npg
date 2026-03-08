/**
 * Section 7: Practice and Review
 * ===============================
 *
 * Consolidation section with mixed practice questions
 * Reviews all concepts: shapes, terminology, like terms, solving
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

function Circle({ size = 40, color = "#3b82f6" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill={color} />
        </svg>
    );
}

// Review shape puzzle
function ReviewShapePuzzle() {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="space-y-6">
                {/* First equation */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <Star />
                    <span className="text-2xl font-medium text-slate-400">+</span>
                    <Star />
                    <span className="text-2xl font-medium text-slate-400">+</span>
                    <Circle />
                    <span className="text-2xl font-medium text-slate-400">=</span>
                    <span className="text-3xl font-bold text-slate-700">20</span>
                </div>

                {/* Given clue */}
                <div className="flex items-center justify-center gap-3">
                    <Circle />
                    <span className="text-2xl font-medium text-slate-400">=</span>
                    <span className="text-3xl font-bold text-slate-700">8</span>
                </div>

                {/* Question */}
                <div className="border-t border-dashed border-slate-300 pt-4">
                    <div className="flex items-center justify-center gap-3">
                        <Star />
                        <span className="text-2xl font-medium text-slate-400">=</span>
                        <span className="text-3xl font-bold text-slate-400">?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Key concepts summary
function ConceptsSummary() {
    const concepts = [
        {
            title: "Variables",
            description: "Letters like x and y that represent unknown numbers",
            color: "#8b5cf6"
        },
        {
            title: "Coefficients",
            description: "Numbers in front of variables, like the 3 in 3x",
            color: "#ef4444"
        },
        {
            title: "Constants",
            description: "Numbers on their own, with no variable",
            color: "#f97316"
        },
        {
            title: "Like Terms",
            description: "Terms with the same variable that can be combined",
            color: "#22c55e"
        },
        {
            title: "Balance Rule",
            description: "Whatever you do to one side, do to the other",
            color: "#3b82f6"
        },
        {
            title: "Inverse Operations",
            description: "Use opposite operations to isolate the variable",
            color: "#6366f1"
        }
    ];

    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4 text-center">
                Key Concepts You've Learned
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {concepts.map((concept, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: concept.color }}
                            />
                            <span className="font-semibold text-slate-700">{concept.title}</span>
                        </div>
                        <p className="text-sm text-slate-600">{concept.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Next steps
function NextStepsCard() {
    return (
        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
            <h4 className="text-lg font-semibold text-indigo-700 mb-4">What's Next in Your Algebra Journey?</h4>
            <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold text-indigo-700 shrink-0">1</span>
                    <p className="text-sm text-slate-700">Equations with variables on both sides (e.g., 3x + 2 = x + 10)</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold text-indigo-700 shrink-0">2</span>
                    <p className="text-sm text-slate-700">Working with negative numbers in equations</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold text-indigo-700 shrink-0">3</span>
                    <p className="text-sm text-slate-700">Expanding brackets: 2(x + 3) = 2x + 6</p>
                </div>
                <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold text-indigo-700 shrink-0">4</span>
                    <p className="text-sm text-slate-700">Factorising expressions: finding common factors</p>
                </div>
            </div>
        </div>
    );
}

export const section7ReviewBlocks: ReactElement[] = [
    // Section heading
    <StackLayout key="layout-review-title" maxWidth="xl">
        <Block id="review-title" padding="lg">
            <EditableH2 id="h2-review-title" blockId="review-title">
                Practice and Review
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-review-intro" maxWidth="xl">
        <Block id="review-intro" padding="sm">
            <EditableParagraph id="para-review-intro" blockId="review-intro">
                You've made it through your first introduction to algebra! Let's review what you've learned with some mixed practice questions. These will help cement the concepts in your mind. Take your time and remember: algebra is all about finding unknown values by keeping equations balanced.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Concepts summary
    <StackLayout key="layout-review-summary" maxWidth="xl">
        <Block id="review-summary" padding="md" hasVisualization>
            <ConceptsSummary />
        </Block>
    </StackLayout>,

    // Practice heading
    <StackLayout key="layout-review-practice-heading" maxWidth="xl">
        <Block id="review-practice-heading" padding="sm">
            <EditableParagraph id="para-review-practice-heading" blockId="review-practice-heading">
                <strong>Mixed Practice Questions</strong>
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 1: Like terms
    <StackLayout key="layout-review-q1" maxWidth="xl">
        <Block id="review-q1" padding="md">
            <EditableParagraph id="para-review-q1" blockId="review-q1">
                <strong>Question 1:</strong> Simplify the expression 5y + 3 + 2y. Combine the like terms to get{" "}
                <InlineFeedback
                    varName="answer_review_like_terms"
                    correctValue="7y + 3"
                    successMessage="Perfect! 5y + 2y = 7y, and the 3 stays as it is"
                    failureMessage="Group the y terms together"
                    hint="Add 5y and 2y first, then write the constant 3 at the end"
                >
                    <InlineClozeInput
                        varName="answer_review_like_terms"
                        correctAnswer="7y + 3"
                        {...clozePropsFromDefinition(getVariableInfo('answer_review_like_terms'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 2: Solving equation
    <StackLayout key="layout-review-q2" maxWidth="xl">
        <Block id="review-q2" padding="md">
            <EditableParagraph id="para-review-q2" blockId="review-q2">
                <strong>Question 2:</strong> Solve the equation 4x + 2 = 18. Remember to subtract 2 first, then divide by 4. x ={" "}
                <InlineFeedback
                    varName="answer_review_equation"
                    correctValue="4"
                    successMessage="Excellent! 4x = 16, so x = 4. Check: 4(4) + 2 = 18 ✓"
                    failureMessage="Work through the steps"
                    hint="First: 4x = 18 − 2 = 16. Then: x = 16 ÷ 4"
                >
                    <InlineClozeInput
                        varName="answer_review_equation"
                        correctAnswer="4"
                        {...clozePropsFromDefinition(getVariableInfo('answer_review_equation'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Question 3: Shape puzzle
    <StackLayout key="layout-review-q3-heading" maxWidth="xl">
        <Block id="review-q3-heading" padding="sm">
            <EditableParagraph id="para-review-q3-heading" blockId="review-q3-heading">
                <strong>Question 3:</strong> Solve this shape puzzle to find the value of the star.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <SplitLayout key="layout-review-q3" ratio="1:1" gap="lg">
        <Block id="review-q3-viz" padding="md" hasVisualization>
            <ReviewShapePuzzle />
        </Block>
        <Block id="review-q3-answer" padding="md">
            <EditableParagraph id="para-review-q3-answer" blockId="review-q3-answer">
                The circle equals 8. The equation says: star + star + circle = 20. Substituting: star + star + 8 = 20. So two stars = 20 − 8 = 12. One star ={" "}
                <InlineFeedback
                    varName="answer_review_shapes"
                    correctValue="6"
                    successMessage="Well done! If 2 stars = 12, then 1 star = 6. Check: 6 + 6 + 8 = 20 ✓"
                    failureMessage="You're close!"
                    hint="Two stars equal 12. What is 12 ÷ 2?"
                >
                    <InlineClozeInput
                        varName="answer_review_shapes"
                        correctAnswer="6"
                        {...clozePropsFromDefinition(getVariableInfo('answer_review_shapes'))}
                    />
                </InlineFeedback>.
            </EditableParagraph>
        </Block>
    </SplitLayout>,

    // Congratulations
    <StackLayout key="layout-review-congrats" maxWidth="xl">
        <Block id="review-congrats" padding="md">
            <EditableParagraph id="para-review-congrats" blockId="review-congrats">
                <strong>Congratulations!</strong> You've completed your introduction to algebra. You now understand what variables are, how to use the balance scale to think about equations, the key vocabulary (terms, coefficients, constants), how to combine like terms, and how to solve simple equations. These are the foundational skills that all of your future algebra work will build upon.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Next steps
    <StackLayout key="layout-review-next" maxWidth="xl">
        <Block id="review-next" padding="md" hasVisualization>
            <NextStepsCard />
        </Block>
    </StackLayout>,

    // Final encouragement
    <StackLayout key="layout-review-final" maxWidth="xl">
        <Block id="review-final" padding="sm">
            <EditableParagraph id="para-review-final" blockId="review-final">
                Remember: algebra is not about memorising rules, it's about understanding why those rules work. The balance scale will always be your friend. Whenever you're stuck, think "what do I need to do to both sides to keep things balanced?" With practice, these techniques will become second nature. Happy algebra-ing!
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
