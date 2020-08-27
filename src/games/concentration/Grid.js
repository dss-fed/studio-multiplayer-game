import React, { useReducer } from 'react';
import Row from './Row';
import Card from './Card';

export default function Grid(props) {

    if (!props.catData) {
        return null;
    }

    return (
        <div
            style={{
                width: '95%',
                margin: '0 auto'
            }}
        >
            <Row
                catData={getRowData(1, props.catData)}
            />
            <Row
                catData={getRowData(2, props.catData)}
            />
            <Row
                catData={getRowData(3, props.catData)}
            />
            <Row
                catData={getRowData(4, props.catData)}
            />
        </div>
    );
}

function getRowData(num, catData) {
    switch (num) {
        case 1:
            return [
                catData[0],
                catData[1],
                catData[2],
                catData[3]
            ]
        case 2:
            return [
                catData[4],
                catData[5],
                catData[6],
                catData[7]
            ]
        case 3:
            return [
                catData[8],
                catData[9],
                catData[10],
                catData[11]
            ]
        case 4:
            return [
                catData[12],
                catData[13],
                catData[14],
                catData[15]
            ]
        default:
            break;
    }
}
