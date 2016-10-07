var kbox=[], 		//противники
	kboss=[], 		//боссы
	packet=[], 		//снаряды игрока
	evilRocket=[],  //снаряды противника
	boomPoint=[],	//анимации взрывов
	drop = [],		//обьекты анимации дропа
	object = [];

var bossPart1 = false,
	bossPart2 = false;
	bossPart3 = false;

var speed = 7, 
	speedsc = 3,
	speedEvilRocket = 5;
	//время появления врага
	kboxtime = 2000,
	//признак создания противника
	kboxcreatebool=true,
	//очки игрока
	points=0,
	//скорость босса
	speedboss = 0.5,
	//скорость противника
	speedkbox=1;
	speed2 = false;
	speed3 = false;
	speed4 = false;
	speed5 = false;


//растояние видимости обьектов
var visdist = 350;

//жизнь игрока
var 
	spacecarlifemax = 5,
	spacecarlife = 3,
	lifekbox=3;

//game loop
//-------------------------------------------
var gamePause=true,
	gameEnd=true;
//-------------------------------------------

//-------------------------------------------
var pjs = new PointJS('2d', 1024, 768);
pjs.system.initFullPage();

var log = pjs.system.log;
var game  = pjs.game;
var point = pjs.vector.point;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;
var camera = pjs.camera;

//---------------------------------------------------
//максимальная и минимальная величина экрана
var wh = game.getWH();
var getmaxx = wh.w;
var getmaxy = wh.h;	
var aspect = (getmaxx / getmaxy);

console.log(getmaxx);
console.log(getmaxy);


//---------------------------------------------------
//инициализация контроля клавиатуры и мыши
var key = pjs.keyControl;
key.initKeyControl();
var mouse = pjs.mouseControl;
mouse.initMouseControl();
//---------------------------------------------------

//---------------------------------------------------
//создание обьектов звездногонеба
var stars = [];
OOP.forInt(1000, function () {
  var size = math.random(1, 2);
  stars.push(game.newRectObject({
    x : math.random(0, game.getWH().w)+0.0001,
    y : math.random(0, game.getWH().h)+0.0001,
    w : size, h : size,
    fillColor : pjs.colors.randomColor(200, 255),
    userData : {
      dx : math.random(-2, 2),
      dy : math.random(-2, 2)
    }
  }));
});
//---------------------------------------------------

//---------------------------------------------------
//Замена стандартного курсора каким-либо изображением

//img - string, путь к картинке
//---------------------------------------------------

	//спрайты анимации
	var tile1 = pjs.tiles.newImage('imgs/spaceshipboom.png');
	var tile2 = pjs.tiles.newImage('imgs/bigboom.png');
	var tile3 = pjs.tiles.newImage('imgs/spaceship.png');
	var tile4 = pjs.tiles.newImage('imgs/packet.png');
	var tile42 = pjs.tiles.newImage('imgs/evilpacket.png');
	var tile5 = pjs.tiles.newImage('imgs/enemy.png');
	var tile6 = pjs.tiles.newImage('imgs/enemy1.png');
	var tile7 = pjs.tiles.newImage('imgs/shild.png');

	var spaceshipboom = {
		ssboom:tile1.getAnimation(0, 0, 64.4, 64, 9),
	}
	var animGalaxyGa = {
		boom:tile2.getAnimation(0, 0, 39, 40, 13),
	}
	var spaceShip= {
		ship:tile3.getAnimation(0, 0, 50, 50, 1),
	}
	//pocket
	var animpacket = {
		packet:tile4.getAnimation(0, 0, 50, 50, 2),
	}
	//evil pocket
	var animevilpacket = {
		evilpacket:tile42.getAnimation(0, 0, 50, 50, 2),
	}
	var animenemy = {
		enemy:tile5.getAnimation(0, 0, 65, 60, 1),
	}
	var animenemy1 = {
		enemy1:tile6.getAnimation(0, 0, 96, 82, 1),
	}

	var animshild = {
		shild:tile7.getAnimation(0, 0, 128, 128, 2),
	}



	//craft
	//------------------------------------------
	var craft1 = pjs.tiles.newImage('imgs/krest_anim.png');
	var addcraft1 = {
		addlife:craft1.getAnimation(0, 0, 128, 128, 4),
	}
	var craft2 = pjs.tiles.newImage('imgs/mine_anim.png');
	var addcraft2 = {
		addmine:craft2.getAnimation(0, 0, 128, 128, 4),
	}

	//------------------------------------------

//игрок
//----------------------------------------------
var spacecar = game.newAnimationObject({  
  	animation : spaceShip.ship,
	w : 50, h : 50,
  	x : getmaxx/2, y : getmaxy/2  
});
spacecar.life = spacecarlife;
//----------------------------------------------

//--------GAME---MENU----------------------------
//-----------------------------------------------

		//---------animation-game-menu---------------
		//-------------------------------------------
			var tileNewGame = pjs.tiles.newImage('imgs/newgame.png');
			var tileStatistics = pjs.tiles.newImage('imgs/statistics.png');

			var pngNewGame = {
				png1:tileNewGame.getAnimation(0, 0, 100, 50, 1),
			}
			var pngStatistics = {
				png2:tileStatistics.getAnimation(0, 0, 100, 50, 1),
			}
		//-------------------------------------------

var startGame = game.newAnimationObject({  
	animation : pngNewGame.png1,
	w : 100, h : 50,
  	x : 0, y : 0,
  	delay: 100  
});

var statGame = game.newAnimationObject({  
	animation : pngStatistics.png2,
	w:100,h:50,
  	x:0, y:0,
  	delay: 100 
});

startGame.x = getmaxx/2-startGame.w/2;
startGame.y = getmaxy/2-60;	

statGame.x = getmaxx/2-statGame.w/2;
statGame.y = getmaxy/2;	




//LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP MENU
//-----------------------------------------------
game.newLoop('menu', function () {
	game.clear();
	game.fill('black');

	//отрисовываем меню
	menuDraw();
	//события клавиш и мыши
	keyIsDownMenu();

	});
//-----------------------------------------------

//LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP game
//!!!!!!!!!!!!!переписать как отдельную функцию 
game.newLoop('game', function()
{
	game.clear();

	//заливаем жкран черным цветом
	game.fill('black');
	//отрисовываем звезды
	skyDrawMove(spacecar.getPosition(),visdist);
	//отрисовываем текст
	textDraw();	  
	//отрисовываем drop
	craftDrawDrop();

	//отлицаигрока
	//pjs.camera.moveTimeC(spacecar.getPosition(1), 20);
	
	//поворачиваем игрока к мышке
	spacecar.rotate(mouse.getPosition())

	//обрабатываем нажатие клавиш
	keyIsDown();
	//--------------------------------------------------------------------
	//проверяем попала ли ракета в босса
	packetInBoss();
	//--------------------------------------------------------------------	
	//отрисовываем рокеты игрока packet, проверяем на столкновения, удаляем, анимируем взрыв
	packetDraw();
	//--------------------------------------------------------------------
	//если существуют обьекты анимации взрыва то проверяем не закончился ли он, если закончился то удаляем его
	if (objLenght(boomPoint)>0) {endAnimation(boomPoint);};
	//--------------------------------------------------------------------
	//какието действия с боссом
	bossActDraw();
	//--------------------------------------------------------------------
	//рокеты противника (отрисовка)
	evilRocketDraw();

	//отрисовка обьектов
	for (var i = 0; i < objLenght(kbox); i++) 
	{
		//двигаем противника в сторону игрока
		kbox[i].moveAngle(speedkbox);	
		//поворачиваем противника в сторону игрока
		kbox[i].rotate(spacecar.getPosition(1));
		//проверка жизней и назначение действий
		if (kbox[i].life==lifekbox) 
		{
		}else 
		if (kbox[i].life==1)
		{
			//назначаем аимацию смерти
			//kbox[i].setAnimation(anim.dethdragon);
			//назначаем скорость 0
			//kbox[i].moveAngle();
		} else
		if (kbox[i].life<=0)
		{
			//-----------------------------------
			//добавляем в счете и в зависимости от счета выставляем скорость противника
			countingPoints(10);

			if ((points>400)&&(bossPart1==false)) 
				{
					createboss(1);
					bossPart1=true;
				} else
			if ((points>1000)&&(bossPart2==false)) 
				{
					createboss(2);
					speedboss = 1;
					bossPart2=true;
				}

			if ((points>1500)&&(bossPart3==false)) 
				{
					createboss(2);
					speedboss = 0.3;
					bossPart3=true;
				}

			if ((points>500)&&(speed2==false))  
				{
					speedkbox=2;
					speed2 = true;
				}
			if ((points>900)&&(speed3==false))  
				{
					speedkbox=3;
					speed3 = true;
				}
			if ((points>1200)&&(speed3==false))  
				{
					speedkbox=3;
					speed3 = true;
				}
			if ((points>1500)&&(speed4==false))  
				{
					speedkbox=4;
					speed4 = true;
				}


			//осколки
			//---------------------------------------------------------
			//createDebris(позиция создания, количество осколков,время жизни мин, время жизни максимум, цвет осколков);
			createDebris(kbox[i].getPosition(),10,100,150,"grey");

			//---------------------------------------------------------

			//при убийстве противника есть вероятность выпадения drop'а
			craftCreateDrop(kbox[i].getPosition(),20);

			//удаляем убитого			
			kbox.splice(i,1); 	
		}
	
		if (kbox[i])
		{
			//отрисовываем противника
			var fact = kbox[i].getDistanceC(spacecar.getPosition());
    		if (fact <= visdist) 
    			{
    				kbox[i].visible=true; 

					kbox[i].draw();   	
					//отрисовываем жизни			
    				lifeDraw(kbox[i]);
    			}
			//проверка на поражение	
			//если kbox[i] доходят до spacecar: конец игры
			if (spacecar.isDynamicIntersect(kbox[i].getDynamicBox()))
				{
					if (spacecar.life>1)
						{				
							//анимация взрыва об игрока			
							boomDraw(kbox[i].getPosition().x,kbox[i].getPosition().y,spaceshipboom.ssboom);
							//минус жизнь игроку 
							spacecar.life--;
							//удаляем взорвавшегося противника
							kbox.splice(i,1);					
						} else
						{
							//добавить анимацию взрыва игрока
							checkDestruction();							
						}
				}
		}
	}

	//проверка на победу
	//checkWin();

	//отрисовываем игрока
	spacecar.draw();
	//отрисовываем жизни над игроком
	lifeDraw(spacecar);
	//отрисовка оскольков	
	drawDebris();

	//таймер появления противника
	if (kboxcreatebool==true) 
		{
			kboxcreatebool = false;
			setTimeout(function()
			{
				createkbox();
				if (kboxtime>600) {kboxtime=kboxtime-5;}
			}, kboxtime);
		}

});

