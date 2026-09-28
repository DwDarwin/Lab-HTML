document.getElementById('rojo').innerHTML = "adios";

document.getElementById('title1').style.color = "orange";

const click = document.getElementById("click");

click.onclick = function() {
    click.style.color = "brown";
};

const colorAut = document.getElementById("dar");

const colores = ["red", "blue", "green", "purple", "orange", "brown"];

let posicion = 0;

setInterval(function() {
    colorAut.style.color = colores[posicion];

    posicion++;

    if (posicion === colores.length) {
        posicion = 0;
    }
}, 100);