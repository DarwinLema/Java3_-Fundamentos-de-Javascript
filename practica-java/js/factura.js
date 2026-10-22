var precio;
var cantidad;
var total;
var el=document.getElementById('cost');
var productos = ['tomate','lechuga','zanahoria','manzana']

producto="tomate";
precio=0.75;
cantidad=14;
total=precio*cantidad;
el.textContent=producto+' $'+total;

var productos = ['tomate','lechuga','zanahoria','manzana']

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
    
}
