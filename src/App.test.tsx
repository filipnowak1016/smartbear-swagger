import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When rendering', () => {
  it('should render headline', () => {
    // when
    render(<App />);

    // then
    expect(screen.getByText(/SmartBear Coding Challenge/i)).toBeInTheDocument();
  });
});
