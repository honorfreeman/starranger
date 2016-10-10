
//осколки
//-------------------------------------------------------------
//createDebris(позиция создания, количество осколков,время жизни мин, время жизни максимум, цвет осколков,размер осколка);
function createDebris(pos,col,colmin,colmax,color)
{
	for (q = 0; q < col; q++) 
	{
		fragment_size = irand(1, 4);
		timeobject = game.newRectObject(
		{
	  		x : pos.x - 5, y : pos.y - 5,
	   		w : fragment_size*aspect, h : fragment_size*aspect,
	   		fillColor :color,
		});
	timeobject.dx = pjs.math.random(-50, 50, true) * 0.1;
	timeobject.dy = pjs.math.random(-50, 50, true) * 0.1;
	timeobject.settimer = 0;
	timeobject.settimermax = irand(colmin, colmax);
	object.push(timeobject);
  	}
}

//орисовка осколков
function drawDebris()
{
		if (object) 
		{ 
		var dt = game.getDT(50);
			for (i = 0; i <  objLenght(object); i++)
			{
				el = object[i];
    			el.move(point(el.dx*dt, el.dy*dt));
    			el.settimer = el.settimer + 1;
    			var fact = el.getDistanceC(spacecar.getPosition());
    			if (fact <= visdist) 
    				{
    					el.draw();
    				}
    			if (el.settimer>el.settimermax) {object.splice(i,1);}
    			if (el.isDynamicIntersect(spacecar.getDynamicBox()))
    			{    				
    				countingPoints(Math.floor(el.w/2));
    				object.splice(i,1);	
    			} 
			}
		}
}
//-------------------------------------------------------------


//*************************************************************
//begin craft
//-------------------------------------------------------------
function craftDrawDrop()
{
	if (drop) 
	{
	for (var i = 0; i < objLenght(drop); i++) 
		{
		drop[i].draw();
		if (drop[i].isDynamicIntersect(spacecar.getDynamicBox())) 
			{
			switch(drop[i].type)
						{
				case "life": 	
							{
								if (spacecarlifemax<=spacecar.life) {countingPoints(30);} else {spacecar.life++;}
								drop.splice(i,1);	
								break;
							} 
				/*case "mine": 	
							{
								pos = spacecar.getPosition();
								boomDraw(pos.x,pos.y,animGalaxyGa.boom);
								if (spacecar.life>1) {spacecar.life--;} else {checkDestruction();}					
								drop.splice(i,1);	
								break;
							}*/
						}
			}
		}
	}
}
//-------------------------------------------------------------

//bombDraw
//-------------------------------------------------------------
function bombDraw()
{
		if (bombDrop) 
		{ 
		var dt = game.getDT(50);
			for (i = 0; i <  objLenght(bombDrop); i++) 
			{
				el = bombDrop[i];
				//if (!el.isInCameraStatic()) return;
    			el.move(point(el.dx*dt, el.dy*dt));
    			el.settimer = el.settimer - 1;
    			var fact = el.getDistanceC(spacecar.getPosition());
    			if (fact <= visdist) 
    				{
    					el.draw();
    				}
    			if (el.x + el.w > getmaxx || el.x < 0) { el.dx *= -1; }
    			if (el.y + el.h > getmaxy || el.y < 0) { el.dy *= -1; }
    			if (el.settimer<=0) 
    				{
    					var timeangle=irand(0,45);
    					timex = el.getPosition().x;
						timey = el.getPosition().y;
						for (var j = 0; j < 8; j++) 
							{

								timeangle = timeangle + 45;
								evilRocketCreate(timex,timey,timeangle);	
							}
    					bombDrop.splice(i,1);
    				}

    			if ((el)&&(el.isDynamicIntersect(spacecar.getDynamicBox())))
	    			{    				
	    				pos = spacecar.getPosition();
						boomDraw(pos.x,pos.y,animGalaxyGa.boom);
						if (spacecar.life>1) {spacecar.life--;} else {checkDestruction();}	
	    				countingPoints(-100);
	    				bombDrop.splice(i,1);	
	    			} 
			}
		}
}
//-------------------------------------------------------------


//выпадение лута
//-------------------------------------------------------------
function craftCreateDrop(poskbox,x)
{
	numberRand = irand(1, x);
	switch(numberRand)
			{
				case 1: {
							//создаем анимационный обьект аптечка  
							timeDrop = new game.newAnimationObject({animation:addcraft1.addlife,delay:15,w:25,h:25,x:poskbox.x,y:poskbox.y})
							timeDrop.type = "life";
							//console.log(timeDrop);
							drop.push(timeDrop);
							break;
						}
				case 2: {
							//бомба при налете на нее теряется жизнь
							timeDrop = new game.newAnimationObject({animation:addcraft2.addmine,delay:15,w:30,h:30,x:poskbox.x,y:poskbox.y})
							timeDrop.type = "mine";
							timeDrop.dx = pjs.math.random(-50, 50, true) * 0.1;
							timeDrop.dy = pjs.math.random(-50, 50, true) * 0.1;
							timeDrop.settimer = irand(500, 1500);
							bombDrop.push(timeDrop);
							//drop.push(timeDrop);							
							break;
						}	
				case 3: {
							//console.log(poskbox.x);
							var timeangle=irand(0,90);
							timex = poskbox.x;
							timey = poskbox.y;
							for (var i = 0; i < 4; i++) 
							{
								timeangle = timeangle + 90;
								evilRocketCreate(timex,timey,timeangle);	
							}
							
							//бок топлива при взрывае которого создается волна убивая все вокруг ТАДААААХХХХ
							break;
						}					
			}
}
//-------------------------------------------------------------
//end craft

//отрисовка здоровья
//-------------------------------------------------------------
function lifeDraw(kbox)
{
	//console.log(kbox);	
	kbox.x
	kbox.y
	kbox.life

	kboxtext = "";

	for (var i = 0; i < kbox.life; i++) 
	{
		kboxtext = kboxtext+".";		
	}

	brush.drawText({
		x : kbox.x, y : kbox.y-30,
		text : kboxtext,
		color : 'white',
		size : 30,
		font : 'serif'
	});
}
//-------------------------------------------------------------

//отрисовка и движение звезд на заднем фоне, и видимость их в пределах видимости игрока
//-------------------------------------------
function skyDrawMove(pos, dist)
{
var dt = game.getDT();
var camPos = camera.getPosition();

OOP.forArr(stars, function (el) 
	{
	el.draw();
    var fact = el.getDistanceC(pos);
    if (fact <= dist) 
    	{
      	el.visible=true;//el.transparent(0.01);
      	el.move(point(el.dx*dt, el.dy*dt));
      	if (el.x+el.w < camPos.x) el.x = -el.w + camPos.x+game.getWH().w;
      	if (el.y+el.h < camPos.y) el.y = -el.h + camPos.y+game.getWH().h;
      	if (el.x > camPos.x+game.getWH().w) el.x = camPos.x;
      	if (el.y > camPos.y+game.getWH().h) el.y = camPos.x;
    	} else 
    	{
    	el.visible=false;
    	//el.setAlpha(el.getDistance(spacecar.getPosition(1))/100);
    	//console.log(el.getDistance(spacecar.getPosition(1))/100);

      	//el.transparent(-0.01);
    	}
	});
}
//-------------------------------------------

//вызывает проигрыш и завершает игру
//-------------------------------------------
function checkDestruction()
{
	console.log("GAME OWER!!!!!");
	console.log('game is stop!');
	mouse.setCursorImage(null);
	game.startLoop('menu');
	gameEnd=true;

	pjs.game.stop();

	//myjson = {"name": userName, "score": points};
	$.post("./php/score_record.php",{p:"record", name:userName, score:points},
	function(data)
		{
			if (data!="error")
				{
					var listArray = JSON.parse(data);
					console.log(data);
				}
		});

	alert("Печалька, но вы проиграли! "+ userName+":"+points);

}
//-------------------------------------------

//вывод текста
//-------------------------------------------
function textDraw()
{
		brush.drawText({
		x : 10, y : 30,
		text : 'fps: '+game.getFPS(),
		color : 'white',
		size : 30,
		font : 'serif'
	});

	brush.drawText({
		x : 110, y : 30,
		text : 'points: '+points,
		color : 'white',
		size : 30,
		font : 'serif'
	});

	brush.drawText({
		x : 10, y : 70,
		text : 'speed: '+speedkbox,
		color : 'green',
		size : 30,
		font : 'serif'
	});

	brush.drawText({
		x : getmaxx-200, y : 20,
		text : 'press ESC to pause',
		color : 'red',
		size : 20,
		font : 'serif'
	});
}
//-------------------------------------------

//проиграть анимацию взрыва ракеты
//-------------------------------------------
function boomDraw(objx,objy,thisanim)
{
	boomPoint.push(new game.newAnimationObject({animation:thisanim,delay:1,w:40,h:40,x:objx,y:objy}));
}

function endAnimation()
{
if (objLenght(boomPoint)>0) 
	{
		for (var i = 0; i < objLenght(boomPoint); i++) 
		{
			if (boomPoint[i]) 
			{
				boomPoint[i].draw();
				if (boomPoint[i].frame==boomPoint[i].anim.r){boomPoint.splice(i,1);};
			}
		}
	}
}
//-------------------------------------------

//обработка кнопок
//-------------------------------------------
function keyIsDown()
{
//game.getWH(); - Получение фактических размеров игровой сцены. врнет object:w-ширина сцен,h-высота сцены,w2-центр сцены по X,h2-центр сцены по Y
	if ((key.isDown('UP'))||(key.isDown('W'))) 
	{
		scpos = spacecar.getPosition();	
		if (scpos.y>=0) 
			{
				spacecar.move(point(0, -speedsc*1.5));
			}
	}

	if ((key.isDown('DOWN'))||(key.isDown('S'))) 
	{
		scpos = spacecar.getPosition();	
		wh = game.getWH();		
		if (scpos.y<=wh.h) 
			{
				spacecar.move(point(0,speedsc*1.5));
			}
	}

	if ((key.isDown('LEFT'))||(key.isDown('A'))) 
	{
		scpos = spacecar.getPosition();	
		if (scpos.x>=0) 
			{
				spacecar.move(point(-speedsc*1.5, 0));
			}
	}

	if ((key.isDown('RIGHT'))||(key.isDown('D')))
	{
		scpos = spacecar.getPosition();	
		wh = game.getWH();		
		if (scpos.x<=wh.w) 
			{
				spacecar.move(point(speedsc*1.5, 0));
			}
	}

	if (mouse.isPress('LEFT'))  
	{   
		//console.log("mouse left click"); 
		packetCreate(spacecar.getPosition().x,spacecar.getPosition().y,spacecar.getAngle());
	}

	if (mouse.isPress('RIGHT'))  
	{    
		//console.log("mouse right click");
		if (points>=20) 
			{
			countingPoints(-20);
			scpos = spacecar.getPosition();
			scposx=scpos.x; 
			scposy=scpos.y;
			//создаем обьект и кладем в массив packetов
			for (var i = 0; i < objLenght(kbox); i++) 
				{
					newpacket = new game.newAnimationObject({animation:animpacket.packet,delay:0,w:25,h:25,x:scposx+(spacecar.getSize().w/4),y:scposy});
					//задаем угол packet считывая угол мыши 
					newpacket.angle = pjs.vector.getAngle2Points(spacecar.getPosition(),kbox[i].getPosition());
					//newpacket.myAngle = spacecar.getAngle();
					packet.push(newpacket);
				} 
		} 
	}

	//ставим игру на паузу
	if (key.isDown('ESC'))
		{	
			if (gamePause==false) 
			{
				console.log('game is stop!');
				mouse.setCursorImage(null);
				game.startLoop('menu');
				gamePause=true;
				//game.resume();
			} else {}
		}
}
//-------------------------------------------

//-------------------------------------------
function createkbox()
{
	//выбираем рандомно сторону появления противника
	//createkboxtime=createkboxtime-10;
	kboxcreatebool = true;
	side = irand(1, 4);
	//создаем противника
	var time = new game.newAnimationObject({animation:animenemy.enemy,delay:25,w:50,h:50,x:-100,y:-100});
	time.life = lifekbox;
	wh = game.getWH();
	getmaxx=wh.w; getmaxy=wh.h;	 
	switch(side)
			{
				// с лева
				case 1: 	{
								posx = irand(0, 100);
								posy = irand(0, getmaxy);
								time.x = -posx;
								time.y = posy; 
								kbox.push(time);	
								break;
							} 
				// с права 
				case 2: 	{
								posx = irand(getmaxx, getmaxx+100);
								posy = irand(0, getmaxy);
								time.x = posx;
								time.y = posy; 
								kbox.push(time);
								break;
							}
				// с верху
				case 3: 	{	
								posx = irand(0, getmaxx);
								posy = irand(0, 100);
								time.x = posx;
								time.y = -posy; 
								pos = irand(0, 4);
								kbox.push(time);
								break;
							}
				// с низу
				case 4: 	{ 
								posx = irand(getmaxx, 100);
								posy = irand(0, getmaxy);
								time.x = posx;
								time.y = posy; 
								kbox.push(time);
								break;
							}
			}
}
//-------------------------------------------

function createboss(x)
{

for (var i=0;i<x;i++) 
	{
		var boss = new game.newAnimationObject({animation:animenemy1.enemy1,delay:25,w:96,h:82});
		boss.life = 10;
		rand = irand(1, 4);
		wh = game.getWH();
		switch(rand)
		{
			case 1: {boss.x = -30;boss.y = -30;break;}
			case 2: {boss.x = -30;boss.y = wh.w+30;break;}
			case 3: {boss.x = wh.h+30;boss.y = wh.w+30;break;}
			case 4: {boss.x = wh.w+30;boss.y = -30;break;}
		} 
		kboss.push(boss);
		//прописать фалсе когда босс уничтожен
	}
}

//назначаем действия над боссом
function bossActDraw()
{		
if (kboss)
	{
		for (var i = 0; i < objLenght(kboss); i++) 
		{
			var fact = kboss[i].getDistanceC(spacecar.getPosition());
    		if (fact <= visdist) 
    			{	
				kboss[i].draw();
				lifeDraw(kboss[i]);
				}	
			//двигаем босса в сторону игрока
			kboss[i].moveAngle(speedboss);	
			//поворачиваем босса в сторону игрока
			kboss[i].rotate(spacecar.getPosition(1));

			//если столкнулись с игроком
			if (kboss[i].isDynamicIntersect(spacecar.getDynamicBox()))
				{
					checkDestruction();	
				} 

			//стрельба
			shot = irand(1, 30);
			switch(shot)
			{
				case 1: {
							poskboss=kboss[i].getPosition(1);
							evilRocketCreate(poskboss.x,poskboss.y,kboss[i].getAngle());
							break;
						}
				case 2: {break;}
			}		
			//конец стрельбы
			//действия босса
		}
	}
}

function packetInBoss()
{
if ((kboss)&&(packet))
	{
	for (var i = 0; i < objLenght(kboss); i++) 
		{
		for (var j = 0; j < objLenght(packet); j++) 
			{
			if ((kboss[i])&&(packet[j])&&(kboss[i].isDynamicIntersect(packet[j].getDynamicBox())))
				{
				//избавиться от снаряда, отнять жизнь, нарисовать взрыв
				//10% шанса что снаряд пробьет защиту босса :)
				shotin = irand(1, 10);
					if (shotin==1)
						{
							//отнимаем жизнь
							if (kboss[i].life>1) 
								{
									kboss[i].life--;
								} else
								{										
									countingPoints(100);
									craftCreateDrop(kboss[i].getPosition(),1);
									createDebris(kboss[i].getPosition(),20,150,250,"green");
									kboss.splice(i,1);
								}
							//рисуем взрыв
							boomDraw(packet[j].getPosition().x,packet[j].getPosition().y,animGalaxyGa.boom);
							//удаляем ракету
							packet.splice(j,1);	
								
						} else 
					if (shotin>=2) 
						{
							//console.log("");
							//packet[j].angle = kboss[i].angle;
							//packet[j].moveAngle(speed*1);
							//нарисовать вокруг карабля энергетический всплеск!	
							//boomDraw(kboss[i].getPosition().x,kboss[i].getPosition().y,animshild.shild);
							timeAnimation = new game.newAnimationObject({animation:animshild.shild,delay:20,w:120,h:120,x:kboss[i].getPosition().x,y:kboss[i].getPosition().y});
							timeAnimation.angle = kboss[i].angle;
							boomPoint.push(timeAnimation);
							packet.splice(j,1);						
						}	
				}
			}
		}
	}
}

//begin packet
//------------------------------------------------------------
//координата x,координата y, угол поворота angle стреляющего
function packetCreate(posx,posy,angle)
{
		newpacket = new game.newAnimationObject({animation:animpacket.packet,delay:3,w:25,h:25,x:posx+(spacecar.getSize().w/4),y:posy+(spacecar.getSize().h/4)});
		newpacket.angle = angle;
		packet.push(newpacket);
}
//------------------------------------------------------------


function packetDraw()
{
	if (objLenght(packet)>0) 
	{	
		for (var i = 0; i < objLenght(packet); i++) 
		{

		var fact = packet[i].getDistanceC(spacecar.getPosition());
    	if (fact <= visdist) 
    		{
	       	packet[i].draw();        
	       	}
			//проверка каждого элемента массива kbox на столкновение с элементами массива packet
			for (var j = 0; j < objLenght(kbox); j++) 
			{
				if ((packet[i])&&(packet[i].isDynamicIntersect(kbox[j].getDynamicBox()))) 
				{
					//попали отнимаем жизнь!!!
					kbox[j].life--;			
					//координата столкновения packet и kbox[j]
					//создаем обьект анимации взрыыва
					if (fact <= visdist) {boomDraw(packet[i].getPosition().x,packet[i].getPosition().y,animGalaxyGa.boom);}
					//удаляем снаряд
					packet.splice(i,1);			
			    }
			}
	    	if (packet[i]) 
			{
				//если packet уходит за пределы избаляемся от него иначе пусть летит
				wh = game.getWH();	
				if ((packet[i].getPosition().y<=-10)||(packet[i].getPosition().x<=-10)||(packet[i].getPosition().y>=wh.h+10)||(packet[i].getPosition().x>=wh.w+10))
				{
					packet.splice(i,1);
				} else 
				{   					
					packet[i].moveAngle(speed*1)
				}		
			}
		}
	}
}
//-------------------------------------------------------------
//end packet


//begin evilRocket
//------------------------------------------------------------
//координата x,координата y, угол поворота angle стреляющего
function evilRocketCreate(posx,posy,angle)
{
		newevilRocket = new game.newAnimationObject({animation:animevilpacket.evilpacket,delay:3,w:25,h:25,x:posx,y:posy});
		newevilRocket.angle = angle;
		evilRocket.push(newevilRocket);
}

function evilRocketDraw()
{
	if (evilRocket) 
	{
		wh = game.getWH();	
		for (var i = 0; i < objLenght(evilRocket); i++) 
		{
		var fact = evilRocket[i].getDistanceC(spacecar.getPosition());
    	if (fact <= visdist) 
    	{		
			evilRocket[i].draw();
		}
		//проверяем на вылет evilRocket за границу если да то удаляем обьект иначе летит дальше
		if ((evilRocket[i].getPosition().y<=-10)||(evilRocket[i].getPosition().x<=-10)||(evilRocket[i].getPosition().y>=wh.h+10)||(evilRocket[i].getPosition().x>=wh.w+10))
			{
				evilRocket.splice(i,1);
			} else 
			{   					
				evilRocket[i].moveAngle(speedEvilRocket*1);
				//проверяем на столкновение с игроком 
				if (evilRocket[i].isDynamicIntersect(spacecar.getDynamicBox())) 
				{
					//обработать попадание в игрока там взрыв уничтожение снаряда получение урона игроком проверка на смерть					
					boomDraw(spacecar.getPosition().x,spacecar.getPosition().y,animGalaxyGa.boom);
					if (spacecar.life>1) {spacecar.life--;} else {checkDestruction();}																					
					evilRocket.splice(i,1);
				}
			}	
		}
	}
}
//-------------------------------------------------------------
//end evilRocket

function countingPoints(x)
{
points=points+x;
}
