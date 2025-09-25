const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click", ()=>{
    let resultado, mensaje;
    try{
        resultado = parseInt(document.getElementById('nota').value);
        if(isNaN(resultado)){
            throw "Gracioso";
        }
        mensaje ="Hola";
    }catch(e){
        resultado = "Eres gracioso?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado, mensaje);
});


const abrirModal = (res, msg)=>{
    console.log(res);
    console.log(msg);
}