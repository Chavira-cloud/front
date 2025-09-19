/* const button = document.querySelector(".button");
button.addEventListener("click",saludar);

// funcion normal
function saludar(){
    alert("hola")
    button.removeEventListener("click",saludar)
} */

//Funcion anonima
/* button.addEventListener("click", ()=>{
    alert("Pedro")
} ); */

//Bubbling y Capturing
/* const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor-1");
const contenedor2= document.querySelector(".contenedor-2");

contenedor1.addEventListener("click", (e)=>{
    alert("di click en el contenedor rojo");
    e.stopPropagation(); // para que  no se propague
});
 
contenedor2.addEventListener("click", (e)=>{
    alert("di click en el contenedor azul");
}); */

//Mouse Events
const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor-1");
const contenedor2= document.querySelector(".contenedor-2");

// button.addEventListener("dblclick", (e)=>{
//     alert("di click en un boton");
// });

contenedor1.addEventListener("mouseover", (e)=>{
    alert("di click en el contenedor rojo");
});


contenedor2.addEventListener("contextmenu", (e)=>{
    alert("di click en el contenedor azul");
});