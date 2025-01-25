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
import { Input, Card, Button, message, Space } from 'antd';
import { FormSchema } from '../types/FormSchema';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateFormSchema } from '../store/formSchemaSlice';
import { FileAddOutlined, DownloadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const JSONSchemaEditor: React.FC = () => {
  // State to hold the JSON input as a string
  const dispatch = useDispatch();
  const currentSchema = useSelector((state: RootState) => state.formSchema);
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(currentSchema, null, 2)
  ); // Initial JSON input with pretty print

  // Function to handle changes in the JSON input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
    try {
      const parsedSchema: FormSchema = JSON.parse(value);
      dispatch(updateFormSchema(parsedSchema));
    } catch (error) {
      console.error("Invalid JSON schema", error);
    }
  };

  // Function to handle exporting the JSON schema
  const handleExport = () => {
    const blob = new Blob([jsonInput], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form-schema.json';
    link.click();
    message.success('Schema exported successfully');
  };

  // Function to handle importing a JSON file
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedSchema = JSON.parse(event.target?.result as string);
          dispatch(updateFormSchema(importedSchema));
          setJsonInput(JSON.stringify(importedSchema, null, 2));
          message.success('Schema imported successfully');
        } catch (error) {
          console.error('Invalid JSON file', error);
          message.error('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Card
      title="JSON Schema Editor"
      extra={
        <Space>
          <Button
            icon={<DownloadOutlined />}
            onClick={handleExport}
          >
            Export
          </Button>
          <Button
            icon={<FileAddOutlined />}
            onClick={() => document.getElementById('file-import')?.click()}
          >
            Import
          </Button>
          <input
            type="file"
            id="file-import"
            accept=".json"
            style={{ display: 'none' }}
            onChange={handleImport}
          />
        </Space>
      }
      style={{ height: '100%', overflowY: 'auto' }}
    >
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
