import {PokemonActions} from './types'
import {LOAD_POKEMON, UPDATE_FAVOURITE_POKEMON} from "../../sagas/pokemon/types";
import {IPokemon} from "../../dtos/IPokemon";

interface IPokemonState {
    pokemon: IPokemon[],
    isLoadingPokemon: boolean,
}

const PokemonState: IPokemonState = {
    pokemon: [],
    isLoadingPokemon: false
};

const pokemonReducer = (state = PokemonState, action: PokemonActions): IPokemonState => {
    switch (action.type) {
        case LOAD_POKEMON:
            return {
                ...state,
                pokemon: action.payload.pokemon,
            };
        case UPDATE_FAVOURITE_POKEMON:
            return {
                ...state,
                pokemon: state.pokemon.map((pokemon: IPokemon) => {
                    if (action.payload.favouritePokemonId === undefined)
                        return {
                            ...pokemon,
                            isFav: false
                        }
                    if (pokemon.id === action.payload.favouritePokemonId) {
                        return {
                            ...pokemon,
                            isFav: !pokemon.isFav
                        }
                    }
                    return pokemon;
                }),
            };
        default:
            return state;
    }
};

export default pokemonReducer;
