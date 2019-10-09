//the function to calculator the formula
function calcAvgSquare(num1,num2,num3){
   answer = ((num1 + num2 + num3)/3) * Math.pow(num1,2)
   return answer
  }
  
function randomMultiply(num4,ran){
   answer = num4*ran
   return answer
  }
  
//main program
let choice = prompt("Which function do you want to use? calculateAverageSquare or randomMultiple?")
if (choice == "calculateAverageSquare"){
  let num1 = Number(prompt("Enter your first number"))
  let num2 = Number(prompt("Enter your second number"))
  let num3 = Number(prompt("Enter your third number"))
  let answer = calcAvgSquare(num1,num2,num3)
  alert(`The answer using ${num1}, ${num2}, ${num3} is ${answer}`)
}else if (choice == "randomMultiple"){
  let num4 = Number(prompt("Enter your number"))
  let ran =Math.round(Math.random())
  let result=""
  result = randomMultiply(num4,ran)
  alert(`The result of multiplying the random number ${ran} with ${num4} is ${result}`)
}
