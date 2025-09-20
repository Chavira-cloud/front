/* const button = document.querySelector(".button");
button.addEventListener("click",saludar);

// funcion normal
function saludar(){
    alert("hola")
    button.removeEventListener("click",saludar)
}
*/

//Funcion anonima
/* button.addEventListener("click", ()=>{
    alert("Pedro")
}); 
*/

//Bubbling y Capturing
/* 
const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor-1");
const contenedor2= document.querySelector(".contenedor-2");

contenedor1.addEventListener("click", (e)=>{
    alert("di click en el contenedor rojo");
    e.stopPropagation(); // para que  no se propague
});
 
contenedor2.addEventListener("click", (e)=>{
    alert("di click en el contenedor azul");
}); 
*/

//Mouse Events
/* 
const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor-1");
const contenedor2= document.querySelector(".contenedor-2");

button.addEventListener("dblclick", (e)=>{
    alert("di click en un boton");
});

contenedor1.addEventListener("mouseover", (e)=>{
    alert("di click en el contenedor rojo");
});

contenedor2.addEventListener("contextmenu", (e)=>{
    alert("di click en el contenedor azul");
}); 
*/

// key events
/* 
const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor-1");
const input= document.querySelector(".input-prueba");

input.addEventListener("keydown",(e)=>{
    console.log("una tecla fue presionada");
})

input.addEventListener("keypress",(e)=>{
    console.log("un usuario presiono una tecla");    
})

input.addEventListener("keyup",(e)=>{
    console.log("una tecla fue soltada");    
}) 
*/

// eventos de interfaz
/* 
evento error
const img= document.querySelector(".img-prueba");
img.addEventListener("error", ()=>{
console.log("ha sucedido un error");
}) 

evento load
addEventListener("load", ()=> { //Para utilizar el load junto con el addEventListener no se ocupa invocar window
    console.log("Ha cargado el sitio");
})
 
evento beforeunload
addEventListener("beforeunload", ()=> { //Para utilizar el load junto con el addEventListener no se ocupa invocar window
    console.log("te estas por ir del sitio");
}) 

evento resize
addEventListener("resize", ()=> { 
    console.log("Se ha actualizado, la resoluciion");
})

evento scroll
addEventListener("scroll", ()=> { 
    console.log("Se ha scrolleado");
})

// variables para evento select 
const input =document.querySelector(".input-prueba");
const contenedor = document.querySelector(".selecionado")

evento select
input.addEventListener("select", (e)=>{
    let star = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let texto = input.value;
    contenedor.innerHTML = texto.substring(star,end);  
})

const input =document.querySelector(".input-prueba");
const contenedor = document.querySelector(".selecionado")

input.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    let nuevoContenido = `La ultima tecla presionada fue: <b>${tecla}</b>`;
    contenedor.innerHTML = nuevoContenido;
});
*/

//forma antigua
/* 
setTimeout(()=>{
    document.write("hola")
},2000) 

//Forma moderna
const saludar = ()=>{
    document.write("hola")
}
setTimeout(saludar,2000)

setTimeout
const temporizador = setTimeout(()=>{
    document.write("hola")
},2000)
clearTimeout(temporizador)

setInterval
const intervalo = setInterval(()=>{
    document.write("hola")
},2000)
clearInterval(intervalo)
*/



const intervalo = setInterval(()=>{
    document.write("hola")
},2000)

setTimeout(()=>{
    clearInterval(intervalo)
},7000)