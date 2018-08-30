function showmessage(){
    var message = confirm("want to see an alert");
    if(message){
        alert("you said yes");
    }
    else{
      
        document.getElementById("con").innerHTML = "BYE BYE";
        
    }
}

showmessage();