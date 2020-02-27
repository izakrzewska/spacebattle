import React, { useEffect, useState } from "react";
import BattleContainer from "./BattleContainer";
import "./App.css";

function App() {
  const [peopleData, setPeopleData] = useState<any>();
  const [starshipsData, setStarshipsData] = useState<any>();

  async function getStarshipsData() {
    let results: any = [];
    let url = "https://swapi.co/api/starships/";

    do {
      const res = await fetch(url);
      const data = await res.json();
      url = data.next;
      results = [...results, ...data.results];
      setStarshipsData(results);
    } while (url);

    return results;
  }

  async function getPeopleData() {
    let results: any = [];
    let url = "https://swapi.co/api/people/";

    do {
      const res = await fetch(url);
      const data = await res.json();
      url = data.next;
      results = [...results, ...data.results];
      setPeopleData(results);
    } while (url);

    return results;
  }

  useEffect(() => {
    getPeopleData();
    getStarshipsData();
  }, []);

  return (
    <div className="App">
      {peopleData && starshipsData && (
        <BattleContainer
          peopleData={peopleData}
          starshipsData={starshipsData}
        />
      )}
    </div>
  );
}

export default App;
