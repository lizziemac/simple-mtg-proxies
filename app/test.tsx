/**
 * @jest-environment jsdom
 */
import { App } from './';
import { render, screen, cleanup } from '@testing-library/react';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: query === '(prefers-color-scheme: dark)' ? true : false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('App component', () => {

  it('should load lazily', async () => {
    render(<App callback={(): void => {}}/>); // eslint-disable-line  @typescript-eslint/no-empty-function
    const message = 'Welcome!';

    const lazyLoader = await screen.findByText(/please wait/i);
    expect(lazyLoader).toBeInTheDocument();

    expect(await screen.findByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});