import "./App.css";
import React, { useState, useEffect } from "react";
import { characters as charactersRaw } from "./data/characters";
import { Tooltip } from "react-tooltip";

function App() {
  const [characters, setCharacters] = useState(charactersRaw);

  return (
    <div className='App'>
      <nav>
        <input />
        <button>Search</button>
      </nav>
      <section className='main'>
        <div className='card'>
          <div className='image-container'>
            <img src='images/Rick Sanchez.jpeg' className='cardImage' alt='' />
          </div>
          <div className='card-body'>
            <h2>Rick Sanchez</h2>

            <h3>Superpowers</h3>
            <div className='power-container'>
              <span data-tooltip-id='genius-level-intellect'>🧠</span>
              <Tooltip
                id='genius-level-intellect'
                place='bottom'
                content='Genius-level intellect'
              />
              <span data-tooltip-id='interdimensional-travel'>🌀</span>
              <Tooltip
                id='interdimensional-travel'
                place='bottom'
                content='Interdimensional travel'
              />
              <span data-tooltip-id='time-manipulation'>⏰</span>
              <Tooltip
                id='time-manipulation'
                place='bottom'
                content='Time manipulation'
                s
              />
            </div>
            <h3>Weaknesses</h3>
            <div className='power-container'>
              <span data-tooltip-id='alchohol-dependency'>🍾</span>
              <Tooltip
                id='alchohol-dependency'
                place='bottom'
                content='Alchohol dependency'
              />
              <span data-tooltip-id='emotional-detachment'>❤️‍🩹</span>
              <Tooltip
                id='emotional-detachment'
                place='bottom'
                content='Emotional detachment'
              />
            </div>
          </div>
          <div className='button-container'>
            <button className='secondary-button'>Remove</button>
            <button className='icon-button'>❤️</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
