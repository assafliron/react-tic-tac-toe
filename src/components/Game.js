import React, { useState } from 'react';
import Layout from './Layout';
import checkWinner from '../helpingFunctions'

const style = {
    width: '200px',
    margin: '20px auto',
};
const pStyle = {
    color: 'green'
};

const Game = () => {
    const [layout,setLayout] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = checkWinner(layout);

    const handleClick = i => {
        const layoutState = [...layout];
        if(winner || layoutState[i]){
            return;
        }
        layoutState[i] = xIsNext ? 'X' : 'O';
        setLayout(layoutState);
        setXIsNext(!xIsNext);
    }
    

    return(
        <React.Fragment>
            <Layout boxes={layout} onClick={handleClick} />
            <div style={style}>
                <p style={pStyle}>{winner ? `The winner is: ${winner}`: ''}</p>
            </div>
        </React.Fragment>
    );
};

export default Game;