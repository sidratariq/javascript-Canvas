// let user ={
//     name:"john",
//     surname:"smith"

// };

// user.name="pete";

// delete(user.name);

// alert(user.name);

// task2

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function isEmpty(checkObj){
// return "key" in checkObj;

// }

// task3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum=0;
//   for(let key in salaries){
//       sum += salaries[key];
//   }
//   alert(sum);

// task4

// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);
  
//  function multiplyNumeric(menu){

//     for(let key in menu){
//         if(typeof(menu[key])  == 'number'){
//            menu[key] *=2;

//         } 
//     }
//  }

//  alert(menu.width);


// _________________________________________
// function marry(men,women){
//     women.husband = men;
//     men.wife = women;
    
//     return{
//         father:men,
//         mother:women
//     }
// }

// let family = marry({name:"John"},
// {name:"Ann"}
// );

// delete family.father;
// delete family.mother;

// _____________________________________________

// let id = Symbol("id");

// let user ={
//     name:"sidra",
//     age:20,
//     [id]:123
// }

// for (let key in user){
//     alert(user[key]);
// }

// alert(user[id]);

// ____________________________

let user={name:"sidra"} 
let admin={name:"ali"}

function sayHi(){
    for (let key in this){
        alert(this[key]) ; 
       
    }
    alert(this.name);
}

admin.f=sayHi;
user.f = sayHi;

user.f();
admin.f();