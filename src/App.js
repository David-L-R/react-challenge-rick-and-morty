import "./App.css";
import React, { useState } from "react";
import { characters as charactersRaw } from "./data/characters";
import { Card } from "./components";

function App() {
  const [characters, setCharacters] = useState(charactersRaw);

  return (
    <div className='App'>
      <nav>
        <input />
        <button>Search</button>
      </nav>
      <section className='main'>
        {characters.map((character) => (
          <Card character={character} />
        ))}
      </section>
    </div>
  );
}

export default App;
