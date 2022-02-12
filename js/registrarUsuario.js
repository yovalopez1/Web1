import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

//creo una referencia global a la ventana modal
let modalLogin = new bootstrap.Modal(document.getElementById('modallogin'))
let mensajeLogin = document.getElementById("mensajelogin")

// para registrar una persona en la app

let botonRegistro = document.getElementById("botonregistro")
botonRegistro.addEventListener("click", function(event){
    event.preventDefault()

    //obtener el valor de los input
    let email = document.getElementById("cajaEmail").value
    let password = document.getElementById("cajaPassword").value

    // VALIDAR EL FORMULARIO

    //agregar la rutina para llevar los datos a firebase

    //hablar con el back
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        mensajeLogin.textContent = "exito en el registo. bienvenido mi fai"
        modalLogin.show()
        console.log("todo fine my brother")//const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;

        mensajeLogin.textContent = `Error: ${errorCode}, ${errorMessage}`
        modalLogin.show()
        console.log("error mi papa" + errorCode + errorMessage)
        // ..
    });
})