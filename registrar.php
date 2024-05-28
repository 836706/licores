<?php

function conectar() {
    $conexion = new PDO("mysql:host=localhost;dbname=mydb", "root", "");
    return $conexion;
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$nombre_usuario = $_POST["nombre_usuario"];
$correo = $_POST["correo"];
$contrasena = $_POST["contrasena"];
$contrasena = hash("md5",$contrasena);
$ingresar_usuario = conectar();
$ingresar_usuario = $ingresar_usuario->query("INSERT INTO usuarios (nombre, apellido, nombre_usuario, contrasena, correo) VALUES ('$nombre','$apellido','$nombre_usuario','$contrasena','$correo')");
if ($ingresar_usuario->rowCount() > 0) {
    echo("<h1>Usuario registrado con exito </h1>");

// Redirigir al usuario a otra página después de cierta acción
header("Location: http://localhost/licores/");
// Asegúrate de incluir exit para detener la ejecución del script después de la redirección
exit;

} else {
    // El inicio de sesión es inválido
    echo "Usuario o contraseña incorrectos";
    
}

// Cerrar la sentencia y la conexión
$stmt->close();
$conn->close();
?>