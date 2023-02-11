const textArea = document.querySelector(".texto-a-encriptar");
const mensaje = document.querySelector(".mensaje-encriptado");
const tutorial = document.getElementById("caja");
const copiar = document.querySelector("#copiar");
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

function cambioDeAnimacion(){
    tutorial.style.animation = "animacion-explicacion 16s linear -0.09s infinite alternate";
}

tutorial.addEventListener("animationend", cambioDeAnimacion);

/* Inicio de la funcion reaparicion de la animacion. */

function animacionReaparicion(){
    if(anima){
        cambioDeAnimacion();
        tutorial.style.visibility = "visible";
    } 
}

setInterval(animacionReaparicion, 60000);

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

/* Funciones opcionales. */

/* 
function myFunction() {
   
     // Copy the text inside the text field
    navigator.clipboard.writeText(mensaje.value);
  
    // Alert the copied text
    alert("Copied the text: " + mensaje.value);
  }  */
