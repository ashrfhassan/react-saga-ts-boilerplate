import React, {useEffect} from 'react';
import PokemonCard from "../../components/pokemonCard";
import './styles/index.scss'
import {useDispatch, useSelector} from "react-redux";
import {loadPokemonPropsSaga} from "../../sagas/pokemon/types";
import {Row, Col} from "react-bootstrap";
import {AppState} from "../../store";
import {IPokemon} from "../../dtos/IPokemon";

interface IPokemonTableProps {
}

function Index(props: IPokemonTableProps) {
    const dispatch = useDispatch();
    const allPokemon = useSelector((state: AppState) => state.pokemonReducer.pokemon)
    useEffect(() => {
        dispatch(loadPokemonPropsSaga())
    }, []);

    return (
        <Row className={'m-0 p-0'}>
            {
               allPokemon.map((pokemon: IPokemon, i) => (
                   <Col key={i} sm={4} className={'text-center'}>
                       <PokemonCard {...pokemon}/>
                   </Col>
               ))
            }
        </Row>
    )
}

export default Index;