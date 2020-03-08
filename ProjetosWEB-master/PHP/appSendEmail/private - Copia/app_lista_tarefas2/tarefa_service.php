<?php
    
    class TarefaDB {
        private $conexao;
        private $tarefa;

        public function __construct(Conexao $conexao, Tarefa $tarefa) {
            $this->conexao = $conexao->conectar();
            $this->tarefa = $tarefa;
        }

        public function Adiciona() {
            if($this->tarefa->__get('tarefa') != '') {
                $query = 'insert into tb_tarefas(tarefa) values(:tarefa)';
                $stmt = $this->conexao->prepare($query);
                $stmt->bindValue(':tarefa', $this->tarefa->__get('tarefa'));
                $stmt->execute();
            }
        }

        public function Recupera() {
            $query = 'select
                        s.status, t.tarefa, t.id
                        from 
                            tb_tarefas as t
                            left join tb_status as s ON(s.id = t.id_status)';
            $stmt = $this->conexao->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_OBJ);
        }

        public function Atualiza() {
            $query = 'update tb_tarefas set tarefa = ? where id = ?';
            $stmt = $this->conexao->prepare($query);
            $stmt->bindValue('1', $this->tarefa->__get('tarefa'));
            $stmt->bindValue('2', $this->tarefa->__get('id'));

            $stmt->execute();
        }

        public function Remove() {
            $query = 'delete from tb_tarefas where id = ?';
            $stmt = $this->conexao->prepare($query);
            $stmt->bindValue('1', $this->tarefa->__get('id'));
            $stmt->execute();
        }

        public function marcaRealizado() {
            $query = 'update tb_tarefas set id_status = 2 where id = ?';
            $stmt = $this->conexao->prepare($query);
            $stmt->bindValue('1', $this->tarefa->__get('id'));
            $stmt->execute();
        }
    }
?>