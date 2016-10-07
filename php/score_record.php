<?php
$revers = false;

$p = $_POST['p'];
$myjson = $_POST['myjson'];

if ($p=="record") 
{
	$json = file_get_contents('score.json');
	$json = json_decode($json, true); 

	if (isset($json)) 
	{
		for ($i=0; $i<count($json); $i++)
		{
			if ($json[$i][name]==$myjson[name])
			{
				$json[$i][score]=$myjson[score]; 	
				//замена
				$revers = true;
			}
		}
	}

	if ($revers==false) 
	{
		$json[] = $myjson;
	}

	asort($json);
	reset($json);

	$putjson = json_encode($json);
	file_put_contents('score.json', $putjson);

	if (isset($json)) 
	{
		echo $putjson;
	} else 
	{
		echo "error";
	}
}
?>