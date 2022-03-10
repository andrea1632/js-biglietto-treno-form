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

        let tassaTreno = 0.21;
        let scontoMinori = `${((km*tassaTreno)*20)/100}`;
        let prezzoPieno = km*tassaTreno;
        let scontoAnziani = `${((km*tassaTreno)*40)/100}`;

        let prezzoAnziani = `${prezzoPieno - scontoAnziani}`;
        let prezzoGiovani = `${prezzoPieno - scontoMinori}`;

        prezzoPieno = Math.round(prezzoPieno * 10) / 10;
        prezzoGiovani= Math.round(prezzoGiovani * 10) / 10;
        prezzoAnziani = Math.round(prezzoAnziani * 10) / 10;

        display.classList.add("dBlock")
        console.log(typeof (scontoAnziani))

        document.getElementById("nomePasseggero").innerHTML = nome;

        if(age == "maggiorenne") {
            document.getElementById("offerta").innerHTML = `Biglietto Standard`
            document.getElementById("prezzoBiglietto").innerHTML = `€${prezzoPieno}`
        } else if(age == "minorenne"){
            document.getElementById("offerta").innerHTML = `Biglietto Giovani`
            document.getElementById("prezzoBiglietto").innerHTML = `€${prezzoGiovani}`
        } else{
            document.getElementById("offerta").innerHTML = `Biglietto Anziani`
            document.getElementById("prezzoBiglietto").innerHTML = `€${prezzoAnziani}`
        }
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10);
        document.getElementById("codiceCp").innerHTML = Math.floor(Math.random() * 99999);
        
    }    
);

