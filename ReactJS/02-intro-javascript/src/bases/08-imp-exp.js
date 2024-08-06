import heroes, { ownes } from "../data/heroes";

// console.log(ownes);

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(4));

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner("DC"));
