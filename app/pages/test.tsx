/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Pages from './';

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

describe('Pages component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  const history = createMemoryHistory();

  it('displays loader when lazy', async () => {
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return; } } />
      </Router>,
    );

    const lazyElement = await screen.findByText(/please wait/i);
    expect(lazyElement).toBeInTheDocument();
  });

  it('displays "Welcome!" on Home page lazily', async () => {
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return; } } />
      </Router>,
    );

    const fallbackLoader = await screen.findByText(/please wait/i);
    expect(fallbackLoader).toBeInTheDocument();
    jest.runAllTimers();

    const lazyElement = await screen.findByText('Welcome!');
    expect(lazyElement).toBeInTheDocument();
  });

  it('displays "Oops! Page not found!" when provided an invalid path', async () => {
    history.push('/fake');
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return; } } />
      </Router>,
    );

    const fallbackLoader = await screen.findByText(/please wait/i);
    expect(fallbackLoader).toBeInTheDocument();
    jest.runAllTimers();

    const lazyElement = await screen.findByText('Oops! Page not found!');
    expect(lazyElement).toBeInTheDocument();
  });

  afterEach(cleanup);
});