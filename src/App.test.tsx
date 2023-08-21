import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, {generateDeck} from './App';
import DrawnCards from './components/DrawnCards/DrawnCards';
import { Card, suits, values } from './utils/constant';

jest.mock('./components/DrawnCards/DrawnCards');

describe('MyComponent', () => {
  it('should draw cards when button is clicked', () => {
    const mockDrawCards = DrawnCards as jest.Mock;
    const originalConfirm = window.confirm;

    // Mock the window.confirm function
    window.confirm = jest.fn(() => true);

    const { getByText } = render(<App />);

    // Find and click the button that triggers drawCards
    const drawButton = getByText('Draw 5 Cards');
    fireEvent.click(drawButton);
    expect(mockDrawCards).toHaveBeenCalled();
    window.confirm = originalConfirm;
  });
 
});

describe('generateDeck', () => {
  it('should generate a deck with the correct number of cards', () => {
    const deck: Card[] = generateDeck();

    // Calculate the expected number of cards based on suits and values
    const expectedCardCount = suits.length * values.length;

    expect(deck).toHaveLength(expectedCardCount);
  });

  it('should generate cards with valid suits and values', () => {
    const deck: Card[] = generateDeck();

    for (const card of deck) {
      expect(suits).toContain(card.suit);
      expect(values).toContain(card.value);
    }
  });
});