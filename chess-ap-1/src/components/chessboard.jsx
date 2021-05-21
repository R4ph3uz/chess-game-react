import React from "react";
import "./chessboard.css";
import Tile from "./tile";

function Chessboard({
  verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"],
  horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"],
}) {
  const squares = [];
  // eslint-disable-next-line
  verticalAxis.map((number, valueVertical) => {
    // eslint-disable-next-line
    horizontalAxis.map((letter, valueHorizontal) => {
      const color = (valueHorizontal + valueVertical) % 2;
      const image = 'bidhop'
      squares.push(<Tile color={color} image={image} />);
    });
  });

  return <ul className="board">{squares}</ul>;
}

export default Chessboard;
