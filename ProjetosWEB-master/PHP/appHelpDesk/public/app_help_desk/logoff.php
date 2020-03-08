<?php
    session_start();

    //remover indices do array de sessão
    //unset($_SESSION['autenticado']); //remove se existir

    //detruir a variavel de sessão
    //session_destroy()

    session_destroy();
    header('Location: index.php');
?>