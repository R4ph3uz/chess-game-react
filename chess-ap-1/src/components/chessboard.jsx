import React from "react";
import "./chessboard.css";
import Tile from "./tile";


function Chessboard({
  verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"],
  horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"],
}) {
  const pieces = [];
  const piecesName = ["rook", "night", "bishop", "queen", "king", "bishop", "night", "rook"]
  const setup = () =>{
    //  setting pieces to right place
    for(let i=0; i<2; i++){
      const color = i ===0?"black_":"white_";
      const y = i === 0?0:7;
      const yPawn = i === 0?1:6;
      //setting pieces
      piecesName.map((pieceName,  index)=>{
        pieces.push([color+pieceName, [index, y]])
      })
      // setting pawn
      for (let i=0; i<8; i++){
        pieces.push([color+"pawn", [i, yPawn]])
      }
    }
} 
  setup()
  const squares = [];
  // eslint-disable-next-line
  verticalAxis.map((number, valueVertical) => {
    // eslint-disable-next-line
    horizontalAxis.map((letter, valueHorizontal) => {
      const tileColor = (valueHorizontal + valueVertical) % 2;
      var piece = [];

      pieces.forEach((p) =>{
        if ((p[1][0] === valueHorizontal) && (p[1][1] === valueVertical) ){
          piece = p
        }
      })
      squares.push(<Tile key={valueHorizontal+":"+valueVertical} color={tileColor} piece={piece} />);
    });
  });

  return <ul className="board">{squares}</ul>;
}

export default Chessboard;
