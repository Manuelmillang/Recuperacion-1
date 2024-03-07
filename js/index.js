// Inputs:
const multiplicando = document.querySelector("#multiplicando");
const taulaMulti = document.querySelector("#taulaMulti");
const colorAleatori = document.querySelector("#colorAleatori");
const principal = document.querySelector("#principal");
const numero = document.querySelector("#numero");
const resultatArray = document.querySelector("#resultatArray");

// Botons:
const btnTaulaMulti = document.querySelector("#btnTaulaMulti");
const btnNetejaEx1 = document.querySelector("#netejaEx1");
const btnStartStop = document.querySelector("#btnStartStop");
const btnNetejaEx2 = document.querySelector("#netejaEx2");
const btnAfegir = document.querySelector("#btnAfegir");
const netejaEx3 = document.querySelector("#netejaEx3");

//Events:
btnTaulaMulti.onclick = generaTabla;
btnNetejaEx1.onclick = netejaEx1;
btnStartStop.onclick = startStopGame;
btnNetejaEx2.onclick = netejaEx2;
btnAfegir.onclick = afegeixElementArray;
netejaEx3.onclick = netejaArray;

/* Exercici 1*/
function generaTabla() {
    var number = parseInt(multiplicando.value);
    if (isNaN(number)) {
        alert('Por favor ingresa un número válido.');
        return;
    }

    var tableHtml = '<table>';
    tableHtml += '<tr><th>Multiplicando</th><th>Multiplicador</th><th>Resultado</th></tr>';

    for (var i = 0; i <= 10; i++) {
        var result = number * i;

        tableHtml += '<tr>';
        tableHtml += '<td>' + number + '</td><td>' + i + '</td><td>' + result + '</td>';
        tableHtml += '</tr>';
    }

    tableHtml += '</table>';

    taulaMulti.innerHTML = tableHtml;
}

function netejaEx1() {
    taulaMulti.innerHTML = '';

}


/* Exercici 2*/
let intervalo;
function startStopGame() {

}

let color = "";

function startAleatori() {

}

function stopAleatori() {

}

function netejaEx2() {

}


/* Exercici 3*/
let array = [];
let

function afegeixElementArray() {

}

function netejaArray() {

}