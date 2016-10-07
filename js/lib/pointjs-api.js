var link = {
	'PointJS.' : '<a style="color: #FFF500;" href="#pointjs">PointJS</a>.',
	'.system.' : '.<a style="color: #4AFF00;" href="#PointJS.system">system</a>.',
	'.vector.' : '.<a style="color: #007EFF;" href="#PointJS.vector">vector</a>.',
	'.math.' : '.<a style="color: #9DCACF;" href="#PointJS.math">math</a>.',
	'.keyControl.' : '.<a style="color: #FFD281;" href="#PointJS.keyControl">keyControl</a>.',
	'.mouseControl.' : '.<a style="color: #FFD281;" href="#PointJS.mouseControl">mouseControl</a>.',
	'.touchControl.' : '.<a style="color: #FFD281;" href="#PointJS.touchControl">touchControl</a>.',
	'.colors.' : '.<a style="color: #FFA1CC;" href="#PointJS.colors">colors</a>.',
	'.camera.' : '.<a style="color: #EBFFA1;" href="#PointJS.camera">camera</a>.',
	'.OOP.' : '.<a style="color: #FCFF8E;" href="#PointJS.OOP">OOP</a>.',
	'.game.' : '.<a style="color: #8FFF94;" href="#PointJS.game">game</a>.',
	'.brush.' : '.<a style="color: #D4BAFF;" href="#PointJS.brush">brush</a>.',
	'.resources.' : '.<a style="color: #FAB2E0;" href="#PointJS.resources">resources</a>.',
	'.tiles.' : '.<a style="color: #D4BAFF;" href="#PointJS.tiles">tiles</a>.',
	'.audio.' : '.<a style="color: #9C7CD1;" href="#PointJS.audio">audio</a>.',
	'.wAudio.' : '.<a style="color: #D9E1CF;" href="#PointJS.wAudio">wAudio</a>.',
	'.dialogs.' : '.<a style="color: #FFC898;" href="#PointJS.dialogs">dialogs</a>.',



	'.size(' : '.<a style="color: #FFD36B;" href="#PointJS.vector.size">size</a>(',
	'.point(' : '.<a style="color: #FFD36B;" href="#PointJS.vector.point">point</a>(',
	'.v2d(' : '.<a style="color: #FFD36B;" href="#PointJS.vector.v2d">v2d</a>(',
	'.w2h(' : '.<a style="color: #FFD36B;" href="#PointJS.vector.w2h">w2h</a>(',
	'.getKeyList(' : '.<a style="color: #FFD36B;" href="#PointJS.keyControl.getKeyList">getKeyList</a>(',
	'.getDynamicBox(' : '.<a style="color: #FFD36B;" href="#BaseObject.getDynamicBox">getDynamicBox</a>(',
	'.getStaticBox(' : '.<a style="color: #FFD36B;" href="#BaseObject.getStaticBox">getStaticBox</a>(',
	'.getPosition(' : '.<a style="color: #FFD36B;" href="#BaseObject.getPosition">getPosition</a>(',


	'.Animation(' : '.<a style="color: #FFD36B;" href="#Image.getAnimation">Animation</a>(',


	' Audio.' : '<a style="color: #9C7CD1;" href="#Audio">Audio</a>.',
	' WAudio.' : '<a style="color: #D9E1CF;" href="#WAudio">WAudio</a>.',
	' BaseObject.' : '<a style="color: #FFD36B;" href="#BaseObject">BaseObject</a>.',
	' RectObject.' : '<a style="color: #A1FF6F;" href="#RectObject">RectObject</a>.',
	' CircleObject.' : '<a style="color: #FF98AA;" href="#CircleObject">CircleObject</a>.',
	' EllipsObject.' : '<a style="color: #FF98AA;" href="#EllipsObject">EllipsObject</a>.',
	' BackgroundObject.' : '<a style="color: #E6D4CB;" href="#BackgroundObject">BackgroundObject</a>.',
	' PolygonObject.' : '<a style="color: #F6A16F;" href="#PolygonObject">PolygonObject</a>.',
	' ImageObject.' : '<a style="color: #F6A16F;" href="#ImageObject">ImageObject</a>.',
	' AnimationObject.' : '<a style="color: #F6A16F;" href="#AnimationObject">AnimationObject</a>.',
	' TextObject.' : '<a style="color: #F6C1A3;" href="#TextObject">TextObject</a>.',
	' Mesh.' : '<a style="color: #FFD36B;" href="#Mesh">Mesh</a>.',
	' Image.' : '<a style="color: #FFD36B;" href="#Image">Image</a>.',



	'.BaseObject(' : '.<a style="color: #FFD36B;" href="#BaseObject">BaseObject</a>(',
	'.RectObject(' : '.<a style="color: #A1FF6F;" href="#RectObject">RectObject</a>(',
	'.CircleObject(' : '.<a style="color: #A1FF6F;" href="#CircleObject">CircleObject</a>(',
	'.EllipsObject(' : '.<a style="color: #A1FF6F;" href="#EllipsObject">EllipsObject</a>(',
	'.BackgroundObject(' : '.<a style="color: #E6D4CB;" href="#BackgroundObject">BackgroundObject</a>(',
	'.PolygonObject(' : '.<a style="color: #F6A16F;" href="#PolygonObject">PolygonObject</a>(',
	'.ImageObject(' : '.<a style="color: #F6A16F;" href="#ImageObject">ImageObject</a>(',
	'.AnimationObject(' : '.<a style="color: #F6A16F;" href="#AnimationObject">AnimationObject</a>(',
	'.TextObject(' : '.<a style="color: #F6C1A3;" href="#TextObject">TextObject</a>(',
	'.Image(' : '.<a style="color: #FFD36B;" href="#Image">Image</a>(',
	'.Audio(' : '.<a style="color: #9C7CD1;" href="#Audio">Audio</a>(',
	'.WAudio(' : '.<a style="color: #D9E1CF;" href="#WAudio">WAudio</a>(',



	' .' : ' ',
	'false' : '<span style="color: #FF2C2C;">false</span>',
	'true' : '<span style="color: #7EFF2C;">true</span>'
};













var api = {

	'PointJS' : {
		name     : 'HTML5 Game Engine',
		type     : 'GLOBAL Object',
		api      : 'var ___ = new PointJS("2d", width, height, style);',
		note     : '2d - пока обязательный <br />\
		width - ширина канваса<br />\
		height - высота канваса<br />\
		style - объект { свойство : значение }<br />',
		example  : 'var game = new PointJS("2d", 640, 480, {backgroundColor : "black", border : "1px solid"});',
		returned : 'PointJS object'
	},


 // system
 'PointJS.system.log' : {
 	name     : 'Аналог console.log',
 	type     : 'function',
 	api      : '(message);',
 	note     : 'Сообщение в консоль',
 	example  : 'PointJS.system.log("Этот текст отобразится в консоли");',
 	returned : ''
 },

 'PointJS.system.getContext' : {
 	name     : 'Получение доступа напрямую к контексту',
 	type     : 'function',
 	api      : '();',
 	note     : 'Вернет ссылку на объект контекста',
 	example  : 'var ctx = PointJS.system.getContext(); > ctx.fillRect(0, 0, 10, 10);',
 	returned : ''
 },

 'PointJS.system.setStyle' : {
 	name     : 'Установить стиль канвасу',
 	type     : 'function',
 	api      : '(obj);',
 	note     : 'obj - object, набор стилей',
 	example  : 'PointJS.system.setStyle( { backgroundColor : "black" } );',
 	returned : ''
 },

 'PointJS.system.resize' : {
 	name     : 'Установить новую высоту и ширину',
 	type     : 'function',
 	api      : '(w, h);',
 	note     : 'w - number, новая ширина сцены > h - number, новая высота сцены',
 	example  : 'PointJS.system.resize( { 840, 480 );',
 	returned : ''
 },

 'PointJS.system.setSettings' : {
 	name     : 'Установка настроек',
 	type     : 'function',
 	api      : '(settings);',
 	note     : 'settings = {\
 		>`isShowError : true, // Отображать ошибки в консоли\
 		>`isStopForError : true, // Останавливать выполнение игры при ошибках\
 		>`isAutoClear : false, // автоматическая очистка сцены\
 		>}',
 		example  : 'PointJS.system.setSettings({isAutoClear : true});',
 		returned : ''
 	},

 	'PointJS.system.setDefaultSettings' : {
 		name     : 'Установка стандартных настроек канваса',
 		type     : 'function',
 		api      : '(settings);',
 		note     : 'settings = {\
 			>`набор свойств, доступных канвасу\
 			>}',
 			example  : 'PointJS.system.setDefaultSettings({>`fillStyle : "#CF2C2C">});',
 			returned : ''
 		},

 		'PointJS.system.delEvent' : {
 			name     : 'Удаление системного события',
 			type     : 'function',
 			api      : '(evt, key);',
 			note     : 'evt = группа событий >key = имя пользовательского события',
 			example  : 'PointJS.system.delEvent("onload", "myEvent");',
 			returned : ''
 		},

 		'PointJS.system.addEvent' : {
 			name     : 'Добавление системного события',
 			type     : 'function',
 			api      : '(evt, key, func);',
 			note     : 'evt = группа событий >\
 			key = имя пользовательского события >\
 			func = функция обработчик',
 			example  : 'PointJS.system.addEvent("onload", "myEvent", function () {>`alert("Страница загружена полностью");>});',
 			returned : ''
 		},

 		'PointJS.system.attachDOM' : {
 			name     : 'Прикрепление объекта к DOM дереву',
 			type     : 'function',
 			api      : '(HTMLObject);',
 			note     : 'HTMLObject - любой созданный функцией createElement объект',
 			example  : 'var myDIV = document.createElement("div"); >\
 			myDIV.innerHTML = "Новый элемент"; >\
 			PointJS.system.attachDOM(myDIV);',
 			returned : ''
 		},

 		'PointJS.system.initFullPage' : {
 			name     : 'Развертывание игры на всю страницу',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Разворачивает канвас по высоте и ширине браузера',
 			example  : 'PointJS.system.initFullPage();',
 			returned : ''
 		},

 		'PointJS.system.initFullScreen' : {
 			name     : 'Развертывание игры на весь экран',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Разворачивает канвас по высоте и ширине экрана, устанавливает полноэкранный режим',
 			example  : 'PointJS.system.initFullScreen();',
 			returned : ''
 		},

 		'PointJS.system.exitFullScreen' : {
 			name     : 'Вернуть исходный размер',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'вернет канвас к исходному размеру',
 			example  : 'PointJS.system.exitFullScreen();',
 			returned : ''
 		},

 		'PointJS.system.isFullScreen' : {
 			name     : 'Проверить, включен ли полноэкранный режим',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : '',
 			example  : 'var isFullScreen = PointJS.system.isFullScreen();',
 			returned : 'boolean > true - Полноэкранный режим включен > false - выключен'
 		}, 		

 		'PointJS.system.exitFullPage' : {
 			name     : 'Вернуть исходный размер',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'вернет канвас к исходному размеру',
 			example  : 'PointJS.system.exitFullPage();',
 			returned : ''
 		},

 		'PointJS.system.initFullScale' : {
 			name     : 'Растягивание игры на всю страницу',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Растягивает канвас по высоте и ширине браузера',
 			example  : 'PointJS.system.initFullScale();',
 			returned : ''
 		},

 		'PointJS.system.exitFullScale' : {
 			name     : 'Вернуть исходный размер',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Растягивает канвас по высоте и ширине браузера',
 			example  : 'PointJS.system.exitFullScale();',
 			returned : ''
 		},

 		'PointJS.system.getWH' : {
 			name     : 'Получить размер доступной области браузера',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Получение ширины и высоты доступной для использования области окна браузера',
 			example  : 'PointJS.system.getWH();',
 			returned : ' .size() > Размеры области браузера'
 		},

 		'PointJS.system.getInfo' : {
 			name     : 'Получить информацию о движке',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Получение информации о движке, авторах, версии',
 			example  : 'PointJS.system.getInfo();',
 			returned : 'object > Информацию о версии движка'
 		},

 		'PointJS.system.initFPSCheck' : {
 			name     : 'Инициализация счетчика FPS',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Требуется вызвать перед запуском игры, чтобы иметь доступ к статистике по FPS игры',
 			example  : 'PointJS.system.initFPSCheck();',
 			returned : ''
 		},

 		'PointJS.system.getFPS' : {
 			name     : 'Получить значение FPS',
 			type     : 'function',
 			api      : '(без аргументов);',
 			note     : 'Поучение текущего количества кадров в секунду',
 			example  : 'PointJS.system.getFPS();',
 			returned : 'number > Значение FPS'
 		},


	// vector

	'PointJS.vector.getAngle2Points' : {
		name     : 'Получить угол между двумя точками',
		type     : 'function',
		api      : '(p1, p2);',
		note     : 'p1 - .point(), первая точка > \
														p2 - .point(), вторая точка > \
														Функция возвращает угол, который указывает на направление первой точки на вторую',
		example  : 'var angle = PointJS.vector.getAngle2Points( .point(0, 0), .point(100, 150) );',
		returned : 'number > Угол между двумя точками'
	},

	'PointJS.vector.point' : {
		name     : 'Точка в 2D пространстве',
		type     : 'function',
		api      : '(x, y);',
		note     : 'x, y - координаты в пространстве. > \
		Функция является конструктором, может быть присвоена переменной.',
		example  : 'var myPoint = PointJS.vector.point(50, 45); // x - 50, y - 45',
		returned : 'object > Координаты в пространстве > Доступ к свойствам: > `myPoint.x, myPoint.y'
	},

	'PointJS.vector.v2d' : {
		name     : 'Вектор в 2D пространстве',
		type     : 'function',
		api      : '(x, y);',
		note     : 'x, y - координаты в пространстве. > \
		Функция является конструктором, может быть присвоена переменной.',
		example  : 'var myVector = PointJS.vector.v2d(50, 45); // x - 50, y - 45',
		returned : 'object > Координаты в пространстве > Доступ к свойствам: > `myVector.x, myVector.y'
	},

	'PointJS.vector.size' : {
		name     : 'Ширина и высота',
		type     : 'function',
		api      : '(w, h);',
		note     : 'w, h - ширина и высота в пространстве. > \
		Функция является конструктором, может быть присвоена переменной.',
		example  : 'var mySize = PointJS.vector.size(50, 45); // width - 50, height - 45',
		returned : 'object > Ширина и высота > Доступ к свойствам: > `mySize.w, mySize.h'
	},

	'PointJS.vector.w2h' : {
		name     : 'Ширина и высота',
		type     : 'function',
		api      : '(w, h);',
		note     : 'w, h - ширина и высота в пространстве. > \
		Функция является конструктором, может быть присвоена переменной.',
		example  : 'var mySize = PointJS.vector.w2h(50, 45); // width - 50, height - 45',
		returned : ' .size()'
	},

	'PointJS.vector.getPointAngle' : {
		name     : 'Получение новых координат точки после вращения',
		type     : 'function',
		api      : '(point, center, angle);',
		note     : 'point - vector.point() >\
		center - vector.point() > \
		angle - угол в градусах',
		example  : 'var mySize = PointJS.vector.getPointAngle( .point(10, 20), 45 ); // x - 50, y - 45, angle - 45',
		returned : ' .point()'
	},

	'PointJS.vector.isPointIn' : {
		name     : 'Проверка вхождения точки в область, построенную на основе массива point() объектов',
		type     : 'function',
		api      : '(point, area);',
		note     : 'point - vector.point() >\
		area - массив .point() объектов',
		example  : 'PointJS.vector.isPointIn( .point(10, 20), [ .point(0,0), .point(50,0), .point(50,50) ] );',
		returned : 'boolean > true - входит, > false - не входит'
	},

	'PointJS.vector.pointMinus' : {
		name     : 'Получение новых координат после вычитания векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.v2d()',
		example  : 'var newPoint = PointJS.vector.pointMinus( .point(10, 20), .v2d(5, 5) );',
		returned : ' .point()'
	},

	'PointJS.vector.pointPlus' : {
		name     : 'Получение новых координат после сложения векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.v2d()',
		example  : 'var newPoint = PointJS.vector.pointPlus( .point(10, 20), .v2d(5, 5) );',
		returned : ' .point()'
	},

	'PointJS.vector.pointInc' : {
		name     : 'Получение новых координат после умножения векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.v2d()',
		example  : 'var newPoint = PointJS.vector.pointInc( .point(10, 20), .v2d(5, 5) );',
		returned : ' .point()'
	},

	'PointJS.vector.pointDiv' : {
		name     : 'Получение новых координат после деления векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.v2d()',
		example  : 'var newPoint = PointJS.vector.pointDiv( .point(10, 20), .v2d(5, 5) );',
		returned : ' .point()'
	},

	'PointJS.vector.pointAbs' : {
		name     : 'Получение абсолютных координат',
		type     : 'function',
		api      : '(point);',
		note     : 'point - vector.point()',
		example  : 'var newPoint = PointJS.vector.pointAbs( .point(10, -20) );',
		returned : ' .point()'
	},

	'PointJS.vector.getMidPoint' : {
		name     : 'Получение средней точки (середины отрезка)',
		type     : 'function',
		api      : '(pointA, pointB);',
		note     : 'pointA, pointB - vector.point()',
		example  : 'var midPoint = PointJS.vector.getMidPoint( .point(10, -20), .point(100, 15) );',
		returned : ' .point()'
	},

	'PointJS.vector.getDistance' : {
		name     : 'Получение расстояния между двумя точками',
		type     : 'function',
		api      : '(pointA, pointB);',
		note     : 'pointA, pointB - vector.point()',
		example  : 'var dist = PointJS.vector.getDistance( .point(10, -20), .point(100, 15) );',
		returned : 'number > Расстояние между точками'
	},

	'PointJS.vector.isSame' : {
		name     : 'Проверка совпадения точек',
		type     : 'function',
		api      : '(pointA, pointB);',
		note     : 'pointA, pointB - vector.point()',
		example  : 'var midPoint = PointJS.vector.isSame( .point(10, -20), .point(100, 15) );',
		returned : 'boolean > true - совпадают > false - не совпадают'
	},

	'PointJS.math.limit' : {
		name     : 'Ограничение числа по модулю',
		type     : 'function',
		api      : '(numb, max);',
		note     : 'numb - number > \
		max - number',
		example  : 'var newNumb = PointJS.math.limit( 10, 8 ); // 8 > \
		var newNumb = PointJS.math.limit( -5, -4 ); // -4',
		returned : 'number'
	},

	'PointJS.math.a2r' : {
		name     : 'Перевод градусов в радианы',
		type     : 'function',
		api      : '(angle);',
		note     : 'angle - number',
		example  : 'var rad = PointJS.math.a2r( 45 );',
		returned : 'number > Значение в радианах'
	},

	'PointJS.math.random' : {
		name     : 'Получение псевдослучайного числа',
		type     : 'function',
		api      : '(min, max[, bool]);',
		note     : 'min - number, начальная граница > \
		max - number, конечная граница, > \
		bool - boolean, если true - исключается 0 (ноль)',
		example  : 'var randNum = PointJS.math.random( -4, 4, true );',
		returned : 'number > Случайное число в заданных границах'
	},

	'PointJS.math.toInt' : {
		name     : 'Конвертация вещественного числа в целочисленное',
		type     : 'function',
		api      : '(num);',
		note     : 'num - number, число, которому требуется отбросить дробную часть',
		example  : 'var num = PointJS.math.toInt( 5,5 ); // вернет 5',
		returned : 'number > Целое число'
	},



	'PointJS.keyControl.getKeyList' : {
		name     : 'Получение доступных для использования клавиш',
		type     : 'function',
		api      : '(без аргументов);',
		note     : '',
		example  : 'console.log(PointJS.keyControl.getKeyList());',
		returned : 'array > массив наименований клавиш'
	},

	'PointJS.keyControl.isDown' : {
		name     : 'Проверка удерживания клавиши нажатой',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, наименование клавиши (см. .getKeyList())',
		example  : 'console.log(PointJS.keyControl.isDown("LEFT"));',
		returned : 'boolean > true - клавиша зажата > false - клавиша не зажата'
	},

	'PointJS.keyControl.isUp' : {
		name     : 'Проверка отпускания клавиши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, наименование клавиши (см. .getKeyList())',
		example  : 'console.log(PointJS.keyControl.isUp("A"));',
		returned : 'boolean > true - клавиша была отпущена > false - клавиша не была отпущена'
	},

	'PointJS.keyControl.isPress' : {
		name     : 'Проверка нажатия клавиши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, наименование клавиши (см. .getKeyList())',
		example  : 'console.log(PointJS.keyControl.isPress("SPACE"));',
		returned : 'boolean > true - клавиша была нажата > false - клавиша не была нажата'
	},

	'PointJS.keyControl.getInputKey' : {
		name     : 'Получение клавиши, вводимой с клавиатуры',
		type     : 'function',
		api      : '();',
		note     : 'Вернет текстовое представление клавиши в режиме InputMode (Например: "W" или "SPACE").',
		example  : 'console.log(PointJS.keyControl.getInputKey());',
		returned : 'boolean > false - никакой символ в данный момент не вводится > \
		string > Текстовое представление клавиши'
	},

	'PointJS.keyControl.getInputChar' : {
		name     : 'Получение вводимого с клавиатуры символа',
		type     : 'function',
		api      : '();',
		note     : 'Вернет вводимый символ только при включенном режиме InputMode',
		example  : 'console.log(PointJS.keyControl.getInputChar());',
		returned : 'boolean > false - никакой символ в данный момент не вводится > \
		char > введенный символ'
	},

	'PointJS.keyControl.setInputMode' : {
		name     : 'Включение / отключение режима чтения клавиатуры',
		type     : 'function',
		api      : '(bool);',
		note     : 'bool - boolean, включение или отключение режима чтения символов с клавиатуры',
		example  : 'console.log(PointJS.keyControl.setInputMode( true ));',
		returned : ''
	},

	'PointJS.keyControl.isInputMode' : {
		name     : 'Проверка, включен ли режим чтения клавиатуры',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'console.log(PointJS.keyControl.isInputMode());',
		returned : 'boolean > true - Режим чтения клавиатуры включен > false - Отключен'
	},

	'PointJS.keyControl.exitKeyControl' : {
		name     : 'Отключение режима перехвата клавиатуры',
		type     : 'function',
		api      : '();',
		note     : 'После отключения режима перехвата клавиатуры события клавиатуры не будут обрабатываться движком.',
		example  : 'console.log(PointJS.keyControl.exitKeyControl());',
		returned : ''
	},

	'PointJS.keyControl.initKeyControl' : {
		name     : 'Включение режима перехвата клавиатуры',
		type     : 'function',
		api      : '();',
		note     : 'Включает режим перехвата клавиатуры. Не используется внутри игрового цикла.',
		example  : 'console.log(PointJS.keyControl.initKeyControl());',
		returned : ''
	},

	'PointJS.mouseControl.getPositionS' : {
		name     : 'Получение локальной позиции курсора',
		type     : 'function',
		api      : '();',
		note     : 'Вернет локальные координаты курсора мыши',
		example  : 'console.log(PointJS.mouseControl.getPositionS());',
		returned : ' .point() > Локальная позиция курсора'
	},

	'PointJS.mouseControl.getPosition' : {
		name     : 'Получение глобальной позиции курсора с учетом смещения камеры',
		type     : 'function',
		api      : '();',
		note     : 'Вернет глобальные координаты курсора мыши',
		example  : 'console.log(PointJS.mouseControl.getPosition());',
		returned : ' .point() > Глобальная позиция курсора'
	},

	'PointJS.mouseControl.setCursorImage' : {
		name     : 'Замена стандартного курсора каким-либо изображением',
		type     : 'function',
		api      : '(img);',
		note     : 'img - string, путь к картинке',
		example  : 'PointJS.mouseControl.setCursorImage("img/cursor.png");',
		returned : ''
	},

	'PointJS.mouseControl.setVisible' : {
		name     : 'Скрытие / отображение курсора',
		type     : 'function',
		api      : '(bool);',
		note     : 'bool - boolean, true - показать, false - скрыть',
		example  : 'PointJS.mouseControl.setMouseVisible( false );',
		returned : ''
	},

	'PointJS.mouseControl.isVisivle' : {
		name     : 'Проверка видимости курсора',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'PointJS.mouseControl.isVisivle();',
		returned : 'boolean > true - курсор видимый > false - курсор не видимый'
	},

	'PointJS.mouseControl.isDown' : {
		name     : 'Проверка удержания кнопки мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, обозрачение кнопки > LEFT, RIGHT, MIDDLE',
		example  : 'console.log(PointJS.mouseControl.isDown("LEFT"));',
		returned : 'boolean > true - кнопка зажата > false - кнопка не зажата'
	},

	'PointJS.mouseControl.isUp' : {
		name     : 'Проверка отпускания кнопки мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, обозрачение кнопки > LEFT, RIGHT, MIDDLE',
		example  : 'console.log(PointJS.mouseControl.isUp("LEFT"));',
		returned : 'boolean > true - кнопка отпущена > false - кнопка не отпущена'
	},

	'PointJS.mouseControl.isPress' : {
		name     : 'Проверка нажатия кнопки мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, обозрачение кнопки > LEFT, RIGHT, MIDDLE',
		example  : 'console.log(PointJS.mouseControl.isPress("MIDDLE"));',
		returned : 'boolean > true - кнопка нажата > false - кнопка не нажата'
	},

	'PointJS.mouseControl.isMove' : {
		name     : 'Проверка движения мыши',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'console.log(PointJS.mouseControl.isMove());',
		returned : 'boolean > true - мышь двигается > false - мышь не двигается'
	},

	'PointJS.mouseControl.isInStatic' : {
		name     : 'Проверка попадания курсора мыши в StaticBox',
		type     : 'function',
		api      : '(box);',
		note     : 'box - StaticBox, прямоугольная область (см. object.getStaticBox())',
		example  : 'PointJS.mouseControl.isInStatic( object.getStaticBox() );',
		returned : 'boolean > true - курсор попадает в область > false - курсор не попадает в область'
	},

	'PointJS.mouseControl.isInDynamic' : {
		name     : 'Проверка попадания курсора мыши в DynamicBox',
		type     : 'function',
		api      : '(box);',
		note     : 'box - DynamicBox, область из точек (см. object.getDynamicBox())',
		example  : 'PointJS.mouseControl.isInDynamic( object.getDynamicBox() );',
		returned : 'boolean > true - курсор попадает в область > false - курсор не попадает в область'
	},

	'PointJS.mouseControl.isInObject' : {
		name     : 'Проверка попадания курсора мыши в объект',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, проверяется попадание курсора в негo',
		example  : 'PointJS.mouseControl.isInObject( object );',
		returned : 'boolean > true - курсор попадает на объект > false - курсор не попадает на объект'
	},

	'PointJS.mouseControl.isWheel' : {
		name     : 'Проверка события колесика мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - направление вращения > UP, DOWN',
		example  : 'PointJS.mouseControl.isWheel( "UP" );',
		returned : 'boolean > true - колесико вращается > false - колесико не вращается'
	},

	'PointJS.mouseControl.initMouseLock' : {
		name     : 'Включение режима захвата курсора мыши',
		type     : 'function',
		api      : '();',
		note     : 'Включает захват курсора. Вызывается вне игрового цикла',
		example  : 'PointJS.mouseControl.initMouseLock();',
		returned : ''
	},

	'PointJS.mouseControl.exitMouseLock' : {
		name     : 'Отключение режима захвата курсора мыши',
		type     : 'function',
		api      : '();',
		note     : 'Выключает захват курсора полностью',
		example  : 'PointJS.mouseControl.exitMouseLock();',
		returned : ''
	},

	'PointJS.mouseControl.unlockMouse' : {
		name     : 'Временно разблокирует захваченные курсор',
		type     : 'function',
		api      : '();',
		note     : 'Отобразит курсор мыши до следующего клика по канвасу',
		example  : 'PointJS.mouseControl.unlockMouse();',
		returned : ''
	},

	'PointJS.mouseControl.isMouseLock' : {
		name     : 'Проверить захвачен курсор или нет',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'PointJS.mouseControl.isMouseLock();',
		returned : 'boolean > true - курсор захвачен > false - курсор не захвачен'
	},

	'PointJS.mouseControl.getSpeed' : {
		name     : 'Получить скорость перемещения курсора по осям',
		type     : 'function',
		api      : '();',
		note     : 'Получение скорости курсора',
		example  : 'PointJS.mouseControl.getSpeed();',
		returned : ' .v2d() > x - скорость перемещения по X > y - скорость перемещения по Y'
	},

	'PointJS.mouseControl.isPeekStatic' : {
		name     : 'Проверить клик по статической области',
		type     : 'function',
		api      : '(key, box);',
		note     : 'key - string, кнопка LEFT, RIGHT, MIDDLE > box - StaticBox, область, в которой проверяется клик',
		example  : 'PointJS.mouseControl.isPeekStatic( object.getStaticBox() );',
		returned : 'boolean > true - клик по области, false - клик не по области, отсутствие клика'
	},

	'PointJS.mouseControl.isPeekDynamic' : {
		name     : 'Проверить клик по динамической области',
		type     : 'function',
		api      : '(key, box);',
		note     : 'key - string, кнопка LEFT, RIGHT, MIDDLE > box - DynamicBox, область, в которой проверяется клик',
		example  : 'PointJS.mouseControl.isPeekDynamic( object.getDynamicBox() );',
		returned : 'boolean > true - клик по области, false - клик не по области, отсутствие клика'
	},

	'PointJS.mouseControl.isPeekObject' : {
		name     : 'Проверить клик по объекту',
		type     : 'function',
		api      : '(key, obj);',
		note     : 'key - string, кнопка LEFT, RIGHT, MIDDLE > obj - объект, по которому проверяется клик',
		example  : 'PointJS.mouseControl.isPeekObject( "LEFT", object );',
		returned : 'boolean > true - клик по объекту, false - клик не по объекту, отсутствие клика'
	},

	'PointJS.mouseControl.initMouseControl' : {
		name     : 'Включение режима перехвата событий мыши',
		type     : 'function',
		api      : '();',
		note     : 'Обработчик событий мыши. Вызывает вне игрового цикла',
		example  : 'PointJS.mouseControl.initMouseControl();',
		returned : ''
	},

	'PointJS.mouseControl.exitMouseControl' : {
		name     : 'Выключение режима перехвата событий мыши',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'PointJS.mouseControl.exitMouseControl();',
		returned : ''
	},

	'PointJS.touchControl.initTouchControl' : {
		name     : 'Включение перехвата сенсора',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'PointJS.touchControl.initTouchControl();',
		returned : ''
	},

	'PointJS.touchControl.getFixPositionS' : {
		name     : 'Получение локальных координат фиксатора касания',
		type     : 'function',
		api      : '();',
		note     : 'Фиксатор касания - это позиция первоначального прикосновения к сенсору.',
		example  : 'var fixPos = PointJS.touchControl.getFixPositionS();',
		returned : ' .point() > Позиция касания'
	},

	'PointJS.touchControl.getFixPosition' : {
		name     : 'Получение глобальных координат фиксатора касания',
		type     : 'function',
		api      : '();',
		note     : 'Фиксатор касания - это позиция первоначального прикосновения к сенсору.',
		example  : 'var fixPos = PointJS.touchControl.getFixPosition();',
		returned : ' .point() > Позиция касания'
	},

	'PointJS.touchControl.getRun' : {
		name     : 'Получение расстояния по осям от фиксатора',
		type     : 'function',
		api      : '();',
		note     : 'Возвращает расстояние по осям, пройденное жестом от фиксатора.',
		example  : 'var run = PointJS.touchControl.getRun();',
		returned : ' .v2d() > x - расстояние по оси X > y : расстояние по оси Y'
	},

	'PointJS.touchControl.getVector' : {
		name     : 'Получение вектора направления жеста по осям',
		type     : 'function',
		api      : '();',
		note     : 'Возвращает вектор направления движения жеста.',
		example  : 'var vector = PointJS.touchControl.getVector();',
		returned : ' .v2d() > x - вектор по оси X. Если больше 0 - движение вправо, иначе - влево > \
																								y : вектор по оси Y. Если больше 0 - движение вниз, иначе - вверх'
	},

	'PointJS.touchControl.isDown' : {
		name     : 'Проверка удерживания касания',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var down = PointJS.touchControl.isDown();',
		returned : 'boolean > true - прикосновение удерживается > false - прикосновения нет'
	},

	'PointJS.touchControl.isPress' : {
		name     : 'Проверка однократного касания',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var press = PointJS.touchControl.isPress();',
		returned : 'boolean > true - прикосновение есть > false - прикосновения нет'
	},

	'PointJS.touchControl.isUp' : {
		name     : 'Проверка завершения касания',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var up = PointJS.touchControl.isUp();',
		returned : 'boolean > true - прикосновение завершено (палец убран) > false - прикосновения нет или палец не убран'
	},

	'PointJS.touchControl.getPosition' : {
		name     : 'Получение координат прикосновения в абсолютных координатах',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var point = PointJS.touchControl.getPosition();',
		returned : ' .point() > Координаты прикосновения'
	},

	'PointJS.touchControl.getPositionS' : {
		name     : 'Получение локальных координат прикосновения',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var point = PointJS.touchControl.getPositionS();',
		returned : ' .point() > Координаты прикосновения'
	},

	'PointJS.touchControl.isPeekStatic' : {
		name     : 'Тач (касание) по статической области',
		type     : 'function',
		api      : '(StaticBox);',
		note     : '',
		example  : 'var peek = PointJS.touchControl.isPeekStatic( obj.getStaticBox() );',
		returned : 'boolean > true - касание попало в статическую область > false - не попало'
	},

	'PointJS.touchControl.isPeekDynamic' : {
		name     : 'Тач (касание) по динамической области',
		type     : 'function',
		api      : '(DynamicBox);',
		note     : '',
		example  : 'var peek = PointJS.touchControl.isPeekDynamic( obj.getDynamicBox() );',
		returned : 'boolean > true - касание попало в динамическую область > false - не попало'
	},

	'PointJS.touchControl.isPeekObject' : {
		name     : 'Тач (касание) по динамической области',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, проверяемый на сенсорное касание',
		example  : 'var peek = PointJS.touchControl.isPeekObject( object );',
		returned : 'boolean > true - касание попало в объект > false - не попало'
	},

	'PointJS.touchControl.isInStatic' : {
		name     : 'Проверка попадания прикосновения в статическую область StaticBox',
		type     : 'function',
		api      : '(StaticBox);',
		note     : '',
		example  : 'var bool = PointJS.touchControl.isInStatic( obj.getStaticBox() );',
		returned : 'boolean > true - касание попало в статическую область > false - не попало'
	},

	'PointJS.touchControl.isInDynamic' : {
		name     : 'Проверка попадания прикосновения в динамическую область DynamicBox',
		type     : 'function',
		api      : '(DynamicBox);',
		note     : '',
		example  : 'var bool = PointJS.touchControl.isInDynamic( obj.getDynamicBox() );',
		returned : 'boolean > true - касание попало в динамическую область > false - не попало'
	},

	'PointJS.touchControl.getTouches' : {
		name     : 'Получение массива прикосновений',
		type     : 'function',
		api      : '();',
		note     : 'Функция возвращает массив с координатами прикосновений. > \
														где каждый элемент массива это объект со следующими меременными: > \
														x : абсолютная координата X прикосновения > \
														y : абсолютная координата Y прикосновения > \
														screenX : координата X прикосновения > \
														screenY : координата X прикосновения > \
														Рекомендуется использовать x и y координаты.',
		example  : 'var arr = PointJS.touchControl.getTouches(  );',
		returned : 'array > массив с координатами прикосновений'
	},

	'PointJS.touchControl.isTouchesInDynamic' : {
		name     : 'Проверить, попадает ли хоть одно из касаний в динамическую обалсть',
		type     : 'function',
		api      : '(DynamicBox);',
		note     : 'DynamicBox - Динамическая область > \
														Проверяет, попадает какое-то из прикосновений в динамическую область',
		example  : 'var arr = PointJS.touchControl.isTouchesInDynamic( DynamicBox );',
		returned : 'array > массив с координатами прикосновений'
	},

	'PointJS.touchControl.isTouchesInStatic' : {
		name     : 'Проверить, попадает ли хоть одно из касаний в статическую обалсть',
		type     : 'function',
		api      : '(DynamicBox);',
		note     : 'DynamicBox - Статическая область > \
														Проверяет, попадает какое-то из прикосновений в статическую область',
		example  : 'var arr = PointJS.touchControl.isTouchesInStatic( DynamicBox );',
		returned : 'array > массив с координатами прикосновений'
	},	

	'PointJS.touchControl.exitTouchControl' : {
		name     : 'Отключение режима перехвата сенсора',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'PointJS.touchControl.exitTouchControl(  );',
		returned : ''
	},

	'PointJS.colors.rgb' : {
		name     : 'Генерация непрозрачного цвета',
		type     : 'function',
		api      : '(r, g, b);',
		note     : 'r - int [0-255], красный цвет > \
		g - int [0-255], зеленый цвет > \
		b - int [0-255], синий цвет',
		example  : 'PointJS.colors.rgb(255, 0, 0);',
		returned : 'string > строка, содержащая цвет'
	},

	'PointJS.colors.rgba' : {
		name     : 'Генерация цвета с возможностью указать прозрачность',
		type     : 'function',
		api      : '(r, g, b, a);',
		note     : 'r - int [0-255], красный цвет > \
		g - int [0-255], зеленый цвет > \
		b - int [0-255], синий цвет > \
		a - float [0-1], прозрачность',
		example  : 'PointJS.colors.rgba(255, 0, 0, 0.5);',
		returned : 'string > строка, содержащая цвет'
	},

	'PointJS.colors.hex2rgb' : {
		name     : 'Генерация цвета из его шестнадцатеричного представления',
		type     : 'function',
		api      : '(hex);',
		note     : 'hex - цвет в формате #FFFFFF (обязательно полная запись в 7 знаков)',
		example  : 'PointJS.colors.hex2rgb("#B35E5E");',
		returned : 'string > строка, содержащая цвет'
	},

	'PointJS.colors.hex2rgba' : {
		name     : 'Генерация цвета из его шестнадцатеричного представления с прозначностью',
		type     : 'function',
		api      : '(hex, a);',
		note     : 'hex - цвет в формате #FFFFFF (обязательно полная запись) > \
		a - float [0-1], прозрачность',
		example  : 'PointJS.colors.hex2rgba("#B35E5E", 0.5);',
		returned : 'string > строка, содержащая цвет'
	},

	'PointJS.colors.randomColor' : {
		name     : 'Генерация случайного цвета в заданных рамках',
		type     : 'function',
		api      : '(min, max, alpha);',
		note     : 'nim - нижняя граница цвета > \
														max - верхняя граница цвета > \
														a - float [0-1], прозрачность',
		example  : 'PointJS.colors.randomColor(100, 255);',
		returned : 'string > строка, содержащая цвет'
	},

	'PointJS.OOP.insertArrElement' : {
		name     : 'Извлечь элемент из массива с удалением',
		type     : 'function',
		api      : '(arr, index);',
		note     : 'arr - массив, из которого требуется извлечь элемент> \
														index - ключ или индекс массива',
		example  : 'var element = PointJS.OOP.insertArrElement([5, 15, 45], 1); // после выполнения в массиве останутся 5 и 45, элемент 15 с индексом 1 будет извлечен и сохранен в переменной',
		returned : ''
	},

	'PointJS.OOP.insertRandArrElement' : {
		name     : 'Извлечь случайный элемент из массива с удалением',
		type     : 'function',
		api      : '(arr);',
		note     : 'arr - массив, из которого требуется извлечь элемент',
		example  : 'var element = PointJS.OOP.insertRandArrElement([5, 15, 45]); // после выполнения в массиве останутся два элемента, а третий случайным образом будет сохранен в переменной',
		returned : ''
	},

	'PointJS.OOP.drawArr' : {
		name     : 'Отрисовать массив объектов',
		type     : 'function',
		api      : '(arr);',
		note     : 'arr - массив, по которому требуется проход, должен содержать элементы, наследующие BaseObject',
		example  : 'PointJS.OOP.drawArr(objects); // отрисовать массив с объектами',
		returned : ''
	},

	'PointJS.OOP.forArr' : {
		name     : 'Цикл по элементам массива (только массива)',
		type     : 'function',
		api      : '(arr, func);',
		note     : 'arr - массив, по которому требуется проход > \
														func - function, функция обработчик, принимает три параметра: > \
														value - значение элемента массива > \
														index - ключ или индекс массива > \
														arr - ссылка на исходный массив',
		example  : 'PointJS.OOP.forArr([5, 15, 45], function (val, i, arr) { > \
														`console.log("Исходный массив: ", arr, "Текущий ключ: ", i, "Текущее значение: ", val); > \
														});',
		returned : ''
	},

	'PointJS.OOP.forEach' : {
		name     : 'Цикл по элементам массива или объекта',
		type     : 'function',
		api      : '(arr, func);',
		note     : 'arr - массив или объект, по которому требуется проход > \
														func - function, функция обработчик, принимает три параметра: > \
														value - значение элемента массива > \
														index - ключ или индекс массива или объекта > \
														arr - ссылка на исходный массив или объект',
		example  : 'PointJS.OOP.forEach([5, 15, 45], function (val, i, arr) { > \
														`console.log("Исходный массив: ", arr, "Текущий ключ: ", i, "Текущее значение: ", val); > \
														});',
		returned : ''
	},

	'PointJS.OOP.forXY' : {
		name     : 'Цикл с определенным количеством повторений по двум осям',
		type     : 'function',
		api      : '(countX, countY, func);',
		note     : 'countX - number, количество повторений по оси X > countY - number, количество повторений по оси Y > func - function, функция, которую нужно выполнить > \
														Функция func принимает два параметр - порядковый номер итерации по X и по Y',
		example  : 'PointJS.OOP.forXY(10, 10, function (x, y) {>\
															`console.log("Текущая итерация по X: "+x, "Текущая итерация по Y: "+y); >\
														});',
		returned : ''
	},

	'PointJS.OOP.forInt' : {
		name     : 'Цикл с определенным количеством повторений',
		type     : 'function',
		api      : '(count, func);',
		note     : 'count - number, количество повторений > func - function, функция, которую нужно выполнить > \
														Функция func принимает один параметр - порядковый номер текущей итерации',
		example  : 'PointJS.OOP.forInt(10, function (i) {>\
															`console.log("Текущая итерация: ", i); >\
														});',
		returned : ''
	},

	'PointJS.OOP.readJSON' : {
		name     : 'Прочитать JSON данные из файла или по ссылке',
		type     : 'function',
		api      : '(path, func);',
		note     : 'path - string, путь к JSON данным > func - function, обработчик данных > Функция func принимает в качестве \
														параметра объект, который будет создан из JSON данных',
		example  : 'PointJS.OOP.readJSON("data/level1.json", function(obj) { >`console.log(obj); > }); // ',
		returned : ''
	},

	'PointJS.OOP.readJSONSync' : {
		name     : 'Прочитать JSON данные из файла или по ссылке синхронным запросом',
		type     : 'function',
		api      : '(path);',
		note     : 'path - string, путь к JSON данным > Данные в формате JSON будут преобразованы в объект.',
		example  : 'var obj = PointJS.OOP.readJSONSync("data/level1.json"); > console.log(obj);',
		returned : ''
	},

	'PointJS.OOP.isDef' : {
		name     : 'Проверка существования объекта, свойства объекта, переменной',
		type     : 'function',
		api      : '(variable);',
		note     : 'variable - проверяемое значение',
		example  : 'PointJS.OOP.isDef(myObj.level); // проверка существования myObj.level',
		returned : 'boolean > true - совйство|объект|переменная существует > false - не существует'
	},

	'PointJS.OOP.isSet' : {
		name     : 'Проверка объявления переменной',
		type     : 'function',
		api      : '(variable);',
		note     : 'variable - проверяемое значение',
		example  : 'PointJS.OOP.isSet(myObj.level); // проверка существования и наличия значения в myObj.level',
		returned : 'boolean > true - совйство|объект|переменная существует и объявлена > false - не существует или не объявлена'
	},

	'PointJS.OOP.randArrElement' : {
		name     : 'Преобразование объекта в строку',
		type     : 'function',
		api      : '(arr);',
		note     : 'arr - array, массив, из которого нужен рандомный элемент',
		example  : 'PointJS.OOP.randArrElement( [5, 10, 15, 26] ); // Например, 10',
		returned : 'elemnt > Рандомный элемент массива'
	},

	'PointJS.OOP.toString' : {
		name     : 'Преобразование объекта в строку',
		type     : 'function',
		api      : '(obj[, convertNumberToInt]);',
		note     : 'obj - object, объект для конвертации > \
		convertNumberToInt - boolean, флаг, отвечающий за конвертацию числовых значений в объекте в целый тип.',
		example  : 'PointJS.OOP.toString( {x : 15, name : "my name"} );',
		returned : 'string > Конвертированный в строку объект'
	},

	'PointJS.game.setFPS' : {
		name     : 'Задать количество кадров в секунду',
		type     : 'function',
		api      : '(fps);',
		note     : 'fps - number, новое значение FPS',
		example  : 'PointJS.game.setFPS(35); // После этой команды игровой цикл будет выполняться на скорости 35 fps',
		returned : ''
	},

	'PointJS.game.getFPS' : {
		name     : 'Получить количество FPS, присовенное командой setFPS()',
		type     : 'function',
		api      : '();',
		note     : 'Функция вернет не фактическое количество кадров в секунду, а то, что было присвоено функцией setFPS',
		example  : 'var fps = PointJS.game.getFPS();',
		returned : 'number > Количество FPS, заданное разработчиком'
	},


	'PointJS.game.getDT' : {
		name     : 'Получение delta-time значения',
		type     : 'function',
		api      : '(mls);',
		note     : 'mls - number, значение в милисекундах, которое станет коэффициентом деления значения delta \
														> По умолчанию равняется 1000',
		example  : 'var dt = PointJS.game.getDT();',
		returned : 'number > Delta-Time'
	},

	'PointJS.game.getTime' : {
		name     : 'Получение метки времени',
		type     : 'function',
		api      : '();',
		note     : 'Вернет timestamp текущего времени в милисекундах',
		example  : 'var time = PointJS.game.getTime();',
		returned : 'number > Временная метка'
	},

	'PointJS.game.newLoop' : {
		name     : 'Создание игрового цикла',
		type     : 'function',
		api      : '(name, func);',
		note     : 'name - string, наименование игрового состояния > \
		func - function, функция, описывающая логику и поведение в игровом цикле',
		example  : 'PointJS.game.newLoop( "myGame", function () {> `/*игровой цикл*/ >} );',
		returned : ''
	},

	'PointJS.game.getWH' : {
		name     : 'Получить размеры игровой сцены',
		type     : 'function',
		api      : '();',
		note     : 'Получение фактических размеров игровой сцены',
		example  : 'var wh = PointJS.game.getWH();',
		returned : ' object > w - ширина сцены > h - высота сцены > w2 - центр сцены по X > h2 - центр сцены по Y'
	},	

	'PointJS.game.setLoop' : {
		name     : 'Задать активный игровой цикл',
		type     : 'function',
		api      : '(name);',
		note     : 'name - string, наименование игрового состояния',
		example  : 'PointJS.game.setLoop( "myGame" );',
		returned : ''
	},

	'PointJS.game.setLoopSound' : {
		name     : 'Установить плейлист для фонового проигрывания',
		type     : 'function',
		api      : '(gameLoop, arrAudio);',
		note     : 'gameLoop - string, наименования игрового состояния > \
														arrAudio - массив .Audio() или .WAudio() файлов',
		example  : 'PointJS.game.setLoopSound( [audio1, audio2, ... , audioN] );',
		returned : ''
	},

	'PointJS.game.start' : {
		name     : 'Запустить активный игровой цикл',
		type     : 'function',
		api      : '([fps]);',
		note     : 'fps - number, скорость работы игрового состояния',
		example  : 'PointJS.game.start( 60 );',
		returned : ''
	},

	'PointJS.game.startLoop' : {
		name     : 'Активировать игровой цикл и стартовать игру',
		type     : 'function',
		api      : '(gameLoop);',
		note     : 'gameLoop - string, название игрового цикла > \
														Аналогично, что выполнить "setLoop" и затем "start"',
		example  : 'PointJS.game.startLoop("my_game");',
		returned : ''
	},




	'PointJS.game.stop' : {
		name     : 'Остановить выполнение',
		type     : 'function',
		api      : '();',
		note     : 'Выполнение останавливается, но можно продолжить функцией continue()',
		example  : 'PointJS.game.stop();',
		returned : ''
	},

	'PointJS.game.fill' : {
		name     : 'Залить контекст',
		type     : 'function',
		api      : '(color);',
		note     : 'color - string, цвет заливки',
		example  : 'PointJS.game.fill("#E1C8C8");',
		returned : ''
	},

	'PointJS.OOP.getTextWidth' : {
		name     : 'Узнать ширину текста в пикселях',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, объект со свойствами \
														{ > \
														`text - string, текст, ширину которого нужно получить > \
														`style - string, стилевое оформление текста > \
														`size - number, размер текста > \
														`font - string, шрифт текста > \
														}',
		example  : 'PointJS.OOP.getTextWidth({> `text : "Привет, Мир!", > `size : 15, > `font : "serif" >});',
		returned : 'number > Ширина текста в пикселях'
	},

	'PointJS.OOP.once' : {
		name     : 'Однократное выполнение функции',
		type     : 'function',
		api      : '(name, func);',
		note     : 'name - string, наименование функции > \
														func - function, исполняемая функция > \
														Используется, если требуется выполнить какой-то набор команд лишь раз за игровой цикл',
		example  : 'PointJS.OOP.once("myFunction", function () {> `log("Функция выполнена"); >});',
		returned : ''
	},

	'PointJS.OOP.newRever' : {
		name     : 'Создание реверсивного счетчика',
		type     : 'function',
		api      : '(min, max, step);',
		note     : 'min - number, минимальная граница > \
														max - number, максимальная граница > \
														step - number, шаг, на который значение счетчика будет изменяться > \
														newRever вернет объект, содержащий следующие методы: > \
														`update() - изменить значение реверсивного счетчика на один шаг (функция возвращает старое значение перед обновлением) > \
														`getValue() - получить текущее значение счетчика > \
														`setValue(value) - задать принудительно новое значение счетчика > \
														`setStep(step) - установить новое значение шага > \
														`getStep() - получить текущее значение шага > \
														Все эти функции можно выполнять в игровом цикле.',
		example  : 'var rever = PointJS.OOP.newRever(0, 10, 1); // последовательность изменения: 0,1,2..10,9,8..0 > \
														> // где-то в игровом цикле > > \
														console.log("Значение счетчика: "+rever.getValue()); > rever.update(); >> // или > console.log("Значение счетчика: "+rever.update()) ',
		returned : ''
	},

	'PointJS.OOP.newTimer' : {
		name     : 'Создание таймера (триггера)',
		type     : 'function',
		api      : '(time, func);',
		note     : 'time - number, задержка перед выполнением функции func > \
														func - function, событие, которое будет выполнено по истечению времени time > \
														newTimer вернет объект, содержащий следующие методы: > \
														`start() - запустить отсчет времени > \
														`end() - выполнить функцию принудительно и остановить таймер > \
														`stop() - остановить таймер без выполнения функции > \
														`restart([newTime]) - перезапустить таймер, можно указать новое время > \
														Все эти функции можно выполнять в игровом цикле. > \
														restart() выполнится только по истечению времени таймера, что не повлечет за собой многократное выполнение функции',
		example  : 'var timer = PointJS.OOP.newTimer(5000, function () { > `log("Ok!"); >}); > \
														> // где-то в игровом цикле > > \
														if (PointJS.mouseControl.isPress("LEFT")) > `timer.start(); // запустить отсчет времени',
		returned : ''
	},

	'PointJS.system.setContextSettings' : {
		name     : 'Предварительная настройка контекста',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, объект, содержаний настройки в формате ключ : значение',
		example  : 'PointJS.system.setContextSettings({> `globalAlpha : 0.2, > `strokeStyle : "red" >});',
		returned : ''
	},

	'PointJS.system.defaultSettings' : {
		name     : 'Восстановление дефолтных настроек контекста',
		type     : 'function',
		api      : '();',
		note     : 'Вернет настройки, присовенные функцией setDefaultSettings()',
		example  : 'PointJS.system.defaultSettings();',
		returned : ''
	},

	'PointJS.game.resume' : {
		name     : 'Продолжить выполнение игры',
		type     : 'function',
		api      : '();',
		note     : 'Выполнение продолжается, если было ранее остановлено функцией stop()',
		example  : 'PointJS.game.resume();',
		returned : ''
	},

	'PointJS.game.newBackgroundObject' : {
		name     : 'Создать объект типа BackgroundObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`x - number, смещение по X > \
														`y - number, смещение по Y > \
														`w - number, ширина тайла > \
														`h - number, высота тайла > \
														`countX - number, количество тайлов по горизонтали > \
														`countY - number, количество тайлов по вертикали > \
														`file - string, путь к файла тайла > \
														}',
		example  : 'var obj = game.newBackgroundObject( \
														{ > \
														`x : 0, > \
														`y : 0, > \
														`w : 50, > \
														`h : 50, > \
														`countX : 10, > \
														`countY : 10, > \
														`file : "images/trava.png", > \
														});',
		returned : ' .BackgroundObject() > Объект заднего фона'
	},

	'PointJS.game.newBaseObject' : {
		name     : 'Создать объект типа BaseObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`x - number, позиция по X > \
														`y - number, позицию по Y > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														`position - .point(), позиция нового объекта (если задан, x и y проигнорируются) > \
														`positionC - .point(), позиция центра нового объекта (если задан, x и y проигнорируются) > \
														`fillColor - string, цвет заливки объекта > \
														`strokeColor - string, цвет обводки объекта > \
														`strokeWidth - number, ширина линии обводки > \
														`angle - number, угол наклона в градусах > \
														`alpha - number, степень прозрачности объекта [0..1] > \
														`center - .point(), смещение центра объекта (по умолчанию 0,0) > \
														`box - object, смещение и размер Bounding-box объекта > \
														`{ > \
														``offset - .point(), смещение Bounding-box > \
														``size - .size(), размер Bounding-box > \
														`} > \
														`userData - object, набор дополнительных свойств. Аналог вызова setUserData() > \
														`visible - boolean, видимость объекта > \
														} > Все параметры не являются обязательными',
		example  : 'var obj = game.newBaseObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`fillColor : "#FBFE6F", > \
														});',
		returned : ' .BaseObject() > Базовый объект'
	},

	'PointJS.game.newTextObject' : {
		name     : 'Создать объект типа TextObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`text - string, однострочный текст > \
														`size - number, высота текста в пикселях > \
														`color - string, цвет текста > \
														`padding - number, отступ вокруг текста > \
														`strokeColorText - string, цвет обводки текст > \
														`strokeWidthText - number, ширина линии обводки текста > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newTextObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`text : "Привет, мир!", > \
														`size : 20, > \
														`padding : 10, > \
														`color : "#000000", > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														});',
		returned : ' .TextObject() > объект "Текст"'
	},

	'PointJS.game.newRectObject' : {
		name     : 'Создать объект типа RectObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newRectObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														});',
		returned : ' .RectObject() > объект "Прямоугольник"'
	},

	'PointJS.game.newCircleObject' : {
		name     : 'Создать объект типа CircleObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`radius - number, радиус окружности > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newCircleObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`radius : 10, > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														`angle : 0, > \
														`alpha : 1, > \
														`visible : true > \
														});',
		returned : ' .CircleObject() > объект "Окружность"'
	},

	'PointJS.game.newEllipsObject' : {
		name     : 'Создать объект типа EllipsObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newEllipsObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														`angle : 0, > \
														`alpha : 1, > \
														`visible : true > \
														});',
		returned : ' .EllipsObject() > объект "элипс"'
	},

	'PointJS.game.newPolygonObject' : {
		name     : 'Создать объект типа PolygonObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`points - array .point() объектов, набор точек > \
														`pointColor - string, цвет вершин > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newPolygonObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`points : [ .point(0, 0), .point(10, 0), .point(10, 10), .point(0, 10) ], > \
														`pointColor : "#343DE4", > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														});',
		returned : ' .PolygonObject() > объект "Прямоугольник"'
	},

	'PointJS.game.newImageObject' : {
		name     : 'Создать объект типа ImageObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`file - string, путь к изображению, > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														`scale - number[0..1], масштабирование изрбражения (только если w и h не заданы)> \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newImageObject( \
														{ > \
														`file : "images/ball.png", > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`//scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота> \
														});',
		returned : ' .ImageObject() > объект "Изображение"'
	},

	'PointJS.game.newAnimationObject' : {
		name     : 'Создать объект типа AnimationObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`animation - .Animation(), объект анимации > \
														`delay - number, замедление анимации (в FPS) > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newAnimationObject( \
														{ > \
														`animation : tiles.newImage("images/human.png").getAnimation(0, 0, 20, 40, 5), > \
														`x : 100, > \
														`y : 100, > \
														`w : 20, > \
														`h : 40, > \
														`angle : 0, > \
														`alpha : 1, > \
														`visible : true > \
														});',
		returned : ' .AnimationObject() > объект "Анимация"'
	},

	'PointJS.game.newMesh' : {
		name     : 'Создать объект типа Mesh',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`x - number, позиция по X > \
														`y - number, позицию по Y > \
														`angle - number, угол наклона в градусах > \
														`add - array, массив объектов, наследующих .BaseObject() > \
														} > Все параметры не являются обязательными',
		example  : 'var obj = game.newMesh( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`angle : 0, > \
														`add : [obj1, obj2] > \
														});',
		returned : ' .Mesh() > объект "Окружность"'
	},

	'PointJS.camera.move' : {
		name     : 'Двигать камеру в направлении',
		type     : 'function',
		api      : '(vector2D);',
		note     : 'vector2D - .v2d(), направление движения камеры',
		example  : 'PointJS.camera.move( .v2d(1, 0) );',
		returned : ''
	},

	'PointJS.camera.moveTime' : {
		name     : 'Двигать камеру к точке за время',
		type     : 'function',
		api      : '(point, time);',
		note     : 'point - .point(), точка,  куда надо двигать камеру > \
														time - number, время, за которое требуется пройти путь',
		example  : 'PointJS.camera.moveTime( .point(100, 200), 10 );',
		returned : ''
	},

	'PointJS.camera.circling' : {
		name     : 'Двигать камеру по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает камеру по окружности вокруг точки',
		example  : 'camera.circling( .point(100, 200), 10, 1 );  // Двигать камеру вокруг точки по радиусу 10 и скорости 1',
		returned : ''
	},

	'PointJS.camera.circlingC' : {
		name     : 'Двигать центр камеры по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает камеру по окружности вокруг точки с учетом центра',
		example  : 'camera.circlingC( .point(100, 200), 10, 1 );  // Двигать камеру вокруг точки по радиусу 10 и скорости 1 с учетом центра',
		returned : ''
	},

	'PointJS.camera.motion' : {
		name     : 'Двигать камеру по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает камеру по элипсоиду вокруг точки',
		example  : 'camera.motion( .point(100, 100), size(50, 10), 1 );'
	},

	'PointJS.camera.motionC' : {
		name     : 'Двигать центр камеры по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает камеру по элипсоиду вокруг точки',
		example  : 'camera.motionC( .point(100, 100), size(50, 10), 1 );'
	},

	'PointJS.camera.moveTimeC' : {
		name     : 'Двигать центр камеры к точке за время',
		type     : 'function',
		api      : '(point, time);',
		note     : 'point - .point(), точка,  куда надо двигать камеру > \
														time - number, время, за которое требуется пройти путь',
		example  : 'PointJS.camera.moveTimeC( .point(100, 200), 10 );',
		returned : ''
	},

	'PointJS.camera.getStaticBox' : {
		name     : 'Получение StaticBox камеры. статический Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Отличается от DynamicBox тем, что его использование целесообразно там, где объекты не \
		подразумевается вращать. > \
		!! StaticBox нельзя передавать арзументом в функции, принимающие dynamicBox !!',
		example  : 'var staticBox = camera.getStaticBox();',
		returned : 'object > x - Позиция по X > y - Позиция по Y > w : Ширина прямоугольника > h : Высота прямоугольника'
	},

	'PointJS.camera.getDynamicBox' : {
		name     : 'Получение DynamicBox камеры. динамический Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Отличается от StaticBox тем, что его использование целесообразно там, где объекты \
		подразумевается вращать. > \
		!! DynamicBox нельзя передавать арзументом в функции, принимающие dynamicBox !!',
		example  : 'var dynamicBox = camera.getDynamicBox();',
		returned : 'object > DynamicBox'
	},

	'PointJS.camera.setPosition' : {
		name     : 'Установить камеру в позицию',
		type     : 'function',
		api      : '(point);',
		note     : 'point - .point(), позиция, в которую нужно установить камеру',
		example  : 'PointJS.camera.setPosition( .point(100, 100) );',
		returned : ''
	},

	'PointJS.camera.setPositionC' : {
		name     : 'Установить камеру в позицию с учетом центра',
		type     : 'function',
		api      : '(point);',
		note     : 'point - .point(), позиция, в которую нужно установить центр камеры',
		example  : 'PointJS.camera.setPositionC( .point(100, 100) );',
		returned : ''
	},

	'PointJS.camera.getPositionC' : {
		name     : 'Получить позицию центра камеры',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var camPosC = PointJS.camera.getPositionC();',
		returned : ' .point() > Позиция центра камеры'
	},

	'PointJS.camera.getPosition' : {
		name     : 'Получить позицию камеры',
		type     : 'function',
		api      : '(format);',
		note     : 'format - number, формат получаемой позиции > \
														0 или отсутствует - верхний левый угол камеры > \
														1 - центр камеры',
		example  : 'var camPos = PointJS.camera.getPosition(1);',
		returned : ' .point() > Позиция камеры'
	},

	'PointJS.game.clear' : {
		name     : 'Очистить все, что было отрисовано',
		type     : 'function',
		api      : '();',
		note     : 'Вызывается перед новыми отрисовками, иначе игрок ничего не увидит',
		example  : 'PointJS.game.clear();',
		returned : ''
	},

	'PointJS.resources.isLoaded' : {
		name     : 'Проверить, что загружены все внешние ресурсы',
		type     : 'function',
		api      : '();',
		note     : 'Вызывается в любом месте проекта, вернет результат проверки полной загрузки внешних файлов',
		example  : 'var loaded = PointJS.resources.isLoaded();',
		returned : 'boolean > true - все ресурсы загружены > false - ресурсы еще не загружены'
	},

	'PointJS.resources.getProgress' : {
		name     : 'Получить процент загрузки внешних объектов',
		type     : 'function',
		api      : '();',
		note     : 'Вызывается в любом месте проекта, вернет количество загруженных объектов в процентах',
		example  : 'var progress = PointJS.resources.getProgress();',
		returned : 'number > процент загрузки в диапазоне от 0 (ничего не загружено) до 100 (все загружено)'
	},



	 // tiles
	'PointJS.tiles.newImage' : {
		name     : 'Новое изображение',
		type     : 'function',
		api      : '(path);',
		note     : 'path - string, путь к файлу изображения > \
														Создает новый объект Image, который можно в дальнейшем использовать для построения анимации',
		example  : 'PointJS.tiles.newImage();',
		returned : ' .Image() > Изображение'
	},

	'PointJS.tiles.newDrawImage' : {
		name     : 'Новое пустое изображение',
		type     : 'function',
		api      : '(width, height);',
		note     : 'width - number, ширина изображения > height - number, высота изображения > \
														Создает новый объект Image, который можно в дальнейшем использовать для построения анимации',
		example  : 'PointJS.tiles.newDrawImage();',
		returned : ' .Image() > Изображение'
	},

	'PointJS.tiles.newAnimation' : {
		name     : 'Создать анимацию с подгрузкой изображения',
		type     : 'function',
		api      : '(file, width, height, count);',
		note     : 'file - string, путь к изображению > \
													 width - number, ширина одного кадра > \
													 height - number, высота одного кадра > \
													 count - number, количество кадров\
														Создает новый объект Animation',
		example  : 'PointJS.tiles.newAnimation();',
		returned : ' .Animation() > Изображение'
	},

	'PointJS.brush.drawPolygon' : {
		name     : 'Отрисовать полигон',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`points : [ .point(0, 0), .point(10, 0), .point(10, 10), .point(0, 10) ], // array, набор вершин полигона > \
			`[fillColor : "red",] // string, цвет заливки> \
			`[strokeColor : "black",] // string, цвет отрисовки ребер > \
			`[strokeWidth : 2,] // number, ширина отрисованных граней (линий)> \
			`[pointColor : "white"] // цвет отрисовки вершин (точек)> \
		}',
		example  : 'PointJS.brush.drawPolygon({> `points : [ .point(0, 0), .point(10, 0), .point(10, 10), .point(0, 10) ], >`pointColor : "red" >});',
		returned : ''
	},

	'PointJS.brush.drawText' : {
		name     : 'Отрисовать текст',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`text : "Helki, World!", // текст, который нужно отрисовать > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
		}',
		example  : 'PointJS.brush.drawText({> `text : "Привет всем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'PointJS.brush.drawTextS' : {
		name     : 'Отрисовать текст в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`text : "Helki, World!", // текст, который нужно отрисовать > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
		}',
		example  : 'PointJS.brush.drawTextS({> `text : "Привет всем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'PointJS.brush.drawTextLines' : {
		name     : 'Отрисовать многострочный текст',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`lines : [ "Hello, World!", "New Line!" ], // массив сторк, новый элемент - новая строка > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
		}',
		example  : 'PointJS.brush.drawTextLines({> `text : "Привет всем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'PointJS.brush.drawTextLinesS' : {
		name     : 'Отрисовать многострочный текст в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`lines : [ "Hello, World!", "New Line!" ], // массив сторк, новый элемент - новая строка > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
		}',
		example  : 'PointJS.brush.drawTextLinesS({> `text : "Привет всем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'PointJS.brush.drawRect' : {
		name     : 'Отрисовать прямоугольник',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'PointJS.brush.drawRect({> `x : 20, y : 20, > `w : 40, h : 20, >`color : "black" >});',
		returned : ''
	},

	'PointJS.brush.drawRectS' : {
		name     : 'Отрисовать прямоугольник в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'PointJS.brush.drawRectS({> `x : 20, y : 20, > `w : 40, h : 20, >`color : "black" >});',
		returned : ''
	},

	'PointJS.brush.drawPoint' : {
		name     : 'Отрисовать точку',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`fillColor : "red", // string, цвет точки > \
		}',
		example  : 'PointJS.brush.drawPoint({> `x : 20, y : 20, > `fillColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawPointS' : {
		name     : 'Отрисовать точку в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`fillColor : "red", // string, цвет точки > \
		}',
		example  : 'PointJS.brush.drawPointS({> `x : 20, y : 20, > `fillColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawCircle' : {
		name     : 'Отрисовать окружность',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`radius : 10, // number, радиус окружности > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		}',
		example  : 'PointJS.brush.drawCircle({> `x : 20, y : 20, > `radius : 10, > `fillColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawCircleS' : {
		name     : 'Отрисовать окружность в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`radius : 10, // number, радиус окружности > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		}',
		example  : 'PointJS.brush.drawCircleS({> `x : 20, y : 20, > `radius : 10, > `fillColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawLine' : {
		name     : 'Отрисовать линию',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x1, y1; > x2, y2 рассчитываются относительнo начальной точки',
		example  : 'PointJS.brush.drawLine({> `x1 : 20, y1 : 20, > `x2 : 50, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawLineAngle' : {
		name     : 'Отрисовать линию в направлении угла',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`length : 100, // number, длина линии > \
			`angle : 45, // number, угол, в который следует направить линию > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x, y, и будет направлена в соответствии с углом angle',
		example  : 'PointJS.brush.drawLineAngle({> `x : 20, y : 20, > `length : 100, > `angle : 145, > `strokeColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawLineAngleS' : {
		name     : 'Отрисовать линию в направлении угла в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`length : 100, // number, длина линии > \
			`angle : 45, // number, угол, в который следует направить линию > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x, y, и будет направлена в соответствии с углом angle в локальных координатах',
		example  : 'PointJS.brush.drawLineAngle({> `x : 20, y : 20, > `length : 100, > `angle : 145, > `strokeColor : "green" >});',
		returned : ''
	},


	'PointJS.brush.drawLineS' : {
		name     : 'Отрисовать линию в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x1, y1; > x2, y2 рассчитываются относительнo начальной точки',
		example  : 'PointJS.brush.drawLineS({> `x1 : 20, y1 : 20, > `x2 : 50, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawLineA' : {
		name     : 'Отрисовать линию',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в абсолютных координатах x1, y1, x2, y2',
		example  : 'PointJS.brush.drawLineA({> `x1 : 20, y1 : 20, > `x2 : 100, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawLineAS' : {
		name     : 'Отрисовать линию в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в локальных координатах x1, y1, x2, y2',
		example  : 'PointJS.brush.drawLineAS({> `x1 : 20, y1 : 20, > `x2 : 100, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawEllips' : {
		name     : 'Отрисовать эллипс',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		} >',
		example  : 'PointJS.brush.drawEllips({> `x : 20, y : 20, > `w : 50, h : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawEllipsS' : {
		name     : 'Отрисовать эллипс в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		} >',
		example  : 'PointJS.brush.drawEllipsS({> `x : 20, y : 20, > `w : 50, h : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'PointJS.brush.drawImage' : {
		name     : 'Отрисовать изображение',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`file : "images/image.png", // string, путь к изображению > \
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`scale : 0.5, // number, масштабирование (больше 0 - увеличение, меньше 0 - уменьшение) > \
		} >',
		example  : 'PointJS.brush.drawImage({> `file : "images/car.png", > `x : 20, y : 20, > `w : 50, h : 50 >});',
		returned : ''
	},

	'PointJS.brush.drawImageS' : {
		name     : 'Отрисовать изображение в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`file : "images/image.png", // string, путь к изображению > \
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`scale : 0.5, // number, масштабирование (больше 0 - увеличение, меньше 0 - уменьшение) > \
		} > Функция отрисует изображение в локальных координатах',
		example  : 'PointJS.brush.drawImageS({> `file : "images/car.png", > `x : 20, y : 20, > `w : 50, h : 50 >});',
		returned : ''
	},

	'PointJS.brush.getPixelColor' : {
		name     : 'Получить цвет пикселя',
		type     : 'function',
		api      : '(x, y);',
		note     : 'x - number, координата по X > y - number, координата по Y',
		example  : 'var color = PointJS.brush.getPixelColor(60, 10);',
		returned : 'string > Цвет пикселя в координатах x, y'
	},

	'PointJS.brush.setPixelColor' : {
		name     : 'Задать цвет пикселя',
		type     : 'function',
		api      : '(x, y, pixel);',
		note     : 'x - number, координата по X > y - number, координата по Y > \
														pixel - object, параметра пикселя: > \
														{>` r : 255, // красный >` g : 255, // зеленый >` b : 255, // синий >` a : 255 // Альфа-канал > } > \
														Все свойства являются необязательными',
		example  : 'PointJS.brush.setPixelColor(60, 10 { r : 100, g : 100 }); // установить пикселю значения красного и зеленого, остальные не будут затронуты',
		returned : ''
	},

	'PointJS.brush.onPixel' : {
		name     : 'Выполнить операцию с пикселем',
		type     : 'function',
		api      : '(x, y, function(pixel) {/*обработка*/});',
		note     : 'x - number, координата по X > y - number, координата по Y > \
														function(pixel) {/*обработка*/} - функция обработчик пикселя',
		example  : 'PointJS.brush.onPixel(100, 100, function(pixel) { >  \
														`// инвертирование цвета пикселя > \
														`pixel.r = 255 - pixel.r; > \
														`pixel.g = 255 - pixel.g; > \
														`pixel.b = 255 - pixel.b; > });',
		returned : ''
	},

	'PointJS.brush.onPixels' : {
		name     : 'Выполнить операцию с прямоугольником пикселей',
		type     : 'function',
		api      : '(x, y, w, h, function(pixel) {/*обработка*/});',
		note     : 'x - number, координата по X > y - number, координата по Y > w - number, ширина прямоугольника > h - number, высота прямоугольника > \
														function(pixel) {/*обработка*/} - функция обработчик пикселя > \
														Функция циклически применится ко всем пикселям, попадающим в прямоугольник > \
														В качестве аргумента принимает пиксель, изменяемый в цикле',
		example  : 'PointJS.brush.onPixels(100, 100, 50, 50, function(pixel) { >  \
														`// инвертирование цвета пикселя > \
														`pixel.r = 255 - pixel.r; > \
														`pixel.g = 255 - pixel.g; > \
														`pixel.b = 255 - pixel.b; > });',
		returned : ''
	},

	'PointJS.brush.onRawPixels' : {
		name     : 'Выполнить операцию с массивом пикселей',
		type     : 'function',
		api      : '(x, y, w, h, function(data, length) {/*обработка*/});',
		note     : 'x - number, координата по X > y - number, координата по Y > w - number, ширина прямоугольника > h - number, высота прямоугольника > \
														function(data, length) {/*обработка*/} - функция обработчик массива пикселей > \
														Функция передает обработчику массив пикселей контекста и его длину > \
														В качестве аргумента принимает массив data и числовое значение его длины - length',
		example  : 'PointJS.brush.onRawPixels(100, 100, 50, 50, function(data, length) { > \
														`// циклический проход по массиву пикселей > \
														`var i = 0; > \
														`for (; i < length; i++) { > \
															``data[i] = 255; // красный > \
															``data[i+1] = 255; // зеленый > \
															``data[i+2] = 255; // синий > \
															``data[i+3] = 255; // прозрачность  > \
															`} > \
														 });',
		returned : ''
	},



	 // dialogs
	'PointJS.dialogs.openLine' : {
		name     : 'Открыть поле ввода однострочного текста',
		type     : 'function',
		api      : '(obj, function);',
		note     : 'obj - object, объект со свойствами открываемой строки ввода текста: > \
														{ > \
														`fillColor : "white" // цвет заливки строки > \
														`color : "black" // цвет текста в строке > \
														`size : 15 // размер (высота) текста в пикселях > \
														`x : 100 // позиция строки по X > \
														`y : 100 // позиция строки по Y > \
														`w : 100 // ширина строки ввода > \
															} > \
															function - function, функция обработчик, принимает один параметр - text > \
															Выполняется по завершении ввода текста. > \
															Завершением считается нажатие кнопок ENTER или ESC',
		example  : ' 	PointJS.dialogs.openLine({ > \
																`x : 100, y : 50, > \
																`w : 150,  > \
																`size : 20, > \
																`fillColor : "#9EF89C" > \
															}, function (text) { > \
																`if (!text) return; > \
																`console.log(text); > \
															});',
		returned : ''
	},

	'PointJS.dialogs.openArea' : {
		name     : 'Открыть поле ввода многострочного текста',
		type     : 'function',
		api      : '(obj, function);',
		note     : 'obj - object, объект со свойствами открываемого поля ввода текста: > \
														{ > \
														`fillColor : "white" // цвет заливки поля > \
														`color : "black" // цвет текста в поле > \
														`size : 15 // размер (высота) текста в пикселях > \
														`x : 100 // позиция поля по X > \
														`y : 100 // позиция поля по Y > \
														`w : 200 // ширина поля ввода > \
														`h : 60 // высота поля ввода > \
															} > \
															function - function, функция обработчик, принимает один параметр - text > \
															Выполняется по завершении ввода текста. > \
															Завершением считается нажатие кнопок ENTER или ESC',
		example  : ' 	PointJS.dialogs.openLine({ > \
																`x : 100, y : 50, > \
																`w : 150, h : 60, > \
																`size : 20, > \
																`fillColor : "#9EF89C" > \
															}, function (text) { > \
																`if (!text) return; > \
																`console.log(text); > \
															});',
		returned : ''
	},

	'PointJS.dialogs.openTouchLine' : {
		name     : 'Открыть поле ввода однострочного текста для сенсорного устройства',
		type     : 'function',
		api      : '(obj, obj2, function);',
		note     : 'obj - object, объект со свойствами открываемой строки ввода текста: > \
														{ > \
														`fillColor : "white" // цвет заливки строки > \
														`color : "black" // цвет текста в строке > \
														`size : 15 // размер (высота) текста в пикселях > \
														`x : 100 // позиция строки по X > \
														`y : 100 // позиция строки по Y > \
														`w : 100 // ширина строки ввода > \
															} > \
															obj2 - object, объект со свойствами кнопки завершения ввода > \
														{ > \
														`fillColor : "white" // цвет заливки > \
														`color : "black" // цвет текста > \
														`size : 15 // размер (высота) текста в пикселях > \
														`x : 100 // позиция кнопки по X > \
														`y : 100 // позиция кнопки по Y > \
														`w : 50 // ширина кнопки ввода > \
														`h : 15 // высота кнопки ввода > \
														`text : "Готово!" // Текст, отображаемый на кнопке > \
															} > \
															function - function, функция обработчик, принимает один параметр - text > \
															Выполняется по завершении ввода текста. > \
															Завершением считается нажатие кнопок ENTER или ESC',
		example  : ' 	PointJS.dialogs.openLine({ > \
																`x : 100, y : 50, > \
																`w : 150,  > \
																`size : 20, > \
																`fillColor : "#9EF89C" > \
															}, function (text) { > \
																`if (!text) return; > \
																`console.log(text); > \
															});',
		returned : ''
	},

	 // audio
	'PointJS.audio.newAudio' : {
		name     : 'Новый аудио объект',
		type     : 'function',
		api      : '(file, volume);',
		note     : 'file - string, путь к файлу аудио, либо array - массив разных форматов файла > \
														volume - number, громкость [0-1]',
		example  : 'var music = PointJS.audio.newAudio("audio/music.mp3", 0.5); // загрузка файла формата mp3 > \
														var music = PointJS.audio.newAudio(["audio/music.mp3", "audio/music.ogg"], 0.5); // загрузка многоформатного аудио',
		returned : ' .Audio() '
	},

	 // wAudio
	'PointJS.wAudio.newAudio' : {
		name     : 'Новый WEBAudio объект',
		type     : 'function',
		api      : '(file, volume);',
		note     : 'file - string, путь к файлу аудио',
		example  : 'var music = PointJS.wAudio.newAudio("audio/music.mp3", 0.5); // загрузка файла формата mp3 >',
		returned : ' .WAudio() '
	},


};




















var BaseObject = {
	'flip' : {
		type     : 'hidden',
	},

	'box' : {
		type     : 'hidden',
	},

	'shadowColor' : {
		type     : 'hidden',
	},

	'shadowBlur' : {
		type     : 'hidden',
	},

	'shadowX' : {
		type     : 'hidden',
	},

	'shadowY' : {
		type     : 'hidden',
	},

	'id' : {
		type     : 'hidden',
	},

	'type' : {
		name     : 'Тип объекта',
		type     : 'property',
		api      : '',
		note     : ' .BaseObject(), .RectObject(), .CircleObject(), .ImageObject(), .TextObject(), .EllipsObject(), .AnimationObject()',
		example  : '',
		returned : 'string > Тип объекта'
	},

	'x' : {
		name     : 'Позиция по X',
		type     : 'property',
		api      : '',
		note     : 'Позиция объекта по оси X, начальная позиция отрисовки',
		example  : '',
		returned : 'number > Позиция по X'
	},

	'y' : {
		name     : 'Позиция по Y',
		type     : 'property',
		api      : '',
		note     : 'Позиция объекта по оси Y, начальная позиция отрисовки',
		example  : '',
		returned : 'number > Позиция по Y'
	},

	'w' : {
		name     : 'Ширина объекта',
		type     : 'property',
		api      : '',
		note     : 'Ширина объекта',
		example  : '',
		returned : 'number > Ширина объекта'
	},

	'h' : {
		name     : 'Высота объекта',
		type     : 'property',
		api      : '',
		note     : 'Высота объекта',
		example  : '',
		returned : 'number > Ширина объекта'
	},

	'fillColor' : {
		name     : 'Цвет заливки',
		type     : 'property',
		api      : '',
		note     : 'Цвет заливки объекта',
		example  : '',
		returned : 'string > Цвет'
	},

	'strokeColor' : {
		name     : 'Цвет обводки',
		type     : 'property',
		api      : '',
		note     : 'Цвет обводки (рамки) объекта',
		example  : '',
		returned : 'string > Цвет'
	},

	'strokeWidth' : {
		name     : 'Ширина линии обводки',
		type     : 'property',
		api      : '',
		note     : 'Ширина линии обводки (рамки) объекта',
		example  : '',
		returned : 'number > Ширина линии'
	},

	'angle' : {
		name     : 'Угол поворота объекта',
		type     : 'property',
		api      : '',
		note     : 'Угол поворота (наклона) объекта в градусах',
		example  : '',
		returned : 'number > Угол поворота'
	},

	'alpha' : {
		name     : 'Прозрачность объекта',
		type     : 'property',
		api      : '',
		note     : 'Прозрачность объекта. Задается в пределах от 0 (прозрачный) до 1 (непрозрачный)',
		example  : '',
		returned : 'number > Прозрачность'
	},

	'center' : {
		name     : 'Смещение центра объекта',
		type     : 'property',
		api      : ' - объект .point(0, 0) по умолчанию',
		note     : 'По умолчанию имеет координаты [0,0], то есть центр объекта. > \
		Можно сместить по x и / или y оси',
		example  : ' BaseObject.center.x = 5; // сместить на 5 пикселей вправо относильено центра объекта',
		returned : ' .point() > Смещение центра'
	},

	'visible' : {
		name     : 'Видимость объекта',
		type     : 'property',
		api      : '',
		note     : 'boolean > true - видимый, > false - невидимый',
		example  : '',
		returned : 'boolean > Видимость объекта'
	},

	'setShadow' : {
		name     : 'Создать объект типа AnimationObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`shadowColor - string, цвет тени > \
														`shadowBlur - number, степень размытия > \
														`shadowX - number, смещение по X > \
														`shadowY - number, смещение по Y > \
														} > Все параметры не являются обязательными',
		example  : 'obj.setShadow( \
														{ > \
														`shadowColor : "red", > \
														`shadowBlur : 3, > \
														`shadowX : 5, > \
														`shadowY : 5 > \
														});',
		returned : ''
	},

	'isArrIntersect' : {
		name     : 'Проверка столкновения с массивом объектов',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массоив объектов > Функция проверяет динамические столкновения',
		example  : 'var intersect = obj.isArrIntersect( [obj1, obj2, ... objN] );',
		returned : 'object > ссылка на объект, с которым обнаружено пересечение'
	},

	'isArrInside' : {
		name     : 'Проверка полного вхождения объекта в какой-либо объект из массива',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массоив объектов',
		example  : 'var inside = obj.isArrInside( [obj1, obj2, ... objN] );',
		returned : 'object > ссылка на объект, в который попал текущий объект'
	},

	'isIntersect' : {
		name     : 'Проверить пересечение с объектом',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, объект, с которым проверяется пересечение. > \
														При установленном флаге видимости в ложь (setVisible(false)) пересечение не произойдет',
		example  : 'if (obj1.isIntersect(obj2)) > `log("Пересечение произошло");',
		returned : 'boolean > true - есть пересечение > false - нет пересечения'
	},

	'getID' : {
		name     : 'Получить уникальный идентификатор объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет уникальный ID объекта',
		example  : '',
		returned : 'number > ID объекта'
	},

	'getType' : {
		name     : 'Получить тип объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет тип объекта',
		example  : '',
		returned : 'string > Тип объекта'
	},

	'getNearest' : {
		name     : 'Получить ближайший объект',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массив объектов',
		example  : 'var nearest = obj.getNearest( [obj1, obj2, ... , objN] ); > nearest.drawDynamicBox(); // подсветить объект',
		returned : 'object > Ссылка на ближайший объект'
	},

	'setUserData' : {
		name     : 'Установка пользовательских свойств объекту',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - объект свойств, которые требуется инициализировать в объекте > \
		{ > `property : value, > `property2 : value2, > ```... > `propertyN : valueN > } > \
		Удобство фуннкции в том, что если вы не знаете каких-то системных, и случайно укажите их, \
		система их не перезапишет, используя только нестандартные свойства.',
		example  : 'obj.setUserData( { > `speed : 5, > `level : 1 > } );',
		returned : ''
	},

	'setFlip' : {
		name     : 'Установить объекту инверсию по осям',
		type     : 'function',
		api      : '(invX, invY)',
		note     : 'invX - boolean, инвертировать отрисовку по оси X > \
														invY - boolean, инвертировать отрисовку по оси Y > \
														Функция влияет на отрисовку изображений',
		example  : 'obj.setFlip(true, false); // или setFlip(1, 0)',
		returned : ''
	},

	'getDynamicBox' : {
		name     : 'Поучить набор точек динамического обрамления',
		type     : 'function',
		api      : '()',
		note     : 'Получение массива из .point() объектов, составляющих обрамление объекта Bounding-box',
		example  : 'var points = obj.getDynamicBox();',
		returned : 'array > Набор .point() объектов с координатами точек'
	},

	'isDynamicIntersect' : {
		name     : 'Пересечение динамической обалсти с другой динамической областью',
		type     : 'function',
		api      : '(dynamicBox)',
		note     : 'dynamicBox - array, набор .point() точек, составляющих область. > \
		Минимальное количество точек в массиве - 3. > \
		Примером такой области является .getDynamicBox() - Bounding-box объекта',
		example  : 'console.log(obj.isDynamicIntersect( obj.getDynamicBox() )',
		returned : 'boolean > true - области пересекаются > false - области не пересекаются'
	},

	'isDynamicInside' : {
		name     : 'Проверка вхождения одной области внутрь другой',
		type     : 'function',
		api      : '(dynamicBox)',
		note     : 'dynamicBox - array, набор .point() точек, составляющих область. > \
		Минимальное количество точек в массиве - 3. > \
		Примером такой области является .getDynamicBox() - Bounding-box объекта',
		example  : 'console.log(obj.isDynamicInside( obj.getDynamicBox() )',
		returned : 'boolean > true - область входит внутрь dynamicBox > false - область не входит в dynamicBox'
	},

	'drawDynamicBox' : {
		name     : 'Отрисовать Bounding-box объекта',
		type     : 'function',
		api      : '(strokeColor)',
		note     : 'strokeColor - цвет отрисовки dynamicBox, рисуются только грани.',
		example  : 'obj.drawDynamicBox();',
		returned : ''
	},

	'drawStaticBox' : {
		name     : 'Отрисовать статический Bounding-box объекта',
		type     : 'function',
		api      : '(strokeColor)',
		note     : 'strokeColor - цвет отрисовки dynamicBox, рисуются только грани.',
		example  : 'obj.drawStaticBox();',
		returned : ''
	},

	'isStaticIntersect' : {
		name     : 'Проверка пересечения объекта со StaticBox',
		type     : 'function',
		api      : '(staticBox)',
		note     : 'staticBox - Прямоугольник, обрамляющий все не вращающиеся объекты',
		example  : 'obj.isStaticIntersect( obj.getStaticBox() );',
		returned : ''
	},

	'getStaticBox' : {
		name     : 'Получение staticBox объекта. статический Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Отличается от dynamicBox тем, что его использование целесообразно там, где объекты не \
		подразумевается вращать. > \
		!! staticBox нельзя передавать арзументом в функции, принимающие dynamicBox !!',
		example  : 'var staticBox = obj.getStaticBox();',
		returned : 'object > x - Позиция по X > y - Позиция по Y > w : Ширина прямоугольника > h : Высота прямоугольника'
	},

	'setAlpha' : {
		name     : 'Установить прозрачность',
		type     : 'function',
		api      : '(alpha)',
		note     : 'alpha - number, степень прозрачности. > 0 - прозрачный, 1 - непрозрачный',
		example  : 'obj.setAlpha(0.5);',
		returned : ''
	},

	'getAlpha' : {
		name     : 'Получить прозрачность',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'obj.getAlpha(0.5);',
		returned : 'number > Степень прозрачности'
	},

	'rotate' : {
		name     : 'Повернуть объект в направлении точки или вектора',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .v2d(), вектор',
		example  : '// Повернуть объект в сторону другого объекта > obj.rotate( obj.getPosition() );',
		returned : 'number > Степень прозрачности'
	},

	'setCenter' : {
		name     : 'Сместить центр объекта',
		type     : 'function',
		api      : '(vector2D)',
		note     : 'vector2D - .v2d(), вектор смещения',
		example  : 'obj.setCenter( .v2d(10, 0) ); // сместить центр объекта на 10 пикселей по X (вправо)',
		returned : ''
	},

	'setBox' : {
		name     : 'Установить смещение и размеры Bounding-box',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, набор свойств объекта: { > \
														`offset - .point(), смещение Bounding-box > \
														`size - .size(), размер Bounding-box > \
													}',
		example  : 'obj.setBox({> `offset : point(5, 5), > `size : size(-10, -10) > });',
		returned : ''
	},

	'getBox' : {
		name     : 'Получить смещение и размеры Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Функция вернет объект с двумя свойствами: > offset - смещение Bounding-box > size : размер Bounding-box',
		example  : 'var box = obj.getBox(); >> console.log(box.offset)',
		returned : 'object > Смещение и размер Bounding-box'
	},

	'nullCenter' : {
		name     : 'Сместить центр объекта в его (объекта) верхний левый угол',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'obj.nullCenter();',
		returned : ''
	},

	'getCenter' : {
		name     : 'Получить смещенный центр объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет центр объекта, по умолчанию .point(0, 0)',
		example  : 'var point = obj.getCenter( .v2d(10, 0) );',
		returned : ' .point() > Центр объекта'
	},

	'move' : {
		name     : 'Двигать объект в направлении',
		type     : 'function',
		api      : '(vector2D)',
		note     : 'vector2D - .v2d(), направление движения',
		example  : 'obj.move( .v2d(1, 0) ); // двигать вправо на 1 пиксель',
		returned : ''
	},

	'scale' : {
		name     : 'Увеличиывть объект',
		type     : 'function',
		api      : '(size)',
		note     : 'size - .w2h(), оси увеличения > положительные значение - увеличение > отрицательные - уменьшение > 0 - не изменять размер',
		example  : 'obj.scale( .w2h(1, 1) ); // увеличивать пропорционально на 1 пиксель по ширине и 1 по высоте',
		returned : ''
	},

	'scaleC' : {
		name     : 'Увеличиывть объект относильено центра',
		type     : 'function',
		api      : '(size)',
		note     : 'size - .w2h(), оси увеличения > положительные значение - увеличение > отрицательные - уменьшение > 0 - не изменять размер > \
		При масштабировании центр объекта сохраняется',
		example  : 'obj.scaleC( .w2h(1, 1) ); // увеличивать пропорционально на 1 пиксель по ширине и 1 по высоте',
		returned : ''
	},

	'getPosition' : {
		name     : 'Получение позиции объекта',
		type     : 'function',
		api      : '([format])',
		note     : 'format - number, тип позиции, которую требуется получить. > \
		0 или отсутствует - координаты верхнего левого угла > \
		1 - позиция с учетом смещенного центра объекта (рекомендуется) > \
		2 - позиция центра фигуры (с учетом вращения). > \
		Рекомендуется использовать format = 1 для получения центра объекта с учетом смещения и поворота.',
		example  : 'var point = obj.getPosition( 1 );',
		returned : ' .point() > x : Позиция по X > y - Позиция по Y'
	},

	'getPositionC' : {
		name     : 'Получение позиции центра объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет позицию центра объекта',
		example  : 'var point = obj.getPositionC();',
		returned : ' .point() > x : Позиция по X > y - Позиция по Y'
	},

	'setPosition' : {
		name     : 'Установить объект в позицию',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .v2d(), вектор',
		example  : 'obj.setPosition( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y',
		returned : ''
	},

	'setPositionS' : {
		name     : 'Установить объект в позицию локальных координат',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .v2d(), вектор',
		example  : 'obj.setPositionS( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y относилельно экрана',
		returned : ''
	},

	'rotateForAngle' : {
		name     : 'Поворачивать объект для выравнивания угла',
		type     : 'function',
		api      : '(angle, speed)',
		note     : 'angle - number, требуемый угол > speed - number, скорость поворота',
		example  : 'obj.rotateForAngle(45, 1); // Поворачивать объект пока его угол не станет 45 градусов на скорости 1',
		returned : ''
	},

	'setPositionC' : {
		name     : 'Установить объект в позицию c учетом центра',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .v2d(), вектор  > \
		Функция установит объект с учетом его смещенного центра и поворота.',
		example  : 'obj.setPositionC( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y',
		returned : ''
	},

	'setPositionCS' : {
		name     : 'Установить объект в позицию c учетом центра в локальных координатах',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .v2d(), вектор  > \
		Функция установит объект с учетом его смещенного центра и поворота.',
		example  : 'obj.setPositionCS( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y относительнo экрана',
		returned : ''
	},

	'getSize' : {
		name     : 'Получить размер объекта',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var size = obj.getSize();',
		returned : ' .size() > w - Ширина объекта > h - Высота объекта'
	},

	'setSize' : {
		name     : 'Задать размер объекта',
		type     : 'function',
		api      : '(size)',
		note     : 'size - .w2h() - новый размер объекта',
		example  : 'obj.setSize( .w2h(10, 50) );',
		returned : ''
	},

	'setSizeC' : {
		name     : 'Задать размер объекта с учетом центра',
		type     : 'function',
		api      : '(size)',
		note     : 'size - .w2h() - новый размер объекта > \
		При задании объекту нового размера его центр сохраняется',
		example  : 'obj.setSizeC( .w2h(10, 50) );',
		returned : ''
	},

	'turn' : {
		name     : 'Вращать объект',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, значение поворота, которое будет прибавлено к текущему повороту > \
		Положительное значение вращает по часовой стрелке, > \
		Отрицательное значение вращает против часовой стрекли',
		example  : 'obj.turn( 1 );  // вращать на 1 градус по часовой стрелке',
		returned : ''
	},

	'moveAngle' : {
		name     : 'Двигать объект в соответствии с направлением',
		type     : 'function',
		api      : '(speed)',
		note     : 'speed - number, скорость движения. > \
		Функция учитывает направление объекта.',
		example  : 'obj.moveAngle( 1 );  // Двигать в направлении поворота на скорости 1 пиксель',
		returned : ''
	},

	'circling' : {
		name     : 'Двигать объект по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает объект по окружности вокруг точки',
		example  : 'obj.circling( mouse.getMousePositionA(), 10, 1 );  // Двигать объект вокруг курсора по радиусу 10 и скорости 1',
		returned : ''
	},

	'circlingC' : {
		name     : 'Двигать объект по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает объект по окружности вокруг точки > \
		Функция учитывает центр объекта',
		example  : 'obj.circlingC( mouse.getMousePositionA(), 10, 1 );  // Двигать объект вокруг курсора по радиусу 10 и скорости 1',
		returned : ''
	},

	'motion' : {
		name     : 'Двигать объект по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает объект по элипсоиду вокруг точки',
		example  : 'obj.motion( mouse.getMousePositionA(), size(50, 10), 1 );  // Двигать объект вокруг курсора по радиусу 50x10 и скорости 1',
		returned : ''
	},

	'motionC' : {
		name     : 'Двигать объект по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает объект по элипсоиду вокруг точки > \
		Функция учитывает центр объекта',
		example  : 'obj.motionC( mouse.getMousePositionA(), size(50, 10), 1 );  // Двигать объект вокруг курсора по радиусу 50x10 и скорости 1',
		returned : ''
	},

	'getAngle' : {
		name     : 'Поучить угол вращения объекта в градусах',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'obj.getAngle();',
		returned : 'number > Угол в градусах'
	},

	'setAngle' : {
		name     : 'Установить угол вращения объекта в градусах',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, угол в градусах. > В отличии от команды turn(), эта команда не прибавляет угол, а перезаписывает его.',
		example  : 'obj.setAngle(45);',
		returned : ''
	},

	'moveTime' : {
		name     : 'Двигать объект к точке за указанные время',
		type     : 'function',
		api      : '(point, time)',
		note     : 'point - ,point(), точка > time - number, время, требуемое для движения',
		example  : 'obj.moveTime(mouse.getMousePositionA(), 5);',
		returned : ''
	},

	'moveTimeC' : {
		name     : 'Двигать объект к точке за указанные время',
		type     : 'function',
		api      : '(point, time)',
		note     : 'point - ,point(), точка > time - number, время, требуемое для движения > \
														Функция учитывает центр объекта',
		example  : 'obj.moveTimeC(mouse.getMousePositionA(), 5);',
		returned : ''
	},

	'getDistance' : {
		name     : 'Поучить расстояние до точки',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), точка, до которой нужно рассчитать расстояние',
		example  : 'obj.getDistance( obj2.getPosition(2) ); // Получить расстояние до объектa obj2',
		returned : ''
	},

	'getDistanceC' : {
		name     : 'Поучить расстояние до точки c учетом центра',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), точка, до которой нужно рассчитать расстояние > \
		Функция учитывает центр объекта и отсчет начинается от него.',
		example  : 'obj.getDistanceC( obj2.getPosition(1) ); // Получить расстояние до объектa obj2',
		returned : ''
	},

	'setVisible' : {
		name     : 'Установить видимость объекту',
		type     : 'function',
		api      : '(bool)',
		note     : 'bool - boolean > true - видимый объект > false - невидимый > \
		Невидимые объекты так же реагируют на столкновения, имеют угол вращения и т.д. > \
		Невидимый объект просто не отображается.',
		example  : 'obj.setVisible( false ); // Сделать объект невидимым',
		returned : ''
	},

	'isVisible' : {
		name     : 'Проверить флаг видимости объекта',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isVisible();',
		returned : 'boolean > true - объект видимый > false - объект не видим'
	},

	'isInCamera' : {
		name     : 'Проверить видит ли объект камера (игрок). Универсальный метод',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isInCamera();',
		returned : 'boolean > true - объект в пределах видимости > false - объект за пределами, камера его не видит'
	},

	'isInCameraStatic' : {
		name     : 'Проверить видит ли объект камера (игрок)',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isInCamera();',
		returned : 'boolean > true - объект в пределах видимости > false - объект за пределами, камера его не видит'
	},

	'isInCameraDynamic' : {
		name     : 'Проверить видит ли объект камера (игрок)',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isInCamera();',
		returned : 'boolean > true - объект в пределах видимости > false - объект за пределами, камера его не видит'
	},

	'onCollision' : {
		name     : 'Ограничить движения при столкновении с объектом',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, объект, проверяемый на столкновения',
		example  : 'obj.onCollision( obj2 );',
		returned : ''
	},

	'onArrCollision' : {
		name     : 'Ограничить движения при столкновении с массивом объектов',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массив объектов, с которыми проверяется столкновение',
		example  : 'obj.onArrCollision( [obj1, obj2, obj3 ... objX] );',
		returned : ''
	},


	'draw' : {
		name     : 'Отрисовать объект',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},



};














var RectObject = {
	'draw' : {
		name     : 'Отрисовать прямоугольник',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},

};














var BackgroundObject = {

	'file' : {
		name     : 'Путь к файлу тайла',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'countX' : {
		name     : 'Размножение тайла по X (горизонтали)',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'countY' : {
		name     : 'Размножение тайла по Y (вертикали)',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'fullW' : {
		type     : 'hidden',
	},

	'fullH' : {
		type     : 'hidden',
	},

	'cnv' : {
		type     : 'hidden',
	},

	'ctx' : {
		type     : 'hidden',
	},


	'loaded' : {
		name     : 'Сгенерирован ли тайл',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},



	'draw' : {
		name     : 'Отрисовать фон',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает фон',
		example  : 'backgr.draw();',
		returned : ''
	},

	'getSize' : {
		name     : 'Получить размер фонового объекта',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var bSize = backgr.getSize();',
		returned : ' .size() > Размер фонового объекта'
	},




};























var TextObject = {

	'textDY' : {
		type : 'hidden'
	},

	'align' : {
		type : 'hidden'
	},

	'color' : {
		name     : 'Цвет текста',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'text' : {
		name     : 'Текст внутри объекта',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'size' : {
		name     : 'Высота текста',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'font' : {
		name     : 'Шрифт текста',
		type     : 'property',
		api      : '',
		note     : 'Например: "serif"',
		example  : '',
		returned : ''
	},

	'style' : {
		name     : 'Стиль текста',
		type     : 'property',
		api      : '',
		note     : 'Указывается через пробел. > Например: "bold italic"',
		example  : '',
		returned : ''
	},

	'padding' : {
		name     : 'Отступ текста от краев',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'strokeColorText' : {
		name     : 'Цвет обводки текста',
		type     : 'property',
		api      : '',
		note     : 'Обводка текста, а не рамки',
		example  : '',
		returned : ''
	},

	'strokeWidthText' : {
		name     : 'Ширина линии обводки текста',
		type     : 'property',
		api      : '',
		note     : 'Ширина линии обводки текста, а не рамки',
		example  : '',
		returned : ''
	},

	'reStyle' : {
		name     : 'Преобразовать объект',
		type     : 'property',
		api      : '(obj)',
		note     : 'obj - объект со свойствами > \
														{ > \
														`text - string, однострочный текст > \
														`size - number, высота текста в пикселях > \
														`color - string, цвет текста > \
														`font - string, шрифт > \
														`style - string, стиль текста > \
														`padding - number, отступ вокруг текста > \
														`fillColor - string, цвет заливки объекта > \
														`strokeColor - string, цвет обводки объекта > \
														`strokeWidth - number, ширина линии обводки > \
														`strokeColorText - string, цвет обводки текст > \
														`strokeWidthText - number, ширина линии обводки текста > \
														} > Все параметры не являются обязательными > \
														',
		example  : '',
		returned : ''
	},


	'setText' : {
		name     : 'Изменить текст',
		type     : 'function',
		api      : '(text)',
		note     : 'text - string, строка текста',
		example  : 'obj.setText("Новый текст");',
		returned : ''
	},

	'getText' : {
		name     : 'Получить текст',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var text = obj.getText();',
		returned : 'string > Текст'
	},

	'draw' : {
		name     : 'Отрисовать текст',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},

};





















var ImageObject = {
	'draw' : {
		name     : 'Отрисовать изображение',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},

	'simpleDraw' : {
		name     : 'Отрисовать копию изображения в позиции',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), позиция отрисовки',
		example  : 'obj.simpleDraw( .point(100, 100) );',
		returned : ''
	},

	'setImage' : {
		name     : 'Установить объекту новое изображение',
		type     : 'function',
		api      : '(file)',
		note     : 'file - string, путь к файлу изображения',
		example  : 'obj.setImage( "images/image.png" );',
		returned : ''
	},

	'getImage' : {
		name     : 'Получить ссылку на изображение',
		type     : 'function',
		api      : '()',
		note     : 'Вернет ссылку на изображение',
		example  : 'var img = obj.getImage(); > obj2.setImage(img);',
		returned : 'string > Путь к файлу изображения'
	},

	'loaded' : {
		name     : 'Статус загрузки',
		type     : 'property',
		api      : '',
		note     : 'Статус загруженности изображения',
		example  : '',
		returned : 'boolean > true - изображение загружено > false - изображение не загружено'
	},

	'file' : {
		name     : 'Файл изображения',
		type     : 'property',
		api      : '',
		note     : 'Путь к файлу изображения',
		example  : '',
		returned : ''
	},

};


















var AnimationObject = {
	'step' : {
		type     : 'hidden',
	},

	'toFrameStep' : {
		type     : 'hidden',
	},


	'difStep' : {
		type     : 'hidden',
	},

	'anim' : {
		type     : 'hidden',
	},

	'frame' : {
		name     : 'Текущий кадр',
		type     : 'property',
		api      : '',
		note     : 'Текущий кадр в проигрываемой анимации',
		example  : '',
		returned : ''
	},

	'getAnimation' : {
		name     : 'Получить анимацию объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет анимацию объекта',
		example  : 'var anim = obj.getAnimation(); > obj2.setAnimation(anim);',
		returned : ' .Animation() > Объект с параметрами анимации'
	},

	'setAnimation' : {
		name     : 'Присвоить анимацию объекту',
		type     : 'function',
		api      : '(anim)',
		note     : 'anim -  .Animation(), объект с параметрами анимации',
		example  : 'var anim = obj.setAnimation(); > obj2.setAnimation(anim);',
		returned : ''
	},

	'draw' : {
		name     : 'Отрисовать всю анимацию',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовка всех кадров анимации. > Для задания замедления анимации используется параметр delay > \
														delay - number, замедление анимации',
		example  : 'obj.draw();',
		returned : ''
	},

	'drawFrame' : {
		name     : 'Отрисовать один кадр',
		type     : 'function',
		api      : '(frame)',
		note     : 'frame - number, кадр, который требуется отрисивать (кадры нумеруются с нуля)',
		example  : 'obj.drawFrame(4);',
		returned : ''
	},

	'drawReverFrames' : {
		name     : 'Реверсивная покадровая анимация',
		type     : 'function',
		api      : '(start, end)',
		note     : 'start - number, начальный кадр > \
														end - конечный кадр > \
														Анимация будет происходить от кадра start к кадру end и обратно',
		example  : 'obj.drawReverFrames(0, 15);',
		returned : ''
	},

	'drawToFrame' : {
		name     : 'Воспроизводить анимацию вплоть до кадра',
		type     : 'function',
		api      : '(frame)',
		note     : 'frame - number, кадр, который требуется отрисивать (кадры нумеруются с нуля) > \
														При этом кадр будет отрисован не сразу, анимация "дойдет" до него и замрет на нем > \
														Работает в обе стороны',
		example  : 'obj.drawToFrame(5);',
		returned : ''
	},

	'drawFrames' : {
		name     : 'Отрисовать последовательность кадров',
		type     : 'function',
		api      : '(frame_start, frame_end)',
		note     : 'frame_start - number, начальный кадр > frame_end - number, конечный кадр',
		example  : 'obj.drawFrames(1, 5); // воспроизведение анимации с 1 по 5 кадр, нулевой кадр будет пропущен',
		returned : ''
	},

	'setDelay' : {
		name     : 'Установить замедление анимации',
		type     : 'function',
		api      : '(delay)',
		note     : 'delay - number, задержка',
		example  : 'obj.setDelay(10); // установить замедление в 5 кадров',
		returned : ''
	},

	'getDelay' : {
		name     : 'Получить замедление анимации',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var delay = obj.getDelay(); // получить замедление',
		returned : 'number > Зарежка (в FPS)'
	},



};

















var CircleObject = {
	'scale' : {
		name     : 'Увеличивать радиус окружности',
		type     : 'function',
		api      : '(num)',
		note     : 'num - number, количество пикселей, на которое радиус увеличивается > Положительное число увеличивает > \
		Отрицательное число уменьшает',
		example  : 'obj.scale(2);',
		returned : ''
	},

	'scaleC' : {
		name     : 'Увеличивать радиус окружности с учетом центра',
		type     : 'function',
		api      : '(num)',
		note     : 'num - number, количество пикселей, на которое радиус увеличивается > Положительное число увеличивает > \
		Отрицательное число уменьшает > При увеличении радиуса окружности центр остается на месте',
		example  : 'obj.scaleC(2);',
		returned : ''
	},

	'getRadius' : {
		name     : 'Поучить радиус окружности',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var radius = obj.getRadius();',
		returned : 'number > Радиус окружности'
	},

	'setRadius' : {
		name     : 'Установить радиус окружности',
		type     : 'function',
		api      : '(radius)',
		note     : 'radius number, Радиус окружности',
		example  : 'obj.setRadius(10);',
		returned : ''
	},

	'radius' : {
		name     : 'Pадиус окружности',
		type     : 'property',
		api      : '',
		note     : 'Радиус окружности',
		example  : '',
		returned : ''
	},



};





















var Image = {
	'file' : {
		type     : 'hidden',
	},

	'toLoad' : {
		type     : 'hidden',
	},

	'loaded' : {
		name     : 'Состояние загруженности изображения',
		type     : 'property',
		api      : '',
		note     : 'true - Изображение загружено > false - изображение не загружено',
		example  : '',
		returned : ''
	},

	'onContext' : {
		name     : 'Низкоуровневый доступ к контекст',
		type     : 'function',
		api      : '(func)',
		note     : 'func - function, функция обработчик > \
														Принимает три параметра: > \
														context - Контекст, на котором можно рисовать > \
														width - Ширина холста > \
														height - Высота холста',
		example  : 'obj.onContext(function (ctx) {> `ctx.fillStyle = "red"; > `ctx.fillRect(0, 0, 20, 20); >});',
 	returned : ''
	},

	'getTile' : {
		name     : 'Извлечь часть изображения в тайл',
		type     : 'function',
		api      : '(x, y, w, h)',
		note     : 'x - координата X > y - координата Y > w - ширина > h - высота > \
														Будет извлечен прямоугольник из изображения',
		example  : 'obj.getTile( 10, 10, 50, 50 );',
 	returned : ' .tile() > Фрагмент изображения. Тайл'
	},

	'getAnimation' : {
		name     : 'Извлечь последовательность фреймов (кадров, тайлов) для анимирования',
		type     : 'function',
		api      : '(x, y, w, h, count)',
		note     : 'x - координата X > y - координата Y > w - ширина > h - высота > \
														count - количество кадров по ГОРИЗОНТАЛИ > \
														Будет извлечена последовательность кадров для анимации',
		example  : 'obj.getAnimation( 10, 10, 50, 50, 5 );',
		returned : ' .Animation() > Анимации'
	},

};


















var Audio = {
	'vol' : {
		type     : 'hidden',
	},

	'audio' : {
		type     : 'hidden',
	},

	'nextPlay' : {
		type     : 'hidden',
	},

	'playing' : {
		name     : 'Состояние воспроизведения',
		type     : 'property',
		api      : '',
		note     : 'true - Музыка воспроизводится > false - Музыка не воспроизводится',
		example  : '',
		returned : ''
	},

	'loaded' : {
		name     : 'Состояние загруженности аудио',
		type     : 'property',
		api      : '',
		note     : 'true - Аудиофайл загружен > false - Аудиофайл не загружен',
		example  : '',
		returned : ''
	},

	'play' : {
		name     : 'Воспроизвести аудио',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание продолжится с места остановки',
		example  : 'Audio.play();',
		returned : ''
	},

	'playPause' : {
		name     : 'Воспроизвести аудио, если остановлено, приостановить, если играет',
		type     : 'function',
		api      : '()',
		note     : 'Если воспроизведение происходит, оно приостановится, иначе - продолжится',
		example  : 'Audio.playPause();',
		returned : ''
	},

	'replay' : {
		name     : 'Воспроизвести аудио сначала',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание все равно начнется сначала > \
														Если на момент вызова функции файл воспроизводится, воспроизведение начнется сначала',
		example  : 'Audio.replay();',
		returned : ''
	},

	'stop' : {
		name     : 'Полная остановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Останавливает воспроизведение аудио',
		example  : 'Audio.stop();',
		returned : ''
	},

	'pause' : {
		name     : 'Приостановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Приостанавливает воспроизведение аудио > Продолжить воспроизведение можно функцией play()',
		example  : 'Audio.pause();',
		returned : ''
	},

	'setNextPlay' : {
		name     : 'Установить следующий файл воспроизведения',
		type     : 'function',
		api      : '(audio)',
		note     : 'audio - .Audio() или .WAudio(), аудио, которое будет воспроизведено сразу после того, как закончится текущий файл.',
		example  : 'audio1.setNextPlay( audio2 );',
		returned : ''
	},

	'setVolume' : {
		name     : 'Установить громкость воспроизведения',
		type     : 'function',
		api      : '(volume)',
		note     : 'volume - number, громкость воспроизведения > 0 - полная тишина, 1 - полная громкость',
		example  : 'audio1.setVolume( 0.5 ); // Половина громкости',
		returned : ''
	},

	'getVolume' : {
		name     : 'Получить громкость воспроизведения',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var volume = audio1.getVolume(); // 0.5',
		returned : 'number > Громкость воспроизведения'
	},




};


var WAudio = {
	'vol' : {
		type     : 'hidden',
	},

	'audio' : {
		type     : 'hidden',
	},

	'nextPlay' : {
		type     : 'hidden',
	},

	'loadPLay' : {
		type     : 'hidden',
	},

	'startTime' : {
		type     : 'hidden',
	},

	'duration' : {
		type     : 'hidden',
	},

	'pausedTime' : {
		type     : 'hidden',
	},

	'playing' : {
		name     : 'Состояние воспроизведения',
		type     : 'property',
		api      : '',
		note     : 'true - Музыка воспроизводится > false - Музыка не воспроизводится',
		example  : '',
		returned : ''
	},

	'loaded' : {
		name     : 'Состояние загруженности аудио',
		type     : 'property',
		api      : '',
		note     : 'true - Аудиофайл загружен > false - Аудиофайл не загружен',
		example  : '',
		returned : ''
	},

	'play' : {
		name     : 'Воспроизвести аудио',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание продолжится с места остановки',
		example  : 'WAudio.play();',
		returned : ''
	},

	'playPause' : {
		name     : 'Воспроизвести аудио, если остановлено, приостановить, если играет',
		type     : 'function',
		api      : '()',
		note     : 'Если воспроизведение происходит, оно приостановится, иначе - продолжится',
		example  : 'WAudio.playPause();',
		returned : ''
	},

	'replay' : {
		name     : 'Воспроизвести аудио сначала',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание все равно начнется сначала > \
														Если на момент вызова функции файл воспроизводится, воспроизведение начнется сначала',
		example  : 'WAudio.replay();',
		returned : ''
	},

	'stop' : {
		name     : 'Полная остановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Останавливает воспроизведение аудио',
		example  : 'WAudio.stop();',
		returned : ''
	},

	'pause' : {
		name     : 'Приостановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Приостанавливает воспроизведение аудио > Продолжить воспроизведение можно функцией play()',
		example  : 'WAudio.pause();',
		returned : ''
	},

	'setNextPlay' : {
		name     : 'Установить следующий файл воспроизведения',
		type     : 'function',
		api      : '(audio)',
		note     : 'audio - .WAudio(), или .Audio(), которое будет воспроизведено сразу после того, как закончится текущий файл.',
		example  : 'audio1.setNextPlay( audio2 );',
		returned : ''
	},

	'setVolume' : {
		name     : 'Установить громкость воспроизведения',
		type     : 'function',
		api      : '(volume)',
		note     : 'volume - number, громкость воспроизведения > 0 - полная тишина, 1 - полная громкость',
		example  : 'audio1.setVolume( 0.5 ); // Половина громкости',
		returned : ''
	},

	'getVolume' : {
		name     : 'Получить громкость воспроизведения',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var volume = audio1.getVolume(); // 0.5',
		returned : 'number > Громкость воспроизведения'
	},

	'getProgress' : {
		name     : 'Получить позицию воспроизведения',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var progress = audio1.getProgress(); // например, 1.12312312333',
		returned : 'number > Позиция воспроизведения'
	},

	'setSide' : {
		name     : 'Установить баланс воспроизведения',
		type     : 'function',
		api      : '(side)',
		note     : 'side - number, уровень баланса. Значение дробное от -1 до 1 > \
														-1 - левая сторона > 0 - по центру > 1 - правая сторона > \
														Функция "перемещает" испочник воспроизведения к левой или правой стороне',
		example  : 'audio1.setSide(0.8);',
		returned : ''
	},

	'getSide' : {
		name     : 'Получить баланс воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Вернет баланс воспроизведения в диапазоне от - 1 до 1',
		example  : 'var side = audio1.getSide(); // например, 0.8 - Близко к правому краю, но едва слышно и в левом',
		returned : 'number > Баланс воспроизведения > -1 - левая сторона > 0 - по центру > 1 - правая сторона > Значение может быть дробным'
	},



};










var EllipsObject = {
	'draw' : {
		name     : 'Отрисовать элипс',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},
};















var PolygonObject = {
	'dX' : {
		type     : 'hidden',
	},

	'dY' : {
		type     : 'hidden',
	},

	'points' : {
		type     : 'hidden',
	},

	'pointColor' : {
		name     : 'Цвет вершин для отрисовки',
		type     : 'property',
		api      : '',
		note     : 'Цвет вершин',
		example  : '',
		returned : ''
	},

	'addPoint' : {
		name     : 'Добавить новую вершину в полигон',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), вершина для добавления > Координаты будут отсчитаны относительно позиции объекта',
		example  : 'PolygonObject.addPoint( .point(10, 10) ); // добавить точку в объект',
		returned : ''
	},

	'delPoint' : {
		name     : 'Удалить вершину из полигона',
		type     : 'function',
		api      : '(N)',
		note     : 'N - порядковый номер точки, которую требуется удалить. > Отсчет начинается с нуля.',
		example  : 'PolygonObject.delPoint( 2 ); // Удалить вторую точку из полигона',
		returned : ''
	},

	'clearPoints' : {
		name     : 'Удалить все вершины',
		type     : 'function',
		api      : '()',
		note     : 'Очистка всех вершин',
		example  : 'PolygonObject.clearPoints(); // Удалить все вершины',
		returned : ''
	},

	'getPoints' : {
		name     : 'Получить все вершины',
		type     : 'function',
		api      : '()',
		note     : 'Получить все вершины полигона',
		example  : 'PolygonObject.getPoints();',
		returned : 'array > Список .point() объектов с координатами точек'
	},

	'getCount' : {
		name     : 'Получить количество вершин в полигоне',
		type     : 'function',
		api      : '()',
		note     : 'Получить количество всех вершин',
		example  : 'PolygonObject.getCount();',
		returned : 'number > Количество вершин'
	},

	'getPoint' : {
		name     : 'Обратиться к точке',
		type     : 'function',
		api      : '(N)',
		note     : 'Обратиться к точке с номером N',
		example  : 'PolygonObject.getPoint(2); // обратиться к точке с порядковым номером 2',
		returned : ' .point() > Координаты точки'
	},







};





















var Mesh = {
	'x' : {
		name     : 'Смещение группы по X',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'y' : {
		name     : 'Смещение группы по Y',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'count' : {
		name     : 'Количество объектов в группе',
		type     : 'hidden',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'getCount' : {
		name     : 'Количество объектов в группе',
		type     : 'function',
		api      : '',
		note     : '',
		example  : '',
		returned : 'number > Количество объектов'
	},

	'draw' : {
		name     : 'Отрисовать объекты в группе',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'Mesh.draw();',
		returned : ''
	},

	'objs' : {
		name     : 'Массив объектов',
		type     : 'hidden',
		api      : '',
		note     : '',
		example  : '',
		returned : 'array > Массив объектов'
	},

	'add' : {
		name     : 'Добавить объект в группу',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - Object, любой объект, наследующий .BaseObject(), который требуется добавить в Mesh',
		example  : 'Mesh.add( .BaseObject() );',
		returned : ''
	},

	'del' : {
		name     : 'Удалить объект из группы',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - Object, любой объект, наследующий .BaseObject(), который находится в .Mesh()',
		example  : 'Mesh.del( .BaseObject() );',
		returned : ''
	},

	'move' : {
		name     : 'Двигать группу объектов',
		type     : 'function',
		api      : '( point )',
		note     : 'point - .point(), позиция смещения',
		example  : 'Mesh.move( .point(1, 0) ); // двигать вправо на 1 пиксель за итерацию',
		returned : ''
	},

	'setPosition' : {
		name     : 'Установить позицию группе объектов',
		type     : 'function',
		api      : '(position)',
		note     : 'position - .point(), позиция',
		example  : 'Mesh.setPosition( .point(100, 100) );',
		returned : ''
	},

	'turn' : {
		name     : 'Вращать группу объектов',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, угол вращения',
		example  : 'Mesh.turn( 3 ); // вращение на скорости 3 градуса за итерацию',
		returned : ''
	},

	'setAngle' : {
		name     : 'Установить угол поворота группе объектов',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, угол вращения',
		example  : 'Mesh.setAngle( 3 ); // вращение на скорости 3 градуса за итерацию',
		returned : ''
	},




};


















var apiNotes = {
	'BaseObject' : 'Базовый объект',
	'RectObject' : 'Объект "Прямоугольник"',
	'CircleObject' : 'Объект "Окружность"',
	'EllipsObject' : 'Объект "элипс"',
	'ImageObject' : 'Объект "изображение"',
	'AnimationObject' : 'Объект "анимация"',
	'Mesh' : 'Объект "Меш"',
	'Audio' : 'Объект "Audio"',
};






