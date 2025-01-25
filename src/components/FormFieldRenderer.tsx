/**
 * Project: Dynamic Form Generator
 * File: FormFieldRenderer.tsx
 * Description: Component to render individual form fields based on the provided schema.
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This code is designed for an interview task and demonstrates the ability to create
 *       a dynamic form generator using React, Redux, and TypeScript.
 */

import React from 'react';
import {
  Input,
  Select,
  Radio,
  Checkbox,
  DatePicker,
  Upload,
  Form,
  Button
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FormField } from '../types/FormSchema';

const { TextArea } = Input;
const { Option } = Select;

// Props interface for the FormFieldRenderer component
interface FormFieldRendererProps {
  field: FormField;
}

// Component to render individual form fields based on the provided schema
const FormFieldRenderer: React.FC<FormFieldRendererProps> = ({ field }) => {
  const rules = [
    {
      required: field.required,
      message: `${field.label} is required`,
    },
    ...(field.validation ? [
      {
        min: field.validation.minLength,
        max: field.validation.maxLength,
        pattern: field.validation.pattern ? new RegExp(field.validation.pattern) : undefined,
        message: field.validation.message || `Invalid ${field.label}`,
      }
    ] : [])
  ];

  // Render different form fields based on the field type
  const renderField = () => {
    switch (field.type) {
      case 'text':
        return <Input placeholder={field.placeholder} />;
      case 'email':
        return <Input type="email" placeholder={field.placeholder} />;
      case 'password':
        return <Input.Password placeholder={field.placeholder} />;
      case 'number':
        return <Input type="number" placeholder={field.placeholder} />;
      case 'date':
        return <DatePicker style={{ width: '100%' }} />;
      case 'select':
        return (
          <Select placeholder={field.placeholder}>
            {field.options?.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        );
      case 'radio':
        return (
          <Radio.Group>
            {field.options?.map(option => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Radio.Group>
        );
      case 'checkbox':
        return (
          <Checkbox.Group>
            {field.options?.map(option => (
              <Checkbox key={option.value} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case 'textarea':
        return <TextArea placeholder={field.placeholder} />;
      case 'file':
        return (
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        );
      default:
        return <Input />;
    }
  };

  return (
    <Form.Item
      name={field.id}
      label={field.label}
      rules={rules}
    >
      {renderField()}
    </Form.Item>
  );
};

export default FormFieldRenderer;
