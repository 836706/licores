.
<script src="http://localhost/licores/js/sweetalert2@10.js"></script>


<?php
// Conexión a la base de datos 
require('db_config.php');

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}


// Obtener los datos del formulario
$nombre_usuario = $_POST["usuario"];
$password = $_POST["contrasena"];
$password = hash("md5", $password);

// Preparar la consulta SQL
$sql = "SELECT * FROM usuarios WHERE nombre_usuario = ? AND contrasena = ?";

// Preparar la sentencia
$stmt = $conn->prepare($sql);

// Vincular los parámetros
$stmt->bind_param("ss", $nombre_usuario, $password);

// Ejecutar la sentencia
$stmt->execute();

// Obtener el resultado
$result = $stmt->get_result();

// Verificar si hay un resultado
if ($result->num_rows > 0) {
    // El inicio de sesión es válido
    echo "Inicio de sesión exitoso";
    
header("Location: http://localhost/licores/inicio.php");
// Asegúrate de incluir exit para detener la ejecución del script después de la redirección
exit;
} else {
    // El inicio de sesión es inválido
    echo "<script>
    Swal.fire({
      title: 'usuario o contraseña incorrectos',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'http://localhost/licores/login.html';
      }
    });
  </script>";


}



// Cerrar la sentencia y la conexión
$stmt->close();
$conn->close();
?>