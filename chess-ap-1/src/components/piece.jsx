import React from "react";

function Piece({ piece }) {
  const image = piece[0];
  return (
    <>
      <div className="piece"
        style={{ backgroundImage: `url(${"/assets/svgs/"+image+".svg"})`}}
      ></div>
      {/* <img className="piece" src={"/assets/svgs/" + image + ".svg"} alt="" /> */}
    </>
  );
}

export default Piece;
