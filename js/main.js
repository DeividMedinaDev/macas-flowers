// ================= AÑO DINÁMICO =================
document.getElementById('year').textContent = new Date().getFullYear();

// ================= SERVICE WORKER (OPCIONAL) =================
// Solo registra si existe el archivo sw.js
// Si no lo usas, puedes eliminar este bloque completo

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/macas-flowers/sw.js', { 
      scope: '/macas-flowers/' 
    })
    .then(registration => {
      console.log('Service Worker registrado correctamente:', registration.scope);
    })
    .catch(error => {
      // No muestra error en consola para no confundir al usuario
      // Si no existe sw.js, simplemente no se registra
    });
  });
}

// ================= NOTA SOBRE ANIMACIONES =================
// Las animaciones al scroll ahora se manejan completamente con CSS
// usando la propiedad animation-delay con variables CSS (--index)
// Esto es más eficiente que usar Intersection Observer en este caso