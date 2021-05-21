import React from 'react'

function Piece({piece}) {
    const image = piece[0]
    const coos = piece[1]
    return (
        <div>
            <img src={"/assets/svgs/"+image+".svg"} alt="" />
            {coos}
        </div>
    )
}

export default Piece
