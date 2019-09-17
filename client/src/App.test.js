import React from 'react';
import { render, waitForElement } from '@testing-library/react'
import App from './App';

test("renders without crashing", () => {
  render(<App />)
})

test("contains player cards", () => {
  const { getByTestId } = render(<App />)
  
  getByTestId(/player-cards/i)
})

test("App contains Megan Rapinoe", async () => {
  const wrapper = render(<App />);
  const player = await waitForElement(() =>
    wrapper.queryByText(/megan rapinoe/i)
  );
  expect(player).toBeTruthy();
});
