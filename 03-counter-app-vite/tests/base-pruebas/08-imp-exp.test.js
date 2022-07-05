import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-test", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroeById debe de retornar undefine si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    //La mejor manera, puede que con el tiempo nuestro arreglo cambie
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
    //La mejor manera, puede que con el tiempo nuestro arreglo cambie
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
