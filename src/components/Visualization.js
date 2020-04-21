import React from 'react'

const Visualization = ( {barWidth, arr, } ) => (
    <div className = 'visualizationContainer'>
        {
        arr.map((value, index) => (
        <div
            className='oneBar'
            key={index}
            style={{
            height: `${value}px`,
            width: `${barWidth}px`,
            backgroundColor: 'rgb(128, 159, 255)'                
            }}></div>
        ))
        }
    </div>
)

export default Visualization 


