import React from "react";
import {Row, Col, Container, Button} from 'react-bootstrap'
import './index.scss'
import FavouritePokemonTable from "../../containers/pokemon/favouritePokemonTable";
import {updateFavouritePokemonPropsSaga} from "../../sagas/pokemon/types";
import {useDispatch} from "react-redux";

interface IFavouritePokemonPageProps {
}

export default function FavouritePokemonPage(props: IFavouritePokemonPageProps) {
    const dispatch = useDispatch();
    return (
        <Container fluid={true} className={'p-5 page'}>
            <Row className={'m-0'}>
                <Col>
                    <Row className={'m-0'}>
                        <Col>
                            <h3 className="font-weight-bolder">Favorites</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={'m-0'}>
                <Col>
                    <FavouritePokemonTable/>
                </Col>
            </Row>
            <Row className={'m-0'}>
                <Col className="text-center mt-4">
                    <Button variant="outline-danger"
                            onClick={() => dispatch(updateFavouritePokemonPropsSaga({}))}
                    >Remove all</Button>
                </Col>
            </Row>
        </Container>
    )
}