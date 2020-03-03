import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./App.css";
import BattleContainer from "./BattleContainer/BattleContainer";
import { Person, Starship } from "./types";
function App() {
  const [peopleData, setPeopleData] = useState<Person[]>([]);
  const [starshipsData, setStarshipsData] = useState<Starship[]>([]);

  async function getData(
    url: string,
    setDataFunction:
      | Dispatch<SetStateAction<Person[]>>
      | Dispatch<SetStateAction<Starship[]>>
  ) {
    let results: Person[] & Starship[] = [];
    let urlToFetch: string = url;

    do {
      const res = await fetch(urlToFetch);
      const data = await res.json();
      urlToFetch = data.next;
      results = [...results, ...data.results];
      setDataFunction(results);
    } while (urlToFetch);
  }

  useEffect(() => {
    getData("https://swapi.co/api/people/", setPeopleData);
    getData("https://swapi.co/api/starships/", setStarshipsData);
  }, []);

  return (
    <div className="App">
      {peopleData.length >= 10 && starshipsData.length >= 10 ? (
        <BattleContainer
          peopleData={peopleData}
          starshipsData={starshipsData}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
