function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("LI");
    nuevaTarea.textContent = nuevaTareaTexto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };

    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    }

}
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
    }
    document.getElementById("listaTareas").addEventListener("click",
    function(event) {
    if (event.target.tagName === "LI") {
    marcarCompletada(event.target);
    }
    });
    document.getElementById("agregar").addEventListener("click",
    agregarTarea);

//No se muestran las tareas completas, solo las pendientes
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li"); tarea.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
}



function mostrarPendientes() {
    const tarea = document.querySelectorAll("li"); tarea.forEach(tarea => {
    if (!tarea.classList.contains("completed")){
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);
}

