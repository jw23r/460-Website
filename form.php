<?php

session_start();
include("functions.php");
pageTop();
function GET($key){
if(array_key_exists("$key", $_GET)) return $_GET["$key"];;
return"";
}
function POST($key){
if(array_key_exists("$key", $_POST)) return $_POST["$key"];;
return"";
}
function FORMS(){?>
	<form action="form.php" method="POST">
			
				<textarea name="action">actions</textarea>
				<textarea name="location">location</textarea>
                 <input type="submit">

	</form> <?
}
$user = POST("user");
$pass = POST("pass");
$action = POST("action");
$formWasSubmitted = false;
$location = POST("location");
$startLocation = "noWhere";
$gold = POST("gold");
$hasSword = Post("sword");
if($action == "look" || $action == "travel" || $action == "lookAtStart" || $action == "attack" || $action == "buy"  || $action == "listen" || $action == "talk" || $action == "dojob" ){
$formWasSubmitted = true;
}
?>

	<?if(!$formWasSubmitted){

		?>

	
			<p>Welcome to Adventuer Quest </p>
			<p>for a list of actions  type "actions" any time during your quest</p>
				<?FORMS();?>

		<?}  if($action == "lookAtStart" || $location == "OPENFIELD" ) { ?>
<p> You Are in an  "OPENFIELD" between a "CASTLE" and A "DARKFOREST" </p>
<p> there is nothing else in your near vacinty</p>

<?FORMS();?>
    
<? } 
if($action == "look" && $location == "DARKFOREST" ) { ?>
<p>You find yourself in the middle of a dark foresset </p>
<p>you see what seems to be a light from a fire in the "DEEPFORSET"</p>
<p> the only other thing you can see is the light from the "OPENFIELD"</p>
<?FORMS();?>

<? }if($action == "look" && $location == "CASTLE" ) { ?>
<p>you arrive at the "CASTLE" you see two guys standing outside Talking</p>
<P> inside the walls you see a "MARKETPLACE"</P>

<?FORMS();?>

<? }
if($action == "listen" && $location == "CASTLE" ) { ?>
<p>there have been several attacks by a evil, Ninja, Pirate, Dragon, Dwarf</p>
<P> I hear he lives inside the "DEEPFORSET"</P>

<?FORMS();?>

<? }
if($action == "look" && $location == "MARKETPLACE" ) { ?>
<p>you see a giant sword for sale at the "BLACKSMITH"</p>
<P>theres a job posting at "POSTOFFICE"</P>

<?FORMS();?>

<? }if($action == "talk" && $location == "POSTOFFICE" ) { ?>
<p>if your looking for a job im willing to pay 1 gold bells per job</p>

<? }
if($action == "dojob" && $location == "POSTOFFICE" ) { ?>
<p>heres 10 gold Bells</p>
<form action="form.php" method="POST">
			
				<textarea name="action">actions</textarea>
				<textarea name="location">location</textarea>
				<textarea name="gold">howmanyjobs</textarea>

                 <input type="submit">

	</form> 
<? }

if($action == "buy" && $location == "BLACKSMITH" && $gold == "10" ) { ?>
<p>theres The Sword</p>
<form action="form.php" method="POST">
			
				<textarea name="action">actions</textarea>
				<textarea name="location">location</textarea>
				<textarea name="sword">item you would like to buy</textarea>

                 <input type="submit">

	</form> 
<? }
if($action == "buy" && $location == "BLACKSMITH" && !$gold == "10" ) { ?>
<p>Im not runing a chairty case come back when you have 10 gold bells</p>
<?echo$gold;?>

<?FORMS();?>
<? }
 if($action == "look" && $location == "DEEPFORSET" ) { ?>
<p>upon entering the "DEEPFORSET" you see the Evil, Ninja, Pirate, Dragon, Dwarf</p>

<?FORMS();?>

<? } if($action == "actions"){ ?>

		<p>actions</p>
		<P> "lookAtStart","look", "attack","doJob", "talk", "listen", "buy" </P>

<?} 
if($action == "attack" && $location == "DEEPFORSET" && !$hasSword == "sword") { ?>
<p>you attempt to kill the Evil, Ninja, Pirate, Dragon, Dwarf </p>
<p>unforuntaly you are outmatched do to you lack of wepons</p>
<? } if($action == "attack" && $location == "DEEPFORSET" && $hasSword == "sword") { ?>
<p>you attempt to kill the Evil, Ninja, Pirate, Dragon, Dwarf </p>
<p>you slay the Evil, Ninja, Pirate, Dragon, Dwarf with ease thanks to your nifity sword</p>
<? }
else{?> 
	<p> sorry my lord you cant do that here</p>
	<P>Something need doing?</P>
	<?FORMS();?>

<?}
footers();
pageBottom();
?>


