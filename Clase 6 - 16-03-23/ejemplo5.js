let nombre = "Francisco";
let adivinado = false
while (!adivinado) {
    let letra = prompt("Ingrese una letra");
    if (nombre.includes(letra)) {
        alert("La letra está en el nombre");
    } else {
        alert("La letra no está en el nombre");
    }
    let intento = prompt("¿Adivinaste el nombre?");
    if (intento == nombre) {
        alert("¡Ganaste!");
        adivinado = true;
    } else {
        alert("Segui intentando");
    }
}