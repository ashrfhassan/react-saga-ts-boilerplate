import React, {useEffect} from 'react';
import PokemonCard from "../../components/pokemonCard";
import './styles/index.scss'
import {useDispatch, useSelector} from "react-redux";
import {loadPokemonPropsSaga} from "../../sagas/pokemon/types";
import {Row, Col} from "react-bootstrap";
import {AppState} from "../../store";
import {IPokemon} from "../../dtos/IPokemon";
import Loader from "../../components/loader";

interface IPokemonTableProps {
}

function Index(props: IPokemonTableProps) {
    const dispatch = useDispatch();
    const pokemonReducer = useSelector((state: AppState) => state.pokemonReducer)
    const allPokemon = pokemonReducer.pokemon;
    useEffect(() => {
        dispatch(loadPokemonPropsSaga())
    }, []);

    return (
        <Loader isLoading={pokemonReducer.loadingPokemon.isLoadingPokemon} errorMessage={pokemonReducer.loadingPokemon.errorMessage}>
            <Row className={'m-0 p-0'}>

                {
                    allPokemon.map((pokemon: IPokemon, i) => (
                        <Col key={i} sm={4} className={'text-center'}>
                            <PokemonCard {...pokemon}/>
                        </Col>
                    ))
                }
            </Row>
        </Loader>
    )
}

export default Index;