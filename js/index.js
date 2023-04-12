let areaMensaje = document.getElementById("areaMensaje");
let areaTexto = document.getElementById("areaTexto");

function ecambio(){
    let texto = document.getElementById("texto1").value;
    let txtcif = texto.replace(/e/igm,"enter");
     txtcif = txtcif.replace(/o/igm,"ober");
     txtcif = txtcif.replace(/i/igm,"imes");
     txtcif = txtcif.replace(/a/igm,"zi");
     txtcif = txtcif.replace(/u/igm,"ufat");
     return txtcif
}

function dcambio(){
    let texto = document.getElementById("texto1").value;
    let txtcif = texto.replace(/enter/igm,"e");
     txtcif = txtcif.replace(/ober/igm,"o");
     txtcif = txtcif.replace(/imes/igm,"i");
     txtcif = txtcif.replace(/zi/igm,"a");
     txtcif = txtcif.replace(/ufat/igm,"u");
     return txtcif
}


function om(){
       areaMensaje.classList.add('oculto');
       areaTexto.classList.remove('oculto');
}

function encriptar(){
     let txtcif = ecambio();
     document.getElementById("texto2").innerHTML = txtcif;
     om();
}

function desenciptar(){
    let txtcif = dcambio();
    document.getElementById("texto2").innerHTML = txtcif;
    om();
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Texto Copiado con Exito!");
  }



