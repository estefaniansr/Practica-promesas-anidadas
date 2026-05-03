/* 3) Crear un archivo llamado mercadoRestringido.js, dentro de este
archivo generar cinco objetos de tipo producto, deben tener las
propiedades: id, nombreProducto, precio, stock. Guardar los
cinco objetos en un array llamado productos. */
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
const cantidadVendida=8
const nombreProducto="Escoba"
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
function ejecutarVenta() {
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
ejecutarVenta()