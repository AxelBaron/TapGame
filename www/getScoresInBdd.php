<?php
  //connection
  include("connectBdd.php");

  $sql="SELECT * FROM scores ORDER BY score DESC LIMIT 10";
  $liste = $pdo->query($sql);
  $datas= $liste->fetchAll();
  echo json_encode($datas);

 ?>
