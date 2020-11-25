import React from 'react';
import './index.scss'
import {IPokemon} from "../../dtos/IPokemon";
import {Row, Col, Image, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {updateFavouritePokemonPropsSaga} from "../../sagas/pokemon/types";

interface IPokemonRowProps extends IPokemon {

}

function PokemonRow(props: IPokemonRowProps) {
    const dispatch = useDispatch();

    return (
        <Row className="align-items-center row-bg pb-4">
            <Col sm={3}>
                <Image src={props.img} alt={props.name.english} className="row-img"/>
            </Col>
            <Col sm={7}>
                <h4>{props.name.english}</h4>
            </Col>
            <Col sm={2}>
                <Button variant="outline-danger"
                        onClick={() => dispatch(updateFavouritePokemonPropsSaga({pokemonId: props.id}))}
                >Remove</Button>
            </Col>
        </Row>
    )
}

export default PokemonRow;