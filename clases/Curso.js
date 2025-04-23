export default class Curso {
    constructor(nombre,imagenMiniatura, numeroClases) {
        this.nombre = nombre;
        this.imagenMiniatura = imagenMiniatura;
        this.numeroClases = numeroClases;
        this.inscritos = [];
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getImagenMiniatura() {
        return this.imagenMiniatura;
    }
    setImagenMiniatura(imagenMiniatura) {
        this.imagenMiniatura = imagenMiniatura;
    }
    getNumeroClases() {
        return this.numeroClases;
    }
    setNumeroClases(numeroClases) {
        this.numeroClases = numeroClases;
    }
    getInscritos() {
        return this.inscritos;
    }
    setInscritos(inscritos) {
        this.inscritos = inscritos;
    }
}