//Global Variable
let display = "";
let firstNumber = 0;
let secondNumber = null;
let output = 0;
let sign = null;

function result(sign) {//start

  if(sign === "+") {
    output = firstNumber;
  }
  if(sign === "-") {
    output = firstNumber;
  }
  if(sign === "*") {
      output = firstNumber;
   }
  if(sign === "/") {
      output = firstNumber;
  }
  if(sign === "%") {
    output = firstNumber;
  }

}//end

function finalResult(sign) {//start

    secondNumber = Number(document.getElementById("calculatorScreen").value);
    console.log(secondNumber);
    if(sign === "+") {
      output = firstNumber + secondNumber;
    }
    if(sign === "-") {
      output = firstNumber - secondNumber;
    }
    if(sign === "*") {
        output = firstNumber * secondNumber;
    }
    if(sign === "/") {
        output = firstNumber / secondNumber;
    }
    if(sign === "%") {
      output = firstNumber % secondNumber;
    }
    firstNumber = output;
    secondNumber = null;

  }//end


function zero() {
  document.getElementById("calculatorScreen").innerHTML = display + "0";
  display+= "0";
}
function one() {
  document.getElementById("calculatorScreen").innerHTML = display + "1";
  display+= "1";
}
function two() {
  document.getElementById("calculatorScreen").innerHTML = display + "2";
  display+= "2";
}
function three() {
  document.getElementById("calculatorScreen").innerHTML = display + "3";
  display+= "3";
}
function four() {
  document.getElementById("calculatorScreen").innerHTML = display + "4";
  display+= "4";
}
function five() {
  document.getElementById("calculatorScreen").innerHTML = display + "5";
  display+= "5";
}
function six() {

  document.getElementById("calculatorScreen").innerHTML = display + "6";
  display+= "6";
}
function seven() {
  document.getElementById("calculatorScreen").innerHTML = display + "7";
  display+= "7";
}
function eight() {
  document.getElementById("calculatorScreen").innerHTML = display + "8";
  display+= "8";
}
function nine() {
  document.getElementById("calculatorScreen").innerHTML = display + "9";
  display+= "9";
}
function decimal() {
  document.getElementById("calculatorScreen").innerHTML = display + ".";
  display+= ".";
}
function add() {

  if(secondNumber === null) {
    firstNumber = Number(document.getElementById("calculatorScreen").value);
    result("+");
  }
  else {
  result(sign);
  }
  document.getElementById("calculatorScreen").innerHTML = "+";
  display = "";
  firstNumber = output;
  sign = "+";

}
function subtract() {
  if(secondNumber === null) {
    firstNumber = Number(document.getElementById("calculatorScreen").value);
    result("-");
  }
  else {
  finalResult(sign);
  }
  document.getElementById("calculatorScreen").innerHTML = "-";
  display = "";
  firstNumber = output;
  sign = "-";
}
function multiply() {
  if(secondNumber === null) {
    firstNumber = Number(document.getElementById("calculatorScreen").value);
    result("*");
  }
  else {
  finalResult(sign);
  }
  document.getElementById("calculatorScreen").innerHTML = "*";
  display = "";
  firstNumber = output;
  sign = "*";
}
function divide() {
  if(secondNumber === null) {
    firstNumber = Number(document.getElementById("calculatorScreen").value);
    result("/");
  }
  else {
  finalResult(sign);
  }
  document.getElementById("calculatorScreen").innerHTML = "/";
  display = "";
  firstNumber = output;
  sign = "/";
}
function remainder() {
  if(secondNumber === null) {
    firstNumber = Number(document.getElementById("calculatorScreen").value);
    result("%");
  }
  else {
  finalResult(sign);
  }
  document.getElementById("calculatorScreen").innerHTML = "%";
  display = "";
  firstNumber = output;
  sign = "%";
}
function equalTo() {
    console.log(firstNumber)
    finalResult(sign);

let ele = document.getElementById("calculatorScreen");
ele.innerHTML = output;
display = "";

}
function clearAll()
{
  firstNumber = 0;
  secondNumber = null;
  document.getElementById("calculatorScreen").innerHTML = "";
}
function startCalculator() {
  document.getElementById("calculatorScreen").innerHTML = "Let's Start!!!";
  display = "";
}
