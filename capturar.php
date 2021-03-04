<?php


$usuario = $_POST['usuario'];

$clave = $_POST['contra'];



if(empty($_POST))
{
    echo json_encode("LOS CAMPOS ESTAN VACIOS");
}
else 
{
    echo json_encode('BIENVENIDO');
}
 