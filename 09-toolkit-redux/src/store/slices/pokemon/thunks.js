import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlide"

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemon() );

        // TODO: Realizar peticion HTTP
        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        dispatch( setPokemons({ pokemon: resp.data.results, page: page + 1 }) );
    }
}