import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DrawnCards from '../DrawnCards/DrawnCards';

test('renders drawn cards and sort button', () => {
  const mockDrawnCards = [
    { suit: 'Hearts', value: 'Ace' },
    { suit: 'Spades', value: 'King' },
  ];
  const mockOnSort = jest.fn();

  const { getByText } = render(<DrawnCards drawnCards={mockDrawnCards} onSort={mockOnSort} />);

  const card1 = getByText(/Ace of Hearts/);
  const card2 = getByText(/King of Spades/);
  const sortButton = getByText(/Sort Drawn Cards/);

  expect(card1).toBeInTheDocument();
  expect(card2).toBeInTheDocument();
  fireEvent.click(sortButton);
  expect(mockOnSort).toHaveBeenCalledTimes(1);
});