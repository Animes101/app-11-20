import React from 'react'

import './card.css'

export default function Card(props) {
    
    const {title}= props

  return (
    <div className='card'>
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, alias autem possimus est optio recusandae nihil porro beatae laborum. Quos.

        </p>
        <button>View</button>


    </div>
  )
}
