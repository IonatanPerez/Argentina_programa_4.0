let edad = prompt("ingresa tu edad")
switch (true) {
  case edad >= 21:
    alert("podés comprar propiedades");
  case edad >= 18:
    alert("podes comprar alcohol");
  case edad >= 16:
    alert("podes votar");
    break;
  default:
    alert("No podés hacer nada!");
}