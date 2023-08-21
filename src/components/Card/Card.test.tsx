import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card/Card';

test('renders card correctly', () => {
  const { getByText } = render(<Card suit="♥" value="A" />);
  const cardElementValue = getByText(/A/);
  const cardElementSuit = getByText(/♥/);
  expect(cardElementValue).toBeInTheDocument();
  expect(cardElementSuit).toBeInTheDocument();
});