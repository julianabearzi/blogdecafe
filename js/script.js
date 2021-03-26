// querySelector
const heading = document.querySelector('.header__texto h2') //0 o 1 elementos.
heading.textContent = "Contacto"
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent ='Sobre Nosotros';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion-enlace');

//Generar un nuevo enlace
//const nuevoEnlace = document.createElement('A')

//Agregar el href
//nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
//nuevoEnlace.textContent = 'Un Nuevo Enlace'

//agregar la clase
//nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
//const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(nuevoEnlace);

//console.log(nuevoEnlace);

/*Eventos

console.log(1);

window.addEventListener('load', imprimir)

 //load espera a que el JS y los archivos que dependen de HTML esten listos

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () { //Solo espera por HTML, no por CSS o imagenes
    console.log(4);
})

console.log(5);

function imprimir () {
    console.log(2);
}*/

/*window.onscroll = function(evento) {
    console.log('evento')
}*/

// Seleccionar elementos y asociarles un evento

/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formulario');
});*/


//Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// El evento de submit

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar el formulario
 const { nombre, email, mensaje } = datos;
 if (nombre == '' || email == '' || mensaje == '') {
     mostrarAlerta('Todos los campos son obligatorios', true);
     return;
 }
    //Enviar el formulario 
    mostrarAlerta('¡mensaje enviado correctamente!');
});

function leerTexto(e) {
   // console.log(e.target.value); 
   datos[e.target.id] = e.target.value;

  // console.log(datos);
 }

 function mostrarAlerta(mensaje, error = null ) {
     const alerta = document.createElement('P');
     alerta.textContent = mensaje;

     if(error) {
         alerta.classList.add('error');
     } else {
         alerta.classList.add('enviado');
     }

     formulario.appendChild(alerta);

     setTimeout(() => {
        alerta.remove();
      }, 5000);
 }
 


    

 
