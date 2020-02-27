import React from "react";
import { Contestant, ContestantType, Starship, Person } from "./types";

type CardProps = {
  contestant: Contestant;
  type: ContestantType;
};

const Card = ({ contestant, type }: CardProps) => {
  switch (type) {
    case "people": {
      const person: Person = contestant as Person;
      return (
        <div>
          <ul>
            <li>{`Name: ${person.name}`}</li>
            <li>{`Height: ${person.height}`}</li>
            <li>{`Mass: ${person.mass}`}</li>
            <li>{`Hair color: ${person.hair_color}`}</li>
            <li>{`Skin color: ${person.skin_color}`}</li>
            <li>{`Eye color: ${person.eye_color}`}</li>
            <li>{`Birth year: ${person.birth_year}`}</li>
            <li>{`Gender: ${person.gender}`}</li>
            <li>{`Number of films: ${person.films.length}`}</li>
            <li>{`Number of species: ${person.species.length}`}</li>
            <li>{`Number of vehicles: ${person.vehicles.length}`}</li>
            <li>{`Number of starships: ${person.starships.length}`}</li>
          </ul>
        </div>
      );
    }
    case "starships": {
      const starship: Starship = contestant as Starship;
      return (
        <div>
          <ul>
            <li>{`Name: ${starship.name}`}</li>
            <li>{`Model: ${starship.model}`}</li>
            <li>{`Manufacturer: ${starship.manufacturer}`}</li>
            <li>{`Cost in credits: ${starship.cost_in_credits}`}</li>
            <li>{`Length: ${starship.length}`}</li>
            <li>{`Max atmosphere speed: ${starship.max_atmosphering_speed}`}</li>
            <li>{`Crew: ${starship.crew}`}</li>
            <li>{`Passengers: ${starship.passengers}`}</li>
            <li>{`Cargo capacity: ${starship.cargo_capacity}`}</li>
            <li>{`Consumables: ${starship.consumables}`}</li>
            <li>{`Hyperdrive rating: ${starship.hyperdrive_rating}`}</li>
            <li>{`MGLT: ${starship.MGLT}`}</li>
            <li>{`Starship class: ${starship.starship_class}`}</li>
            <li>{`Number of pilots: ${starship.pilots.length}`}</li>
            <li>{`Number of films: ${starship.films.length}`}</li>
          </ul>
        </div>
      );
    }
  }
};

export default Card;
