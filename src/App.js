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

  return (
    <div className="app">
      <Header />
      <Score />
      <Game cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
