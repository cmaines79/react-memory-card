// importing modules
import { useState, useEffect } from 'react';

// importing components
import Header from './componenets/header/Header'
import Score from './componenets/score/Score';
import Game from './componenets/game/Game'
import Footer from './componenets/footer/Footer';

// importing characters
// source for images: https://tinytoons.fandom.com/wiki/Tiny_Toon_Adventures#Characters
import babs_bunny from './img/babs_bunny.jpg';
import buster_bunny from './img/buster_bunny.jpg';
import calamity_coyote from './img/calamity_coyote.jpg';
import dot from './img/dot.jpg';
import elmyra from './img/elmyra.jpg';
import furball from './img/furball.jpg';
import gogo_dodo from './img/gogo_dodo.jpg';
import lil_sneezer from './img/lil_sneezer.jpg';
import mindy from './img/mindy.jpg';
import montana_max from './img/montana_max.jpg';
import sweetie_bird from './img/sweetie_bird.jpg';
import wakko from './img/wakko.jpg';


// importing stylesheets
import './App.css';


function App() {
  const characters = [
    {
      name: 'Babs Bunny',
      image: babs_bunny,
    },
    {
      name: 'Buster Bunny',
      image: buster_bunny,
    },
    {
      name: 'Calamity Coyote',
      image: calamity_coyote,
    },
    {
      name: 'Dot',
      image: dot,
    },
    {
      name: 'Elmyra',
      image: elmyra,
    },
    {
      name: 'Furball',
      image: furball,
    },
    {
      name: 'Gogo Dodo',
      image: gogo_dodo,
    },
    {
      name: `L'il Sneezer`,
      image: lil_sneezer,
    },
    {
      name: 'Mindy',
      image: mindy,
    },
    {
      name: 'Montana Max',
      image: montana_max,
    },
    {
      name: 'Sweetie Bird',
      image: sweetie_bird,
    },
    {
      name: 'Wakko',
      image: wakko,
    },
]
  //states
  const [cards, setCards] = useState(characters);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // supporting functions
  const updateScore = (val) => {
    (val === 1) ? setScore(score + 1) : setScore(0);
  }

  const updateHighScore = (val) => {
    setHighScore(val);
  }

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const shuffleCards = () => {
    setCards(shuffle(cards));
  }

  return (
    <div className="app">
      <Header />
      <Score score={score} highScore={highScore}/>
      <Game cards={cards} shuffleCards={shuffleCards} updateScore={updateScore} updateHighScore={updateHighScore} score={score} highScore={highScore} />
      <Footer />
    </div>
  );
}

export default App;
