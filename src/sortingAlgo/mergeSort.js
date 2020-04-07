    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const middleArr =[]
    let animate = []
    export async function animateMergeSort() {
        const bar = document.querySelectorAll('.oneBar')
        for(let i = 0 ; i <animate.length; i++) {
            await sleep(100)
            bar[animate[i][0]].style.backgroundColor = 'blue'
            bar[animate[i][1]].style.backgroundColor = 'blue'
            await sleep(100)
            
        }
    }


  export function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }

  export function merge(left, right) {
    let arr = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
          animate.push([left[0], right[0]])
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }
  
 