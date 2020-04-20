import React, { Component, Fragment } from 'react'
import Header from './Header'
import Visualization from './Visualization'
import ButtonList from './ButtonList'
import { bubbleSort } from '../sortingAlgo/bubbleSort'
import { selectionSort } from '../sortingAlgo/selectionSort'
import { quickSort } from '../sortingAlgo/quickSort'


function randomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
 
export class MainComp extends Component {
    constructor() {
        super()
        this.state = {
        arr: [],
        //those 2 below determines horizontal size
        arrayLength: Math.floor(window.innerWidth/6)-2,
        maxArrayLength: Math.floor(window.innerWidth/6)-2, //1 bar is 6px with margins so this is max amount of bars on the screen without horizontal scroll, -2 is just for safety
        //this one is about max height of the bar, max value possible in the array
        maxHeight: Math.floor(0.75*window.innerHeight), //0.75 cause bars are not on 100% OF VH
        singleBarWidth: 2,
        animationOn: false,
        }
    }
    
    //we want bars to fill almost full container, so width of single bar is dynamic, depending on window width and how many el. are in the array
    calculateBarWidth = () => {
        const barWidth = (window.innerWidth - this.state.arrayLength*2)/this.state.arrayLength
        this.setState({singleBarWidth: barWidth})
    }
    
    componentDidMount() {
        this.newArray();
        window.addEventListener("resize", this.handleResize);
    }

    handleResize = () =>  {
        const widthValue = Math.floor(window.innerWidth/6)-2
        const heightValue = Math.floor(0.75*window.innerHeight)
        this.setState({maxArrayLength: widthValue})
        this.setState({maxHeight: heightValue})
        //preventing arr length to be > than max value
        if(this.state.maxArrayLength < this.state.arrayLength) {
            this.setState({arrayLength: this.state.maxArrayLength})
        }
        //rerendering bars
        this.newArray()
        }

    //Fill array with random values
    newArray = () => {
            const arr2 = []
            const bar = document.querySelectorAll('.oneBar')
            for (let i = 0; i < this.state.arrayLength; i++) {
                arr2.push(randomNumber(10, this.state.maxHeight))
                if(bar[i]!== undefined){
                    bar[i].style.backgroundColor = 'rgb(128, 159, 255)'
                }
            }

        this.setState({arr: arr2})
        this.calculateBarWidth()
    }

    //Value from slider to arr.length -> and rerendering array on the screen
    chooseValue = (e) => {
        this.setState({arrayLength: e.target.value})
        this.newArray() 
    }

    //SORTING
    bubbleSortVis = () => {
        bubbleSort(this.state.arr, 100)
        this.setState ({ animationOn: true })
    }

    selectionSortVis = () => {
        selectionSort(this.state.arr, 50)
        this.setState ({ animationOn: true })

    }

    quickSortVis = () => {
        quickSort(this.state.arr, 0 , this.state.arrayLength -1, 100)
        this.setState ({ animationOn: true })
    }

    render() {
        return (
            <Fragment>
                <Header maxValue = {this.state.maxArrayLength} 
                        value = {this.state.arrayLength} 
                        chooseValue={this.chooseValue} 
                        newArray={this.newArray}
                        animationOn = {this.state.animationOn}/>

                <Visualization arr={this.state.arr} barWidth={this.state.singleBarWidth}/>
                <ButtonList bubble = {this.bubbleSortVis} selection={this.selectionSortVis} quick={this.quickSortVis}/>
            </Fragment>
        )
    }
}

export default MainComp
