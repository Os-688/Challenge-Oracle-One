const textArea = document.querySelector(".texto-a-encriptar");
const mensaje = document.querySelector(".mensaje-encriptado");
const tutorial = document.getElementById("caja");
const copiar = document.querySelector("#copiar");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    animacionExplicacion.cancel;
    tutorial.style.visibility = "hidden";
    copiar.style.visibility = "visible";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    animacionExplicacion.cancel;
    tutorial.style.visibility = "hidden";
    copiar.style.visibility = "visible";
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

var animacionExplicacion = [
    {transform: "rotateX(10deg) scaleX(1.06) scaleY(0.89)", top: "490px", right: "62px"},
    {transform: "rotateY(8deg) scaleX(0.92)  scaleY(1.04)", top: "540px", right: "74px"},
    {transform: "rotateX(28deg)  scaleX(1.06)  scaleY(0.91)", top: "500px", right: "87px"},
    {transform: "rotateX(4deg)   scaleX(0.91)   scaleY(1.05)", top: "550px", right: "104px"},
    {transform: "rotateY(25deg) scaleX(1.05)  scaleY(0.87)", top: "500px", right: "85px"}, 
    {transform: "rotateX(4deg) scaleX(0.9)  scaleY(1.06)", top: "550px", right: "68px"}]

function animacionTutorial(){
    tutorial.animate(animacionExplicacion, { id: "bounce", delay: -1000, iterations: Infinity, duration: 16000, direction: "alternate"})
}

tutorial.addEventListener("animationend", animacionTutorial);

animacionTimer = setInterval(animacionTutorial, 240000);

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




/* 
Version alterna de copiar texto.

function myFunction() {
   
     // Copy the text inside the text field
    navigator.clipboard.writeText(mensaje.value);
  
    // Alert the copied text
    alert("Copied the text: " + mensaje.value);
  }  */
