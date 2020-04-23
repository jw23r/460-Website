<?php

session_start();



if(!array_key_exists("username", $_SESSION)){
$_SESSION["username"] = ["jesse"];
$_SESSION["inventory"] = [""];
$_SESSION["gold"] = ["0"];


}

$inventory = $_SESSION["inventory"]


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Inventory</title>
</head>
<body>
	<a href="sessions3.php">Logout</a>
	<h2>Inventory Items:</h2>
	<ul>
		<?
		if(count($inventory) > 0){
		echo"<ul>";
foreach ($inventory as $item) {
	echo"<li>{$item}<li>";
	# code...
}
echo"</ul>";

		} else {
			echo"<p><em> you have no items!</em></p>";
	}

	?>
	<h2>Shop:</h2>
	<ul>
		<li><a href="sessions2.php?item=food">Buy Food</a>($1)</li>

</body>
</html>