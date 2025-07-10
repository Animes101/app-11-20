import React from 'react'

import './studentCard.css'

export default function StudentCard(props) {

    const {name,age,section}=props;

  return (
    <div className='studentCard'>
        <h1>{name}</h1>
        <h3>{age}</h3>
        <p>{section}</p>
    </div>
  )
}
