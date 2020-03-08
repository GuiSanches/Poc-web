<?php
    require '../../app_lista_tarefas2/tarefa_model.php';
    require '../../app_lista_tarefas2/conexao.php';
    require '../../app_lista_tarefas2/tarefa_service.php';

    $conexao = new Conexao();
    $tarefa = new Tarefa();    

    $acao = isset($_GET['acao']) ? $_GET['acao'] : 'recuperar';    

    if($acao == 'recuperar') {
        $tarefaService = new TarefaDB($conexao, $tarefa);
        $tarefas = $tarefaService->Recupera();
    } else if($acao == 'inserir') {        
        $tarefa->__set('tarefa', $_POST['tarefa']);
        $tarefaService = new TarefaDB($conexao, $tarefa);
        $tarefaService->Adiciona();
        header('location: todas_tarefas.php');
        } else if($acao == 'remover') {
            $tarefa->__set('id', $_GET['id']);
            $tarefaService = new TarefaDB($conexao, $tarefa);
            $tarefaService->Remove();
            header('location: todas_tarefas.php');
            } else if($acao == 'edita') {
                $tarefa->__set('tarefa', $_POST['tarefa'])->__set('id', $_POST['id']);                
                $tarefaService = new TarefaDB($conexao, $tarefa);
                $tarefaService->Atualiza();
                header('location: todas_tarefas.php');
                } else if($acao == 'marcar') {
                    $tarefa->__set('id', $_GET['id']);
                    $tarefaService = new TarefaDB($conexao, $tarefa);
                    $tarefaService->marcaRealizado();
                    header('location: todas_tarefas.php');
                }
?>