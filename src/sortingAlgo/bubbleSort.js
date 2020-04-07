
export function bubbleSort(arr) {
    const bar = document.querySelectorAll('.oneBar')
    const speed = 2000/arr.length //longer the array, faster it goes

    for (let i = 0; i < arr.length ; i++) {
        let innerLoopLength = arr.length
        setTimeout(()=>{
        innerLoopLength = arr.length - i

            for(let j=0 ; j < innerLoopLength-1; j++) {   
                        setTimeout(()=>{
                            bar[j].style.backgroundColor = 'rgb(0, 204, 0)'
                            bar[j+1].style.backgroundColor = 'rgb(128, 0, 128)'                     
                            if (arr[j] > arr[j + 1]) {
                                // swapping 
                                let temp = arr[j];
                                arr[j] = arr[j+1];
                                arr[j + 1] = temp;
                                let bar1Height = bar[j].style.height
                                let bar2Height = bar[j+1].style.height
                                bar[j].style.height = bar2Height
                                bar[j+1].style.height = bar1Height
                                }

                            if(j===arr.length - i - 2 && j!== 0){
                                bar[j+1].style.backgroundColor = 'rgb(0, 204, 0)'
                                bar[j].style.backgroundColor = 'hsl(60, 100%, 40%, 0.9)'
                                bar[j-1].style.backgroundColor = 'hsl(60, 100%, 40%, 0.9)'
                            } else if (j>0) {
                                bar[j-1].style.backgroundColor = 'hsl(60, 100%, 40%, 0.9)' 
                            }

                            if(i=== arr.length-2){
                                bar[j].style.backgroundColor = 'rgb(0, 204, 0)'
                                bar[j+1].style.backgroundColor = 'rgb(0, 204, 0)'
                            }
                        }, j*speed)
                        
            }
},i*(innerLoopLength)*speed)
}
return arr
}