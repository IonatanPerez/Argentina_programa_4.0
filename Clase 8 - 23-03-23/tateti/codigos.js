const marcaJugador = "cruz";
const marcaOponente = "circulo";

function conseguirCelda(numero) {
  // 1. Devolver el elemento con id "clase"+numero
  return document; // tip: acceso a elementos
}

function agregarNumeros() {
  for (let i = 1; i <= 9; i++) {
    const celda = conseguirCelda(i);
    // 2. Agregar el numero "i" como texto de la celda
    celda; // tip: modificación de contenido
  }
}
document.body.onload = agregarNumeros;

function estaOcupada(numeroDeCelda) {
  const celda = conseguirCelda(numeroDeCelda);
  const tieneCruz = celda.classList.contains(marcaJugador);
  // 3. Verificar si la lista contiene la clase que marca al oponente
  const tieneCirculo = false; // tip: idem jugador, pero con marcaOponente
  return tieneCruz || tieneCirculo;
}

function marcarCelda(numeroDeCelda, marca) {
  const celda = conseguirCelda(numeroDeCelda);
  // 4. Agregar la marca pasada por parametro como clase
  celda.classList; // tip: modificacion de estilo
}

function tocarCelda(numeroDeCelda) {
  if (estaOcupada(numeroDeCelda)) return;

  marcarCelda(numeroDeCelda, marcaJugador);

  turnoDelOponente();
}

// ----------------------------------------------

function elegirCelda() {
  for (let i = 1; i <= 9; i++) {
    const ocupada = estaOcupada(i);
    if (!ocupada) return i;
  }
}

function turnoDelOponente() {
  const celda = elegirCelda();
  if (celda) marcarCelda(celda, marcaOponente);
}

function reiniciar() {
  for (let i = 1; i <= 9; i++) {
    const celda = conseguirCelda(i);
    celda.classList.remove(marcaJugador);
    // 5. Remover la clase que marca al oponente
    celda; // tip: idem jugador, pero con marcaOponente
  }
}
