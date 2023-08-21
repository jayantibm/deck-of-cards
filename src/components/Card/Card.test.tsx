import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card/Card';

test('renders card correctly', () => {
  const { getByText } = render(<Card suit="Hearts" value="Ace" />);
  const cardElement = getByText(/Ace of Hearts/);
  expect(cardElement).toBeInTheDocument();
});