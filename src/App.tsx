/**
 * Project: Dynamic Form Generator
 * File: App.tsx
 * Description: Main application component that includes the layout and dynamic form.
 * Author: Prasanth Ravi
 * Created On: January 24, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This file sets up the main layout and integrates the JSON schema editor and dynamic form components.
 */

import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import JSONSchemaEditor from './components/JSONSchemaEditor';
import DynamicForm from './components/DynamicForm';
import { FormSchema } from './types/FormSchema';
import './index.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {

  const [formSchema, setFormSchema] = useState<FormSchema>({
    "formTitle": "User Registration Form",
    "formDescription": "Please fill out the form to register.",
    "fields": [
      {
        "id": "username",
        "type": "text",
        "label": "Username",
        "required": true,
        "placeholder": "Enter your username",
        "validation": {
          "minLength": 3,
          "maxLength": 20
        }
      },
      {
        "id": "email",
        "label": "Email Address",
        "type": "email",
        "required": true,
        "placeholder": "Enter your email",
        "validation": {
          "pattern": "^[\\w\\s@]+@[\\w\\s@]+\\.[\\w\\s@]+$",
          "message": "Please enter a valid email address"
        }
      },
      {
        "id": "password",
        "type": "password",
        "label": "Password",
        "required": true,
        "placeholder": "Enter a secure password",
        "validation": {
          "minLength": 8,
          "message": "Password must be at least 8 characters long"
        }
      },
      {
        "id": "dob",
        "type": "date",
        "label": "Date of Birth",
        "required": false
      },
      {
        "id": "gender",
        "type": "radio",
        "label": "Gender",
        "required": true,
        "options": [
          { "value": "male", "label": "Male" },
          { "value": "female", "label": "Female" },
          { "value": "other", "label": "Other" }
        ]
      },
      {
        "id": "hobbies",
        "type": "checkbox",
        "label": "Hobbies",
        "required": false,
        "options": [
          { "value": "reading", "label": "Reading" },
          { "value": "traveling", "label": "Traveling" },
          { "value": "sports", "label": "Sports" }
        ]
      },
      {
        "id": "bio",
        "type": "textarea",
        "label": "Short Bio",
        "required": false,
        "placeholder": "Tell us about yourself..."
      },
      {
        "id": "profilePicture",
        "type": "file",
        "label": "Upload Profile Picture",
        "required": false
      }
    ]
  }
  );

  const handleSchemaChange = (schema: FormSchema) => {
    setFormSchema(schema);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: '#001529',
          color: 'white',
          height: 64,
        }}>
        Dynamic Form Generator
      </Header>
      <Content style={{ padding: "0 48px", minHeight: "calc(100vh - 134px)" }}>
        <Row gutter={16}>
          <Col span={8}>
            <JSONSchemaEditor onSchemaChange={handleSchemaChange} />
          </Col>
          <Col span={16}>
            <DynamicForm schema={formSchema} />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center", height: 64 }}>
        Dynamic Form Generator ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
