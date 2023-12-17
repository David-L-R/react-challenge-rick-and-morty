import "./App.css";
import React, { useEffect, useState } from "react";
import { characters as charactersRaw } from "./data/characters";
import { Card } from "./components";

function App() {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(
    () => {
      setTimeout(() => {
        setFilteredCharacters(charactersRaw);
      }, 2000);
    },
    [
      /* dependencies */
    ]
  );
  // When dependencies change, useEffect will run again
  // When empty, useEffect will run only once

  const handleInput = (event) => {
    setSearch(event.target.value); // async
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (search === "") return setFilteredCharacters(charactersRaw);

    setSearch("");

    const filteredCharacters = charactersRaw.filter((character) => {
      return character.full_name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredCharacters(filteredCharacters);
  };

  return (
    <div className='App'>
      <nav>
        <form onSubmit={handleSearch}>
          <input onChange={handleInput} value={search} />
          <button type='submit'>Search</button>
        </form>
      </nav>
      <section className='main'>
        {filteredCharacters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          filteredCharacters.map((character) => <Card character={character} />)
        )}
      </section>
    </div>
  );
}

export default App;
