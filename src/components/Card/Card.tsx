import React from 'react';
import { Card as CardProps} from '../../utils/constant';
 
const Card: React.FC<CardProps> = ({ suit, value }) => (
  <div className="card-container">
    <div className="card-value">
      {value}
    </div>
    <div className="card-suit">
     {suit}
    </div>
  </div>
);

export default Card;