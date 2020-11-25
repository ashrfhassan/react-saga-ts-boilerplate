import {put, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {
    LOAD_POKEMON_SAGA,
    ILoadPokemonActionSaga,
    UPDATE_IS_LOADING_POKEMON_SAGA,
    IUpdateIsLoadingPokemonActionSAGA, UPDATE_FAVOURITE_POKEMON_SAGA, IUpdateFavouritePokemonActionSAGA
} from "./types";
import {loadPokemonProps, updateFavPokemonProps, updateIsLoadingPokemonProps} from "../../reducers/pokemon/types";
import {fetchPokemon} from '../../api/pokemon'
import {displayErrorMessageProps} from "../../reducers/global/types";
import {IPokemon} from "../../dtos/IPokemon";

function* loadPokemon(action: ILoadPokemonActionSaga) {
    try {
        const pokemonData: IPokemon[] = yield call(fetchPokemon);
        yield put(loadPokemonProps({pokemon: pokemonData}))
    } catch (error) {
        yield put(displayErrorMessageProps({message: error.message}))
    }
}

export function* watchLoadPokemon() {
    yield takeEvery(LOAD_POKEMON_SAGA, loadPokemon)
}

function* isLoadPokemon(action: IUpdateIsLoadingPokemonActionSAGA) {
    yield put(updateIsLoadingPokemonProps({isLoadingPokemon: action.payload.isLoadingPokemon}))
}

export function* watchIsLoadPokemon() {
    yield takeLatest(UPDATE_IS_LOADING_POKEMON_SAGA, isLoadPokemon)
}

function* updateFavouritePokemon(action: IUpdateFavouritePokemonActionSAGA) {
    yield put(updateFavPokemonProps({favouritePokemonId: action.payload.pokemonId}))
}

export function* watchUpdateFavouritePokemon() {
    yield takeEvery(UPDATE_FAVOURITE_POKEMON_SAGA, updateFavouritePokemon)
}