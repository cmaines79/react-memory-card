// imporing stylesheet
import './Header.css';

// importing images
import logo from '../../img/animaniacs_logo.png';

const Header = () => {
    return (
        <header>
            <div className="header-wrapper container">
                <div className="logo">
                    <img id="logo" src={logo} alt="Animaniacs Logo" />
                </div>
                <div className="title">
                    <h1>Animaniacs Memory Game</h1>
                    <p>Pick as many characters as you can without repeating any of them</p>
                </div>
            </div>
        </header>
    )
}

export default Header
