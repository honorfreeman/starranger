//отрисовка статистики
//-------------------------------------------------------------
function StatDraw()
{
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


		/*brush.drawText({
		x : 10, y : 30,
		text : 'fps: '+game.getFPS(),
		color : 'white',
		size : 30,
		font : 'serif'
		});*/

}
//-------------------------------------------------------------

//-------------------------------------------------------------
function menuDraw()
	{
		//отрисовываем звезды
		skyDrawMove(startGame.getPositionC(),400);
		startGame.draw();
		//statGame.draw();
		StatDraw();
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
			game.startLoop('game');
			gamePause=false;
			mouse.setCursorImage("imgs/shoot.png");
		}	
	}


	if (mouse.isDown('LEFT')) 
	{
		if (mouse.isPeekStatic('LEFT', startGame.getStaticBox()))
		{
			console.log('click in startGame');
			console.log('game is start!');
			game.setLoop('name');
			gamePause=false;
			gameEnd=false;

		}

		/*if (mouse.isPeekStatic('LEFT', statGame.getStaticBox()))
		{
			console.log('click in statGame');
		}*/
	}

	if (mouse.isDown('RIGHT'))
	{

	}
}
//-------------------------------------------------------------

