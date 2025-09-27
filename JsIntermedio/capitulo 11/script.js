class Persona {
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

console.log(personas);
