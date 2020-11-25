import React from 'react';
import './index.scss'
import {IPokemon} from "../../dtos/IPokemon";
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {updateFavouritePokemonPropsSaga} from "../../sagas/pokemon/types";

interface IPokemonCardProps extends IPokemon {

}

function PokemonCard(props: IPokemonCardProps) {
    const dispatch = useDispatch();
    return (
        <Card className={'mb-3'}>
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.name.english}</Card.Title>
                <Card.Text>
                    <Button variant="outline-primary"
                            className={'btn-rounded mr-4'}>Attack: {props.base.Attack}</Button>
                    <Button variant="outline-danger" className={'btn-rounded'}>Defense: {props.base.Defense}</Button>
                </Card.Text>
                <Card.Footer className={'card__footer p-0'}>
                    {
                        props.isFav? <Button variant={'outline-secondary'}
                                             className="text-capitalize btn-outline"
                                             disabled
                                             block
                            >add to favourite</Button>
                            :
                            <Button variant={"primary"}
                                    className="text-capitalize btn-fav"
                                    block
                                    onClick={() => dispatch(updateFavouritePokemonPropsSaga({pokemonId: props.id}))}
                            >add to favourite</Button>
                    }
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default PokemonCard;