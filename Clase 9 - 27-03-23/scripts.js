class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    presentarse() {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años."
    }
}

function cargarPersona() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let persona = new Persona(nombre, apellido, edad);
    let personas = JSON.parse(localStorage.getItem("personas"));
    if (personas == null) {
        personas = [];
    }
    personas.push(persona);
    localStorage.setItem("personas", JSON.stringify(personas));
    alert (`Se ha cargado los datos de la persona con exito, ya hay ${personas.length} personas cargadas.`)
}

function limpiar_lista() {
    localStorage.setItem("personas", JSON.stringify([]));
    alert("Se ha limpiado la lista de personas con exito.")
}

function crear_visualizacion() {
    let personas_json = JSON.parse(localStorage.getItem("personas"));
    for (persona_json of personas_json) {
        let persona = new Persona(persona_json.nombre, persona_json.apellido, persona_json.edad);
        let titulo = document.createElement("h1");
        titulo.innerHTML = persona.nombre + " " + persona.apellido;
        document.body.appendChild(titulo);
        let parrafo = document.createElement("p");
        parrafo.innerHTML = persona.presentarse();
        document.body.appendChild(parrafo);
    }
}