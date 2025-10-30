/**
 * @jest-environment jsdom
 */
import { render, cleanup, fireEvent } from '@testing-library/react';
import { LocalStorageMock } from 'app/utils/testing/mockLocalStorage';

import ToggleTheme from './';

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

describe('ThemeToggle component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', { value: LocalStorageMock });
  });

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('fires the handleToggle prop when clicked', () => {
    const mockHandleToggle = jest.fn();
    const wrapper = render(
      <ToggleTheme handleToggle={mockHandleToggle} />
    );

    const toggleBtn = wrapper.getByLabelText('Toggle theme');
    fireEvent.click(toggleBtn);
    expect(mockHandleToggle).toHaveBeenCalledTimes(1);
  });

  it('shows the moon icon when in light mode', () => {
    const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
    const mockHandleToggle = jest.fn();
    localStorage.setItem('theme', 'light');
    const wrapper = render(
      <ToggleTheme handleToggle={mockHandleToggle} />
    );

    expect(getItemSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.getByLabelText('Moon icon')).toBeInTheDocument();
  });

  it('shows to the sun icon when theme is dark mode', () => {
    const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
    const mockHandleToggle = jest.fn();
    window.localStorage.setItem('theme', 'dark');

    const wrapper = render(
      <ToggleTheme handleToggle={mockHandleToggle} />
    );
    expect(getItemSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.getByLabelText('Sun icon')).toBeInTheDocument();
  });

  afterEach(() => jest.clearAllMocks());
  afterAll(cleanup);
});
