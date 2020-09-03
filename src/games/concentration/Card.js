import React, { useState } from 'react';

const logo = '/imgs/codenation-logo.png';
const whiteSquare = '/imgs/white180x180.png';

const unclickedStyle = {
    width: '180px',
    height: '180px',
    objectFit: 'contain',
    margin: '5px',
    border: '2px solid black',
    borderRadius: '5px'
};

const clickedStyle = {
    ...unclickedStyle,
    objectFit: 'cover',
};

export default function Card(props) {
    const [style, setStyle] = useState(unclickedStyle);

    function handleClick() {
        if (props.cardsFlipped.length >= 2) {
            return;
        }

        if (!props.flipped) {
            setTimeout(() => {
                setStyle(clickedStyle);
            }, 100)

            props.dispatch({
                type: 'FLIP_CARD',
                payload: props.id
            });

            handleTwoCardsFlipped();

        } else {
            setStyle(unclickedStyle);

            props.dispatch({
                type: 'FLIP_CARD_BACK',
                payload: props.id
            });
        }
    }

    function handleTwoCardsFlipped() {
        // props.dispatch
    }

    if (props.flipped) {
        return (
            <div>
                <img
                    style={style}
                    src={props.src}
                    onClick={handleClick}
                    alt={`cat ${props.id}`}
                />
            </div>
        );
    }
    return (
        <div>
            <img
                style={style}
                src={logo}
                onClick={handleClick}
                alt={`cat ${props.id}`}
            />
        </div>
    );
}

