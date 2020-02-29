export type ContestantType = "people" | "starships";

export type ResultType = "playerOne" | "playerTwo" | "tie";

export type Contestant = Starship | Person;
export type BattleContestants = Contestant[];

export interface BattleData {
  battleContestants: BattleContestants;
  type: ContestantType;
}

export enum ContestantValues {
  PEOPLE = "people",
  STARSHIPS = "starships"
}

export enum WinnerValues {
  PLAYER_ONE = "playerOne",
  PLAYER_TWO = "playerTwo",
  TIE = "tie"
}

export interface Score {
  playerOne: number;
  playerTwo: number;
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string[];
  edited: string;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
