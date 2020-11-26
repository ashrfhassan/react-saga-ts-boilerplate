import {IUpdateIsLoadingPokemonAction, PokemonActions} from './types'
import {LOAD_POKEMON, UPDATE_FAVOURITE_POKEMON, UPDATE_IS_LOADING_POKEMON} from "../../sagas/pokemon/types";
import {IPokemon} from "../../dtos/IPokemon";

interface IPokemonState {
    pokemon: IPokemon[],
    loadingPokemon: IUpdateIsLoadingPokemonAction['payload'],
}

const PokemonState: IPokemonState = {
    pokemon: [],
    loadingPokemon: {
        isLoadingPokemon: false,
        errorMessage: undefined
    }
};

const pokemonReducer = (state = PokemonState, action: PokemonActions): IPokemonState => {
    switch (action.type) {
        case LOAD_POKEMON:
            return {
                ...state,
                pokemon: action.payload.pokemon,
            };
        case UPDATE_IS_LOADING_POKEMON:
            return {
                ...state,
                loadingPokemon: action.payload,
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
