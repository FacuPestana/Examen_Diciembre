let botonNegro = document.querySelector("#Negro")
botonNegro.onclick =
function (){
    foto.src = "cronosNegro.png"
    Texto.innerText = "NEGRO VULCANO"
} 
let botonBlanco = document.querySelector("#Blanco")
botonBlanco.onclick =
function (){
    foto.src = "cronosBlanco.png"
    Texto.innerText = "FIAT BLANCO"

} 
let botonRojo =  document.querySelector("#Rojo")
botonRojo.onclick =
function (){
    foto.src = "cronosRojo.png"
    Texto.innerText = "FIAT ROJO"
} 
let Texto =
document.querySelector("#nombreColor")
let foto =
document.querySelector("#fotoCronos")
let botonInfo = 
document.querySelector("#info")
botonInfo.onclick =
function precio (precio){
    precio = Number(prompt ('Ingrese cuanto esta dispuesto a pagar por el auto'))
       if ( precio>= '3,000,000' || '3000000' )
   {
       prompt ('Por favor escribe tu correo email, tomaremos tu propuesta')
       alert ("Nuestros vendedores te contactaran en algun momento")
   
    } else {
       alert ("Lo siento no estamos interesados en tu propuesta.")
}
}