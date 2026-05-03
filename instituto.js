const {
    ejercicio2e
}=require("./modulos")
/* 2) Crear un archivo llamado instituto.js, dentro de este archivo
crear un objeto que se llame alumno con las siguientes
propiedades: Nombre, Edad, inscriptoAMaterias (un array de
strings), debeCorrelativa (un booleano)
realizar los siguientes métodos.
 */



/* a) Se desea generar un método para realizar una inscripción a una
materia (recibe como parámetro de entrada el objeto alumno, y el
nombre de la materia a inscribirse) y un método para validar si
tiene las correlativas aprobadas (recibe como parámetro de
entrada el objeto alumno) */
/* b) El método para realizar una inscripción no se debe ejecutar
hasta no validar si tiene las correlativas aprobadas. En el
método validarCorrelativa, utilizar la propiedad
“debeCorrelativa” para validarlo, en el método para inscribir,
en caso de que el alumno no deba la correlativa, agregar la
materia al array de materias “inscriptoAMaterias” del objeto. */
/* c) Simular retardos en los métodos de validar correlativas y
realizar inscripción de 2 segundos y 5 segundos respectivamente. */


function validarCorrelativa(alumno) {
    return new Promise((resolve, reject) => {
        console.log("Aguarde, validando correlativas")
        setTimeout(() => {
            if (!alumno.debeCorrelativa) {
                resolve("Correlativas validada, se procede a la inscripción de materias")
            } else {
                reject("No puede inscribirse a la materia por correlativas pendientes")
            }
        },2000)
    })
}

function inscripcionMateria(alumno,nombreMateria){
console.log("Se está ejecutando la inscripción")
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        alumno.inscriptoAMaterias.push(nombreMateria)
        resolve(`${alumno.nombre}, se realizó la inscripción correctamente a la materia ${nombreMateria}`)
    },5000)

})
}
/* d) En cualquiera de los dos casos se debe ejecutar un log en
consola que informe que se finalizó la operación. */
/* e) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado) */
module.exports={
    validarCorrelativa,inscripcionMateria
}
 
