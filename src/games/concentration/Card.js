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
    const [face, setFace] = useState('/imgs/codenation-logo.png');
    const [style, setStyle] = useState(unclickedStyle);

    function handleClick() {
        if (face === logo) {
            setFace(whiteSquare);
            setTimeout(() => {
                setStyle(clickedStyle);
                setFace(props.src);
            }, 100)
        } else {
            setStyle(unclickedStyle);
            setFace(logo);
        }
    }

    return (
        <div>
            <img
                style={style}
                src={face}
                onClick={handleClick}
            />
        </div>
    );
}

