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
      <li id="name">{`Name: ${name}`}</li>
      <li id="height">{`Height: ${height}`}</li>
      <li id="mass">{`Mass: ${mass}`}</li>
      <li id="hair_color">{`Hair color: ${hair_color}`}</li>
      <li id="skin_color">{`Skin color: ${skin_color}`}</li>
      <li id="eye_color">{`Eye color: ${eye_color}`}</li>
      <li id="birth_year">{`Birth year: ${birth_year}`}</li>
      <li id="gender">{`Gender: ${gender}`}</li>
      <li id="films">{`Number of films: ${films.length}`}</li>
      <li id="species">{`Number of species: ${species.length}`}</li>
      <li id="vehicles">{`Number of vehicles: ${vehicles.length}`}</li>
      <li id="starships">{`Number of starships: ${starships.length}`}</li>
    </>
  );
};

export default PersonCardContent;
