<?php

session_start();

unset($_SESSION["username"]);
unset($_SESSION["inventory"]);
unset($_SESSION["gold"]);
header("location: sessions.php");

?>

