const materiasHTML = document.querySelector(".materias");

const materias =[
    {
        nombre: "Fisica 4",
        nota: 7
    },
    {
        nombre: "Calculo 3",
        nota: 8
    },
    {
        nombre: "BD 3",
        nota: 9
    },
    {
        nombre: "Matematica discretas 2",
        nota: 7
    },
    {
        nombre: "Programacion 4",
        nota: 8
    },
]

const obtenerMateria = (id) =>{
    return new Promise((resolve, reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400)
    })
}

//obtenerMateria(1).then(resultado => console.log(resultado));

const devolverInfo= async () =>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);
        let newHTML= `
         <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTML
    }
}

devolverInfo();