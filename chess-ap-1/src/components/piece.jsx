import React from "react";

function Piece({ piece }) {
  const image = piece[0];
  function grabPiece(e, width){
    const element = e.target;
    if(element.classList.contains("piece")){
      const x = e.clientX -50;
      const y = e.clientY -50;

      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.backgroundSize =  `${width}px`
    }
  }
  // function releasePiece(e){
  //   console.log(e)
  //   console.log(e.target)
  // }
  return (
    <>
      {image && (
        <div
        // onMouseUp={e=>releasePiece(e)}
        className="piece"
        ref={el=>{
          const width = el.getBoundingClientRect().width
        }}
        onMouseDown={(e,width)=>grabPiece(e, width)}
          style={{
            backgroundImage: `url(${"/assets/svgs/" + image + ".svg"})`,
          }}
        ></div>
      )}
    </>
  );
}

export default Piece;
