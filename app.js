// Crear un array vacío para guardar los nombres de los amigos
const amigos = [];

function agregarAmigo() {
    // Obtener el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    // Validar que el valor no sea vacío
    if (nombre !== "") {
        // Agregar el nombre al array
        amigos.push(nombre);
        // Actualizo la lista
        actualizarListaAmigos();
        // Limpiar el input
        input.value = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function actualizarListaAmigos() {
    // Obtener el elemento ul
    const listaAmigos = document.getElementById("listaAmigos");
    // Limpiar la lista
    listaAmigos.innerHTML = "";
    // Recorrer el array y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}