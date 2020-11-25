import {axiosInstance} from "../store";
import Constants from '../constants'

export function fetchPokemon() {
    return axiosInstance.get(Constants.pokemonEndPoint).then((res) => res.data );
}