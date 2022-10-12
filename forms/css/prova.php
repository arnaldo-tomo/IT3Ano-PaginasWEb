<?php
         

         $valor = $_POST['valor'];

         if($valor>0){
             $p='Valor Possetivo';
         }elseif($valor<0){
             $p='Valor negativo';
         }else{
             $p='Igual a Zero';
         }
         
           echo "$p";

          <h1>NUMERO DOIS</h1>
          $vA = 10;
          $vB = 50;

          if($vA>$vB){
              $p='Variavel A e maior que B';
          }else{
             $p='Variavel b e maior que A'; 
          }
          echo $p;
?>