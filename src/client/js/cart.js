// Aroma & Cacao - Lógica de Carrito de Compras

// Inicializar carrito desde localStorage o vacío
let cart = JSON.parse(localStorage.getItem('aroma_cart')) || [];

// Función para agregar productos al carrito
function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: price,
      quantity: 1
    });
  }

  saveCart();
  alert(`¡${productName} agregado al pedido!\nTotal acumulado: S/ ${calculateTotal()}`);
}

// Función para guardar en LocalStorage
function saveCart() {
  localStorage.setItem('aroma_cart', JSON.stringify(cart));
}

// Función para calcular el total
function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Función para obtener la cantidad total de ítems
function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Limpiar carrito (al completar pedido)
function clearCart() {
  cart = [];
  localStorage.removeItem('aroma_cart');
}