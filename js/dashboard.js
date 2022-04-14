'use strict';
const mussarel = document.getElementById("mussarela");
const calabres = document.getElementById("calabresa");
const margherit = document.getElementById("margherita");
const env = document.getElementById("enviar");
const est = document.getElementById("estorno");
const pla = document.getElementById("btplanilha");


env.addEventListener("click",vender);
est.addEventListener("click", estornar)
pla.addEventListener("click", enviar)
    function enviar(){
        TableToExcel.convert(document.getElementById("tabela"));
    }

var cCalabresa = 0;
var acCalabresa = 0.0;
var cMussarela = 0;
var acMussarela = 0.0;
var cMargherita = 0;
var acMargherita = 0.0;

function estornar(){
    if(mussarel.checked){
        if(cMussarela > 0){
        cMussarela--; // cMussarela = cMussarela + 1; contador
        acMussarela -= 30.99; //acMussarela = acMussarela + 30.00; acumular 
        document.getElementById("quantidadem").innerHTML = cMussarela;
        document.getElementById("somam").innerHTML ="R$ "+acMussarela.toFixed(2);
        }
    }else if(calabres.checked){
        if(cCalabresa > 0){
        cCalabresa--; // cMussarela = cMussarela + 1; contador
        acCalabresa -= 22.80; //acMussarela = acMussarela + 30.00; acumular 
        document.getElementById("quantidadec").innerHTML = cCalabresa;
        document.getElementById("somac").innerHTML ="R$ "+acCalabresa.toFixed(2);
        }
    }else{
        if(cMargherita > 0){
        cMargherita--; // cMussarela = cMussarela + 1; contador
        acMargherita -= 25.99; //acMussarela = acMussarela + 30.00; acumular 
        document.getElementById("quantidadema").innerHTML = cMargherita;
        document.getElementById("somama").innerHTML ="R$ "+acMargherita.toFixed(2);
        }
    }
}
function vender(){
    if(mussarela.checked){
        cMussarela++; // cMussarela = cMussarela + 1; contador
        acMussarela += 30.99; //acMussarela = acMussarela + 30.00; acumular 
        document.getElementById("quantidadem").innerHTML = cMussarela;
        document.getElementById("somam").innerHTML ="R$ "+acMussarela.toFixed(2);
    }else if(calabresa.checked){
        cCalabresa++; // cMussarela = cMussarela + 1; contador
        acCalabresa += 22.80; //acMussarela = acMussarela + 30.00; acumular 
        document.getElementById("quantidadec").innerHTML = cCalabresa;
        document.getElementById("somac").innerHTML ="R$ "+acCalabresa.toFixed(2);
    }else{
        cMargherita++; // cMussarela = cMussarela + 1; contador
        acMargherita += 25.99; //acMussarela = acMussarela + 30.00; acumular 
        document.getElementById("quantidadema").innerHTML = cMargherita;
        document.getElementById("somama").innerHTML ="R$ "+acMargherita.toFixed(2);
    }
}
