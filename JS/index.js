(function(){
    AOS.init()
}());



error.style.color = "red";

function Enviar(){
var Nombre= document.getElementById ("Nombre");
var Apellido = document.getElementById ("Apellido");
var Correo = document.getElementById ("Correo");
var error = document.getElementById ("error");
var mensaje_error = [];
    if(Nombre.value===null||Nombre.value===''){
        mensaje_error.push('Ingresa tu nombre');
    }
    if(Apellido.value===null||Apellido.value===''){
        mensaje_error.push('Ingresa tu Apellido');
    }
    if(Correo.value===null||Correo.value===''){
        mensaje_error.push('Ingresa tu correo');
    }
    error.innerHTML=mensaje_error.join(' , ');
    return false;
}
