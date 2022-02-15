export function verCarrito(carrito){

    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))
    
    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""

    if(carrito.length==0){
        let carritoVacio = document.createElement("div")
        carritoVacio.classList.add("row")
        let foto = document.createElement("img")
        foto.classList.add("img-fluid")
        foto.classList.add("w-100")
        foto.src = "../img/carrito-vacio.png"

        carritoVacio.appendChild(foto)
        contenedor.appendChild(carritoVacio)

    }else{

        carrito.forEach(function(producto){
            let fila=document.createElement("div")
            fila.classList.add("row")

            let columna = document.createElement("div")
            columna.classList.add("col-12")
            columna.classList.add("col-md-4")

            let columna2 = document.createElement("div")
            columna2.classList.add("col-12")
            columna2.classList.add("col-md-8")

            let fotoProducto = document.createElement("img")
            fotoProducto.classList.add("img-fluid")
            fotoProducto.classList.add("w-100")
            fotoProducto.src = producto.foto

            let nombreProducto2 = document.createElement("h3")
            nombreProducto2.classList.add("col-12")
            nombreProducto2.classList.add("col-md-4")
            nombreProducto2.textContent = producto.nombre

            let precioProducto = document.createElement("h5")
            precioProducto.classList.add("col-12")
            precioProducto.classList.add("col-md-4")
            precioProducto.classList.add("text-center")
            precioProducto.textContent = ("Precio: ") + ("$")+Intl.NumberFormat("de-DE").format(producto.precio)

            let cantidadProducto = document.createElement("h5")
            cantidadProducto.classList.add("col-12")
            cantidadProducto.classList.add("col-md-4")
            cantidadProducto.classList.add("text-center")
            cantidadProducto.textContent = ("Cantidad: ") + producto.cantidad + (" Und")


            let subtotal = document.createElement("h5")
            subtotal.classList.add("col-12")
            subtotal.classList.add("col-md-4")
            subtotal.classList.add("text-center")
            subtotal.textContent = ("Subtotal: ")+("$")+Intl.NumberFormat("de-DE").format (producto.cantidad*producto.precio)

            let separadorProducto = document.createElement("hr")
            separadorProducto.classList.add("mx-auto")
            separadorProducto.classList.add("d-block")



            //padres e hijos

            columna.appendChild(fotoProducto)

            fila.appendChild(columna)
            fila.appendChild(columna2)
            columna2.appendChild(nombreProducto2)
            columna2.appendChild(precioProducto)
            columna2.appendChild(cantidadProducto)
            columna2.appendChild(subtotal)
            fila.appendChild(separadorProducto)
            contenedor.appendChild(fila)


        })
    }
    modalVerCarrito.show()

    let total = document.getElementById("total")
    let cont = 0
    total.addEventListener("click",function(){
        carrito.forEach(function(producto){
        cont = cont+Number(producto.precio*producto.cantidad)
        })
        total.textContent = ("$")+Intl.NumberFormat("de-DE").format(cont)
    })

    let usd = document.getElementById("usd")
    usd.addEventListener("click",function(){
        let dolar = cont/4000
        usd.textContent = ("$")+Intl.NumberFormat("de-DE").format(dolar)+("Usd")
    })
}