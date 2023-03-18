//declaracion de variables
let precio = 0;
let cantidad = 0;

//declaracion de funciones
function price(producto){
    switch (producto) {
        case "1":
          precio = precio + (cantidad * 450);
          break;
        case "2":
          precio = precio + (cantidad * 400);
          break;
        case "3":
          precio = precio + (cantidad * 200);
          break;
    }
    return(precio);
    }

function amount(producto){
    switch (producto) {
        case "1":
          cantidad = prompt ("Ingresa la cantidad:");
          break;
        case "2":
          cantidad = prompt ("Ingresa la cantidad:");
          break;
        case "3":
          cantidad = prompt ("Ingresa la cantidad:");
          break;
    }
}    

//desarrollo  
let nombre = prompt ("Bienvenido! Ingresa tu nombre:");
let direccion = prompt ("Ingresa la dirección de envío:"); 
console.log(nombre);
console.log(direccion);

let producto = prompt("Elige la opción de tus viandas: \n1-Estandar \n2-Light \n3-Guarnicion");

amount(producto);

price(producto);

let continuar = prompt ("Desea agregar algún otro producto a su pedido?: \nSI \nNO");

if ((continuar == "SI") || (continuar == "si")){
    producto = prompt("Elige la opción de tus viandas: \n1-Estandar \n2-Light \n3-Guarnicion");
    amount(producto);
    price(producto);
    alert ("Gracias" + " " + nombre + ". " + "El total de tu pedido es:" + " " + precio);
}
if ((continuar == "no") || (continuar == "NO")){
    alert ("Gracias" + " " + nombre + ". " + "El total de tu pedido es:" + " " + precio);
}




