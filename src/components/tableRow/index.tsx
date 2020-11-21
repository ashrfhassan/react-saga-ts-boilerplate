import React from 'react';
import './index.scss'

interface ITableRowProps{
    id: number
    name: string
}

export default function TableRow(props: ITableRowProps){
    return (
        <div>
            {props.id}.{props.name}
        </div>
    )
}