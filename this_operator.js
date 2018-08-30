
   window.onload = function(){

    let str ='';
    var body  = document.getElementById("TBL");


    //creation of table
    var table = document.createElement('table'); 

    //creation of table body
    let tblb = document.createElement('TBODY');

    //append the table body to the table
    table.appendChild(tblb);


    // loop to create rows and columns 
    for (let i = 65; i <= 220; i++){
        str += String.fromCodePoint(i);
        //CREATE THE ROWS
        var tr = document.createElement('TR');

        //append the rows to the body 
        tblb.appendChild(tr);

     
        //creation and appending of columns 
        for (var j=0; j<10; j++){
            var td = document.createElement('TD');
            td.innerText=str[j];
            tr.appendChild(td);
        }   

    }

    body.appendChild(table);


   }

   
    

   
   
   


    // alert( "\u00A9" ); // ©
    // alert( "\u{20331}" ); // 佫, a rare chinese hieroglyph (long unicode)
    // alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)



    // let guestlist =`Guests:
    // John
    // sidra
    // usman
    // ali`;

    // alert(guestlist);





    // let firstNum = document.getElementById("firstnumber").value;
    // let secondNum = document.getElementById("firstnumber").value;

    // if(document.getElementById("pressed"))
    // document.getElementById("con").innerText=firstNum +secondNum;

    // ispressed

    // alert(+parseInt('100px'));

    // alert ( (0.1+0.3).toFixed(1)==0.4);

    // alert(0.1 + 0.2==0.3);

    // _____________________
    // let num = 12.36;
    // alert(num.toFixed(1));

    // ________________________
    // let num =255;

    // alert(num.toString(16));
    // alert(num.toString(2));

    // ________________________

    // let a = 0b111111111;
    // let b = 0o377;

    // ________________________
    // let number = 1e-3;
    // function numberfunc(){
    // return(number == 0.001);
    // }

    // // alert(numberfunc());


    // alert(0xff);
    // alert(0xFF);

    // _________________________
    // let john={
    // name:"john",
    // sayhi: function(){
    //     return(this.name);
    // }


    // }

    // document.getElementById("con").innerText= john.sayhi();


    // _____________________
    // let user = function(name){
    //     this.name = "sidra";
    //     this.isAdmin =false;
    // }

    // let newuser = new user("sidra");

    // alert(newuser.name);
    // alert(newuser.isAdmin);