import React from "react";
import {Row, Col, Container, Button} from 'react-bootstrap'
import './index.scss'
import FavouritePokemonTable from "../../containers/pokemon/favouritePokemonTable";
import {updateFavouritePokemonPropsSaga} from "../../sagas/pokemon/types";
import {useDispatch} from "react-redux";
import { goBack } from 'connected-react-router';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

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
                            <FontAwesomeIcon icon={faArrowLeft}
                                             className={'cursor btn-back d-inline mr-3'}
                                             onClick={() => dispatch(goBack())}
                                             title={'go back'}/>
                            <h3 className="font-weight-bolder d-inline">Favorites</h3>
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