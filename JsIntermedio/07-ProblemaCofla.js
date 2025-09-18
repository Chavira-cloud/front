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

const button = document.querySelector(".button");
button.addEventListener("click", (e)=>{
    console.log(e.target);
});