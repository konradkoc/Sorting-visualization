import React from 'react'
import RangeInputLen from './RangeInputLen'
import RangeInputSpeed from './RangeInputSpeed'

const Header = ( {value, maxValue , chooseValue, newArray, animationOn, chooseSpeed, speed} ) => (
    <div> 
        <RangeInputLen 
            value = {value} 
            maxValue = {maxValue}
            chooseValue = {chooseValue}
            animationOn = {animationOn} />

        <RangeInputSpeed 
            animationOn = { animationOn }
            chooseSpeed = { chooseSpeed} />

        <div className = 'buttonsContainer'>
            <button
                className='generateButton' 
                onClick = {newArray}>
                    Generate new array!
            </button>
        </div>
    </div>
)


export default Header
