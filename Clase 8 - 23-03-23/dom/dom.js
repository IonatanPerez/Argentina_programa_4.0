console.log("script cargado");
let titulo = document.createElement("h1");
titulo.innerText = "Hola Mundo";

let parrafo = document.createElement("p");
parrafo.innerHTML = "Este es un <b>parrafo</b> con <i>HTML</i> dentro";
document.body.appendChild(parrafo);
document.body.appendChild(titulo);



let label = document.createElement("label");
label.innerText = "Seleccione que desea duplicar";
let select = document.createElement("select");
let posibilidades = ['p', 'h1']
for (let i = 0; i < posibilidades.length; i++) {
    var opcion = document.createElement("option");
    opcion.value = posibilidades[i];
    opcion.innerText = posibilidades[i];
    select.appendChild(opcion);
}
document.body.appendChild(label);
document.body.appendChild(select);
boton = document.createElement("button");
boton.innerText = "Duplicar";

boton.onclick = function() { duplicar_elemento() };
document.body.appendChild(boton);

colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white"];
i = 0;

function duplicar_elemento() {
    let elemento = document.querySelector("select").value;
    i = i + 1;
    i = i % colors.length;
    let a_copiar = document.querySelector(elemento);
    a_copiar = a_copiar.cloneNode(true);
    a_copiar.style.backgroundColor = colors[i];
    if (a_copiar.style.backgroundColor == "black") {
        a_copiar.style.color = "white";
    }
    document.body.appendChild(a_copiar); 
}



