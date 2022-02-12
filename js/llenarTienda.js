export function llenarTienda(){

    let productos=[

    {nombre:"Camisa Goku",descripcion:"Imagen de Camisa dragon ball goku",precio:50000,foto:"../img/camiseta_goku_bolas-roja.jpg"},
    {nombre:"Pijama Goku",descripcion:"Imagen de pijama de Goku",precio:74000,foto:"../img/pijama_goku_gris-y-negro.jpg"},
    {nombre:"buzo Goku",descripcion:"imagen de buzo de goku",precio:150000,foto:"../img/img_buzo.jpg"},
    {nombre:"Figura Goku",descripcion:"Imagen a escala de Goku",precio:110000,foto:"../img/img_figura_goku.jpg"},
    {nombre:"Figura Vegueta",descripcion:"Imagen a escala de Vegueta",precio:110000,foto:"../img/img_figura_vegueta.jfif"},
    {nombre:"Llavero Vegueta blue",descripcion:"Imagen de llavero vegueta",precio:20000,foto:"../img/llavero_vegeta_saiyan_blue_dragon-ball.jpg"},
    {nombre:"Peluche Shenron",descripcion:"Imagen a escala de peluche Shenron",precio:70000,foto:"../img/peluche-shenron-30cm-dbs.jpg"},
    {nombre:"Cojin Goku y Vegueta",descripcion:"Imagen cojin dragon ball",precio:32000,foto:"../img/cojin_goku_y_vegeta_dragon-ball.jpg"},
    {nombre:"Figura Super-Gogeta",descripcion:"Imagen a escala de super gogeta",precio:120000,foto:"../img/figura_super_gogeta_dragon-ball.jpg"},
    {nombre:"Set Vaso Cuaderno",descripcion:"Imagen de kit de vaso cuaderno de dragon ball",precio:40000,foto:"../img/set_lapiz_y_cuaderno_dragon-ball_dragon-ball.jpg"},
]

//rutinapara llenar el arreglo y crear targetas
let fila=document.getElementById("fila")

productos.forEach(function(producto){
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-3")
    imagen.src=producto.foto

    let nombreProducto=document.createElement("h2")

    nombreProducto.classList.add("fw-bold")
    nombreProducto.classList.add("text-center")
    nombreProducto.textContent=producto.nombre

    let descripcionProducto = document.createElement("p")
    descripcionProducto.classList.add("text-center")
    descripcionProducto.classList.add("inviseble")
    descripcionProducto.textContent = producto.descripcion

    let precio = document.createElement("h6")
    precio.classList.add("text-center")
    precio.classList.add("text-muted")
    precio.textContent=producto.precio

    let botonAmpliarInfo = document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-3")
    botonAmpliarInfo.classList.add("mb-5")
    botonAmpliarInfo.classList.add("btn-danger")
    botonAmpliarInfo.textContent="Ver Producto"
    

    let separador = document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")

    //PADRES E HIJOS
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(descripcionProducto)
    tarjeta.appendChild(precio)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    tarjeta.appendChild(botonAmpliarInfo)

})



}









//arreglo de objetos 
// let productos=[

//     {nombre:"Camisa Goku",tamano:"Todas las tallas",precio:50000,foto:"img/camiseta_goku_bolas-roja.jpg"},
//     {nombre:"Cojin goku y vegueta",tamano:"Mediano",precio:32000,foto:"img/cojin_goku_y_vegeta_dragon-ball.jpg"},
//     {nombre:"Figura Super-Gogeta",tamano:"Standar",precio:100000,foto:"img/figura_super_gogeta_dragon-ball.jpg"},
//     {nombre:"Figura Goku",tamano:"Standar",precio:90000,foto:"img/img_figura_goku.jpg"},
//     {nombre:"Juego De Mesa",tamano:"Standar",precio:30000,foto:"img/pilsen.png"},
//     {nombre:"Ron Medellin",tamano:"1/2 Botella",precio:220000,foto:"img/ronmedellin.png"},
//     {nombre:"Ron Añejo 220 años De Caldas",tamano:"1/2 Botella",precio:100000,foto:"img/roncaldas.png"},
//     {nombre:"Agua",tamano:"1 Botella",precio:4000,foto:"img/awa.png"},
//     {nombre:"Soda",tamano:"1 Botella",precio:6000,foto:"img/soda.png"},
//     {nombre:"Gatorade",tamano:"1 Botella",precio:9000,foto:"img/gatorade.png"}
// ]

//let productos2=[1,2,3,4,5,6]

//crear una referencia a la etiqueta fila
//let fila=document.getElementById("fila")

//Recorrer el arreglo y sacarle fotocopia a la informacion que hay por dentro
// productos.forEach(function(producto){

//     let columna=document.createElement("div")
//     columna.classList.add("col")

//     let tarjeta=document.createElement("div")
//     tarjeta.classList.add("card")
//     tarjeta.classList.add("h-100")

//     let imagen=document.createElement("img")
//     imagen.classList.add("card-img-top")
//     imagen.classList.add("h-50")
//     imagen.classList.add("p-3")
//     imagen.src=producto.foto

//     let nombreProducto=document.createElement("h4")
//     nombreProducto.textContent=producto.nombre

    //PADRES E HIJOS
    // tarjeta.appendChild(imagen)
    // tarjeta.appendChild(nombreProducto)

    // columna.appendChild(tarjeta)

    // fila.appendChild(columna)


//})