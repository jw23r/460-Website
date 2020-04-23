<?php
include("functions.php");
pagetop();
session_start();
?>

<P>Who Goes there please State your name and Reason for visting Rothenburg </P>
<?
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

	<?if(!$formWasSubmitted){?>
		<form action="form.php" method="POST">
		<input type="text" name = "user">
		<textarea name="comment"></textarea>
        <a href=" sessionsTown.php">Sumbit</a>
	</form>
<?} 

footers();
pagebottom();
?>

