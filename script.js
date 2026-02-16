const rangeVerde = document.getElementById('rangeVerde');
const rangeRojo = document.getElementById('rangeRojo');
const boxVerde = document.getElementById('boxVerde');
const boxRojo = document.getElementById('boxRojo');
const txtVerde = document.getElementById('txtVerde');
const txtRojo = document.getElementById('txtRojo');

// Función para convertir decimal a Hex
function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Actualizar Verde (Canal G)
rangeVerde.addEventListener('input', (e) => {
    const val = e.target.value;
    const hex = "#00" + componentToHex(val) + "00";
    boxVerde.style.backgroundColor = hex;
    txtVerde.textContent = hex.toUpperCase();
});

// Actualizar Rojo (Canal R)
rangeRojo.addEventListener('input', (e) => {
    const val = e.target.value;
    const hex = "#" + componentToHex(val) + "0000";
    boxRojo.style.backgroundColor = hex;
    txtRojo.textContent = hex.toUpperCase();
});