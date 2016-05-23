<?php
  //connection
  require_once("connectBdd.php");

  $sql="SELECT * FROM scores ORDER BY score DESC LIMIT 20";
  $liste = $pdo->query($sql);
  $datas= $liste->fetchAll();
  json_encode($datas);
 ?>
