<?php

require("functions.php");
session_start();
$user = POST("user");
$pass = POST("pass");
$loggedIn = array_key_exists('uid', $_SESSION);
$formSubmitted = ($user || $pass);
if($formSubmitted){
$db = connectToDB();
$res = $ db->prepare("SELECT * FROM users WHERE user=?;");
$res->execute([$user]);
if($res->rowCount() > 0){
$row = $res->fetch();
}
ifelse{
	array_push($errs,," no user matching that username/password found ")
}
}
if($loggedIn) redirect("index.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>login page</title>
</head>
<body>
	<form method="POST">
		<label for="user"username:></label><input type=" type="text name="username" name="">
</body>
</html>

?>