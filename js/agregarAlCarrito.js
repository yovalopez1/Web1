export function agregarCarrito(carrito){
//crear una referencia a la filldora del carrito
    let pildora = document.getElementById("pildora")
    pildora.classList.remove("invisible")

    let cont=0
    carrito.forEach(function(producto){
        cont = (cont + Number(producto.cantidad))
        console.log(producto.cantidad)
    });
    console.log(cont)
    pildora.textContent = cont
    
}

