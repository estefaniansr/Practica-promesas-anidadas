const colors = require ("colors")
console.log("Error".red)
console.log("Exito".green)
console.log("Información".yellow)
const{
    ejercicio1e,ejercicio2e,ejercicio3f
}=require("./modulos")
const alumno = {
nombre:"Martin",
edad:20,
inscriptoAMaterias:["Backend","Frontend","Ing. de Software","PP3"],
debeCorrelativa:true
}
const producto1 = {
    id: 1,
    nombreProducto: "Limpiador",
    precio: 1800,
    stock: 10
}
const producto2 = {
    id: 2,
    nombreProducto: "Escoba",
    precio: 3000,
    stock: 5
}
const producto3 = {
    id: 3,
    nombreProducto: "Desodorante",
    precio: 2600,
    stock: 20
}
const producto4 = {
    id: 4,
    nombreProducto: "Secador",
    precio: 3200,
    stock: 15
}
const producto5 = {
    id: 5,
    nombreProducto: "Trapo",
    precio: 1500,
    stock: 15
}
const productos = [producto1, producto2, producto3, producto4, producto5]

ejercicio1e()
ejercicio2e(alumno,"Optativa")
ejercicio3f("Escoba",productos,2)