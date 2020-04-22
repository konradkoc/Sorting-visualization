import React from 'react'
import { originalColor } from '../sortingAlgo/utils'

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
            backgroundColor: originalColor                
            }}></div>
        ))
        }
    </div>
)

export default Visualization 


