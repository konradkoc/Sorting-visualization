import React from 'react'

const ButtonList = ( {bubble, selection, quick} ) => (
    <div className='buttonsList'>
        <button onClick = {bubble}>BUBBLE SORT</button>
        <button onClick = {selection}>SELECTION SORT</button>
        <button onClick = {quick}>QUICK SORT</button>

    </div>
)

export default ButtonList

