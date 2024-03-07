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
let funcionando = false;
let rgbColor;

function startStopGame() {
    if (!funcionando) {
        btnStartStop.textContent = "Stop";
        btnStartStop.className = "btn btn-danger";
        intervalo = setInterval(startAleatori, 100);
    } else {
        btnStartStop.textContent = "Start";
        btnStartStop.className = "btn btn-success";
        clearInterval(intervalo);
        stopAleatori()
    }
    funcionando = !funcionando;
}
let color = "";
function startAleatori() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    rgbColor = `rgb(${r}, ${g}, ${b})`;
    colorAleatori.style.backgroundColor = rgbColor;
}

function stopAleatori() {
    clearInterval(intervalo);
    const button = document.getElementById("btnStartStop");
    button.textContent = "Start";
    button.style.backgroundColor = "green";
    const principal = document.getElementById("principal");
    funcionando = false;
    principal.style.backgroundColor = rgbColor;

}

function netejaEx2() {
    clearInterval(intervalo);
    btnStartStop.textContent = "Start";
    btnStartStop.className = "btn btn-success";
    principal.style.backgroundColor = "";
    colorAleatori.textContent = "";
    colorAleatori.style.backgroundColor = "";
    isGenerating = false;
}


/* Exercici 3*/
let array = [];

function afegeixElementArray() {
    const numeroValue = parseInt(numero.value);
    if (isNaN(numeroValue) || numeroValue < -999 || numeroValue > 999) {
        return;
    }
    if (!array.includes(numeroValue)) {
        array.push(numeroValue);
        array.sort((a, b) => a - b);
        mostrarArray();
    }
}

function netejaArray() {
    array = [];
    mostrarArray();
}

function mostrarArray() {
    resultatArray.textContent = array.join(',');
}
