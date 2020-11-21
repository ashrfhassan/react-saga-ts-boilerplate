import React from 'react';
import i18n from "i18next";
import TableRow from "../../components/tableRow";
import './styles/usersTable.scss'
import {useDispatch} from "react-redux";
import {loadUsersPropsSaga} from "../../sagas/users/types";
import {Row, Col} from "react-bootstrap";

interface IUsersTableProps {
}

export default function UsersTable(props: IUsersTableProps) {
    const dispatch = useDispatch();

    return (
        <Row>
            <Col xs={12} className={'text-center'}>
                {i18n.t('Welcome to React')}
            </Col>
            <Col xs={12} className={'text-center'}>
                <button onClick={() => dispatch(loadUsersPropsSaga({userid: 1}))}
                        className={'d-inline'}>Add
                </button>
                <button className={'d-inline'}>Remove</button>
            </Col>
            <Col xs={12} className={'text-center'}>
                <ul>
                    <li>
                        <TableRow id={1} name={'ahmed'}/>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}