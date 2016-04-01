<?php
  //connection
  include("connectBdd.php");

  //Récupération des données de l'ajax
  $pseudo = $_POST['pseudo'];
  $score = $_POST['score'];


  //Insert
  $sql="INSERT INTO scores(player, score) VALUES ('".$pseudo."',".$score.")";
  $liste = $pdo->query($sql);
  $data= $liste->fetch();
 ?>
