/*
const deserializado = {"variable1" : "PEDRO", "variable2" : "JORGE"};
const serializado = JSON.stringify(deserializado) //stringify sirve para serializar
console.log(typeof serializado); */

/* const serializado = '{"variable1" : "PEDRO", "variable2" : "JORGE"}';

const deserializado = JSON.parse(serializado) //parse sirve para desarializar
console.log( deserializado); */ 


// AJAX
const peticion = new XMLHttpRequest();

peticion.addEventListener("readystatechange", ()=>{
    if(peticion.readyState == 4){
        console.log(peticion.response);
    }
})

peticion.open("GET","informacion.txt");
peticion.send();

