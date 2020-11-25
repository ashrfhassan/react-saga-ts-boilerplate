import React from "react";
import {Row, Col, Container} from 'react-bootstrap'
import './index.scss'
import PokemonTable from "../../containers/pokemon";

interface IPokemonPageProps {
}

export default function PokemonPage(props: IPokemonPageProps) {
    return (
        <Container fluid={true} className={'p-5 page'}>
            <Row className={'m-0'}>
                <Col>
                    <Row className={'m-0'}>
                        <Col>
                            <h3 className="font-weight-bolder">List Of Pokemons</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={'m-0'}>
                <Col>
                    <PokemonTable/>
                </Col>
            </Row>
        </Container>
    )
}