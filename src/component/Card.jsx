import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
  <div className="card">
    <img src= {props.photo} alt="" />
    <h2>{props.text}</h2>
  </div>
  )
}

export default Card
