function calcular(){
    var contadorChar = document.getElementById("contador-char").innerHTML = 100- document.formulario.mensaje.value.length;
}

document.getElementById("txtarea").addEventListener("keyup", calcular);

var tipo = document.getElementsByClassName("js-tipo");