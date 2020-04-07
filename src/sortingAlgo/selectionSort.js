import {sleep} from './sleep'

let minArr = []
let swaps = []
export async function animateSelectionSort() {
    
    const bar = document.querySelectorAll('.oneBar')
    for(let i = 0 ; i < swaps.length;i++) {
        let height1 = bar[swaps[i][0]].style.height
        let height2 = bar[swaps[i][1]].style.height        
        bar[swaps[i][0]].style.backgroundColor = 'blue'
        bar[swaps[i][1]].style.backgroundColor = 'blue'
        await sleep(200)
        bar[swaps[i][0]].style.height = height2
        bar[swaps[i][1]].style.height = height1
        bar[swaps[i][0]].style.backgroundColor = 'rgb(0, 204, 0)'
        bar[swaps[i][1]].style.backgroundColor = 'yellow'
    }
    for(let i=0; i<bar.length ; i++) {
        bar[i].style.backgroundColor = 'black'
        await sleep(20)
        bar[i].style.backgroundColor = 'rgb(0, 204, 0)'
    }

}


export function selectionSort(arr) {
    minArr = []
    swaps = []
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        minArr.push(min)
        
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
                minArr.push(min)
            }
        }
        if (min !== i) {
            swaps.push([i,min])
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}