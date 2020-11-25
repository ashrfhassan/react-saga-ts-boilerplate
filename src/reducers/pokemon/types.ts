import {LOAD_POKEMON, UPDATE_IS_LOADING_POKEMON, UPDATE_FAVOURITE_POKEMON} from '../../sagas/pokemon/types';
import {IPokemon} from "../../dtos/IPokemon";

export interface ILoadPokemonAction {
    readonly type: typeof LOAD_POKEMON;
    payload: {
        pokemon: IPokemon[]
    }
}

export const loadPokemonProps = (payload: ILoadPokemonAction['payload']): ILoadPokemonAction => {
    return {
        type: LOAD_POKEMON,
        payload: payload
    }
};

export interface IUpdateIsLoadingPokemonAction {
    readonly type: typeof UPDATE_IS_LOADING_POKEMON;
    payload:{
        isLoadingPokemon: boolean
    }
}

export const updateIsLoadingPokemonProps = (payload: IUpdateIsLoadingPokemonAction['payload']): IUpdateIsLoadingPokemonAction => {
    return {
        type: UPDATE_IS_LOADING_POKEMON,
        payload: payload
    }
};

export interface IUpdateFavPokemonPokemonAction {
    readonly type: typeof UPDATE_FAVOURITE_POKEMON;
    payload:{
        favouritePokemonId?: IPokemon['id']
    }
}

export const updateFavPokemonProps = (payload: IUpdateFavPokemonPokemonAction['payload']): IUpdateFavPokemonPokemonAction => {
    return {
        type: UPDATE_FAVOURITE_POKEMON,
        payload: payload
    }
};

export type PokemonActions = ILoadPokemonAction | IUpdateIsLoadingPokemonAction | IUpdateFavPokemonPokemonAction;