// importing modules
import { useState, useEffect } from 'react';

// importing sytle sheets
import './Game.css'

const Game = ( { cards, shuffleCards, updateScore, updateHighScore, score, highScore }) => {

    // states
    const [clickedItems, setClickedItems] = useState([]);

    // supporting functions
    const gameOver = () => {
        // display a 'play again message'
        document.getElementById('play-again').innerText = `Congrats you got ${score} right in a row.  Play again?`;

        // set the score to zero
        updateScore(0);

        // reset clickedItems
        setClickedItems([]);
    }

    const clicked = (target) => {
        document.getElementById('play-again').innerText = '';

        if(clickedItems.indexOf(target) !== -1) {
            // check if score is >= high score
            if (score > highScore) {
                updateHighScore(score);
            }

            // call gameOver
            gameOver();

        } else {
            // update clickedItems Array
            setClickedItems([...clickedItems, target]);

            // update the score component
            updateScore(1);
        }
    }

    useEffect(() => {
        shuffleCards();
    })

    return (
        <div className="container" id="grid-container">
            {cards.map((card) => (
                <div key={card.name} id={card.name} className="card" onClick={(e) => clicked(e.target.id)}>
                    <img src={card.image} id={card.name} alt={card.name} onClick={(e) => clicked(e.target.id)}/>
                    <p id={card.name} onClick={(e) => clicked(e.target.id)}>{card.name} </p>
                </div>
            ))}
        </div>
    )
}

export default Game
