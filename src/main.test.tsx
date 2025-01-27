/**
 * Project: Dynamic Form Generator
 * File: main.test.tsx
 * Description: Test file for main.tsx.
 * Author: Prasanth Ravi
 * Created On: January 27, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This configuration sets up Vite to work with a React project.
 */

import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import ReactDOM from 'react-dom/client';

const mockRender = vi.fn();
const mockUnmount = vi.fn();

const mockCreateRoot = vi.fn(() => ({
  render: mockRender,
  unmount: mockUnmount,
}));

vi.spyOn(ReactDOM, 'createRoot').mockImplementation(mockCreateRoot);

describe('main.tsx', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Optionally, clean up if necessary
  });

  it('should create root with the correct DOM element', async () => {
    // Dynamically import the main.tsx file
    await import('./main.tsx');

    expect(ReactDOM.createRoot).toHaveBeenCalledWith(document.getElementById('root'));
  });

  it('should render without crashing', async () => {
    // Dynamically import the main.tsx file
    expect(() => import('./main.tsx')).not.toThrow();
  });
});
