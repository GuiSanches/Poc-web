<?php
    class Tarefa {
        private $id;
        private $id_status;
        private $tarefa;

        public function __set($attr, $value) {
            $this->$attr = $value;
            return $this;
        }

        public function __get($attr) {
            return $this->$attr;
        }
    }
?>