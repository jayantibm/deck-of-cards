import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DrawnCards from '../DrawnCards/DrawnCards';

test('renders drawn cards and sort button', () => {
  const mockDrawnCards = [
    { suit: '♥', value: 'A' },
    { suit: '♠', value: 'K' },
  ];
  const mockOnSort = jest.fn();

  const { getByText } = render(<DrawnCards drawnCards={mockDrawnCards} onSort={mockOnSort} />);

  const cardValue1 = getByText(/A/);
  const cardSuit1 = getByText(/♥/);
  const cardValue2 = getByText(/K/);
  const cardSuit2 = getByText(/♠/);
  const sortButton = getByText(/Sort Drawn Cards/);

  expect(cardValue1).toBeInTheDocument();
  expect(cardValue2).toBeInTheDocument();
  expect(cardSuit1).toBeInTheDocument();
  expect(cardSuit1).toBeInTheDocument();
  fireEvent.click(sortButton);
  expect(mockOnSort).toHaveBeenCalledTimes(1);
});