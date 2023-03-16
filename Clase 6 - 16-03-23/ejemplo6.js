// Hablar de listas y numeracion de elementos
let nombre = prompt("Ingrese su nombre");
largo = nombre.length;
alert ("El nombre tiene " + largo + " letras.");
let gano = false;
for (let i = 0; i < largo; i++) {
    alert("Te damos una pista, la letra " + (i + 1) + " es " + nombre[i] + ". Te quedan " + (largo - i - 1) + " intentos.");
    let intento = prompt("¿Adivinaste el nombre?");  
    if (intento == nombre) {
        alert("¡Ganaste!");
        gano = true;
        break;
    }
}
if (!gano) {
    alert("Perdiste! Sos malísime.");
}