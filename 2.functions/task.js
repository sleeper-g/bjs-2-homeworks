function getArrayParams(...arr) {
  let min =  Infinity;
  let max = -Infinity;
  let sum = 0

  for(  let i = 0; i < arr.length; i++ ){
    if (arguments[i] > max){
      max = arr[i]
    }
    if (arr[i] < min){
      min = arr[i]
    }
    sum += arr[i]
  }
  let avg = Number((sum / (arr.length)).toFixed(2));
  console.log(typeof avg)

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10)) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10))  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5))  // { min: 5, max: 5, avg: 5 }

function summElementsWorker(...arr) {
  if (arr.length !== 0 ){
    return arr.reduce((prev, item, index) => {
      return prev + item
    })
  }
  else 
    return 0
}

function differenceMaxMinWorker(...arr) {
  if (arr.length !== 0 ){
    let min = arr.reduce((prev, item) => {
      return Math.min(prev, item)
    })
    let max = arr.reduce((prev, item) => {
      return Math.max(prev, item)
    })
    return max - min
  }
  else
    return 0
}

function differenceEvenOddWorker(...arr) {
  if (arr.length !==0 ){
    let sumEvenElement = 0
    let sumOddElement = 0
    for (let i = 0; i < arr.length; i++){
      if ( arr[i] % 2 === 0){
        sumEvenElement += arr[i]
      } else {
        sumOddElement += arr[i]
      }
    }
    return sumEvenElement - sumOddElement
  }
  else
    return 0
}

function averageEvenElementsWorker(...arr) {
  if (arr.length !== 0 ){
    let sumEvenElement = 0
    let countEvenElement = 0

    arr.reduce((prev, item, index) => {
      if ( arr[index-1] % 2 === 0){
        sumEvenElement += arr[index-1]
        countEvenElement += 1
      }
    })
    return sumEvenElement / countEvenElement
  }
  else
    return 0
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity
  let arg = [...arrOfArr]
  for (let i = 0; i < arg.length; i++){
    resF = func(...arg[i])
    if (resF > maxWorkerResult){
      maxWorkerResult = resF
    }
  }
  return maxWorkerResult
}
