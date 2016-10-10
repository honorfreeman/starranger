<?php
$revers = false;

$p     = $_POST['p'];
$name  = $_POST['name'];
$score = $_POST['score'];


if ($p=="record") 
{
	$json = file_get_contents('score.json');
	if (isset($json))
		{
			$array = json_decode($json, true);
			$serchname = false;

			//если результатов больше 30 то находим минимальный результат и удаляем его

			$minidex = 0;
			$fscore = $array[0][score]; 
			if (count($array)>=20)
				{
					for ($i=0; $i<count($array); $i++)
						{
							if ($fscore>$array[$i][score])
							{
								$fscore=$array[$i][score];
								$minidex = $i;
							}
						}
					unset($array[$minidex]);
				} 

			for ($i=0; $i<count($array); $i++)
				{
					if ($array[$i][name]==$name)
					{
						if ($array[$i][score]<$score) {$array[$i][score]=$score;}	
						$serchname = true;
					}
				}
			if ($serchname==false) 
			{
				$array[] = array("name" => $name, score => $score);				
			}
			$putjson = json_encode($array);
			file_put_contents('score.json', $putjson);
		}
}

if ($p=="stat")
{
	$json = file_get_contents('score.json');
	//$json = json_decode($json, true); 

	$n=0;
	if (isset($json)) 
	{
		$array = json_decode($json, true);

			for ($i=0; $i<count($array); $i++)
			{
			$newname = "";
			$newscore = 0;
			$index = 0;
			for ($j=0; $j<count($array); $j++)
				{
					if ($newscore < $array[$j][score]) 
						{
							$newname = $array[$j][name];
							$newscore=$array[$j][score];
							$index = $j;
						}			
				}
				if ($n!=15) 
				{
					$array[$index][score] = 0; 
					$newarray[] = array("name" => $newname, score => $newscore);
					$n=$n+1;
				}
			}



		$json = json_encode($newarray);
		echo $json;
	} else
	{
		echo "error";
	}
}

?>