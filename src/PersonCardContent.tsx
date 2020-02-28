import React from "react";
import { Person } from "./types";

type PersonCardContentProps = {
  person: Person;
};

const PersonCardContent: React.SFC<PersonCardContentProps> = ({ person }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    films,
    species,
    vehicles,
    starships
  } = person;
  return (
    <>
      <li>{`Name: ${name}`}</li>
      <li>{`Height: ${height}`}</li>
      <li>{`Mass: ${mass}`}</li>
      <li>{`Hair color: ${hair_color}`}</li>
      <li>{`Skin color: ${skin_color}`}</li>
      <li>{`Eye color: ${eye_color}`}</li>
      <li>{`Birth year: ${birth_year}`}</li>
      <li>{`Gender: ${gender}`}</li>
      <li>{`Number of films: ${films.length}`}</li>
      <li>{`Number of species: ${species.length}`}</li>
      <li>{`Number of vehicles: ${vehicles.length}`}</li>
      <li>{`Number of starships: ${starships.length}`}</li>
    </>
  );
};

export default PersonCardContent;
