
let inputLabel = document.getElementById("number-screen");
let screen = document.getElementsByClassName("screen")[0];
var numbers = ['9','8','7', '6' ,'5','4','3','2','1','0','+','-','*','/','=','.'];
var result = "";


//1: Special cases 
//1.1: User enter 2 opreations after each other Like 2+* or 4/*
//1.2: Reset label screen after showing result 
//1.3: User enter long numbers there will be overflow ?!!!
//1.4: Format numbers like 1,990

//After showing result make the flag false so will clean label
let flag = true;
//store previues value of num to check if the current num and previous num are both opreator
let previousNum = "0";

function printScreen(number) {
  if (!(typeof number === 'string'))
  {
  let num = number.innerText;
  printScreen(num);
  }
  else {
    num = number;
  
  if (((num === ("*")) || (num === ("+")) || (num === ("/")) || (num === ("-"))) 
  && ((previousNum === ("*")) || (previousNum === ("+")) || (previousNum === ("/")) || (previousNum === ("-")))) 
  {
    inputLabel.innerText = "Wrong Formula";
    flag = false;
  }
  else {
   previousNum = num;

  if (flag) {
    if (num === "AC") {
      inputLabel.innerText = "";
    } else if (num === "=") {
      inputLabel.innerText = eval(inputLabel.innerText).toPrecision(10);
      flag = false;
    } else {
      inputLabel.innerText = inputLabel.innerText + num;
    }
  }
  else {
    inputLabel.innerText = "";
    flag = true; }
} } }

//2: Special cases:
//2.1: The user may enter letters or some symbile #$ 
//2.2: Here we check if the string is in array or not 
//2.3: If it is not in array this mean the user enter wrong value
//2.4: You can see result by enter or = 
//2.5: You can delete by space button from keyborad

document.onkeypress = function(event) {
  var key_press = String.fromCharCode(event.keyCode);
  var codeForDelete = event.keyCode; //To get ASCII code 
  console.log(codeForDelete);
  console.log(key_press);


  if (codeForDelete == 13){ //13 from ASCII code mean it is Enter 
    printScreen("=");
  }
  else if ( (codeForDelete == 8) || (codeForDelete == 00) ){ //8 From ASCII code mean it is backspace and 46 delete
    printScreen("AC");
  }
  else if (numbers.includes(key_press)) {
    printScreen(key_press);
  }
  else if (codeForDelete == 41) {
    printScreen(")");
  }
  else if (codeForDelete == 40) {
    printScreen("(");
  }
  else if (codeForDelete == 46) {
    printScreen(".");
  }
  else {
    inputLabel.innerText = inputLabel.innerText+ "";
  } 


}

