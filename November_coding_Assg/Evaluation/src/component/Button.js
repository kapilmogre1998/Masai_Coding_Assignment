import React from 'react'
import './button.css'

export const Button = ({name,bkg}) => {
    // console.log(color)
    return (
        <button className="customButton" style={{backgroundColor:bkg,color:"white"}}>{name}</button>
    )
}
