function agregarEntrada() {
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const edadInput = document.getElementById('edad');
    const dniInput = document.getElementById('dni');
    const emailInput = document.getElementById('email');

    let agregoEntrada = true;

    //valido nombre usando and
    if (!( 2 < nombreInput.value.length && 21 > nombreInput.value.length)) {
        alert("nombre debe tener mas de 2 caracteres y menos de 21!");
        agregoEntrada = false;
    }

    //valido apellido usando 2 ifs ... 2 <apellidoInput.value.length <25 apellidoInput.value.length>siempre da true
    if (!( 2 < apellidoInput.value.length)) {
        alert("apellido debe tener al menos 3 caracteres!");
        agregoEntrada = false;
    } else if(!( 25 >= apellidoInput.value.length)) {
        alert("apellido debe tener menos de 25 caracteres!");
        agregoEntrada = false;
    }

    //valido edad
    if (edadInput.value < 18) {
        alert("tenés que ser mayor de 18!");
        agregoEntrada = false;
    } else if (edadInput.value > 120) {
        alert("tenés mas de 120 años? No te creo!");
        agregoEntrada = false;
    }

    //valido DNI
    if (dniInput.value < 1000000 ) {
        alert("El DNI debe tener al menos 7 dígitos");
        agregoEntrada = false;
    }

    //valido el mail
    if (!(emailInput.value.includes("@"))) {
        alert("Por favor, ingresá un email válido");
        agregoEntrada = false;
    }

    if (agregoEntrada) {
        const tablaEntradas = document.getElementById('tabla-entradas');
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const edad = edadInput.value;
        const dni = dniInput.value;
        const email = emailInput.value;

        const fila = document.createElement('tr');
        const celdaNombre = document.createElement('td');
        const celdaApellido = document.createElement('td');
        const celdaEdad = document.createElement('td');
        const celdaDni = document.createElement('td');
        const celdaEmail = document.createElement('td');

        celdaNombre.textContent = nombre;
        celdaApellido.textContent = apellido;
        celdaEdad.textContent = edad;
        celdaDni.textContent = dni;
        celdaEmail.textContent = email;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaDni);
        fila.appendChild(celdaEmail);

        tablaEntradas.appendChild(fila);

        nombreInput.value = '';
        apellidoInput.value = '';
        edadInput.value = '';
        dniInput.value = '';
        emailInput.value = '';
    }
}