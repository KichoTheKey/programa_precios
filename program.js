const products = [
    {id: 1, name: "Mezcla original 200g", price: 500,},
    {id: 2, name: "Mezcla original 500g", price: 900,},
    {id: 3, name: "Mezcla especial 200g", price: 700,},
    {id: 4, name: "Mezcla original 200g", price: 1200}
];

const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
let carrito = [];

// Función para que el usuario elija su compra
function add() {
  const productoID  = parseInt(producto.value);
  const product = products.find(item => item.id == productoID);
  const number = parseInt(cantidad.value);

  let purchase = {
    product: product,
    number: number,
  };

  const purchaseItem = carrito.findIndex((item) => item.product.id === purchase.product.id)
  if(purchaseItem === -1) {
    carrito.push(purchase)
  } else {
    carrito[purchaseItem].number += purchase.number
  }

  window.alert(`${detalleCarrito()}\nSubtotal: ${subtotal()} yenes`);
  producto.value = "";
  cantidad.value = "";
}
// Fin de la función

// Declaro el resto de mis funciones
function subtotal() {
  return carrito.reduce((prev, purchase) => prev + purchase.product.price * purchase.number, 0)
}

function detalleCarrito() {
  return carrito.map(purchase => `${purchase.product.name} - ${purchase.product.price} yenes.: ${purchase.number} item.\n`).join("")
};

function costoEnvio(varSubTotal) {
  if (varSubTotal >= 3000) {
    return 0
  } else if (varSubTotal < 2000){
    return 500
  } else {
    return 250
  }
}

// Función para calcular y mostrar el total de la compra
function total() {
  const varSubTotal = subtotal();
  const envio = costoEnvio(varSubTotal);
  window.alert(`${detalleCarrito()}\nEl subtotal es: ${varSubTotal} yenes. La tarifa de envío es: ${envio} yenes. El total es: ${varSubTotal + envio} yenes`);
  carrito = [];
  producto.value= "";
  cantidad.value = "";
}