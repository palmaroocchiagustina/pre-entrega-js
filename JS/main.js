//pre-entrega

function Productos(nombre, precio) {

    this.nombre = nombre;
    this.precio = precio;
    
}

function Pagos(forma, descuento) {

    this.forma = forma;
    this.descuento = descuento;
    
}
/*
function Carro (productos, subtotal, formas, total) {

    this.productos = productos;
    this.subtotal = subtotal;
    this.formas = formas;
    this.total = total;

    
}*/
function Carro(resultado) {

    this.resultado = parseInt(resultado);
        
}


const prenda1 = new Productos("remera", 2000);
const prenda2 = new Productos("buzo", 6000);
const prenda3 = new Productos("jeans", 10000);
const prenda4 = new Productos("cami saco", 12000);
const prenda5 = new Productos("zapatillas", 20000);

let carrito = [];

// menu para seleccion de prendas y q se haga el push al carrito

function seleccion() {

    let eleccion = prompt("Ingresa el número de la prenda que eligas: \n 1-remera $2000\n 2-buzo $6000\n 3-jeans $10000\n 4- camisaco $12000 \n 5-zapatillas $20000 \n 6-SALIR ")
    suma = 0;   
    do {
       
        switch (eleccion) {
            case "1":
                
                carrito.push(prenda1);
                console.log(carrito);
               suma = suma + 2000;
               
                break;
            case "2":
                carrito.push(prenda2);
                console.log(carrito);
                suma = suma + 6000;
               
                break;
            case "3":
                carrito.push(prenda3);
                console.log(carrito);
                suma = suma + 10000;
               
                break;
            case "4":
                carrito.push(prenda4);
                console.log(carrito);
                suma = suma + 12000;
               
                break;
            case "5":
                carrito.push(prenda5);
                console.log(carrito);
                suma = suma + 20000;
                break;
        
            default:
                alert("Ingresa opción válida");
                break;
        }
    
     eleccion = prompt("Ingresa el número de la prenda que eligas: \n 1-remera $2000\n 2-buzo $6000\n 3-jeans $10000\n 4- camisaco $12000 \n 5-zapatillas $20000 \n 6-SALIR ")
        

    } while (eleccion != 6 && eleccion != "6");
    
    return resultado = alert("El total de tu compra es de " + suma);

}

seleccion();



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


crearCarro();

    






