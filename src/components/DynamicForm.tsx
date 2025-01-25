/**
 * Project: Dynamic Form Generator
 * File: DynamicForm.tsx
 * Description: Component to render a dynamic form based on the provided schema.
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This code is designed for an interview task and demonstrates the ability to create
 *       a dynamic form generator using React, Redux, and TypeScript.
 */

import React, { useState } from 'react';
import { Form, Card, Button, message } from 'antd';
import { FormSchema } from '../types/FormSchema';
import FormFieldRenderer from './FormFieldRenderer';

interface DynamicFormProps {
    schema: FormSchema;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
    const [form] = Form.useForm();

    // Function to handle form submission
    const onFinish = (values: any) => {
        message.success('Form submitted successfully!');
        console.log('Submitted values:', values);
    };


    // Function to reset the form fields
    const onReset = () => {
        form.resetFields();
    };

    return (
        <Card
            title={schema.formTitle}
            extra={schema.formDescription}
            style={{ width: '100%', height: '100%', overflowY: 'auto' }}
        >
            <Form
                form={form} // Bind the form instance to the Form component
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                {schema.fields.map(field => (
                    <FormFieldRenderer
                        key={field.id}
                        field={field}
                        form={form}
                    />
                ))}

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button
                        htmlType="button"
                        onClick={onReset}
                        style={{ marginLeft: '10px' }}
                    >
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default DynamicForm;
