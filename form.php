<?php
function GET($key){
if(array_key_exists("$key", $_GET)) return $_GET["$key"];;
return"";
}
function POST($key){
if(array_key_exists("$key", $_POST)) return $_POST["$key"];;
return"";
}
$user = POST("user");
$pass = POST("pass");
$comment = POST("comment");
$formWasSubmitted = false;

if($user && $pass){
$formWasSubmitted = true;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>form example</title>
</head>
<body>
	<?if(!$formWasSubmitted){?>
		<form action="form.php" method="POST">
		<input type="text" name = "user">
		<input type="password" name = "pass" >
		<textarea name="comment"></textarea>
        <input type="submit">
	</form>
<?} else { ?>
<p> thanks for the comment</p>
<p><?=$comment?></p>
<? } ?>

</body>
</html>