import React from 'react';
import './index.scss'
import {Navbar, Badge} from "react-bootstrap";
import {push, getLocation} from 'connected-react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../store";

interface IHeaderProps {

}

function Header(props: IHeaderProps) {
    const dispatch = useDispatch();
    const favPokemon = useSelector((state: AppState) => state.pokemonReducer.pokemon.filter((pokemon) => pokemon.isFav === true))

    return (
        <Navbar bg="light" expand="lg" className={'header'}>
            <Navbar.Brand href="/">Pokemon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Navbar.Text>
                    <FontAwesomeIcon icon={faStar} className={'cursor'} onClick={() => dispatch(push('/favorites'))}/>
                    <Badge variant="danger" className={'fav-badge'}>{favPokemon.length}</Badge>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;