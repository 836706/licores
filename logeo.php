<?php
// Conexión a la base de datos (debes reemplazar los valores con los de tu base de datos)
require('db_config.php');

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre_usuario = $_POST["usuario"];
$password = $_POST["contrasena"];

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
    // Puedes redirigir al usuario a otra página aquí
} else {
    // El inicio de sesión es inválido
    echo "Usuario o contraseña incorrectos";
}

// Cerrar la sentencia y la conexión
$stmt->close();
$conn->close();
?>