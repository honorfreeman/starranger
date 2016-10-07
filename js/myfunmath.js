// Функция генерации случайного целого числа в диапазоне [lo..up]
function irand(lo, up) { return Math.floor(Math.random()*(up-lo+1)+lo); }
//возвращает длинну обьекта
function objLenght(obj){var i=0;for (var x in obj){if(obj.hasOwnProperty(x)){i++;}}return i;}
//Корректно определяем номер недели в году
function getWeekNum (day,month,year) 
{
	var calStartDOW = 1; //С чего начинать неделю, в США день 0 (Вс), в мире день 1 (Пн) 
	if (calStartDOW == 0) day++; //Чтоб работало и для САЩ :)
	month++; //в JS месяцы нумеруются с нуля!
	var a = Math.floor((14-month) / 12);
	var y = year + 4800 - a;
	var m = month + 12 * a - 3;
	var J = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y/4) - 
	Math.floor(y/100) + Math.floor(y/400) - 32045;
	d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
	var L = Math.floor(d4 / 1460);
	var d1 = ((d4 - L) % 365) + L;
	var week = Math.floor(d1/7) + 1;
	if (week<10) week='0'+week; //Лидирующий ноль для недель 1-9
		return week;
}