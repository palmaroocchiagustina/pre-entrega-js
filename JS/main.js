//pre-entrega

//bienvenida
function nombreUsuario() {
    alert("Bienvenidos a CHILL OUT");
    let nombreIngresado = prompt("Ingresa tu nombre");
  
      alert("Hola " + nombreIngresado + " estos son nuestros pruductos");
    
}

nombreUsuario();
//funcion generica para push

function cargarProductos(arr, valor) {
    
    arr.push(valor)
}

//OBJETOS 
//pRODUCTOS(NOMBRE, PRECIO)

function Productos(nombre, precio) {

    this.nombre = nombre;
    this.precio = parseInt(precio);
    
}


const prenda1 = new Productos("remera", 2000);
const prenda2 = new Productos("buzo", 6000);
const prenda3 = new Productos("jeans", 10000);
const prenda4 = new Productos("cami saco", 12000);
const prenda5 = new Productos("zapatillas", 20000);


function Pagos(forma, descuento) {

    this.forma = forma;
    this.descuento = descuento;
    
}

const pago1 = new Pagos ("crédito", 20);
const pago2 = new Pagos ("débito", 20);
const pago3 = new Pagos ("transferencia", 15);
const pago4 = new Pagos ("efectivo", 15);


function Carro (productos, subtotal, formas, total) {

    this.productos = productos;
    this.subtotal = subtotal;
    this.formas = formas;
    this.total = total;

    
}
 
//BIENVENIDA


function nombreUsuario() {
    alert("Bienvenidos a CHILL OUT");
    let nombreIngresado = prompt("Ingresa tu nombre");
  
      alert("Hola " + nombreIngresado + " estos son nuestros pruductos");
    
}

nombreUsuario();

// MENU para seleccion de prendas y q se haga el push al carrito

const carrito = [];

function seleccion() {

    let eleccion = prompt("Ingresa el número de la prenda que eligas: \n 1-remera $2000\n 2-buzo $6000\n 3-jeans $10000\n 4- camisaco $12000 \n 5-zapatillas $20000 \n 6-SALIR ")
    
    do {
       
        switch (eleccion) {
            case "1":
                
                carrito.push(prenda1);
                console.log(carrito);
                break;
            case "2":
                carrito.push(prenda2);
                console.log(carrito);
                break;
            case "3":
                carrito.push(prenda3);
                console.log(carrito);
                break;
            case "4":
                carrito.push(prenda4);
                console.log(carrito);
                break;
                case "5":
                    carrito.push(prenda4);
                    console.log(carrito);
                    break;
            case "6":
                    alert("Salir")
                    break;
            default: 
                    alert("Ingresa una opción válida");
                    break;
               }
        
            eleccion = prompt("Ingresa el número de la prenda que eligas: \n 1-remera $2000\n 2-buzo $6000\n 3-jeans $10000\n 4- camisaco $12000 \n 5-zapatillas $20000 \n 6-SALIR ")
               
        
           } while (eleccion != "6" & eleccion != 6);
        //respuesta con el total
           alert("Gracias por tu compra" );
          
           
        }
    
    

seleccion();

//sub-total carrito 

const subTotal = carrito.reduce((acc, el) => {

return acc + el.precio;

},0);

alert ("El sub-total de tu compra es " + subTotal )
carrito.push(subTotal);
console.log(carrito);


//filtrar forma de pago 

const pago = [

    { forma: "credito", descuento: 20 },
    { forma: "debito", descuento: 20 },
    { forma: "efectivo", descuento: 15 },
    { forma: "transferencia", descuento: 15 },

];

console.log(pago);

let ingreso = prompt("Ingresa forma de pago");

function filtrarPagos(arr, filtro) {
    const elegido = arr.filter ((el)=>{

        return el.forma.includes(filtro);

    });
   return elegido; 
}

const buscador = filtrarPagos(pago, ingreso.toLocaleLowerCase());
console.log(buscador);
console.log(carrito);


//para iterar cada elemento

for (const elemento of buscador) {

    carrito.push(elemento);
     
    }

console.log(carrito);

