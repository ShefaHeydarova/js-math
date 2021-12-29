let c=1;
 
let a = prompt("ededi daxil edin");
 
let b = prompt("quvvet daxil edin");


 function hesabla(){

    for(b; b>0;b--){
        c = a*c;
    }

    document.getElementById("show").innerHTML = c;

 }

 hesabla();