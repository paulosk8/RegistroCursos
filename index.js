import Curso from "./clases/Curso.js";

const element = document.getElementById("curso");
const formulario = document.getElementById("formulario");
const registrar = document.getElementById("registrar");

function mostrarCurso(curso) {
  const cnt = document.createElement("div");
  cnt.classList.add("col");
  const card = document.createElement("div");
  card.classList.add("col", "shadow-sm", "rounded");
  card.style.width = "22 rem";
  card.innerHTML = `
    <img src="${curso.getImagenMiniatura()}" class="card-img-top"/>
    <div class="card-body">
      <h5 class="card-title pt-2">${curso.getNombre()}</h5>
      <p class="card-text">Duración: ${curso.getNumeroClases()} horas</p>
    </div>
  `;
  cnt.appendChild(card);
  element.appendChild(cnt);
}

function registrarCurso() {
  const nombre = document.getElementById("nombre").value;
  const link = document.getElementById("link").value;
  const horas = document.getElementById("horas").value;
  if (nombre === "" || link === "" || horas === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    const nuevoCurso = new Curso(nombre, link, horas);
    mostrarCurso(nuevoCurso);
  }
}

registrar.addEventListener("click", () => {
  registrarCurso();
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
