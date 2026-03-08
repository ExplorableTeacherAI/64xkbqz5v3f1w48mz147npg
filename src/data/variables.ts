/**
 * Variables Configuration
 * =======================
 *
 * Introduction to Algebra Course Variables
 * For Grade 7 students (ages 12-13) transitioning from primary to secondary school
 */

import { type VarValue } from '@/stores';

/**
 * Variable definition with metadata
 */
export interface VariableDefinition {
    /** Default value */
    defaultValue: VarValue;
    /** Human-readable label */
    label?: string;
    /** Description for AI agents */
    description?: string;
    /** Variable type hint */
    type?: 'number' | 'text' | 'boolean' | 'select' | 'array' | 'object' | 'spotColor' | 'linkedHighlight';
    /** Unit (e.g., 'Hz', '°', 'm/s') - for numbers */
    unit?: string;
    /** Minimum value (for number sliders) */
    min?: number;
    /** Maximum value (for number sliders) */
    max?: number;
    /** Step increment (for number sliders) */
    step?: number;
    /** Display color for InlineScrubbleNumber / InlineSpotColor (e.g. '#D81B60') */
    color?: string;
    /** Options for 'select' type variables */
    options?: string[];
    /** Placeholder text for text inputs */
    placeholder?: string;
    /** Correct answer for cloze input validation */
    correctAnswer?: string;
    /** Whether cloze matching is case sensitive */
    caseSensitive?: boolean;
    /** Background color for inline components */
    bgColor?: string;
    /** Schema hint for object types (for AI agents) */
    schema?: string;
}

/**
 * =====================================================
 * 🎯 INTRODUCTION TO ALGEBRA - VARIABLE DEFINITIONS
 * =====================================================
 */
export const variableDefinitions: Record<string, VariableDefinition> = {
    // ========================================
    // SECTION 1: WHAT IS ALGEBRA?
    // ========================================
    mysteryNumber: {
        defaultValue: 5,
        type: 'number',
        label: 'Mystery Number',
        description: 'The unknown number in the mystery number demo',
        min: 1,
        max: 20,
        step: 1,
        color: '#8b5cf6',
    },
    mysteryResult: {
        defaultValue: 7,
        type: 'number',
        label: 'Mystery Result',
        description: 'The result shown after adding 2',
        min: 3,
        max: 22,
        step: 1,
        color: '#3b82f6',
    },
    answer_intro_mystery: {
        defaultValue: '',
        type: 'text',
        label: 'Mystery Number Answer',
        description: 'Student answer for the first mystery number question',
        placeholder: '???',
        correctAnswer: '5',
        color: '#8b5cf6',
    },

    // ========================================
    // SECTION 2: SHAPE PUZZLES
    // ========================================
    circleValue: {
        defaultValue: 4,
        type: 'number',
        label: 'Circle Value',
        description: 'The value of each circle in shape puzzles',
        min: 1,
        max: 10,
        step: 1,
        color: '#3b82f6',
    },
    triangleValue: {
        defaultValue: 2,
        type: 'number',
        label: 'Triangle Value',
        description: 'The value of each triangle in shape puzzles',
        min: 1,
        max: 10,
        step: 1,
        color: '#ef4444',
    },
    squareValue: {
        defaultValue: 3,
        type: 'number',
        label: 'Square Value',
        description: 'The value of each square in shape puzzles',
        min: 1,
        max: 10,
        step: 1,
        color: '#22c55e',
    },
    answer_shapes_triangle: {
        defaultValue: '',
        type: 'text',
        label: 'Triangle Answer',
        description: 'Student answer for finding the triangle value',
        placeholder: '???',
        correctAnswer: '2',
        color: '#ef4444',
    },
    answer_shapes_square: {
        defaultValue: '',
        type: 'text',
        label: 'Square Answer',
        description: 'Student answer for finding the square value',
        placeholder: '???',
        correctAnswer: '5',
        color: '#22c55e',
    },

    // ========================================
    // SECTION 3: BALANCE SCALE
    // ========================================
    scaleLeftWeight: {
        defaultValue: 10,
        type: 'number',
        label: 'Left Side Weight',
        description: 'Total weight on the left side of the scale',
        min: 0,
        max: 50,
        step: 1,
        color: '#6366f1',
    },
    scaleRightWeight: {
        defaultValue: 10,
        type: 'number',
        label: 'Right Side Weight',
        description: 'Total weight on the right side of the scale',
        min: 0,
        max: 50,
        step: 1,
        color: '#f97316',
    },
    scaleXValue: {
        defaultValue: 3,
        type: 'number',
        label: 'x Value',
        description: 'The value of x in the balance equation',
        min: 1,
        max: 10,
        step: 1,
        color: '#8b5cf6',
    },
    answer_balance_x: {
        defaultValue: '',
        type: 'text',
        label: 'Balance x Answer',
        description: 'Student answer for finding x in the balance equation',
        placeholder: '???',
        correctAnswer: '4',
        color: '#8b5cf6',
    },

    // ========================================
    // SECTION 4: TERMINOLOGY AND CONVENTIONS
    // ========================================
    coefficientValue: {
        defaultValue: 3,
        type: 'number',
        label: 'Coefficient',
        description: 'The coefficient in algebraic terms',
        min: 1,
        max: 10,
        step: 1,
        color: '#ef4444',
    },
    variableMultiplier: {
        defaultValue: 2,
        type: 'number',
        label: 'Variable Multiplier',
        description: 'A multiplier for showing algebraic expressions',
        min: 1,
        max: 10,
        step: 1,
        color: '#3b82f6',
    },
    answer_term_coefficient: {
        defaultValue: '',
        type: 'text',
        label: 'Coefficient Answer',
        description: 'Student identifies the coefficient in 5x',
        placeholder: '???',
        correctAnswer: '5',
        color: '#ef4444',
    },
    answer_term_variable: {
        defaultValue: '',
        type: 'select',
        label: 'Variable Answer',
        description: 'Student identifies the variable in 5x',
        placeholder: '???',
        correctAnswer: 'x',
        options: ['5', 'x', '5x', 'none'],
        color: '#8b5cf6',
    },
    answer_convention_correct: {
        defaultValue: '',
        type: 'select',
        label: 'Convention Answer',
        description: 'Student picks the correct way to write 3 times y',
        placeholder: '???',
        correctAnswer: '3y',
        options: ['3 × y', 'y3', '3y', 'y × 3'],
        color: '#22c55e',
    },

    // ========================================
    // SECTION 5: GROUPING LIKE TERMS
    // ========================================
    likeTermsA: {
        defaultValue: 3,
        type: 'number',
        label: 'First Coefficient',
        description: 'First coefficient in like terms addition',
        min: 1,
        max: 10,
        step: 1,
        color: '#3b82f6',
    },
    likeTermsB: {
        defaultValue: 2,
        type: 'number',
        label: 'Second Coefficient',
        description: 'Second coefficient in like terms addition',
        min: 1,
        max: 10,
        step: 1,
        color: '#3b82f6',
    },
    answer_like_terms_simple: {
        defaultValue: '',
        type: 'text',
        label: 'Simple Like Terms Answer',
        description: 'Student answer for 3x + 2x',
        placeholder: '???',
        correctAnswer: '5x',
        color: '#3b82f6',
        caseSensitive: false,
    },
    answer_like_terms_mixed: {
        defaultValue: '',
        type: 'text',
        label: 'Mixed Like Terms Answer',
        description: 'Student answer for combining 4x + 3 + 2x + 5',
        placeholder: '???',
        correctAnswer: '6x + 8',
        color: '#8b5cf6',
        caseSensitive: false,
    },

    // ========================================
    // SECTION 6: SOLVING EQUATIONS
    // ========================================
    equationCoeff: {
        defaultValue: 2,
        type: 'number',
        label: 'Equation Coefficient',
        description: 'The coefficient of x in the equation',
        min: 1,
        max: 10,
        step: 1,
        color: '#8b5cf6',
    },
    equationConstant: {
        defaultValue: 4,
        type: 'number',
        label: 'Equation Constant',
        description: 'The constant on the left side',
        min: 1,
        max: 15,
        step: 1,
        color: '#f97316',
    },
    equationResult: {
        defaultValue: 10,
        type: 'number',
        label: 'Equation Result',
        description: 'The value on the right side of the equation',
        min: 5,
        max: 30,
        step: 1,
        color: '#22c55e',
    },
    answer_solve_step1: {
        defaultValue: '',
        type: 'text',
        label: 'Solve Step 1 Answer',
        description: 'Student finds what 2x equals after subtracting 4',
        placeholder: '???',
        correctAnswer: '6',
        color: '#3b82f6',
    },
    answer_solve_final: {
        defaultValue: '',
        type: 'text',
        label: 'Solve Final Answer',
        description: 'Student finds the value of x',
        placeholder: '???',
        correctAnswer: '3',
        color: '#8b5cf6',
    },
    answer_practice_q1: {
        defaultValue: '',
        type: 'text',
        label: 'Practice Q1 Answer',
        description: 'Student solves 3x + 5 = 14',
        placeholder: '???',
        correctAnswer: '3',
        color: '#6366f1',
    },

    // ========================================
    // SECTION 7: PRACTICE AND REVIEW
    // ========================================
    answer_review_like_terms: {
        defaultValue: '',
        type: 'text',
        label: 'Review Like Terms Answer',
        description: 'Review question: simplify 5y + 3 + 2y',
        placeholder: '???',
        correctAnswer: '7y + 3',
        color: '#3b82f6',
        caseSensitive: false,
    },
    answer_review_equation: {
        defaultValue: '',
        type: 'text',
        label: 'Review Equation Answer',
        description: 'Review question: solve 4x + 2 = 18',
        placeholder: '???',
        correctAnswer: '4',
        color: '#8b5cf6',
    },
    answer_review_shapes: {
        defaultValue: '',
        type: 'text',
        label: 'Review Shapes Answer',
        description: 'Review question: shape puzzle',
        placeholder: '???',
        correctAnswer: '6',
        color: '#ef4444',
    },

    // ========================================
    // SPOT COLORS FOR VISUAL COORDINATION
    // ========================================
    spotVariable: {
        defaultValue: 'variable',
        type: 'spotColor',
        label: 'Variable Color',
        description: 'Color for variable terms',
        color: '#8b5cf6',
    },
    spotCoefficient: {
        defaultValue: 'coefficient',
        type: 'spotColor',
        label: 'Coefficient Color',
        description: 'Color for coefficients',
        color: '#ef4444',
    },
    spotConstant: {
        defaultValue: 'constant',
        type: 'spotColor',
        label: 'Constant Color',
        description: 'Color for constant terms',
        color: '#f97316',
    },
    spotOperator: {
        defaultValue: 'operator',
        type: 'spotColor',
        label: 'Operator Color',
        description: 'Color for operators',
        color: '#22c55e',
    },

    // ========================================
    // HIGHLIGHT GROUPS
    // ========================================
    termHighlight: {
        defaultValue: '',
        type: 'linkedHighlight',
        label: 'Term Highlight',
        description: 'Active highlight for algebraic terms',
        color: '#8b5cf6',
    },
    balanceHighlight: {
        defaultValue: '',
        type: 'linkedHighlight',
        label: 'Balance Highlight',
        description: 'Active highlight for balance scale elements',
        color: '#6366f1',
    },
};

/**
 * Get all variable names (for AI agents to discover)
 */
export const getVariableNames = (): string[] => {
    return Object.keys(variableDefinitions);
};

/**
 * Get a variable's default value
 */
export const getDefaultValue = (name: string): VarValue => {
    return variableDefinitions[name]?.defaultValue ?? 0;
};

/**
 * Get a variable's metadata
 */
export const getVariableInfo = (name: string): VariableDefinition | undefined => {
    return variableDefinitions[name];
};

/**
 * Get all default values as a record (for initialization)
 */
export const getDefaultValues = (): Record<string, VarValue> => {
    const defaults: Record<string, VarValue> = {};
    for (const [name, def] of Object.entries(variableDefinitions)) {
        defaults[name] = def.defaultValue;
    }
    return defaults;
};

/**
 * Get number props for InlineScrubbleNumber from a variable definition.
 */
export function numberPropsFromDefinition(def: VariableDefinition | undefined): {
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    color?: string;
} {
    if (!def || def.type !== 'number') return {};
    return {
        defaultValue: def.defaultValue as number,
        min: def.min,
        max: def.max,
        step: def.step,
        ...(def.color ? { color: def.color } : {}),
    };
}

/**
 * Get cloze choice props for InlineClozeChoice from a variable definition.
 */
export function choicePropsFromDefinition(def: VariableDefinition | undefined): {
    placeholder?: string;
    color?: string;
    bgColor?: string;
} {
    if (!def || def.type !== 'select') return {};
    return {
        ...(def.placeholder ? { placeholder: def.placeholder } : {}),
        ...(def.color ? { color: def.color } : {}),
        ...(def.bgColor ? { bgColor: def.bgColor } : {}),
    };
}

/**
 * Get toggle props for InlineToggle from a variable definition.
 */
export function togglePropsFromDefinition(def: VariableDefinition | undefined): {
    color?: string;
    bgColor?: string;
} {
    if (!def || def.type !== 'select') return {};
    return {
        ...(def.color ? { color: def.color } : {}),
        ...(def.bgColor ? { bgColor: def.bgColor } : {}),
    };
}

export function clozePropsFromDefinition(def: VariableDefinition | undefined): {
    placeholder?: string;
    color?: string;
    bgColor?: string;
    caseSensitive?: boolean;
} {
    if (!def || def.type !== 'text') return {};
    return {
        ...(def.placeholder ? { placeholder: def.placeholder } : {}),
        ...(def.color ? { color: def.color } : {}),
        ...(def.bgColor ? { bgColor: def.bgColor } : {}),
        ...(def.caseSensitive !== undefined ? { caseSensitive: def.caseSensitive } : {}),
    };
}

/**
 * Get spot-color props for InlineSpotColor from a variable definition.
 */
export function spotColorPropsFromDefinition(def: VariableDefinition | undefined): {
    color: string;
} {
    return {
        color: def?.color ?? '#8B5CF6',
    };
}

/**
 * Get linked-highlight props for InlineLinkedHighlight from a variable definition.
 */
export function linkedHighlightPropsFromDefinition(def: VariableDefinition | undefined): {
    color?: string;
    bgColor?: string;
} {
    return {
        ...(def?.color ? { color: def.color } : {}),
        ...(def?.bgColor ? { bgColor: def.bgColor } : {}),
    };
}

/**
 * Build the `variables` prop for FormulaBlock from variable definitions.
 */
export function scrubVarsFromDefinitions(
    varNames: string[],
): Record<string, { min?: number; max?: number; step?: number; color?: string }> {
    const result: Record<string, { min?: number; max?: number; step?: number; color?: string }> = {};
    for (const name of varNames) {
        const def = variableDefinitions[name];
        if (!def) continue;
        result[name] = {
            ...(def.min !== undefined ? { min: def.min } : {}),
            ...(def.max !== undefined ? { max: def.max } : {}),
            ...(def.step !== undefined ? { step: def.step } : {}),
            ...(def.color ? { color: def.color } : {}),
        };
    }
    return result;
}
