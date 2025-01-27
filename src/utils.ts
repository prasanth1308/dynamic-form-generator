/**
 * Project: Dynamic Form Generator
 * File: utils.ts
 * Description: Utility functions for evaluating form conditions
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This file contains utility functions for handling conditional logic in forms
 */

import { ConditionType, ConditionalRule } from './types/FormSchema';

export const evaluateCondition = (
    conditionType: ConditionType,
    actualValue: any,
    expectedValue: any
): boolean => {
    switch (conditionType) {
        case ConditionType.EQUALS:
            return actualValue === expectedValue;
        case ConditionType.NOT_EQUALS:
            return actualValue !== expectedValue;
        case ConditionType.IN:
            return Array.isArray(expectedValue)
                ? expectedValue.includes(actualValue)
                : false;
        case ConditionType.NOT_IN:
            return Array.isArray(expectedValue)
                ? !expectedValue.includes(actualValue)
                : true;
        case ConditionType.GT:
            return Number(actualValue) > Number(expectedValue);
        case ConditionType.LT:
            return Number(actualValue) < Number(expectedValue);
        case ConditionType.CONTAINS:
            return String(actualValue).includes(String(expectedValue));
        case ConditionType.EMPTY:
            return !actualValue ||
                (Array.isArray(actualValue) && actualValue.length === 0);
        case ConditionType.NOT_EMPTY:
            return !!(actualValue &&
                (!Array.isArray(actualValue) || actualValue.length > 0));
        default:
            return false;
    }
};

export const shouldShowField = (
    rules: ConditionalRule[],
    formValues: Record<string, any>
): boolean => {
    if (!rules || rules.length === 0) return true;

    return rules.every(rule => {
        const sourceValue = formValues[rule.sourceField];
        const conditionResult = evaluateCondition(
            rule.conditionType,
            sourceValue,
            rule.sourceValue
        );
        return rule.visibility === 'show' ? conditionResult : !conditionResult;
    });
};
