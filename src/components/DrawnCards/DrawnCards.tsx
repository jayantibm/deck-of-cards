import React from 'react';
import Card from '../Card/Card';
import { Card as CardArr } from '../../utils/constant';

interface DrawnCardsProps {
  drawnCards: CardArr[];
  onSort: () => void;
}

const DrawnCards: React.FC<DrawnCardsProps> = ({ drawnCards, onSort }) => (
  <div className="drawn-cards">
    <h2>Drawn Cards:</h2>
    <button onClick={onSort}>Sort Drawn Cards</button>
    <div className="card-list">
      {drawnCards.map((card, index) => (
        <Card key={index} suit={card.suit} value={card.value} />
      ))}
    </div>
  </div>
);

export default DrawnCards;