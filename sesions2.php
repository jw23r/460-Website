<?php
session_start();
function GET($key){
if(!array_key_exists("username", $_SESSION)){
	header("location: sessions.php");
	exit;
}
return"";
}
function GET($key){
if(array_key_exists($key, $_GET))
 return $_GET["$key"];
return"";
}

$item = GET("item");

if(!array_key_exists("inventory", $_SESSION) $_SESSION["inventory"] = [];
	if(!is_array($_SESSION["inventory"])) $_SESSION["inventory"] = [];
	

array_push($_SESSION["inventory"], $item);
	header("location: sessions.php");





?>