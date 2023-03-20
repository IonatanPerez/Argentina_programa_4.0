function sumar(numero1, numero2){
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function dividir(pepe, juan){
    return pepe / juan;
}

function operacion(operacion_elegida){
    num1 = parseFloat(document.getElementById("numero3").value);
    num2 = parseFloat(document.getElementById("numero4").value);
    let resultado;
    switch(operacion_elegida){
        case "sumar":
            resultado = sumar(num1, num2);
            break;
        case "restar":
            resultado = restar(num1, num2);
            break;
        case "multiplicar":
            resultado = multiplicar(num1, num2);
            break;
        case "dividir":
            resultado = dividir(num1, num2);
            break;
        default:
            alert("Operación no válida");
    }
    document.getElementById("resultado").innerText = resultado;
}