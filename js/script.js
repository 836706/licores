document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Realiza una petición AJAX a login.php para verificar las credenciales
    // (puedes usar fetch o XMLHttpRequest)

    // Si las credenciales son válidas, redirige al panel de control
    // Si no, muestra un mensaje de error en el elemento con id "message"
});
