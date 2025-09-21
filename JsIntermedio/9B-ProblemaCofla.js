alumnos = [{
    nombre:"Marco Gamez",
    email:"marco@gmail.com",
    materia:"Fisca 3"
},{
    nombre:"Karina",
    email:"karina@gmail.com",
    materia:"Fisca 1"
},{
    nombre:"gabo",
    email:"gabo@gmail.com",
    materia:"calculo 2"
},{
    nombre:"Erandi",
    email:"erandi@gmail.com",
    materia:"Literatura"
},{
    nombre:"cofla",
    email:"cofla@gmail.com",
    materia:"Recreo"
}];

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlcode = ` 
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select name="" id="">
                <option value="1">Semana 1</option>
                <option value="2">Semana 2</option>
            </select>
        </div>
    `;
    
    document.querySelector(".grid-container").innerHTML+= htmlcode;
}

const boton = document.querySelector(".boton-confirmar");
boton.addEventListener("click", ()=>{

});