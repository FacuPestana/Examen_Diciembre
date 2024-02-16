/*1 Auto
Aca se hace lo mismo a todos, se pone let y se crea la variable;
document.querySelector("#Negro") para decir que se va a seleccionar un elemento en especifico de
el archivo HTML, y se pone NEGRO.

Se pone el nombre de la variable para indicar que se va a estar utilizando,se pone un punto y 
al hace que se va a ejecutar esa linea de codigo.

Pones function para indicar que se va a crear una nueva Funcion y los parentesis (que son los paramentros 
pero como no hay parametros se ponen igual y no se pone nada adentro).

Despues se indica en "foto.src", que va a ser a la foto que va a cambiar, pones igual y a la foto que tengas ya sea descargada o que la buscas en la web copiando el link.

Tambien esta Texto.innerText = Negro Vulcano, que va a ser al texto que va a combiar cuando vos en este caso pases el mouse por arriba de el boton
(pero tranquilamente puede ser al hacer click).

Function nombre(Parametros){
    nombredelaVariable.src = (src de la foto a la que queres cambiar)
    Texto.innerText = (Al texto que va a cambiar cuando se ejecute el evento que dice, en este caso OnMouseOver)
}
*/


let botonNegro = document.querySelector("#Negro")
botonNegro.onmouseover =
function (){
    foto.src = "cronosNegro.png"
    Texto.innerText = "NEGRO VULCANO"
} 
let botonBlanco = document.querySelector("#Blanco")
botonBlanco.onmouseover =
function (){
    foto.src = "cronosBlanco.png"
    Texto.innerText = "FIAT BLANCO"

} 
let botonRojo =  document.querySelector("#Rojo")
botonRojo.onmouseover =
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