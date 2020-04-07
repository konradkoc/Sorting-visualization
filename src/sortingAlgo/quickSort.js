function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let pivots = [] 
let pivotsIndex = []
let leftCompared = []
let rightCompared = []
let swaps = []  

export async function animateQuickSort() {
    const bar = document.querySelectorAll('.oneBar')
    for(let i = 0 ; i < pivotsIndex.length; i++){
   
        for(let j = 0 ; j < swaps.length; j++){
            await sleep(100)
            let height1 = bar[swaps[j][0]].style.height
            let height2 = bar[swaps[j][1]].style.height
            bar[swaps[j][0]].style.backgroundColor = 'rgb(0, 204, 0)'
            bar[swaps[j][1]].style.backgroundColor = 'rgb(0, 204, 0)'
            await sleep(100)
            bar[swaps[j][0]].style.height = height2
            bar[swaps[j][1]].style.height = height1
            await sleep(100)
            bar[swaps[j][0]].style.backgroundColor = 'yellow'
            bar[swaps[j][1]].style.backgroundColor = 'yellow'
        }
        await sleep(100)
        bar[pivotsIndex[i]].style.backgroundColor = 'yellow'
        
        for(let i = 0 ; i < bar.length ; i++) {
            await sleep(20)
            bar[i].style.backgroundColor = 'rgb(0, 204, 0)'
        }
        break
    }
    }

export function quickSort(arr, left, right) {
 
    let swaps = []  
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right) //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(arr, left, index - 1)
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(arr, index, right)
        }

}
    return arr;
}

//used in quickSort, swapping
export function swap(arr, leftIndex, rightIndex){
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp;
}

//used in quickSort
export function partition(arr, left, right) {
    let pivotIndex = Math.floor((right + left) / 2) //middle element
    let pivot   = arr[pivotIndex]
    let i       = left //left pointer
    let j       = right //right pointer

    pivots.push(pivot)
    pivotsIndex.push(pivotIndex)
    
    while (i <= j) {
        while (arr[i] < pivot) {  
            leftCompared.push(i)
            i++
        }
        while (arr[j] > pivot) {
            rightCompared.push(j)
            j--
        }
        if (i <= j) {
            swaps.push([i,j])
            swap(arr, i, j) //swapping two elements
            i++
            j--
        }
    }
    return i

}






















// //koniec reacta
// quickSort(arr, 0 , arr.length-1) // first call

// function quickSort(arr, left, right) {
//     let index;
//     if (arr.length > 1) {
//         index = partition(arr, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(arr, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(arr, index, right);
//         }
//     }
//     return arr;
// }

// function swap(arr, leftIndex, rightIndex){
//     var temp = arr[leftIndex];
//     arr[leftIndex] = arr[rightIndex];
//     arr[rightIndex] = temp;
// }

// function partition(arr, left, right) {
//     var pivot   = arr[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (arr[i] < pivot) {
//             i++;
//         }
//         while (arr[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(arr, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }





























// // export function quickSort(arr, left, right) {
// //     const bar = document.querySelectorAll('.oneBar')
    
// //     function sleep(ms) {
// //         return new Promise(resolve => setTimeout(resolve, ms));
// //       }
    
// //     function quickSort2(arr, left, right) {
// //         let index;
// //         if (arr.length > 1) {
// //         index = partition(arr, left, right); //index returned from partition
// //         if (left < index - 1) { //more elements on the left side of the pivot
// //             quickSort2(arr, left, index - 1);
// //             console.log('more on the left')
// //         }
// //         if (index < right) { //more elements on the right side of the pivot
// //             quickSort2(arr, index, right);
// //             console.log('more on the right')
// //         }
// //     }
// //     console.log(arr)
// //     return arr;
// // }
// //     //Helping functions in quick sort

// //     async function swap(arr, leftIndex, rightIndex){
// //         let bar1Height = bar[leftIndex].style.height
// //         let bar2Height = bar[rightIndex].style.height
// //         let temp = arr[leftIndex];
// //         arr[leftIndex] = arr[rightIndex];
// //         arr[rightIndex] = temp;
        
// //         await sleep(1000)
// //             bar[leftIndex].style.backgroundColor = 'purple'
// //             bar[rightIndex].style.backgroundColor = 'purple'
        
// //         await sleep(1000) 
// //             bar[leftIndex].style.height = bar2Height
// //             bar[rightIndex].style.height = bar1Height
        
// //         await sleep(1000)
// //             bar[leftIndex].style.backgroundColor = 'hsl(60, 100%, 40%, 0.9)'
// //             bar[rightIndex].style.backgroundColor ='hsl(60, 100%, 40%, 0.9)'
// //     }

// //     async function partition(arr, left, right) {
// //         let pivotIndex = Math.floor((right + left) / 2) //middle element
// //         bar[pivotIndex].style.backgroundColor = 'blue'
// //         let pivot   = arr[pivotIndex],   //middle element
// //         i       = left, //left pointer
// //         j       = right; //right pointer
// //     while (i <= j) { 
// //         while (arr[i] < pivot) {
// //             // bar[i].style.backgroundColor = 'red'
// //             // bar[i].style.backgroundColor = 'hsl(60, 100%, 40%, 0.9)'
// //             i++;
// //         }
// //         while (arr[j] > pivot) {
// //             // bar[j].style.backgroundColor = 'red'
// //             // bar[j].style.backgroundColor = 'hsl(60, 100%, 40%, 0.9)'
// //             j--;
// //         }
// //         if (i <= j) {
// //             swap(arr, i, j); //swapping two elements
// //             i++;
// //             j--;
// //         }

// //     }
// //     return i;
// //     }


// // }




// // function quickSort(items, left, right) {
// //     var index;
// //     if (items.length > 1) {
// //         index = partition(items, left, right); //index returned from partition
// //         if (left < index - 1) { //more elements on the left side of the pivot
// //             quickSort(items, left, index - 1);
// //         }
// //         if (index < right) { //more elements on the right side of the pivot
// //             quickSort(items, index, right);
// //         }
// //     }
// //     return items;
// // }
// // // first call to quick sort
// // var result = quickSort(items, 0, items.length - 1);
// // Complete Quick sort code:
// // var items = [5,3,7,6,2,9];
// // function swap(items, leftIndex, rightIndex){
// //     var temp = items[leftIndex];
// //     items[leftIndex] = items[rightIndex];
// //     items[rightIndex] = temp;
// // }
// // function partition(items, left, right) {
// //     var pivot   = items[Math.floor((right + left) / 2)], //middle element
// //         i       = left, //left pointer
// //         j       = right; //right pointer
// //     while (i <= j) {
// //         while (items[i] < pivot) {
// //             i++;
// //         }
// //         while (items[j] > pivot) {
// //             j--;
// //         }
// //         if (i <= j) {
// //             swap(items, i, j); //sawpping two elements
// //             i++;
// //             j--;
// //         }
// //     }
// //     return i;
// // }

// // function quickSort(items, left, right) {
// //     var index;
// //     if (items.length > 1) {
// //         index = partition(items, left, right); //index returned from partition
// //         if (left < index - 1) { //more elements on the left side of the pivot
// //             quickSort(items, left, index - 1);
// //         }
// //         if (index < right) { //more elements on the right side of the pivot
// //             quickSort(items, index, right);
// //         }
// //     }
// //     return items;
// // }
// // // first call to quick sort
// // var sortedArray = quickSort(items, 0, items.length - 1);
// // console.log(sortedArray); //prints [2,3,5,6,7,9]