const {ejercicio3f}=require("./modulos")
/* 3) Crear un archivo llamado mercadoRestringido.js, dentro de este
archivo generar cinco objetos de tipo producto, deben tener las
propiedades: id, nombreProducto, precio, stock. Guardar los
cinco objetos en un array llamado productos. */

/* a) Se desea generar un método para realizar venta, validar stock y
generar etiqueta de envío. 
El método validarStock recibe como
parámetros de entrada un nombre de producto a buscar y el array productos, debe buscar el producto,
en el array de productos, en caso de que lo encuentre, debe validar el stock disponible. 
*/
/* d) Simular retardos en los métodos de validar correlativas y
realizar inscripción de 2 segundos y 1 segundos y 4 segundos
respectivamente. */
function validarStock(nombreProducto, productos) {
    let encontrado = false
    return new Promise((resolve, reject) => {
        console.log("Aguarde, estamos validando el stock")
        setTimeout(() => {
            productos.forEach((producto) => {
                if (producto.nombreProducto === nombreProducto) {
                    encontrado = true
                    if (producto.stock > 0) {
                        resolve(producto)
                    } else {
                        reject(`No contamos con stock de ${nombreProducto}`)
                    }
                }
            })
            if (!encontrado) {
                reject(`No existe inventario de ${nombreProducto}`)
            }
        }, 2000)
    })

}

/*El método realizarVenta, debe recibir como parámetro de entrada un
objeto producto, y en caso de que se ejecute la venta, descontar
la cantidad vendida del producto.*/
function realizarVenta(producto, cantidadVendida) {
    return new Promise((resolve, reject) => {
        console.log("Aguarde, estamos procesando la venta")
        setTimeout(() => {
            if (cantidadVendida > producto.stock) {
                reject(`La cantidad que solicita es mayor al stock, el stock actual es de ${producto.stock}`)
            } else {
                producto.stock = producto.stock - cantidadVendida
                resolve(`Se vendieron ${cantidadVendida}, quedan en stock ${producto.stock}`)
            }

        }, 1000)
    })
}

/* El método imprimirEtiqueta,
recibe como parámetro de entrada el nombre del producto. */
function imprimirEtiqueta(nombreProducto) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Imprimiendo etiqueta, producto: ${nombreProducto}`)
        }, 4000)

    })
}
/* b) El método para realizar venta no se debe ejecutar hasta no
validar si hay stock suficiente. */
/* c) El método generar etiqueta solo se debe ejecutar si se realizó
la venta correctamente. */

/* e) En cualquiera de los casos se debe ejecutar un log en consola
que informe que se finalizó la operación. */
/* f) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado)
 */
module.exports={
validarStock,realizarVenta,imprimirEtiqueta
}


