let temporizadorActivo = true; // Variable que controla si el carrusel está activo

// Función para ampliar la tarjeta
function ampliarTarjeta(button) {
  const card = button.closest('.card');
  const description = card.querySelector('.description');
  const closeBtn = card.querySelector('.close-btn');

  // Verificar si ya hay una tarjeta ampliada
  const cardAmpliada = document.querySelector('.expanded-card');
  if (cardAmpliada) {
    return; // Si ya hay una tarjeta ampliada, no hacer nada
  }

  // Desactivar el temporizador del carrusel
  temporizadorActivo = false; // Desactivar el carrusel cuando se amplía una tarjeta

  // Agregar clase de ampliación y mostrar descripción y botón de cierre
  card.classList.add('expanded-card');
  description.style.display = 'block';
  closeBtn.style.display = 'block';
}

// Función para cerrar la tarjeta
function cerrarTarjeta(closeButton) {
  const card = closeButton.closest('.card');
  const description = card.querySelector('.description');
  const closeBtn = card.querySelector('.close-btn');

  // Quitar clase de ampliación y ocultar descripción y botón de cierre
  card.classList.remove('expanded-card');
  description.style.display = 'none';
  closeBtn.style.display = 'none';

  // Reactivar el temporizador del carrusel
  temporizadorActivo = true; // Reactivar el carrusel
}

// Cerrar tarjeta al hacer clic fuera de la imagen o tarjeta
document.addEventListener('click', function(event) {
  const cardAmpliada = document.querySelector('.expanded-card');
  if (cardAmpliada && !cardAmpliada.contains(event.target)) {
    cerrarTarjeta(cardAmpliada.querySelector('.close-btn'));
  }
});

// Función para el carrusel (simulada)
function iniciarCarrusel() {
  if (temporizadorActivo) {
    console.log("El carrusel está funcionando");
  } else {
    console.log("El carrusel está detenido");
  }
}

// Llamar al carrusel cada cierto tiempo (simulación)
setInterval(iniciarCarrusel, 3000); // 3 segundos
