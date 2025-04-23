import Curso from "./clases/Curso.js";
const javascript = new Curso(
  "Curso de JavaScript",
  "https://img-c.udemycdn.com/course/240x135/3425556_d8eb_2.jpg",
  10
);
console.log(javascript);

const element = document.getElementById("curso"); // Obtener el elemento del DOM
element.innerHTML = `
<img src="${javascript.getImagenMiniatura()}" alt="${javascript.getNombre()}" />
<h3>${javascript.getNombre()}</h3>
<span>Total de clases: ${javascript.getNumeroClases()} clases</span>
`; 
