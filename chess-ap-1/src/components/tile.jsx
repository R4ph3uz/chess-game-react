import React from "react";
import uuid from "react-uuid";
import './tile.css'
import Piece from './piece'



function Tile({color=0,piece})  {
  return (
    <li
      key={uuid()}
      className={color === 0 ? "light-square" : "dark-square"}
    >
        <Piece piece={piece}/>
    </li>
  );
}

export default Tile;
