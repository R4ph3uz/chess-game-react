import React from "react";
import uuid from "react-uuid";
import './tile.css'



function Tile({color=0, image='knight'})  {
  return (
    <li
      key={uuid()}
      className={color === 0 ? "light-square" : "dark-square"}
    >
        <img src="./assets/svgs/black_bishop.svg" alt="" />
        {image}
    </li>
  );
}

export default Tile;
