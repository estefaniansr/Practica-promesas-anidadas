const{
    validarSaldo,ejecutarTransferencia
}=require("./cuentaBancaria")
const{
    validarCorrelativa,inscripcionMateria
}=require("./instituto")
const{
validarStock,realizarVenta,imprimirEtiqueta
}=require("./mercadoRestringido")

function ejercicio1e(){
    
    validarSaldo()
        .then(response => {
            
            console.log(`La respuesta recibida es ${response}`)
            return ejecutarTransferencia()
        })
        .then(response => {
            
            console.log(`La respuesta recibida es ${response}`.green)
        })
        .catch(error => {
            console.log("Catch")
            console.log(`El error es: ${error}`)
        })

}

function ejercicio2e(alumno,nombreMateria){
    
    validarCorrelativa(alumno)
    .then(response=>{
        console.log(`${response}`)
        return inscripcionMateria(alumno,nombreMateria)
    })
    .then(response=>{
        console.log(`${response}`)
    })
    .catch(error=>{
        console.log("error")
        console.log(`${error}`)
    })
    .finally(()=>{
        console.log(`Se finalizó la operación, estas son sus materias: ${alumno.inscriptoAMaterias}`)
    })
}

function ejercicio3f(nombreProducto,productos,cantidadVendida){
    
    validarStock(nombreProducto, productos)
        .then(producto => {
            console.log(producto)
            return realizarVenta(producto, cantidadVendida)
        })
        .then(response => {
            console.log(response)
            return imprimirEtiqueta(nombreProducto)
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log("Error")
            console.log(error)
        })
        .finally(() => {
            console.log("Se finalizó el proceso")
        })
}

module.exports={
    ejercicio1e,ejercicio3f,ejercicio2e
}