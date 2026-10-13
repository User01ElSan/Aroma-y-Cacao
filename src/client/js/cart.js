// ==========================================
// AROMA & CACAO - LÓGICA DEL CARRITO DE COMPRAS
// ==========================================

let cart = JSON.parse(localStorage.getItem('aroma_cart')) || [];

// Guardar en localStorage y actualizar UI
function saveCart() {
    localStorage.setItem('aroma_cart', JSON.stringify(cart));
    updateCartUI();
}

// Agregar producto al carrito
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    saveCart();
    
    // Notificación flotante de confirmación
    showToast(`¡${name} agregado al pedido!`);
}

// Eliminar o reducir producto del carrito
function removeFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    saveCart();
}

// Actualizar la interfaz visual del carrito
function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalEl = document.getElementById('cart-total');

    if (!cartCountEl || !cartItemsContainer || !cartTotalEl) return;

    // Calcular cantidad total de ítems
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;

    // Calcular monto total
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalEl.textContent = `S/ ${totalPrice.toFixed(2)}`;

    // Renderizar ítems en el Modal
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg" style="text-align:center; color:#888; margin-top:2rem;">Tu carrito está vacío actualmente.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;">
                <div>
                    <strong style="color:var(--primary-dark);">${item.name}</strong>
                    <div style="font-size:0.85rem; color:#666;">S/ ${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-weight:bold; color:var(--accent-terracota);">S/ ${(item.price * item.quantity).toFixed(2)}</span>
                    <button onclick="removeFromCart('${item.name}')" style="background:#f44336; color:white; border:none; border-radius:4px; padding:2px 8px; cursor:pointer;">-</button>
                </div>
            </div>
        `).join('');
    }
}

// Abrir / Cerrar el desplegable del Carrito
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = (cartModal.style.display === 'block') ? 'none' : 'block';
    }
}

// Simular checkout / Procesar Pedido
function processCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega algunos productos de la carta primero.');
        return;
    }
    
    alert('¡Gracias por tu pedido! Tu solicitud ha sido enviada con éxito al sistema. Te contactaremos pronto.');
    cart = [];
    saveCart();
    toggleCart();
}

// Mensaje Toast flotante
function showToast(message) {
    let toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background-color: var(--primary-dark);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 3000;
        font-weight: 500;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// Cargar UI al iniciar
document.addEventListener('DOMContentLoaded', updateCartUI);