<?php

class Thing{
static $number = 42;
function __construct($content){
$this-> content = $content;
}
function buildHTML(){
	echo"<div>$this->content</div>";
}
}


$t = new Thing("bark");
//acces operator is arrow ->
$t->buildHTML();

echo thing:: $number; 

?>