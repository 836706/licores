document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    console.log('Usuario registrado:', { username, email, password });
    
    // Simula el registro exitoso
    alert('Registro exitoso!');

    // Redirige a la página principal
    window.location.href = 'http://localhost/licores/';
});
