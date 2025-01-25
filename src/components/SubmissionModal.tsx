/**
 * Project: Dynamic Form Generator
 * File: SubmissionModal.tsx
 * Description: Modal component to display and download submitted form data.
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This code is designed for an interview task and demonstrates the ability to create
 *       a dynamic form generator using React, Redux, and TypeScript.
 */

import React from 'react';
import { Modal, Tabs, Button } from 'antd';

const { TabPane } = Tabs;

interface SubmissionModalProps {
  visible: boolean;
  formData: any;
  onClose: () => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ 
  visible, 
  formData, 
  onClose 
}) => {
  const handleDownload = () => {
    const jsonString = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form_submission.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderJsonPreview = () => (
    <pre style={{ 
      backgroundColor: '#f4f4f4', 
      padding: '10px', 
      borderRadius: '4px', 
      maxHeight: '400px', 
      overflowY: 'auto' 
    }}>
      {JSON.stringify(formData, null, 2)}
    </pre>
  );

  const renderFormattedPreview = () => (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '10px' }}>
          <strong>{key}: </strong>
          {typeof value === 'object' ? JSON.stringify(value) : String(value)}
        </div>
      ))}
    </div>
  );

  return (
    <Modal
      title="Form Submission Details"
      visible={visible}
      onCancel={onClose}
      width={600}
      footer={[
        <Button key="download" type="primary" onClick={handleDownload}>
          Download JSON
        </Button>,
        <Button key="close" onClick={onClose}>
          Close
        </Button>
      ]}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="JSON Preview" key="1">
          {renderJsonPreview()}
        </TabPane>
        <TabPane tab="Formatted Preview" key="2">
          {renderFormattedPreview()}
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default SubmissionModal;
