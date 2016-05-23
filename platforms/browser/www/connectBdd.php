<?php
	$usager="mim15a03";
	$motdepasse="v0q5";
	$hote="localhost";
	$base="basemim15a03";
	$dsn="mysql:dbname=".$base.";host=".$hote;

	try{
		$pdo=new PDO($dsn, $usager, $motdepasse, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

	}catch(PDOException $e){
		echo "Connection echouee: ".$e->getMessage();
	}
?>
