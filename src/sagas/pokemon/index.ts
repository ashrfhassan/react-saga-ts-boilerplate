import {put, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {
    LOAD_POKEMON_SAGA, ILoadPokemonActionSaga,
    UPDATE_FAVOURITE_POKEMON_SAGA, IUpdateFavouritePokemonActionSAGA
} from "./types";
import {loadPokemonProps, updateFavPokemonProps, updateIsLoadingPokemonProps} from "../../reducers/pokemon/types";
import {fetchPokemon} from '../../api/pokemon'
import {displayErrorMessageProps} from "../../reducers/global/types";
import {IPokemon} from "../../dtos/IPokemon";

function* loadPokemon(action: ILoadPokemonActionSaga) {
    try {
        yield put(updateIsLoadingPokemonProps({isLoadingPokemon: true, errorMessage: undefined}));
        const pokemonData: IPokemon[] = yield call(fetchPokemon);
        yield put(loadPokemonProps({pokemon: pokemonData}))
        yield put(updateIsLoadingPokemonProps({isLoadingPokemon: false, errorMessage: undefined}));
    } catch (error) {
        yield put(updateIsLoadingPokemonProps({isLoadingPokemon: false, errorMessage: error.message}));
        yield put(displayErrorMessageProps({message: error.message}))
    }
}

export function* watchLoadPokemon() {
    yield takeLatest(LOAD_POKEMON_SAGA, loadPokemon)
}

function* updateFavouritePokemon(action: IUpdateFavouritePokemonActionSAGA) {
    yield put(updateFavPokemonProps({favouritePokemonId: action.payload.pokemonId}))
}

export function* watchUpdateFavouritePokemon() {
    yield takeEvery(UPDATE_FAVOURITE_POKEMON_SAGA, updateFavouritePokemon)
}