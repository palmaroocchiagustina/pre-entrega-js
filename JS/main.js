//pre-entrega
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
const pago2 = new Pagos ("efectivo", 15);






function Carro (productos, subtotal, formas, total) {

    this.productos = productos;
    this.subtotal = subtotal;
    this.formas = formas;
    this.total = total;

    
}



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
                carrito.push(prenda5);
                console.log(carrito);
                break;
        
            default:
                alert("Ingresa opción válida");
                break;
        }

    
     eleccion = prompt("Ingresa el número de la prenda que eligas: \n 1-remera $2000\n 2-buzo $6000\n 3-jeans $10000\n 4- camisaco $12000 \n 5-zapatillas $20000 \n 6-SALIR ")
        

    } while (eleccion != 6 && eleccion != "6");
    
   /* return resultado = alert("El total de tu compra es de " + suma);*/
    
}

seleccion();

//sub-total carrito 

const subTotal = carrito.reduce((acc, el) => {

return acc + el.precio;


},0);

alert ("El sub-total de tu compra es " + subTotal )
carrito.push(subTotal);
console.log(carrito);


// MENU (FORMAS DE PAGO) 

function fPagos() {
    let  pagos = prompt ("Selecciona la forma de pago, ingresando el número correspondiente : \n 1-Crédito \n 2-Debito \n 3-Efectivo o transferencia");
    
    do {
        switch (pagos) {
            case "1":
                carrito.push(pago1)
                alert ("Débito, esta opción tiene 20% de recargo.");
                break;
            case "2":
                carrito.push(pago2);
                alert ("En efectivo o transferencia, tenes un 15% de descuento.");                   
                break; 
            default:
                
        alert ("Ingresa el valor correcto")
    
        }
    } while (condition);
           
         
    }
    
    fPagos();

// total del carrito 


const total = carrito.reduce((acc, el) => {

    return acc + el.precio;
    
    
    },0);
    
    alert ("El sub-total de tu compra es " + total )
    carrito.push(total);
    console.log(carrito);





//filtrar por precio
/*
let porPrecio = prompt(
    "Selecciona un opción \n 1 - Menor precio \n 2 - Mayor precio"
  );
  
  function filtrarPorPrecio(arr, filtro) {
    let valor = prompt("Ingresa el monto");
  
    return arr.filter((el) => {
      switch (filtro) {
        case "1":
          return el.precio < valor;
          break;
        case "2":
          return el.precio > valor;
          break;
      }
    });
  }
  const precio = filtrarPorPrecio(productos, porPrecio);
  console.log(precio);*/





/*

// meidos de pago recargo o descuentos (ver la clase)


function Pago(nombre, resultado ) {

    this.nombre = nombre;
    this.resultado = parseInt(resultado);

    this.sumarRecargo = ()=>{

        pago.push = this.resultado * 1.21;
       
        
    }

   this.restarImp = () => {
 
    this.total = this.total - 1.20 ;
     
   }
   
   
}

const pagoNuevo1 = new Pago ("tarjeta crédito", 20);
const pagoNuevo2 = new Pago ("debito", 20);
const pagoNuevo3 = new Pago ("efectivo", 15);

console.log(resultado);
function fPagos() {
    let  pagos = prompt ("Selecciona la forma de pago, ingresando el número correspondiente : \n 1-Crédito \n 2-Debito \n 3-Efectivo o transferencia");
    
            switch (pagos) {
                case "1":

                    carrito.push(pagoNuevo1);
                    return alert ("En efectivo o transferencia, tenes un 15% de descuento.");
                    
    
                case "2":
                    carrito.push(pagoNuevo2);
                   return alert ("Débito, esta opción tiene 20% de recargo.");
                    
                 case "3":
                    carrito.push(pagoNuevo3);
                   return alert ("Crédito.");
                 
                default:
                    
            alert ("Ingresa el valor correcto")
        
            }
         
    }
    
    fPagos();


function crearCarro(Carro) {
    
for (const resultado of Carro) {
    
    Carro.forEach(element => {
        let suma = suma + element.precio
    });
}


alert("el total es : " + suma);

    
}


crearCarro();*/

    






