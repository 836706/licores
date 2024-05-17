document.addEventListener('DOMContentLoaded', function() {
    var ageGateForm = document.querySelector('.age-gate__form');
    var ageGateYesButton = ageGateForm.querySelector('.age-gate__submit--yes');
    var ageGateNoButton = ageGateForm.querySelector('.age-gate__submit--no');
    var ageGateErrorsContainer = ageGateForm.querySelector('.age-gate__errors');
  
    ageGateYesButton.addEventListener('click', function(event) {
      event.preventDefault();
      validateAge(true);
    });
  
    ageGateNoButton.addEventListener('click', function(event) {
      event.preventDefault();
      validateAge(false);
    });
  
    function validateAge(isAbove18) {
      // Aquí puedes implementar la lógica para verificar la edad del usuario
      // (por ejemplo, comunicándote con un servidor, almacenando la edad en una cookie, etc.)
  
      if (isAbove18) {
        // Redirigir al usuario a la página principal u ocultar el formulario de verificación de edad
        window.location.href = 'https://nectar.com.co/';
      } else {
        // Mostrar un mensaje de error o redirigir al usuario a otra página
        ageGateErrorsContainer.textContent = 'Lo siento, debes ser mayor de 18 años para acceder a este contenido.';
      }
    }
  });
  