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
        {/* <div className={"piece "+ image}></div> */}
        {/* <img src={"/assets/svgs/"+image+".svg"} alt="piece" /> */}
        <Piece piece={piece}/>
    </li>
  );
}

export default Tile;
