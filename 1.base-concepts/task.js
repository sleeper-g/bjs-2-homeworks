"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let dis = Math.pow(b, 2) - 4*a*c;
  if ( dis === 0 ){
    arr.push(-b / (2*c))
  } else if ( dis > 0 ) {
    dis = Math.sqrt(dis)
    arr.push((-b + dis) / (2*a))
    arr.push((-b - dis) / (2*a))
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12
  let bodyCreadit = amount - contribution
  let monthPay = bodyCreadit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)))
  console.log(monthPay)
  //let res = contribution + amount + (monthPay * countMonths)
  let res = (monthPay * countMonths)
  if (res === 0){
    return res 
  } else {
    return +(res.toFixed(2))
  }
}
console.log(calculateTotalMortgage(10, 1000, 50000, 12))
