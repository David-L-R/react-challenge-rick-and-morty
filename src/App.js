import "./App.css";
import React, { useEffect, useState } from "react";
// import { characters as charactersRaw } from "./data/characters";
import { Card } from "./components";

function App() {
  const [characters, setCharacters] = useState([]); // consistent state
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const [view, setView] = useState("all");

  // const searchEl = useRef(null);

  const changeView = (event) => {
    setView(event.target.value);
  };

  const addToFavorites = (name) => {
    console.log("add to fav: ", name);
    setFavorites([...favorites, name]);
  };

  const removeFromFavorites = (name) => {
    const filteredFavorites = favorites.filter((favorite) => favorite !== name);

    setFavorites(filteredFavorites);
  };

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  const handleInput = (event) => {
    setSearch(event.target.value); // async
  };

  const remove = (name) => {
    const filteredCharacters = characters.filter(
      (character) => character.full_name !== name
    );

    setCharacters(filteredCharacters);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (search === "") return setFilteredCharacters(characters);

    setSearch("");

    const filteredCharacters = characters.filter((character) => {
      const { full_name, super_powers, weaknesses } = character;

      const isInString = (power) =>
        power.name.toLowerCase().includes(search.toLowerCase()); // O(n)

      // const strings = [
      //   full_name,
      //   ...super_powers.map((object) => Object.values(object)).flat(), // O(2n) => O(n)
      //   ...weaknesses.map((object) => Object.values(object)).flat(), // O(2n) => O(n)
      // ];

      // // strings => O(4n) => O(n)

      // console.log(strings);

      // return strings.some((string) =>
      //   string.toLowerCase().includes(search.toLowerCase())
      // ); // some === O(n) // includes === O(n) // O(n^2)

      // // O(n^2) + O(4n) => O(n^2)

      return (
        full_name.toLowerCase().includes(search.toLowerCase()) || // O(n)
        super_powers.some(isInString) || // O(n^2)
        weaknesses.some(isInString) // O(n^2)
      );

      // O(n) + O(n^2) + O(n^2) => O(n) + O(n^2) => O(n^2)
    });
    setFilteredCharacters(filteredCharacters);
  };

  const showView = () => {
    const charactersToShow = filteredCharacters
      .filter(
        (character) =>
          view !== "favorites" ||
          favorites.some((favorite) => favorite === character.full_name)
      )
      .map((character) => (
        <Card
          character={character}
          remove={remove}
          removeFav={removeFromFavorites}
          addFav={addToFavorites}
          favorite={favorites.some(
            (favorite) => favorite === character.full_name
          )}
        />
      ));
    return charactersToShow.length === 0 ? (
      <p>No Favorites</p>
    ) : (
      charactersToShow
    );
  };

  useEffect(() => {
    const fetchChar = async () => {
      const response = await fetch(
        "https://mocki.io/v1/7177a5d4-b722-42c6-b1d2-814a4a2556f1"
      );

      const data = await response.json();

      console.log(data);

      setCharacters(data.characters);
    };

    fetchChar();
  }, []);

  // useEffect(() => {
  //   searchEl.addEventListener("click", () => {
  //     searchEl.current.classList.add("active");
  //   });

  //   return () => {
  //     searchEl.removeEventListener("click", () => {
  //       searchEl.current.classList.add("active");
  //     });
  //   };
  // }, []);

  return (
    <div className='App'>
      <nav>
        <div></div>
        <div className='search' /* ref={searchEl} */>
          <select>
            <option>Select...</option>
            <option>Name</option>
            <option>Superpowers</option>
            <option>Weaknesses</option>
          </select>
          <form onSubmit={handleSearch}>
            <input onChange={handleInput} value={search} />
            <button type='submit'>Search</button>
          </form>
        </div>

        <select onChange={changeView}>
          <option value='all'>🙌 All</option>
          <option value='favorites'>❤️ Favorite</option>
        </select>
      </nav>
      <section className='main'>
        {filteredCharacters.length === 0 ? <p>Loading...</p> : showView()}
      </section>
    </div>
  );
}

export default App;
