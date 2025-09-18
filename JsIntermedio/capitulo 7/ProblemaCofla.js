/* let alto = window.screen.availHeight; // tambien se puede utilzar window.screen.height 
let ancho = window.screen.availWidth; // tambien se puede utilzar window.screen.width
comprar = confirm(`El alto es: ${alto}, el  ancho es: ${ancho}`)

if (comprar){
    alert("Compra realizada exitosamente");
}else{
    alert("Compra cancelada");
} */

    
let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `hostname <b>${hostname}</b><br>`; 
html += `pathname: <b>${pathname}</b><br>`;
html += `url completa: <b>${href}</b><br>`; 

document.write(html);