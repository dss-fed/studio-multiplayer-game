import React from 'react';
import Card from './Card';

export default function Grid(props) {
    return (
        <div>
            {
                props.catData &&
                props.catData.map((cat, i) =>
                    <Card
                        key={cat.id + i}
                        id={cat.id}
                        src={cat.url}
                    />
                )
            }
        </div>
    );
}
