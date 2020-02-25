import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [peopleCount, setPeopleCount] = useState<number>(0);
  const [starshipsCount, setStarshipsCount] = useState<number>(0);
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  const fetchPeople = () => {
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(res => setPeopleCount(res.count))
      .catch(() => setHasErrors(true));
  };

  const fetchStarships = () => {
    fetch("https://swapi.co/api/starships")
      .then(res => res.json())
      .then(res => setStarshipsCount(res.count))
      .catch(() => setHasErrors(true));
  };

  useEffect(() => {
    async function getPeopleData() {
      await fetchPeople();
    }

    async function getStarshipsData() {
      await fetchStarships();
    }

    getPeopleData();
    getStarshipsData();
  }, []);

  !!peopleCount && console.log(peopleCount);
  !!starshipsCount && console.log(starshipsCount);

  return (
    <div className="App">
      {hasErrors ? <div>cos poszlo nie tak</div> : <div>tu bedzie apka</div>}
    </div>
  );
}

export default App;
