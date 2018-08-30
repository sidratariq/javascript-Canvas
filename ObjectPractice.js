const user ={
  name:"ali",
  level:"student",
  education:"marticulation",
 
};

let permissions2 = { canEdit: true };

let clone ={};
for (key in user){
  clone[key]=user[key];
}

// for(key in clone){
//   alert(clone[key]);

//   alert(key);
// }

Object.assign(user,permissions2);

for(key in user){
  alert(key);
}

// /__________________________________________________/ 


// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
//   };
  
//   for(let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
//   }

// _________________________________________________________________
// let user = {
//     name:"sidra",
//     age:20,
//     "likes pets": true
// }

// let key = prompt("what do you want to know about the user name/age/likness","John Doe");

// for(keys in user){
//     if(key ==keys){
//         alert(user[keys]);
//     }
    
    
    

// }


// if(key =="name"){
// alert(user[name]);
// }
// else if(key =="age"){
//     alert(user[age]);
// }
// else if(key == "likes pets"){
// alert(user["likes pets"]);
// }
// else{
//     alert("John Doe")
// }

// switch(key){
    
//     case user[name]:
//     alert(user[name]);
//     break;

//     // case user[age]:
//     // alert(user[age]);
//     // break;
     
//     case user["likes pet"]:
//     alert(user["likes pets"]);
//     break;

//     default:
//     alert("John Doe");
//     break;

// }