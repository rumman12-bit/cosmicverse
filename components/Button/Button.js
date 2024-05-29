import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
<button className="custombtn" type="button">
    <a href="#universe">
        <strong>{props.btnVal}</strong>
        <div id="container-stars">
            <div id="stars" />
        </div>
        <div id="glow">
            <div className="circle" />
            <div className="circle" />
        </div>
    </a>
</button>
  )
}
