let ataqueJugador
// VARIABLE GLOBAL, ESTO SIRVE PARA PODER LLAMAR VARIABLES DENTRO DE DISTINTAS FUNCIONES
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


      function iniciarJuego() {
    
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonMascotaJugador.addEventListener("click", hacerAlgo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReinciar = document.getElementById ("boton-reiniciar")
    botonReinciar.addEventListener ("click", reiniciarJuego)
    
    // document -> representa el HTML. Lo que va despues de un punto se llaman METODOS y normalmente hay varios
    // addEventListener ( "1 Argumento", "2 argumento" ) -> Los eventos son distintos en este caso estamos escuchando el click, 
    // seleccionarMascotaJugador no existe asi y el segundo argumento es la funcion que queremos llamar despues de hacer escuchar el evento
}



function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"
    
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge" // InnerHTML me muestra todo lo que esta por dentro del elemento o etiqueta de html, la funcion importante es poder cambiar desde JS el HTML
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1,3) // Cómo saber cuando llamar este tipo de variables?
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}


// en las siguientes funciones se realiza la selección del ataque del jugador y la selección aleatoria del enemigo, el cual es escuchado en la función iniciar juego en los addeventlistener de cada boton
function ataqueFuego () {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo ()
}

function ataqueAgua () {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo ()
}

function ataqueTierra () {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo ()
}

function ataqueAleatorioEnemigo () {
    let ataqueAleatorio = aleatorio (1,3)

    if(ataqueAleatorio == 1){
    ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2){
    ataqueEnemigo = "AGUA"
    } else {
    ataqueEnemigo = "TIERRA"
    }   
    combate ()
}

function combate () {
    
    let spanVidasJugador = document.getElementById ("vidas-jugador")

    let spanVidasEnemigo = document.getElementById ("vidas-enemigo")

    if (ataqueJugador == "FUEGO" && ataqueEnemigo == "AGUA"){
       crearMensaje ("GANASTE")
       vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "TIERRA"){
        crearMensaje ("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "FUEGO"){
        crearMensaje ("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == ataqueEnemigo){
        crearMensaje ("EMPATE")
    } else {
        crearMensaje ("PERDISTE")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

revisarVidas ()

}

function revisarVidas () {
    if (vidasEnemigo == 0){
        crearMensajeFinal ("FELICITACIONES! Ganaste")
    } else if (vidasJugador == 0){
        crearMensajeFinal ("Lo siento, perdiste")
    }
}


function crearMensaje (resultado) {
    
    let sectionmensajes = document.getElementById ("mensajes") // Que hace realmente el getElementByID ? Que guarda esa variable?

    let parrafo = document.createElement("p") // .createElement sirve para crear elementos? o etiquetas? dentro de HTML
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo  + "-" + resultado

    sectionmensajes.appendChild(parrafo)
}

function crearMensajeFinal (resultadoFinal) { // no entiendo como funciona esta funcion y como es que puede anidarse con con la función revisarVidas
    
    let sectionmensajes = document.getElementById ("mensajes") // Que hace realmente el getElementByID ? Que guarda esa variable?

    let parrafo = document.createElement("p") // .createElement sirve para crear elementos? o etiquetas? dentro de HTML
    
    parrafo.innerHTML = resultadoFinal // Creo que aqui esta la confusión

    sectionmensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio (min,max) {
    return  Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
// Este evento del navegador sirve para que escuche cuando ya cargó el HTML y asi el script puede estar arriba, asi que hay que crear una funcion que se ejecute en ese momento. por lo que hay que crearla al principio