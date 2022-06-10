// //Question no1

//  var date = new Date();

//  // get the date as a string
//  var n = date.toDateString();

//  // get the time as a string
//  var time = date.toLocaleTimeString();

//  // display date
//  console.log('Date: ' + n);

//  // display time
//  console.log('Time: ' + time);


//Question no 2
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(4,7);
// if (c === "Jan"){
//     document.write("Current month: January")
// }else if(c === "Feb"){
//     document.write("Current month: February")
// }else if(c === "Mar"){
//     document.write("Current month: March")
// }else if(c === "Apr"){
//     document.write("Current month: April")
// }else if(c === "May"){
//     document.write("Current month: May")
// }else if(c === "Jun"){
//     document.write("Current month: June")
// }else if(c === "Jul"){
//     document.write("Current month: July")
// }else if(c === "Aug"){
//     document.write("Current month: August")
// }else if(c === "Sep"){
//     document.write("Current month: September")
// }else if(c === "Oct"){
//     document.write("Current month: October")
// }else if(c === "Nov"){
//     document.write("Current month: November")
// }else if(c === "Dec"){
//     document.write("Current month: December")
// }

//question 3


// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);


                            //function


//question no 1

// program to display the date
// get local machine date time
// const date = new Date();

// // get the date as a string
// const n = date.toDateString();

// // get the time as a string
// const time = date.toLocaleTimeString();

// // display date
// console.log('Date: ' + n);

// // display time
// console.log('Time: ' + time);


        //question no 3

        // function MyFunction() {
        //     var first, second;
        //     first = document.getElementById("firstname").value;
        //     second = document.getElementById("lastname").value;
        
        //     document.GetElementById("here").InnerHTML = first;
        //     document.GetElementById("here").InnerHTML = second;
        // }


        //Question no 4
//         var numOne = 10;
//         var numTwo = 20;
//         var sum = numOne+numTwo;
//         document.write("Sum = " + sum);
//         function add()
// {
//   var numOne, numTwo, sum;
//   numOne = parseInt(document.getElementById("first").value);
//   numTwo = parseInt(document.getElementById("second").value);
//   sum = numOne + numTwo;
//   document.getElementById("answer").value = sum;
// }
// numOne = parseInt(document.getElementById("first").value);
//   if(numOne)
//   {
//     temp = document.getElementById("paraOne");
//     temp.style.display = "none";
//     temp = document.getElementById("paraTwo");
//     temp.style.display = "block";
//   }

// function getSecNum()
// {
//   numTwo = parseInt(document.getElementById("second").value);
//   if(numOne && numTwo)
//   {
//     temp = document.getElementById("paraOne");
//     temp.style.display = "none";
//     temp = document.getElementById("paraTwo");
//     temp.style.display = "none";
//     sum = numOne + numTwo;
//     temp = document.getElementById("paraThree");
//     temp.style.display = "block";
//     document.getElementById("res").innerHTML = sum;
//   }
// }

//Question no 5

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }


//Question no 6
// function sumOfSquares(num) {
//     var i;

//     for (i=0,i<=num,i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum+ ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);


// function sumOfSquares(num) {
//     var i;

//     for (i=0,i<=num,i++)}



// Question no 7
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

//Question no 7

// program to display numbers from 1 to 5
// initialize the variable
// var i = 1, n = 5;

// // while loop from i = 1 to 5
// while (i <= n) {
//     console.log(i);
//     i += 1;
// }

// var sum = 0;

// // take input from the user
// var number = parseInt(prompt('Enter a number: '));

// while(number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

// Quetion no 8
// function getHypotenuseLength(a, b) { 
//     if (a && b && Number.isFinite(a) && Number.isFinite(b)) {  
//         return Math.sqrt((a * a) + (b * b)); 
//     } 
//     throw "Invalid numbers"; 
// } 
 
// getHypotenuseLength(5, 12) // 13 
