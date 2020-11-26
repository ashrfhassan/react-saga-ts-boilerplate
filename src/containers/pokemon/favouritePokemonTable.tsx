import React from 'react';
import PokemonRow from "../../components/pokemonRow";
import './styles/favouritePokemonTable.scss'
import {useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import {AppState} from "../../store";
import {IPokemon} from "../../dtos/IPokemon";

interface IPokemonTableProps {
}

function FavouritePokemonTable(props: IPokemonTableProps) {
    const favPokemon = useSelector((state: AppState) => state.pokemonReducer.pokemon
        .filter((pokemon, i) => pokemon.isFav === true)
    )

    return (
        <Row className={'m-0 p-0'}>
            <Col sm={12} className={'text-center'}>
            {
                favPokemon.length > 0? favPokemon.map((pokemon: IPokemon, i) => (
                        <PokemonRow key={i} {...pokemon}/>
                )):
                    <p className="font-weight-bold font-italic">Oops! Looks like you  haven't added any pokemons yet.</p>
            }
            </Col>
        </Row>
    )
}

export default FavouritePokemonTable;