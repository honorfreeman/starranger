function menuDraw()
	{
		startGame.draw();
		statGame.draw();
		//отрисовываем звезды
		skyDrawMove(startGame.getPositionC(),400);
	}

function keyIsDownMenu()
	{
	if (key.isDown('ESC'))
		{
		if (gamePause==true) 
		{
			game.startLoop('game');
			gamePause=false;
		}	
	}


	if (mouse.isDown('LEFT')) 
	{
		if (mouse.isPeekStatic('LEFT', startGame.getStaticBox()))
		{
			console.log('click in startGame');
			mouse.setCursorImage("imgs/shoot.png");
			console.log('game is start!');
			game.setLoop('game');
			gamePause=false;
			gameEnd=false;

		}
		if (mouse.isPeekStatic('LEFT', statGame.getStaticBox()))
		{
			console.log('click in statGame');
		}
	}

	if (mouse.isDown('RIGHT'))
	{

	}
}

