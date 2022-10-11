//alerta en el inicio del sitio.

let telefono = prompt("HOLI :) ingresando tu numero de telefono vas a poder acceder anticipadamente a nuestros descuentos y promociones. Coloca SI para suscribirte o NO para ingresar a nuestro sitio").toLowerCase();

switch (telefono){
    case "si":
        parseInt(prompt("ingresá tu numero de teléfono"));
        break;
    case "no":
        alert("Si querés suscribirte más adelante escribinos a e404.info@gmail.com");
        break;
    default:
        alert("Respuesta invalida")
        parseInt(prompt("ingresá tu número de teléfono"));
}

// prox carrito



function pagos (){
let pago = prompt("por favor ingresa el metodo de pago que quieras utilizar. Efectivo, debito, credito o transferencia").toLowerCase();
    if ((pago == "efectivo") || (pago == "debito") || (pago == "credito")){
    alert("Tu compra se proceso con exito! el pago se realizará en el local al momento de retirar tu pedido");
}   else if (pago == "transferencia") {
    alert("Tu compra quedará efectiva una vez realizada la transferencia. CBU: 072047888000035751036");
}   else {
    alert("La opción ingresada es incorrecta");
}

}

pagos();


// funcion constructora para objetos

class Prenda {
    constructor(nombre, tipo, stock) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.stock = stock;
    }
}

//nuevos objetos

const notFound = new Prenda ("Not Found", "Remera", false);
const www = new Prenda ("WWW", "Remera", true);
const shutdown = new Prenda ("shutdown", "Remera", true);
const error404 = new Prenda ("error404", "Remera", false);
const click = new Prenda ("Click", "top", false);
const logo = new Prenda ("Logo", "Top", true);
const bLogo = new Prenda ("Logo", "Beanie", true);
const bLogoAmarillo = new Prenda ("Logo amarillo", "beanie", false);
const dead = new Prenda ("Dead", "beanie", false);

console.log(notFound);




