import React from 'react'

const Legend = ( {rodzajSorta, animationOn } ) => (
    <div>
        <h2>Legend</h2>
        <h1>{rodzajSorta}</h1>
        <h2>{animationOn}</h2>
    </div>
)

export default Legend