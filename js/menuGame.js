//отрисовка статистики
//-------------------------------------------------------------
function StatDraw()
{
	//отображаем статистику
	if (showstat!=false)
	{
		$.post("./php/score_record.php",{p:"stat"},
		function(data)
			{
				if (data!="error")
					{
						if (data)
						{
							var statArray = JSON.parse(data);
							stattext = statArray;
						}
					} else console.log("null");
			});
	showstat=false;
	}

	if (stattext) 
		{
			for (i = 0; i <  objLenght(stattext); i++) 
				{
					brush.drawText({
					x : 10, y : 30*i,
					text : stattext[i].name,
					color : 'red',
					size : 20,
					font : 'serif'
					});

					brush.drawText({
					x : 100, y : 30*i,
					text : stattext[i].score,
					color : 'red',
					size : 20,
					font : 'serif'
					});	
				}	
		}
}
//-------------------------------------------------------------

//нажатие клавиш в меню
//-------------------------------------------------------------
function keyIsDownMenu()
{
	if (key.isDown('ESC'))
	{
		if (gamePause==true) 
		{
			game.setLoop('game');
			mouse.setCursorImage("imgs/shoot.png");
			gamePause=false;
		}	
	}

	if (mouse.isDown('LEFT')) 
	{
		if ((gameStart==false)&&(mouse.isPeekStatic('LEFT', startGame.getStaticBox())))
		{
			console.log('click in startGame');
			console.log('game is start!');
			game.startLoop('name');
		}
	}

	if (mouse.isDown('RIGHT'))
	{
		if (mouse.isPeekStatic('LEFT', startGame.getStaticBox()))
		{
			console.log("click in startGame right mouse button");
		}
	}
}
//-------------------------------------------------------------

