const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click", ()=>{
    let resultado, mensaje;
    try{
        prevRes = parseInt(document.getElementById('nota').value);
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprovacion(8,5,prevRes);
    }catch(e){
        resultado = "Eres gracioso?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado, mensaje);
});


const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1 : resultado = "No puede ser HDP";
        break;
        case 2 : resultado = "eres malicimo par mi materia";
        break;
        case 3 : resultado = "No sabes casi nada";
        break;
        case 4 : resultado = "muy mal";
        break;
        case 5 : resultado = "mal";
        break;
        case 6 : resultado = "Regular";
        break;
        case 7 : resultado = "bien , pero puede mejorar";
        break;
        case 8 : resultado = "!muy bien!";
        break;
        case 9 : resultado = "Excelente";
        break;
        case 10 : resultado = "Insuperable hijo de su pinshi madre";
        break;
        default: resultado = null; 
    }
    return resultado;
}

const verificarAprovacion = (nota1, nota2,prevRes) =>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >=  7){
        return `<span class='green'>APROBADO</span>`;
    }else{
         return `<span class='red'>NO APROBADO</span>`;
    }
}

const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display= "flex";
    modal.style.animation = "aparecer 1s forwards";
}