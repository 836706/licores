<?php
// Conexión a la base de datos esta default 
require('db_config.php');

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre_usuario = $_POST["usuario"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$password = $_POST["contrasena"];

// Preparar la consulta SQL
$sql = "INSERT INTO usuarios (nombre, apellido, nombre_usuario, contrasena, correo) VALUES (?, ?, ?, ?, ?)";

// Preparar la sentencia
$stmt = $conn->prepare($sql);

// Vincular los parámetros
$stmt->bind_param("sssss", $nombre, $apellido, $nombre_usuario, $password,  $correo );

// Ejecutar la sentencia
if ($stmt->execute() === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la sentencia y la conexión
$stmt->close();
$conn->close();
?>