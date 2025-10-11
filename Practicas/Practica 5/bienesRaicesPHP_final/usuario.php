<?php

//importar la conexion
require 'includes/config/database.php';
$db = conectarDB();

//creear email y password
$email = "correo@ejemplo.com";
$password = "123456789";

$passwordHash = password_hash($password, PASSWORD_BCRYPT);

//querry para crear el usuario
$query = "INSERT INTO usuarios (email, password) VALUES ('${email}', '${passwordHash}')";


//agregar el usuario a la base de datos
mysqli_query($db, $query);




?>  