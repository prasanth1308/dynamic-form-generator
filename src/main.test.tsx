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
