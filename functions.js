// let username ="sadia";

// alert(username);
// console.log(username);
// function sayHello(){
//     username = "sidra";
//     alert("Hello"+username);
//     console.log(username);

// }

// sayHello();
// console.log(username);


// function showMessage(from, text){
//     from = '*' + from +'*';
//     console.log(from);
//     alert(from + ':' + text);   
// }

// // let from = '';

// showMessage();
// alert(from);

// function checkage(age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         confirm("got permission from parents");
//     }

// }

// let age = prompt('Enter your right age',18);

// if(checkage(age)){
//     alert("Access Granted");
// }
// else{
//     alert("Access Denied");
// }

// function showMessage(age){
//     function showMessage(age){
//         return;
//     }
// }

// alert(showMessage());
// consol.log();

//     function pow(x,n){
//         let result =x;
//         for(i =1; i<=n;i++){

//            result *= x;  
//            console.log(`${i} times run ${result}` );
//         }
//         return result;

//     }



//   let value=  pow(prompt("enter value for taking power",2),prompt("how many times you want to multiply",2));
// alert(value);

// function ask(question,yes,no){
//     if(confirm(question))yes();
//     else no();
// }

// function showConfirm(){
//     alert("you said yes");
// }

// function showCancel(){
//     alert("You cancelled");
// }

// ask("Do you agree",showConfirm,showCancel);

// let sum =(a,b) => a+b;

// alert(sum(1,2));

// let double =n => n *2;

// let sayHi =() =>alert("Hello");

// let a = prompt("Your age",18);

// let welcome = (a<18)?
// () =>alert("Hello"):
// () =>alert("Greetings");

// welcome();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

//   function ask(question,yes,no){
//       if(confirm(question)) yes()
//       else no();
//   }

// // var canvas=document.getElementById("canvas");
// var canvas1=canvas.getContext("2d");
// canvas1.fillStyle="#FF0000";
// canvas1.fillRect(50, 50, 50, 50);

var canvas = document.getElementById("canvas");
var canvas1 = canvas.getContext("2d");
canvas1.fillStyle = "#FF0000";
canvas1.fillRect(50, 50, 50, 100);

canvas1.fillStyle = "rgba(0, 0, 50, 100)";
canvas1.fillRect(50, 200, 200, 200);

canvas1.fillStyle = "rgba(20, 20, 20, 20)";
canvas1.fillRect(275, 275, 50, 50);

var canvas2a = document.getElementById("canvas1");
var canvas2 = canvas2a.getContext("2d");
canvas2.beginPath(); //declare the beginning of settings for our line

canvas2.strokeStyle = "rgba(50, 0, 0, 0.5)";
canvas2.moveTo(75, 150); // set the starting point of our "pen" to the middle

canvas2.lineTo(150, 200); // move our "pen" down 50 pixels, drawing a line

canvas2.lineTo(200, 200); // move our "pen" 50 pixels to the right
canvas2.closePath(); // Draw a direct line back to our starting point
canvas2.stroke(); // Visually place the defined line on
canvas2.fill();


var canvas3a = document.getElementById(canvas3);
var canvas3 = canvas3a.getContext("2d");

// canvas3.beginPath();
// canvas3.moveTo(10,130);
// canvas3.bezierCurveTo(0,10,290,10,290,290);
// canvas3.lineWidth =10;
// canvas3.strokeStyle= /black/;
// canvas3.stroke();
var gradient=anvas3.createLinearGradient(0,0,c.width,0);
gradient.addColorStop("0","red");
gradient.addColorStop("0.5","yellow");
gradient.addColorStop("1.0","blue");
ctx.fillStyle=gradient;
ctx.fillText("Let's see some color!",10,90);

