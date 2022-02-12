//importacion de elementos

import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"
import {agregarCarrito} from "./agregarAlCarrito.js"
import {verCarrito} from "./verCarrito.js"


//variables globales de la tienda

let producto = {}
let carrito = []


//llamo a la funcion llenar tienda
llenarTienda()
//console.log(productos)

//llamado funcion ampliarInfoProducto
let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

let listaProducto = document.getElementById("fila")
listaProducto.addEventListener("click",function(event){
    producto =  ampliarInfoProducto(event)
    console.log(producto)
    //if()
    modalInfoProducto.show()
})

//llamado a la funcion agregaralcarrito

let botonAgregarCarrito = document.getElementById("botonAgregarProducto")
botonAgregarCarrito.addEventListener("click",function(){
    let cantidadProducto = document.getElementById("cantidadProducto").value

    producto.cantidad = cantidadProducto
    console.log(cantidadProducto)

    carrito.push(producto)
    console.log(carrito)
    
    //OCULTA LA MODAL DE INFO DEL PRODUCTO
    modalInfoProducto.hide()

    let verProducto = document.getElementById("cantidadProducto")
    verProducto.value=1 

    //llamar la funcion agregarCarrito

    agregarCarrito(carrito)
    
})

let botonVerCarrito = document.getElementById("botonCarrito")
botonVerCarrito.addEventListener("click",function(){
    verCarrito(carrito)
})

let LimpiarCarrito = document.getElementById("limpiarCarrito")

LimpiarCarrito.addEventListener("click",function(){    
    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML = ""
    contenedor = []

    let pildora = document.getElementById("pildora")
    pildora.innerHTML = ""
    pildora = []

    carrito = []

    let total = document.getElementById("total")
    total.innerHTML = "Total"

    let usd = document.getElementById("usd")
    usd.innerHTML = "Dolar"
})



