export const suits = ['♣', '♠', '♥', '♦'];
export const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export interface Card {
    suit: string;
    value: string;
  }

export interface Deck {
    onShuffle: () => void;
    onDraw: (numCards: number) => void;
}

export const maxCardNumber = 52;
export const minCardNumber = 1;