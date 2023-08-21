import React, { useState } from 'react';
import './App.css';
import Deck from './components/Deck/Deck';
import DrawnCards from './components/DrawnCards/DrawnCards';
import { values, suits, Card } from './utils/constant';
 
const generateDeck = (): Card[] => {
  const deck: Card[] = [];
  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
};

const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};

const App: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>(generateDeck());
  const [drawnCards, setDrawnCards] = useState<Card[]>([]);

  const drawCards = (numCards: number) => {
    if (deck.length < numCards) {
      const confirmed = window.confirm('Not enough cards in the deck. Are you sure you want to start new game by refresh page?');
      if (confirmed) {
        window.location.reload();
      }
      return;
    }
    const drawn = deck.slice(0, numCards);
    const remainingDeck = deck.slice(numCards);
    setDeck(remainingDeck);
    setDrawnCards(drawn);
  };

  const sortDrawnCards = () => {
    const sorted = [...drawnCards].sort((a, b) => {
      const suitComparison = suits.indexOf(a.suit) - suits.indexOf(b.suit);
      if (suitComparison !== 0) {
        return suitComparison;
      }
      return values.indexOf(a.value) - values.indexOf(b.value);
    });
    setDrawnCards(sorted);
  };

  return (
    <div className="App">
      <Deck onShuffle={() => setDeck(shuffleDeck(deck))} onDraw={drawCards} />
      <DrawnCards drawnCards={drawnCards} onSort={sortDrawnCards} />
    </div>
  );
};

export default App;