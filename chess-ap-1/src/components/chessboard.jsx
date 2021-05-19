import React from 'react';
import './chessboard.css'
import Tiles from './tiles'

function Chessboard() {
    const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"] 
    const squares = []



    const Board = () =>{
        for (const [valueHorizontal, letters] of horizontalAxis.entries()) {
            console.log(letters)
            for (const [valueVertical, numbers] of verticalAxis.entries()){
                console.log(valueHorizontal)
                console.log(valueVertical)
                const color = (valueHorizontal+valueVertical) %2
                squares.push(<li className={color===0 ? "light-square" : "dark-square"} ></li>)
            };
            squares.push(<br />)
        };
        console.log(squares.length)
        return(squares)
    };


    return (
        <div className="board8">
            <Board />
        </div>
    )
}

export default Chessboard
