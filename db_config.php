
<?php
// Conexión a la base de datos (debes reemplazar los valores con los de tu base de datos)
// si tienes xamp y tu usuario es root y no tienes contraseña dejarlo como esta sin modificar
// si tu usuario es root pero tiene clave modifcar el $password ="tu-clave";
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>