/**
 * Project: Dynamic Form Generator
 * File: formSchemaSlice.ts
 * Description: Redux slice for managing the form schema state.
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This file contains the Redux slice for managing the form schema state.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormSchema } from '../types/FormSchema';

const initialState: FormSchema = {
  formTitle: "User Registration Form",
  formDescription: "Please fill out the form to register.",
  fields: [
    {
      id: "username",
      type: "text",
      label: "Username",
      required: true,
      placeholder: "Enter your username",
      validation: {
        minLength: 3,
        maxLength: 20
      }
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "Enter your email",
      validation: {
        pattern: "^[\\w\\s@]+@[\\w\\s@]+\\.[\\w\\s@]+$",
        message: "Please enter a valid email address"
      }
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      required: true,
      placeholder: "Enter a secure password",
      validation: {
        minLength: 8,
        message: "Password must be at least 8 characters long"
      }
    },
    {
      id: "dob",
      type: "date",
      label: "Date of Birth",
      required: false
    },
    {
      id: "gender",
      type: "radio",
      label: "Gender",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
      ]
    },
    {
      id: "hobbies",
      type: "checkbox",
      label: "Hobbies",
      required: false,
      options: [
        { value: "reading", label: "Reading" },
        { value: "traveling", label: "Traveling" },
        { value: "sports", label: "Sports" }
      ]
    },
    {
      id: "bio",
      type: "textarea",
      label: "Short Bio",
      required: false,
      placeholder: "Tell us about yourself..."
    },
    {
      id: "profilePicture",
      type: "file",
      label: "Upload Profile Picture",
      required: false
    }
  ],
  error: null
};

const formSchemaSlice = createSlice({
  name: 'formSchema',
  initialState,
  reducers: {
    updateFormSchema: (_state, action: PayloadAction<FormSchema>) => {
      return action.payload;
    },
    resetFormSchema: () => initialState,
    setSchemaError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { updateFormSchema, resetFormSchema, setSchemaError } = formSchemaSlice.actions;
export default formSchemaSlice.reducer;
