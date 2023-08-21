import { render, fireEvent } from '@testing-library/react';
import Deck from '../Deck/Deck';

test('renders deck buttons', () => {
  const mockOnShuffle = jest.fn();
  const mockOnDraw = jest.fn();

  const { getByText } = render(<Deck onShuffle={mockOnShuffle} onDraw={mockOnDraw} />);

  const shuffleButton = getByText(/Shuffle Deck/);
  const drawButton = getByText(/Draw 5 Cards/);

  expect(shuffleButton).toBeInTheDocument();
  expect(drawButton).toBeInTheDocument();

  fireEvent.click(shuffleButton);
  fireEvent.click(drawButton);

  expect(mockOnShuffle).toHaveBeenCalledTimes(1);
  expect(mockOnDraw).toHaveBeenCalledTimes(1);
});