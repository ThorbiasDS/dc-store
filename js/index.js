let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let botao3 = document.querySelector("#botao3");
let botao4 = document.querySelector("#botao4");

let produtos1 = document.querySelector("#produtos1");
let produtos2 = document.querySelector("#produtos2");
let produtos3 = document.querySelector("#produtos3");
let produtos4 = document.querySelector("#produtos4");

produtos1.style.display = "block";
produtos2.style.display = "none";
produtos3.style.display = "none";
produtos4.style.display = "none";

botao1.addEventListener("click", function () {

    produtos1.style.display = "block";
    produtos2.style.display = "none";
    produtos3.style.display = "none";
    produtos4.style.display = "none";

});

botao2.addEventListener("click", function () {

    produtos2.style.display = "block";
    produtos1.style.display = "none";
    produtos3.style.display = "none";
    produtos4.style.display = "none";

});

botao3.addEventListener("click", function () {

    produtos3.style.display = "block";
    produtos1.style.display = "none";
    produtos2.style.display = "none";
    produtos4.style.display = "none";

});

botao4.addEventListener("click", function () {

    produtos4.style.display = "block";
    produtos1.style.display = "none";
    produtos2.style.display = "none";
    produtos3.style.display = "none";
    
});