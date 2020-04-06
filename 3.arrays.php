<?php
//make a literal array with brackets
$arr = [37,
	"mewo",
	 true,
	 ["soup",0,13.2],
	false
	];
//asscoicative arrays
$arr =[
"unlucky number"=>13,
"name"=>"jimmy",
"pizza time"=>false, 
];

?>
<ul>
<?
foreach ($arr as $key => $data) {
	echo "<li><b>{$key}</b> : " ;

if(is_array($data)){
	$len = count($data);
	echo"array ({$len} items)";
	}else if ($data === false) {
		echo"false";
		# code...
	}
	else{
		echo $data;

	}
	echo</li>;
}
}
?>
</ul>ul>