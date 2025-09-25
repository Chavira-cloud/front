/* let nombre = 'Marco'

if (3 > 3){ //Sentencia de control
    alert(nombre);
}  */

//Flujo de bloque 
/* {
    let nombre = "Marco"
    alert(nombre)
} */


// estructura switch
/* let expr = "Manzana";    
switch (expr) {
    case "Banana":
        console.log("Esta fruta es amarrilla");
        break;
    case "Pera":
        console.log("Tienes forma de tio roberto");
    break;
    case "Manzana":
        console.log("Los primeros humanos la comieron");
    break;
    default:
        console.log("No es ninguna");
    break;
} */

//try ... catch

try{
    console.log("Aqui no ha pasado nada");
}
catch(error){
   // console.log(typeof error); //typeof para checar el tipo de dato
   console.log("Lo siento, ocurrio un error de referencia");
}