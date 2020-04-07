import React from 'react'

const Visualization = ( {barWidth, arr} ) => (
    <div style={visualizationContainer}>
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


//styles
const visualizationContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'darkgray',
    padding: '10px',
    borderRadius: '4px',
    border: '3px solid hsl(60, 100%, 40%, 0.75)',
  }

