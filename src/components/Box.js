import React from 'react';

const style= {
    background: '#fff',
    border: '2px solid lightblue',
    fonstsize: '30px',
    fontweight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Box = ({value , onClick}) => {
    return(
        <button style={style} onClick={onClick}>
            {value}
        </button>
    );
};

export default Box;