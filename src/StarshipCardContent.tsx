import React from "react";
import { Starship } from "./types";

type StarshipCardContentProps = {
  starship: Starship;
};

const StarshipCardContent: React.SFC<StarshipCardContentProps> = ({
  starship
}) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
    pilots,
    films
  } = starship;
  return (
    <>
      <li>{`Name: ${name}`}</li>
      <li>{`Model: ${model}`}</li>
      <li>{`Manufacturer: ${manufacturer}`}</li>
      <li>{`Cost in credits: ${cost_in_credits}`}</li>
      <li>{`Length: ${length}`}</li>
      <li>{`Max atmosphere speed: ${max_atmosphering_speed}`}</li>
      <li>{`Crew: ${crew}`}</li>
      <li>{`Passengers: ${passengers}`}</li>
      <li>{`Cargo capacity: ${cargo_capacity}`}</li>
      <li>{`Consumables: ${consumables}`}</li>
      <li>{`Hyperdrive rating: ${hyperdrive_rating}`}</li>
      <li>{`MGLT: ${MGLT}`}</li>
      <li>{`Starship class: ${starship_class}`}</li>
      <li>{`Number of pilots: ${pilots.length}`}</li>
      <li>{`Number of films: ${films.length}`}</li>
    </>
  );
};

export default StarshipCardContent;
