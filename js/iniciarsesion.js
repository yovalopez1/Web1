import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

let modalLoginUsuario=new bootstrap.Modal(document.getElementById('modaliniciarsesion'))

let botonIniciarSesion=document.getElementById("botoniniciarsesion")

let mensajeInicio = document.getElementById("mensajeinicio")

//console.log(iniciarsesion)


botonIniciarSesion.addEventListener("click",function(event){

    event.preventDefault()

    let email=document.getElementById("cajaEmail").value
    let password=document.getElementById("cajaContraseña").value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        mensajeInicio.textContent = "Bienvenido a la pagina de Dragon-Ball"
        modalLoginUsuario.show()
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            mensajeInicio.textContent = "Error de campos"
            modalLoginUsuario.show()

        });

})