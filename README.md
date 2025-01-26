# Dynamic Form Generator

![License](https://img.shields.io/badge/license-Unlicensed-blue.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Building for Production](#building-for-production)
- [Approach](#approach)
- [Assumptions](#assumptions)
- [Limitations](#limitations)
- [Technologies Used](#technologies-used)
- [Author](#author)

## Overview

Dynamic Form Generator is a versatile tool built with React, TypeScript, Redux, and Ant Design. It allows users to create and manage forms dynamically using JSON schemas. The application supports advanced features like conditional rendering of form fields based on user input, theme switching (light/dark/system), and form data submission with options to view and download the submitted data.

## Features

- **Dynamic Form Rendering**: Generate forms based on JSON schemas, supporting various field types including text, email, password, number, date, select, radio, checkbox, textarea, and file uploads.
- **Conditional Rendering**: Show or hide form fields based on the values of other fields using conditional rules.
- **Theme Switching**: Toggle between light, dark, and system themes. The selected theme persists across page reloads.
- **Form Validation**: Enforce validation rules such as required fields, minimum and maximum lengths, and pattern matching.
- **Data Submission**: Submit form data and view it in a modal with options to copy or download the data in JSON format.
- **Responsive Design**: Ensure usability across different device sizes.

## Demo

https://dynamic-form-generator-amber.vercel.app/

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/prasanth1308/dynamic-form-generator.git
   cd dynamic-form-generator
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

1. **Start the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

2. **Open in Browser**

   Navigate to [http://localhost:5173](http://localhost:5173) to view the application.

### Building for Production

To create an optimized production build, run:

Using npm:

```bash
npm run build
```

Or using Yarn:

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Approach

### 1. **Dynamic Form Rendering**

The application leverages a JSON schema to define the structure and behavior of the form. Each form field includes properties such as `id`, `type`, `label`, `required`, `placeholder`, and `conditionalRules`. The `DynamicForm` component iterates over these fields and uses the `FormFieldRenderer` component to render the appropriate input elements based on the field type.

### 2. **Conditional Rendering**

Conditional rendering is achieved by defining `conditionalRules` for each form field. These rules specify the source field, the condition type (e.g., equals, greater than), the expected value, and the desired visibility action (show/hide). The `evaluateCondition` utility function processes these rules to determine whether a field should be visible based on the current form values.

### 3. **State Management with Redux**

Redux is used to manage the global state of the form values and theme settings. The `formSlice` handles updates to form data, ensuring that form values are consistent across different components. The `themeSlice` manages the application's theme, allowing users to switch between light, dark, and system themes with persistence using local storage.

### 4. **Theme Switching**

The application integrates Ant Design's theming capabilities to support light, dark, and system themes. Users can select their preferred theme using the `ThemeSwitcher` component, and their choice is saved in local storage to persist across sessions.

### 5. **Form Submission and Data Handling**

Upon form submission, the entered data is displayed in a modal (`SubmissionModal`) in JSON format. Users have the option to copy the JSON data to the clipboard or download it as a `.json` file. The modal is responsive to theme changes, ensuring consistent styling in both light and dark modes.

## Assumptions

- **JSON Schema Structure**: It's assumed that the JSON schema provided to generate the form follows the defined `FormSchema` interface, including necessary properties for each form field.
- **Unique Field IDs**: Each form field has a unique `id` to ensure proper state management and conditional rendering.
- **Supported Field Types**: The application currently supports a predefined set of field types as specified in the `FormField` interface.
- **Browser Compatibility**: The application is designed to work on modern browsers that support ES6 and the Fetch API.

## Limitations

- **Nested Conditional Rules**: Currently, the application supports simple conditional rules. Complex nested conditions or multiple dependencies between fields may require additional logic.
- **File Upload Handling**: The file upload functionality uses the Ant Design `Upload` component with limited error handling. Advanced file validation and storage are not implemented.
- **Form Persistence**: While theme settings persist using local storage, form data does not persist after a page reload unless additional state management is implemented.
- **Validation Rules**: Basic validation rules are supported, but multiple validation scenarios may require further enhancements.
- **Accessibility**: While basic accessibility considerations are in place, comprehensive accessibility features may need to be added to meet all standards.

## No Tests Implemented

No tests have been implemented for this project.

## Future Enhancements

- **Multiple Validation Rules**: Implementing support for multiple and complex validation rules per form field.
- **Handling Duplicate IDs**: Ensuring that form fields have unique IDs and handling cases where duplicate IDs might occur.
- **Inline JSON Editor**: Adding an inline JSON editor with formatting, expand, and collapse capabilities for easier data manipulation.
- **Drag and Drop UI Builder**: Incorporating a drag and drop interface to facilitate form creation and customization.
- **More Customizable Forms**:
  - Renaming buttons.
  - Adding additional buttons with custom actions.
  - Form color customization and branding options.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Superset of JavaScript for static typing.
- **Redux**: State management library for handling global state.
- **Ant Design**: UI library for React, providing pre-designed components.
- **Vite**: Build tool for faster development experience.
- **ESLint**: Linting tool to maintain code quality.

## Author

**Prasanth Ravi**

- [GitHub](https://github.com/prasanth1308)
- [LinkedIn](https://www.linkedin.com/in/prasanth-ravi)

---

**License**

This project is unlicensed.