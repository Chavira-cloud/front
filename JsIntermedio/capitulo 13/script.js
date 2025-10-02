/*
const deserializado = {"variable1" : "PEDRO", "variable2" : "JORGE"};
const serializado = JSON.stringify(deserializado) //stringify sirve para serializar
console.log(typeof serializado); */

/* const serializado = '{"variable1" : "PEDRO", "variable2" : "JORGE"}';

const deserializado = JSON.parse(serializado) //parse sirve para desarializar
console.log( deserializado); */ 


// AJAX
/* const peticion = new XMLHttpRequest();

peticion.addEventListener("load", ()=>{
    let respuesta
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta ="Lo siento, no se ha encontrado el responsable";
    console.log(respuesta);
})

peticion.open("GET","informacion.txt");
peticion.send(); */

//AJAX para internet explore
/* let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");
    


peticion.addEventListener("load", ()=>{
    let respuesta;
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta ="Lo siento, no se ha encontrado el resultado";
    console.log(JSON.parse(respuesta).nombre);
})

peticion.open("GET","informacion.txt");

peticion.send(); */

//POST CON AJAX

/* let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");
    


peticion.addEventListener("load", ()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201 ) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el resultado";
    console.log(JSON.parse(respuesta));
})

peticion.open("POST","https://reqres.in/api");

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8")

peticion.send(JSON.stringify({
    "nombre": "morfeo",
    "trabajo" : "lider"
})); */

//FETCH

/* fetch("https://reqres.in/api/unknow/2") //Fecht por defecto tiene el GET
    .then(res => res.text())
    .then(res => console.log(res)) */


fetch("https://reqres.in/api/unknow/2",{
    method: "POST",
    body: `{"nombre" : "Lucas", "apellido" : "Dalto"}`,
    headers: {"Content-type": "application/json"}
}).then(res => res.text())
  .then(res => console.log(res))