import {all} from 'redux-saga/effects'
import {watchLoadPokemon, watchUpdateFavouritePokemon} from "./pokemon";

export default function* rootSaga() {
    yield all([
        watchLoadPokemon(),
        watchUpdateFavouritePokemon(),
    ])
}