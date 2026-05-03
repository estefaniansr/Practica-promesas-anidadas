const colors = require("colors")

/* 1) Crear un archivo llamado cuentaBancaria.js, dentro de este
archivo realizar los siguientes métodos. */

/* a) Se desea generar un método para realizar una transferencia y un
método para validar el saldo disponible en la cuenta. */

/* c) Simular retardos en los métodos de validar saldo y realizar
transferencia de 5 segundos y 10 segundos respectivamente. */
let haySaldo = true
function validarSaldo() {
    return new Promise((resolve, reject) => {
        console.log("Entrando en validarSaldo")
        setTimeout(() => {
            if (haySaldo) {
                resolve("Hay saldo en la cuenta, se va a realizar la transferencia".green)
            } else {
                reject("No hay saldo en la cuenta, transferencia rechazada".red)
            }
        }, 5000
        )
    }
    )
}

function ejecutarTransferencia() {
    console.log("Entrando a ejecutar tranferencia")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Se ejecutó la transferencia".green)
        }, 10000)
    })
}
/* b) El método de realizar transferencia no se debe ejecutar hasta no
validar el saldo y que haya saldo suficiente.
 */

/* e) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado) pasándole las callbacks necesarias. */
module.exports={
    validarSaldo,ejecutarTransferencia
}



