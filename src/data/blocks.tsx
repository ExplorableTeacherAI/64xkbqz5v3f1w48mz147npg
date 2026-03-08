/**
 * Introduction to Algebra
 * =======================
 *
 * A complete interactive course for Grade 7 students (ages 12-13)
 * transitioning from primary to secondary school.
 *
 * This course covers:
 * 1. What is Algebra? - The mystery number concept
 * 2. Shape Puzzles - Algebra in disguise
 * 3. The Balance Scale - Understanding equations visually
 * 4. Algebraic Terminology - Variables, coefficients, constants
 * 5. Grouping Like Terms - Simplifying expressions
 * 6. Solving Simple Equations - Putting it all together
 * 7. Practice and Review - Consolidation
 */

import { type ReactElement } from "react";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

// Import all section blocks
import {
    section1IntroductionBlocks,
    section2ShapePuzzlesBlocks,
    section3BalanceScaleBlocks,
    section4TerminologyBlocks,
    section5LikeTermsBlocks,
    section6SolvingEquationsBlocks,
    section7ReviewBlocks,
} from "./sections";

/**
 * All lesson blocks combined into a single flat array.
 * Each section flows naturally into the next.
 */
export const blocks: ReactElement[] = [
    // Section 1: What is Algebra?
    ...section1IntroductionBlocks,

    // Section 2: Shape Puzzles - Algebra in Disguise
    ...section2ShapePuzzlesBlocks,

    // Section 3: The Balance Scale - Understanding Equations
    ...section3BalanceScaleBlocks,

    // Section 4: The Language of Algebra - Terminology and Conventions
    ...section4TerminologyBlocks,

    // Section 5: Grouping Like Terms
    ...section5LikeTermsBlocks,

    // Section 6: Solving Simple Equations
    ...section6SolvingEquationsBlocks,

    // Section 7: Practice and Review
    ...section7ReviewBlocks,
];

export default blocks;
