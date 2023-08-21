import React, { useState } from 'react';
import { Deck as DeckProps, maxCardNumber, minCardNumber } from '../../utils/constant';

const Deck: React.FC<DeckProps> = ({ onShuffle, onDraw }) => {
    const [numberOfDrawCards, setNumberOfDrawCards] = useState<number>(5);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = parseFloat(event.target.value);
        if (!isNaN(numericValue)) {
            setNumberOfDrawCards(numericValue);
        }
    }
    return (
        <div className="deck">
            <div>
                <button onClick={onShuffle}>Shuffle Deck</button>
            </div>
            <div>
                <p>[Note : we can change the number of draw cards between 1 to 52]</p>
                <input type="number" min={minCardNumber} max={maxCardNumber} value={numberOfDrawCards} onChange={handleInputChange} />
                <button onClick={() => onDraw(numberOfDrawCards)} >Draw {numberOfDrawCards} Cards</button>
            </div>
            
        </div>
    )
}
export default Deck;