// importing sytle sheets
import './Game.css'

const Game = ( { cards }) => {
    const testClick = () => {
        console.log("clicked");
    }

    return (
        <div className="container" id="grid-container">
            {cards.map((card) => (
                <div key={card.name} className="card" onClick={testClick}>
                    <img src={card.image} alt={card.name} />
                    <p>{card.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Game
