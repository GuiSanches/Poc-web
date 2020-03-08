<?php
    try {
        echo '<h3> *** Try *** </h3>';

        $sql = 'Select * from clientes';
        //mysql_query($sql);

        if(!file_exists('require_arquivo_a.php')) {
            throw new Exception('O arquivo em questão deveria estar disponivel as '. date('d/m/Y H:i:s') . ' mas não estava. Vamos seguir msm assim');
        }
    } catch(Error $e) {
        echo '<h3> *** catch *** </h3>';
        echo '<p style="color: red">' . $e . '</p>';
    } catch(Exception $e) {
        echo '<h3> *** catch exception*** </h3>';
        echo '<p style="color: red">' . $e . '</p>';
    } 

?>