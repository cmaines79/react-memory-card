// importing stylesheet
import './Score.css'

const Score = ( { score, highScore }) => {
    return (
        <div className="scoring">
            <div className="score">
            <p>Score: </p>
            <p>{score}</p>
            </div>
            <div className="high-score">
            <p>High Score: </p>
            <p>{highScore}</p>
            </div>
            <div className="play-agin">
                <p id="play-again"></p>
            </div>
            
        </div>
        
    )
}

export default Score
