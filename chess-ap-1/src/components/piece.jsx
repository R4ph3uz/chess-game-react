import React from "react";

function Piece({ piece }) {
  const image = piece[0];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${"/assets/svgs/"+image+".svg"})`, backgroundRepeat: "no-repeat", backgroundPosition:"center", width:"100%", height:"100%" }}
      ></div>
      {/* <img className="piece" src={"/assets/svgs/" + image + ".svg"} alt="" /> */}
    </>
  );
}

export default Piece;
