import {all} from 'redux-saga/effects'
import {watchLoadPokemon, watchIsLoadPokemon, watchUpdateFavouritePokemon} from "./pokemon";

export default function* rootSaga() {
    yield all([
        watchLoadPokemon(),
        watchIsLoadPokemon(),
        watchUpdateFavouritePokemon(),
    ])
}