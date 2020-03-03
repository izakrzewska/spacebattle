import React from "react";
import { Starship } from "../types";

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
      <li id="name">{`Name: ${name}`}</li>
      <li id="model">{`Model: ${model}`}</li>
      <li id="manufacturer">{`Manufacturer: ${manufacturer}`}</li>
      <li id="cost_in_credits">{`Cost in credits: ${cost_in_credits}`}</li>
      <li id="length">{`Length: ${length}`}</li>
      <li id="max_atmosphering_speed">{`Max atmosphering speed: ${max_atmosphering_speed}`}</li>
      <li style={{ fontWeight: "bold" }} id="crew">{`Crew: ${crew}`}</li>
      <li id="passengers">{`Passengers: ${passengers}`}</li>
      <li id="cargo_capacity">{`Cargo capacity: ${cargo_capacity}`}</li>
      <li id="consumables">{`Consumables: ${consumables}`}</li>
      <li id="hyperdrive_rating">{`Hyperdrive rating: ${hyperdrive_rating}`}</li>
      <li id="MGLT">{`MGLT: ${MGLT}`}</li>
      <li id="starship_class">{`Starship class: ${starship_class}`}</li>
      <li id="pilots">{`Number of pilots: ${pilots.length}`}</li>
      <li id="films">{`Number of films: ${films.length}`}</li>
    </>
  );
};

export default StarshipCardContent;
