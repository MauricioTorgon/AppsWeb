<?php
function conectarDB() : mysqli {
    $db = new mysqli('localhost', 'root', '123456789', 'bienesraices_crod');

    if(!$db) {
        echo "Error no se pudo conectar";
        exit;
    }
    return $db;
}