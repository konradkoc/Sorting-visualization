import React from 'react'

const Header = ( {value, maxValue , chooseValue, newArray, animationOn} ) => (
    <div style = {containerStyle}>  
        <div className='generateButton'>
            <label htmlFor="arrLength">Array length: {value}</label>
        </div>
        <div style={rangeStyle}>
            <p style = {{marginRight: '5px'}}>10</p>
            <input 
                type='range' 
                name="arrLength" 
                value={value} 
                min='10' 
                max={maxValue} 
                onChange = {chooseValue} onClick = {chooseValue}></input>
            <p style = {{marginLeft: '5px'}}>{maxValue}</p>
        </div>
        
        <div className = 'buttonsContainer'>
            <button className='generateButton' onClick = {newArray}>Generate new array!</button>
        </div>
    </div>
)


export default Header

const containerStyle = {
    padding: '5px',

}


const rangeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}