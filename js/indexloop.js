var userName = '';

var kbox=[], 		//противники
	kboss=[], 		//боссы
	packet=[], 		//снаряды игрока
	evilRocket=[],  //снаряды противника
	boomPoint=[],	//анимации взрывов
	drop = [],		//обьекты анимации дропа
	bombDrop = [],  //обьекты анимации бомб
	debrisShip = [],	//обьекты обломки коробля
	stattext = [];  //массив элементов статистики

var bossPart1 = false,
	bossPart2 = false;
	bossPart3 = false;

var speed = 7, 			 //скорочть
	speedsc = 3,		 //скорочть игрока
	speedEvilRocket = 5; //скорость снаряда противника
	kboxtime = 2000,     //время появления врага
	kboxcreatebool=true, //признак создания противника
	points=0,			 //очки игрока
	speedboss = 0.5,	 //скорость босса
	speedkbox=1,		 //скорость противника
	speed2 = false,
	speed3 = false,
	speed4 = false,
	speed5 = false,
	showstat = true;

//растояние видимости обьектов
var visdist = 350;

//жизнь игрока
var spacecarlifemax = 5, // максимаотное количество жизней игрока
	spacecarlife = 3,	 // начальное количетсво жизней игрока
	lifekbox=3;			 // количество жизней противника
	lifekboss=10;		 // количество жизней босса
//game loop
//-------------------------------------------
var gamePause=false,
	gameEnd  =false,
	gameStart=false;
//-------------------------------------------

//// создание движка var pjs = new PointJS(контекст, ширина, высота, объект стиля)
//-------------------------------------------
var pjs = new PointJS('2d', 1024, 768);

pjs.system.initFullPage();   //Разворачивает канвас по высоте и ширине браузера
//pjs.system.initFullScreen(); //Разворачивает канвас по высоте и ширине экрана, устанавливает полноэкранный режим

var log = pjs.system.log;
var game  = pjs.game;
var point = pjs.vector.point;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;
var camera = pjs.camera;
//---------------------------------------------------


//---------------------------------------------------
//максимальная и минимальная величина экрана
var wh = game.getWH();
var getmaxx = wh.w;
var getmaxy = wh.h;	
var aspect = (getmaxx / getmaxy);
//---------------------------------------------------

//инициализация контроля клавиатуры и мыши
//---------------------------------------------------
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


//ввод имени
//-----------------------------------------------
game.newLoop('name', function () {

if (gameStart==false)
{
   game.clear();
   game.fill('black');

   skyDrawMove(startGame.getPositionC(),400);	

   brush.drawText({
     y : getmaxy/2-60, x : getmaxx / 2,
     align : 'center',
     text : 'Введите имя',
     color : 'red',
     size : 20
   });
      
   pjs.dialogs.openLine(
   	{
     	x : getmaxx/2 -150 , y : getmaxy/2,
     	w : 300, h : 50,
     	size : 20,
     	fillColor : "grey",
   		color : "red"
   	}, function (text) 
   	{
    	if (!text) return;
    	userName = text;
    	mouse.setCursorImage("imgs/shoot.png");
    	game.setLoop('game');
		gameStart=true;	
   	});
} else
{

}
	
});
//-----------------------------------------------

//LOOP MENU
//-----------------------------------------------
game.newLoop('menu', function () 
	{
		game.clear();
		game.fill('black');

		//отрисовываем звезды
		skyDrawMove(startGame.getPositionC(),400);

		//обьект начала игры
		startGame.draw();

		//отрисовка статистики
		StatDraw();

		//события клавиш и мыши
		keyIsDownMenu();
	});
//-----------------------------------------------

//LOOP game
//-----------------------------------------------
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
	//отрисовка мин
	bombDraw();
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
	endAnimation();
	//--------------------------------------------------------------------
	//какието действия с боссом
	bossActDraw();
	//--------------------------------------------------------------------
	//рокеты противника (отрисовка)
	evilRocketDraw();

	//разные действия
	//действия в зависимости от количества очков
	differentActions();

	//корабль игрока
	//--------------------------------------------------------------------
	spacecarActDraw();
	//--------------------------------------------------------------------

	//отлицаигрока
	//pjs.camera.moveTimeC(spacecar.getPosition(1), 20);

	//отрисовка оскольков	
	drawDebris();

	//коробли противников!
	//--------------------------------------------------------------------
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

	//действия противнкика
	kboxActDraw();
	//--------------------------------------------------------------------

});

