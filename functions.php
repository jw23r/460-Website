<?php

function pageTop(){
?>
<!DOCTYPE html>
<html>
 <head>
    <meta charset="utf-8">
    <title>My test page</title>
      <link href="main.css" rel="stylesheet">
  </head>
  <body>

     <header>
         <nav>
             <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="contact.php">Contact</a></li>
            <li><a href="game1.php">minecraft pinball</a></li>
            <li><a href="connect4.php">connect4</a></li>
            <li><a href="game3.php">race through space</a></li>
            <li><a href="game4.php">shootem up</a></li>
            <li><a href="TextAdventuer.php">Adventuer quest</a></li>

        </ul>
         </nav>
      </header>

<?
}

function pageBottom(){
?></body>
</html>
<?}
    function footers(){
        ?>
              <footer>
             <nav>
             <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="contact.php">Contact</a></li>
            <li><a href="game1.php">minecraft pinball</a></li>
            <li><a href="connect4.php">connect4</a></li>
            <li><a href="game3.php">race through space</a></li>
            <li><a href="game4.php">shootem up</a></li>
            <li><a href="TextAdventuer.php">Adventuer quest</a></li>


        </ul>
         </nav>
         </footer>
         <?   }
    function connect4Board(){
?>
  <div id="board">
     <div id="board-inset">
      <div id="grid"></div>
        <div id="discs"></div>
    </div><p> is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs</p>
    </div>
    <script src="connect4.js"></script>

   <? }

?>