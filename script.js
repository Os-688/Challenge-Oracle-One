const textArea = document.querySelector(".texto-a-encriptar");
const mensaje = document.querySelector(".mensaje-encriptado");
const tutorial = document.getElementById("caja");
const copiar = document.querySelector("#copiar");
const textoPrimero = document.querySelector("#caja h4");
const textoSegundo = document.querySelector("#caja p");
var anima = false;

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

/* Inicio funciones para botones de encriptar y deesencriptar */
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    tutorial.style.animationPlayState = "paused";
    tutorial.style.visibility = "hidden";
    copiar.style.visibility = "visible";
    anima = true;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    tutorial.style.animationPlayState = "paused";
    tutorial.style.visibility = "hidden";
    copiar.style.visibility = "visible";
    anima = true;
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;     
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i = 0; i <  matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptado;
}

/* Funcion para cambiar a otra animacion */

var animacionExplicacion = [
    {transform: "rotateX(10deg) scaleX(1.06) scaleY(0.89)", top: "490px", right: "62px"},
    {transform: "rotateY(8deg) scaleX(0.92)  scaleY(1.04)", top: "540px", right: "74px"},
    {transform: "rotateX(28deg)  scaleX(1.06)  scaleY(0.91)", top: "500px", right: "87px"},
    {transform: "rotateX(4deg)   scaleX(0.91)   scaleY(1.05)", top: "550px", right: "104px"},
    {transform: "rotateY(25deg) scaleX(1.05)  scaleY(0.87)", top: "500px", right: "85px"}, 
    {transform: "rotateX(4deg) scaleX(0.9)  scaleY(1.06)", top: "550px", right: "68px"}]

function cambioDeAnimacion(){

    tutorial.animate(animacionExplicacion, { id: "bounce", delay: -1000, iterations: Infinity, duration: 16000, direction: "alternate"});
}

tutorial.addEventListener("animationend", cambioDeAnimacion);

/* Inicio de la funcion reaparicion de la animacion. */

function animacionReaparicion(){
    if(anima){
        cambioDeAnimacion();
        tutorial.style.visibility = "visible";
        mensaje.style.backgroundImage = "url(imagenes/Muñeco.png)";
        copiar.style.visibility = "hidden";
        anima = false;
    } 
}

setInterval(animacionReaparicion, 120000);

/* Funcion para copiar texto */

copiar.onclick = function(){
    let texto = mensaje.value;
    navigator.clipboard.writeText(texto)
    .then(()=>{
        alert("Text copied to clipboard");
    })
    .catch(err => { 
        alert("Error in copying text: ", err)
    })
}

/* Funcion para agregar poco a poco el texto a la caja/tutorial */

var palabrasTexto = ["Ningun mensaje fue encontrado.", "Ingresa el texto que desees encriptar."];

var textoPrimeroContenido =  textoPrimero.innerHTML;

var textoSegundoContenido = textoSegundo.innerHTML;

var textoContenido = [textoPrimeroContenido,textoSegundoContenido];

var textos = [textoPrimero,textoSegundo];

var AgregarPalabra = false;

var counter = 1;


setInterval(function(){
    if (textoContenido[counter].length > 0 && !AgregarPalabra) {
        textos[counter].innerHTML = textoContenido[counter].slice(0,-1);
        textoContenido[counter] = textos[counter].innerHTML;
        if (textoContenido[counter].length == 0 && counter == 1 ) {
            counter -= 1;
        } 
    } else{
        AgregarPalabra = true;
    }
    if (AgregarPalabra) {
        if (textoContenido[counter].length < palabrasTexto[counter].length) {
            textos[counter].innerHTML = palabrasTexto[counter].slice(0,textoContenido[counter].length + 1);
            textoContenido[counter] = textos[counter].innerHTML;
        } else {
            if (counter < palabrasTexto.length) {
                counter ++;
            } 
        }
    }
    if (counter == palabrasTexto.length) {
        counter = 1;
        AgregarPalabra = false;
    }
}, 150);

/* Funcion para el canvas y animacion del canvas. */

window.onload = ()=>{
    
    const canvas = document.getElementById("canvas");

    requestAnimationFrame(()=>{

         const cWidth = window.innerWidth;
         const cHeight = window.innerHeight;
         canvas.width = cWidth;
         canvas.height = cHeight;

    });

}

    

/* Funciones opcionales. */

/* 
function myFunction() {
   
     // Copy the text inside the text field
    navigator.clipboard.writeText(mensaje.value);
  
    // Alert the copied text
    alert("Copied the text: " + mensaje.value);
  }  */

  /* function inicioDeAnimacion(){

    tutorial.animate(animacionInicio, { id: "rompeOlas", delay: -500, iterations: 1, duration: 3000 });
} */

/* var animacionInicio = [
    {right: "-294px"},
    {transform: "rotateY(6deg) scaleX(1.1)", right: "-245px"},
    {transform: "rotate(8deg)  scaleX(1.1)  scaleY(0.95)", right: "-119px"},
    {transform: "scaleX(0.88)   scaleY(0.90)", right: "0px"},
    {transform: "rotate(-6deg) scaleX(0.95)  scaleY(0.95)", right: "80px"}, 
    {transform: "rotate(0deg) scaleX(1)  scaleY(1)", top: "500px", right: "62px"},
    {right: "62px", top: "500px"}
]
 */