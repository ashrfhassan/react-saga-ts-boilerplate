import {IPokemon} from "../../dtos/IPokemon";

export const LOAD_POKEMON_SAGA = 'LOAD_POKEMON_SAGA';
export const LOAD_POKEMON = 'LOAD_POKEMON';
export interface ILoadPokemonActionSaga {
    readonly type: typeof LOAD_POKEMON_SAGA;
}

export const loadPokemonPropsSaga = (): ILoadPokemonActionSaga => {
    return {
        type: LOAD_POKEMON_SAGA,
    }
};

export const UPDATE_IS_LOADING_POKEMON_SAGA = 'UPDATE_IS_LOADING_POKEMON_SAGA';
export const UPDATE_IS_LOADING_POKEMON = 'UPDATE_IS_LOADING_POKEMON';
export interface IUpdateIsLoadingPokemonActionSAGA {
    readonly type: typeof UPDATE_IS_LOADING_POKEMON_SAGA;
    payload: {
        isLoadingPokemon: boolean
    }
}

export const updateIsLoadingPokemonPropsSaga = (payload: IUpdateIsLoadingPokemonActionSAGA['payload']): IUpdateIsLoadingPokemonActionSAGA => {
    return {
        type: UPDATE_IS_LOADING_POKEMON_SAGA,
        payload: payload
    }
};

export const UPDATE_FAVOURITE_POKEMON_SAGA = 'UPDATE_FAVOURITE_POKEMON_SAGA';
export const UPDATE_FAVOURITE_POKEMON = 'UPDATE_FAVOURITE_POKEMON';
export interface IUpdateFavouritePokemonActionSAGA {
    readonly type: typeof UPDATE_FAVOURITE_POKEMON_SAGA;
    payload: {
        pokemonId?: IPokemon['id']
    }
}

export const updateFavouritePokemonPropsSaga = (payload: IUpdateFavouritePokemonActionSAGA['payload']): IUpdateFavouritePokemonActionSAGA => {
    return {
        type: UPDATE_FAVOURITE_POKEMON_SAGA,
        payload: payload
    }
};