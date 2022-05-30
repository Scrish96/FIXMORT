const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexUsuario= /^[a-zA-Z1-9\-]+$/
    parrafo.innerHTML = ""
    
    if(nombre.value.length <=6){
        warnings += `El usuario debe contener minimo 6 caracteres<br>`
        entrar = true
    }
    if(!regexUsuario.test(nombre.value)){
        warnings += `El usuario no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})