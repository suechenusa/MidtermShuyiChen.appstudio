//the function to calculator the formula
function calcAvgSquare(num1,num2,num3){
   return ((num1 + num2 + num3)/3) * Math.pow(num1,2)
  }
  
//main program
let num1 = Number(prompt("Enter your first number"))
let num2 = Number(prompt("Enter your second number"))
let num3 = Number(prompt("Enter your third number"))
let answer = calcAvgSquare(num1,num2,num3)
alert(`The answer using ${num1}, ${num2}, ${num3} is ${answer}`)