let color = prompt("Ingrese un color");
switch (color.toLowerCase()) {
    case "rojo":
        document.body.style.backgroundColor = "red";
        break;
    case "verde":
        document.body.style.backgroundColor = "green";
        break;
    case "azul":
        document.body.style.backgroundColor = "blue";
        break;
    default:
        alert("No es un color conocido.")
        document.body.style.backgroundColor = "white";
}