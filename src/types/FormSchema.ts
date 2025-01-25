/**
 * Project: Dynamic Form Generator
 * File: FormSchema.ts
 * Description: Type definitions for the form schema used in the dynamic form generator.
 * Author: Prasanth Ravi
 * Created On: January 25, 2023
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This code is designed for an interview task and demonstrates the ability to create
 *       a dynamic form generator using React, Redux, and TypeScript.
 */

// Interface for validation rules that can be applied to form fields
export interface ValidationRules {
    required?: boolean; // Indicates if the field is required
    minLength?: number; // Minimum length for text fields
    maxLength?: number; // Maximum length for text fields
    pattern?: string; // Regex pattern for validation
    message?: string; // Custom validation message
}

// Interface for options in fields like radio buttons and checkboxes
export interface FieldOption {
    value: string; // Value of the option
    label: string; // Display label of the option
}

export enum ConditionType {
    EQUALS = 'equals',
    NOT_EQUALS = 'not_equals',
    IN = 'in',
    NOT_IN = 'not_in',
    GT = 'greater_than',
    LT = 'less_than',
    CONTAINS = 'contains',
    EMPTY = 'empty',
    NOT_EMPTY = 'not_empty'
}

export type Visibility = 'show' | 'hide';

export interface ConditionalRule {
    sourceField: string;
    conditionType: ConditionType;
    sourceValue: any;
    visibility: Visibility;
}

// Interface for individual form fields
export interface FormField {
    id: string; // Unique identifier for the field
    type: 'text' | 'email' | 'password' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'file'; // Type of the field (e.g., text, email, password)
    label: string; // Label for the field
    required?: boolean; // Indicates if the field is required
    placeholder?: string; // Placeholder text for the field
    validation?: ValidationRules; // Validation rules for the field
    options?: FieldOption[]; // Options for fields like radio buttons and checkboxes
    conditionalRules?: ConditionalRule[]; // Conditional rules for field visibility
}

// Interface for the overall form schema
export interface FormSchema {
    formTitle: string; // Title of the form
    formDescription?: string; // Description of the form
    fields: FormField[]; // Array of form fields
}
