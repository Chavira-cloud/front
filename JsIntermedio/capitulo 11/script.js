//CALLBACKS
/* class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}


const datosPersonas = [
    ["lucas","@soyDalto"],
    ["nora","@soyNora"],
    ["jose","@soyJose"]
]


let personas= [];
for (let i = 0; i < datosPersonas.length; i++) {
    personas[i]= new  Persona(datosPersonas[i][0],datosPersonas[i][1]);
}

const obtenerPersonas = (id, cb) => {
    if(personas[id] == undefined){
        cb("No se ha encontrado la persona");
    }else{
        cb(null,personas[id],id)
    }
}

const obtenerInstagram = (id, cb) => {
    if(personas[id].instagram == undefined){
        cb("No se ha encontrado el instagram");
    }else{
        cb(null,personas[id].instagram)
    }
}


obtenerPersonas(1,(err,personas)=>{
    if(err) console.log(err);

    else{
        console.log(personas.nombre);
        obtenerInstagram(id,(err, instagram) =>{

            if (err) console.log(err);
            else console.log(instagram);
        })
    }
}) */


// PROMESAS

/* let nombre = "Pedro";

const promesa = new Promise((resolve,reject) =>{
    if(nombre !== "Pedro") reject("Lo siento, el nombre no es pedro");
    else resolve(nombre)
})

promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
}) */

// CODIGO CON CALLBACKS Y PROMESAS
/* class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}


const datosPersonas = [
    ["lucas","@soyDalto"],
    ["nora","@soyNora"],
    ["jose","@soyJose"]
]


let personas= [];
for (let i = 0; i < datosPersonas.length; i++) {
    personas[i]= new  Persona(datosPersonas[i][0],datosPersonas[i][1]);
}

const obtenerPersonas = (id) => {
return new Promise((resolve, reject) =>{
    if(personas[id] == undefined) reject("No se ha encontrado la persona");
    else {resolve(personas[id])}
    })
}


const obtenerInstagram = (id) => {
    return new Promise ((resolve, reject) =>{
        if(personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
        else {resolve(personas[id].instagram)}
    }) 
}

let id = 1;
obtenerPersonas(id).then((personas) =>{
    console.log(personas.nombre);
    return obtenerInstagram(id);
}).then((instagram) =>{
    console.log(instagram);
}).catch((e) =>{
    console.log(e);
})
 */


//AWAIT & ASYNC

const objeto ={
    propiedad1 : "Valor1",
    propiedad2 : "Valor2",
    propiedad3 : "Valor3"
}

const obtenerInformacion = ()=>{
   return new Promise ((resolve, reject) =>{
        setTimeout(()=>{resolve(objeto)},3000)
    })
}

//obtenerInformacion().then(resultado => console.log(resultado))

const mostrarResultado = async() =>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();