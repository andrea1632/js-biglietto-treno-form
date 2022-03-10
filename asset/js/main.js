let nome = document.getElementById("nomeInput");
let km = document.getElementById("kmInput");
let age = document.getElementById("ageInput");
let bottoneGenera = document.getElementById("genera");
let display = document.getElementById("dNone");

bottoneGenera.addEventListener("click",
    function(){
        nome = nome.value
        km = km.value
        age = age.value
        
    }    
);
document.getElementById("nomePasseggero").innerHTML = nome;
