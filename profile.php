<?php

require("functions.php");
$user_id = GET("id");
$db = connectToDB();

$res = $db->prepare("SELECT * FORM users WHERE id=?");

$res->execute([$user_id]);
var_dump($res);
$row = $res->fetch();

echo "<a href='index.php'>back</a>";
echo"<h2>{$row['username']}'s Profile</hs>";
?>