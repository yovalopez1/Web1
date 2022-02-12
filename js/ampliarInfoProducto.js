export function ampliarInfoProducto(event){

    let producto={}
    
    if(event.target.classList.contains("btn")){
        producto = {
            foto: event.target.parentElement.querySelector("img").src,
            nombre: event.target.parentElement.querySelector("h2").textContent,
            precio: event.target.parentElement.querySelector("h6").textContent,
            descripcion: event.target.parentElement.querySelector("p").textContent
        }
        //mostramos los datos del producto en el modal

        let etiquitaNombreProducto = document.getElementById("nombreproducto")
        etiquitaNombreProducto.textContent = producto.nombre
        let etiquetaPrecioProducto = document.getElementById("precioproducto")
        etiquetaPrecioProducto.textContent = producto.precio
        let etiquetaImgProducto = document.getElementById("imagenproducto")
        etiquetaImgProducto.src = producto.foto
        let descripcionProducto = document.getElementById("descripcionproducto")
        descripcionProducto.textContent = producto.descripcion

        return producto
    }
}

