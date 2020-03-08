<?php

    session_start();
    $arquivo = fopen('../../app_help_desk/arquivo.txt', 'a');

    $titulo = $_POST['titulo'];
    $categoria = $_POST['categoria'];
    $descricao = $_POST['descricao'];

    if($titulo == '' || $descricao == '') {
        fclose($arquivo);
        header('Location: abrir_chamado.php?erro');
    }else {

        $texto =$_SESSION['id'] . '#' . $titulo . '#' .$categoria . '#' . $descricao . PHP_EOL;

        fwrite($arquivo, $texto);

        fclose($arquivo);
        header('Location: abrir_chamado.php');
    }
?>