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

function sortearAmigo() {
  // Si hay al menos dos amigos, sortear uno
  if (amigos.length >= 2) {
    // Obtener un número aleatorio entre 0 y la cantidad de amigos
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];
    // Obtener el elemento ul
    const resultado = document.getElementById("resultado");
    // Limpiar la lista actual
    resultado.innerHTML = "";
    // Crear un nuevo elemento en la lista
    const li = document.createElement("li");
    li.textContent = amigoSorteado;
    // Agregar el elemento a la lista
    resultado.appendChild(li);
    // Cambiar el texto y funcion de sorteo
    const button = document.querySelector(".button-draw");
    button.textContent = "Reiniciar";
    button.setAttribute("onclick", "reiniciar()");
    // Cambiar funcion de agregar amigo
    const buttonAdd = document.querySelector(".button-add");
    buttonAdd.setAttribute(
      "onclick",
      "alert('Si quieres agregar nuevos amigos, debes reiniciar el sorteo')"
    );
  } else {
    alert("No hay suficientes amigos para sortear.");
  }
}

function reiniciar() {
  // Limpiar el array de amigos
  amigos.length = 0;
  // Limpia la lista de amigos
  document.getElementById("listaAmigos").innerHTML = "";
  // Limpia la lista de resultados
  document.getElementById("resultado").innerHTML = "";
  // Devolver el botón de reinicio a su estado inicial
  const button = document.querySelector(".button-draw");
  button.textContent = "Sortear amigo";
  button.setAttribute("onclick", "sortearAmigo()");
  // Devolver el botón de agregar amigo a su estado inicial
  const buttonAdd = document.querySelector(".button-add");
  buttonAdd.setAttribute("onclick", "agregarAmigo()");
}
