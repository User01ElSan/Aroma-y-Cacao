// ==========================================
// AROMA & CACAO - INTERACTIVIDAD GENERAL
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // Manejar envío del formulario de Reservas
    const reservaForm = document.getElementById('reserva-form');
    if (reservaForm) {
        reservaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Reserva / Pedido registrado exitosamente! Nos pondremos en contacto contigo a la brevedad para confirmar.');
            reservaForm.reset();
        });
    }

    // Manejar envío del formulario de Contacto / Suscripción
    const contactoForm = document.getElementById('contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por registrarte en el Club de Beneficios Aroma & Cacao! Revisa tu correo para recibir novedades y promociones.');
            contactoForm.reset();
        });
    }

});