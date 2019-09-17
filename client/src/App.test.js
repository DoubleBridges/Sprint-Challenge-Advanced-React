import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

test("renders without crashing", () => {
  render(<App />)
})

test("contains player cards", () => {
  const { getByTestId } = render(<App />)

  getByTestId(/player-cards/i)
})
