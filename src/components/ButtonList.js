import React from 'react'

const ButtonList = ( {bubble, quick, merge, selection} ) => (
    <div className='buttonsList'>
        <button onClick = {bubble}>BUBBLE SORT</button>
        <button onClick = {quick}>QUICK SORT</button>
        <button onClick = {merge}>MERGE SORT</button>
        <button onClick = {selection}>SELECTION SORT</button>
    </div>
)

export default ButtonList

