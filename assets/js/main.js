const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function revisarTest() {
  const respuestas = [
    { name: "q1", correct: "1", feedback: "La triada CIA es la base de la ciberseguridad: protege la confidencialidad, integridad y disponibilidad de la información." },
    { name: "q2", correct: "1", feedback: "El phishing engaña al usuario para robar información haciéndose pasar por una fuente confiable." },
    { name: "q3", correct: "1", feedback: "El 2FA agrega una capa extra de seguridad, incluso si alguien obtiene tu contraseña." },
    { name: "q4", correct: "1", feedback: "El ataque DDoS contra Dyn usó dispositivos IoT para saturar sus servidores y afectar servicios populares." }
  ];

  respuestas.forEach((q, i) => {
    const seleccionada = document.querySelector(`input[name="${q.name}"]:checked`);
    const feedback = document.getElementById(`feedback${i + 1}`);
    if (seleccionada) {
      if (seleccionada.value === q.correct) {
        feedback.textContent = "✅ Correcto. " + q.feedback;
        feedback.classList.remove("text-danger");
        feedback.classList.add("text-success");
      } else {
        feedback.textContent = "❌ Incorrecto. " + q.feedback;
        feedback.classList.remove("text-success");
        feedback.classList.add("text-danger");
      }
    } else {
      feedback.textContent = "⚠️ No se ha seleccionado ninguna opción.";
      feedback.classList.remove("text-success", "text-danger");
      feedback.classList.add("text-warning");
    }
  });
}


const modalTest = document.querySelector('#test-seguridad');

modalTest.addEventListener('hidden.bs.modal', () => {
  // Reset all radio buttons
  const radios = modalTest.querySelectorAll('input[type="radio"]');
  radios.forEach(r => r.checked = false);

  // Clear feedback messages
  const feedbacks = modalTest.querySelectorAll('.feedback');
  feedbacks.forEach(fb => {
    fb.textContent = "";
    fb.classList.remove("text-success", "text-danger", "text-warning");
  });
});

// PEDACITO DE JQUERY PORQUE LO PIDE LA PAUTA
$('td').on('mouseenter', function() {
  $(this).css({
    transform: 'scale(1.025)',
    fontSize: '1.125rem',
    transition: 'transform 0.1s ease'
  });
}).on('mouseleave', function() {
  $(this).css({
    transform: 'scale(1)',
    fontSize: '1rem',
    transition: 'transform 0.3s ease'
  });
});