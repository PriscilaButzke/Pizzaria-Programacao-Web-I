'use strict'
const entra = document.querySelector("#entrar")
var e = document.querySelector("#email")
var s = document.querySelector("#password")
entra.addEventListener("click", entrar)


function entrar() {
 
    if (document.querySelector("#email").value == "p@gmail.com" && document.querySelector("#password").value == "123") {
        window.location.href="dashboard.html";
    } else {
        alert('Login ou senha inválido');
    }
}
