/**
 * Project: Dynamic Form Generator
 * File: utils.test.tsx
 * Description: Test file for evaluateCondition function.
 * Author: Prasanth Ravi
 * Created On: January 27, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This configuration sets up Vite to work with a React project.
 */

import { describe, it, expect } from 'vitest';
import { evaluateCondition } from './utils';
import { ConditionType } from './types/FormSchema';

describe('evaluateCondition', () => {
    it('should return true when ConditionType is EQUALS and values are equal', () => {
        expect(evaluateCondition(ConditionType.EQUALS, 5, 5)).toBe(true);
    });

    it('should return false when ConditionType is EQUALS and values are not equal', () => {
        expect(evaluateCondition(ConditionType.EQUALS, 5, 10)).toBe(false);
    });

    it('should return true when ConditionType is NOT_EQUALS and values are not equal', () => {
        expect(evaluateCondition(ConditionType.NOT_EQUALS, 5, 10)).toBe(true);
    });

    it('should return false when ConditionType is NOT_EQUALS and values are equal', () => {
        expect(evaluateCondition(ConditionType.NOT_EQUALS, 5, 5)).toBe(false);
    });

    it('should return true when ConditionType is IN and actualValue is in expectedValue array', () => {
        expect(evaluateCondition(ConditionType.IN, 'apple', ['apple', 'banana'])).toBe(true);
    });

    it('should return false when ConditionType is IN and actualValue is not in expectedValue array', () => {
        expect(evaluateCondition(ConditionType.IN, 'cherry', ['apple', 'banana'])).toBe(false);
    });

    it('should return false when ConditionType is IN and expectedValue is not an array', () => {
        expect(evaluateCondition(ConditionType.IN, 'apple', 'apple')).toBe(false);
    });

    it('should return true when ConditionType is NOT_IN and actualValue is not in expectedValue array', () => {
        expect(evaluateCondition(ConditionType.NOT_IN, 'cherry', ['apple', 'banana'])).toBe(true);
    });

    it('should return false when ConditionType is NOT_IN and actualValue is in expectedValue array', () => {
        expect(evaluateCondition(ConditionType.NOT_IN, 'apple', ['apple', 'banana'])).toBe(false);
    });

    it('should return true when ConditionType is GT and actualValue is greater than expectedValue', () => {
        expect(evaluateCondition(ConditionType.GT, 10, 5)).toBe(true);
    });

    it('should return false when ConditionType is GT and actualValue is not greater than expectedValue', () => {
        expect(evaluateCondition(ConditionType.GT, 5, 10)).toBe(false);
    });

    it('should return true when ConditionType is LT and actualValue is less than expectedValue', () => {
        expect(evaluateCondition(ConditionType.LT, 5, 10)).toBe(true);
    });

    it('should return false when ConditionType is LT and actualValue is not less than expectedValue', () => {
        expect(evaluateCondition(ConditionType.LT, 10, 5)).toBe(false);
    });

    it('should return true when ConditionType is CONTAINS and actualValue includes expectedValue', () => {
        expect(evaluateCondition(ConditionType.CONTAINS, 'hello world', 'world')).toBe(true);
    });

    it('should return false when ConditionType is CONTAINS and actualValue does not include expectedValue', () => {
        expect(evaluateCondition(ConditionType.CONTAINS, 'hello', 'world')).toBe(false);
    });

    it('should return true when ConditionType is EMPTY and actualValue is empty', () => {
        expect(evaluateCondition(ConditionType.EMPTY, '', '')).toBe(true);
        expect(evaluateCondition(ConditionType.EMPTY, [], [])).toBe(true);
        expect(evaluateCondition(ConditionType.EMPTY, null, null)).toBe(true);
        expect(evaluateCondition(ConditionType.EMPTY, undefined, undefined)).toBe(true);
    });

    it('should return false when ConditionType is EMPTY and actualValue is not empty', () => {
        expect(evaluateCondition(ConditionType.EMPTY, 'text', '')).toBe(false);
        expect(evaluateCondition(ConditionType.EMPTY, [1, 2], [])).toBe(false);
        expect(evaluateCondition(ConditionType.EMPTY, {}, {})).toBe(false);
    });

    it('should return true when ConditionType is NOT_EMPTY and actualValue is not empty', () => {
        expect(evaluateCondition(ConditionType.NOT_EMPTY, 'text', '')).toBe(true);
        expect(evaluateCondition(ConditionType.NOT_EMPTY, [1, 2], [])).toBe(true);
        expect(evaluateCondition(ConditionType.NOT_EMPTY, { key: 'value' }, {})).toBe(true);
    });

    it('should return false when ConditionType is NOT_EMPTY and actualValue is empty', () => {
        expect(evaluateCondition(ConditionType.NOT_EMPTY, '', '')).toBe(false);
        expect(evaluateCondition(ConditionType.NOT_EMPTY, [], [])).toBe(false);
        expect(evaluateCondition(ConditionType.NOT_EMPTY, null, null)).toBe(false);
        expect(evaluateCondition(ConditionType.NOT_EMPTY, undefined, undefined)).toBe(false);
    });

    it('should return false for unknown ConditionType', () => {
        // @ts-ignore
        expect(evaluateCondition('UNKNOWN', 1, 1)).toBe(false);
    });
});
