import React, { useState } from 'react'

export const SyntheticBase = () => {
    const [state, setstate] = useState('')
    const mouseOver = (e)=>{
        console.log(e.clientX)
    }
    return (
        <div onMouseOver={mouseOver} style={{width:"100px",height:"100px",background:"orange"}}>click

        </div>
    )
}
