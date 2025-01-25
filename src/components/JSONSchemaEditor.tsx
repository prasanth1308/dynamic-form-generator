/**
 * Project: Dynamic Form Generator
 * File: JSONSchemaEditor.tsx
 * Description: Component to edit and update the JSON schema for the dynamic form.
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This code is designed for an interview task and demonstrates the ability to create
 *       a dynamic form generator using React, Redux, and TypeScript.
 */

import React, { useState } from 'react';
import { Input, Card } from 'antd';
import { FormSchema } from '../types/FormSchema';

const { TextArea } = Input;

interface JSONSchemaEditorProps {
  onSchemaChange: (schema: FormSchema) => void;
}

const JSONSchemaEditor: React.FC<JSONSchemaEditorProps> = ({ onSchemaChange }) => {
  // State to hold the JSON input as a string
  const [jsonInput, setJsonInput] = useState<string>(JSON.stringify({
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
    ]
  }, null, 2)); // Initial JSON input with pretty print

  // Function to handle changes in the JSON input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsedSchema = JSON.parse(e.target.value);
      onSchemaChange(parsedSchema);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  return (
    <Card title="JSON Schema Editor">
      <TextArea
        rows={20}
        value={jsonInput}
        onChange={handleInputChange}
        placeholder="Edit JSON schema here"
      />
    </Card>
  );
};

export default JSONSchemaEditor;
