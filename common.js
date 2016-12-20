// var statement;
// statement = (2+3)*5;
// "hjvbhvbj"

// var i=2;
// console.log(++i);
// console.log(--i);

// var m=10;
// console.log(m += 2);

// var m=10;
// console.log(m -= 2);

// for (a=1,b=2,c=3; b<3; b++) {
// }


/*var a=4,
	b=5;
a<b;
b>a;
a=b;*/

/*var age = 21;
if (age === 18) {
	alert ('Вы взрослый');	
} else if (age===21) {
	alert ('Держите пиво.')
}*/

// (age === 18) ? alert('Вы уже взрослый'):
	// (age === 21) ? alert('Держите пиво') :
	// (age === 24) ? alert('Юность уходит') :
					// alert('Вам нет 18 лет')

// var age=14;
// (age >= 18 && age <= 50) ? alert('Вы уже взрослый') : alert('Ваш возраст не подходит');

// (age === 18 || age >= 50) ? alert('Вы уже взрослый') : alert('Ваш возраст не подходит');

// var transport='мопед';
// (transport === 'автомобиль' || transport === 'велосипед') ? alert('Вы добрались до дома быстро') : alert('Вы идете долго пешком...');

// (transport !== 'ноги') ? alert('Вы добрались до дома быстро') : alert('Вы идете долго пешком...');

// ТИП Number

// var number = 234;
// inf = Infinity;
// number.toFixed(3); // Отсчитывает числа после запятой (в данном сл. 2)
// number.toExponential(); // Выводит экспоненту
// number.toPrecision(5); // Округляет до общего кол-ва цифр
// number.toString(); // Приводит число к строке 
// console.log(typeof number.toString());

// Math.sqrt();
// console.log(Math.sqrt(81)); //Вычисление корня
// console.log(Math.pow(5, 4));  // Возведение в степень (5 возводим в 4 степень)

// console.log(Math.floor(number)); // Метод округления в нижнюю сторону всегда!

// console.log(Math.ceil(number)); // Метод округления в верхнюю сторону всегда!
// console.log(Math.round(number)); // Метод округления округляет до ближайшего
// console.log(Math.PI); // Постоянноне число пи
// console.log(1/0); // Infiniti
// console.log(0/0); // Infiniti (Бесконечность)
// console.log(isNan(number));

// console.log(inf > 456456); // Infinity всегда больше любого числа
// console.log(Nan === Nan);

// ТИП String

// var str = '"string" is a data type';
// console.log(str);

// var longStr = 'Какая-то очень длинная\n строка получилась'; // Перенос строки
// console.log(longStr);

// var longStr = 'Какая-то очень длинная \tстрока получилась'; // Отступы в строке
// console.log(longStr);

// var str = 'Какая-то строка';
// console.log(str.length); // Кол-во символов в строке

// var str = 'Itis wrong';
// console.log('hello ' + 'world'); // Сложение строк
// console.log('hello '.concat('world')); // Более длинный способ сложения строк 
// console.log(str.charAt(2) ); //  Возврыщает символ в соответствии с его индексом
// console.log(str.substring(4)); // обрезает строку
// console.log(str.slice(-6)); // Тоже обрезает строку но можем задавать отрицательное зн-ие и обрежет с конца
// console.log(str.substr(0, 5)); // Вырезание подстрок
// console.log(str.split(' ')); // Разделение на массивы
// console.log(str.replace('wrong','right')); // Заменили слово в строке (wrong на right)
// console.log(str.indexOf('i')); // Выводит индексы по символу
// console.log(str.toUpperCase()); // Задает всю строку в верхнем регистре
// console.log(str.toLowerCase()); // задает всю строку в нижнем регистре

//ТИПЫ Boolean null undefined

//Boolean

// var booll = false;
// if (!booll) {
// 	console.log('Всем привет!');
// }

// 
// var booll= 'str';console.log(Boolean (Nan)); //
// console.log(Boolean (""));
// console.log(Boolean (""));
// console.log(Boolean (0));
// console.log(Boolean (undefinded));
// console.log(Boolean (null)); // Все данные кроме этих 5 будут true
// console.log(Boolean('hghgfh')); // Значение тру
// console.log(Boolean(8768)); // Значение тру
// var obj ={}
// console.log(Boolean(obj)); // Значение тру

//Null undefinded

// var param;
// 	obj = {}
// 	arr = [1,2,3]
// console.log(param); // Появится undefinded тк значения нет
// console.log(obj.parr); // Появится undefinded
// console.log(arr[7]); // Появится undefinded

// var func = function(arg) {
// 	console.log(arg);
// };
// func('Nick');

//Преобразование типов

// String(455);
// console.log(typeof String(455));
// console.log(typeof Number('455'));
// console.log(Boolean(0));

// console.log( typeof (5 + '1')); // Переведет в строку
// console.log(typeof (2354 + '')); // Переведет в строку быстро
// console.log(typeof(+'4534')); // Переведет в число быстро
// console.log(typeof(!!'24')); // Перевод быстро в буль
// console.log(+""); // Перевод пустой строки--> получим 0
// console.log (+true); // Переведет к 1
// console.log(+false); // Переведет к 0

// var num=777;
// console.log(typeof num.toString()); // Перевод к строке
// // console.log( parseInt("100 px")); Вытаскиваем из строки число
// console.log(parseFloat("100.24px", 10));

//Object // Контейнер из ключей и свойств
// var obj = {
// gfhg: 'str',
// func: function () {}
// };
// console.log(typeof obj.gfhg);
// var obj;
// console.log(obj[prop]);
// // console.log(obj.fff || 'name');
// var obj = {
// 	fgfg:'fgfg';
// }

// obj.ddd = 'lu gang';
// console.log(obj);

// var a = {prop: 1}, b = {prop: 2}, c ={prop: 3};
// a = b = c = {prop: 'allTheSame'};
// console.log(a,b,c);
// var obj = {
// 	fgfg : 'str'
// }

// obj.ddd = 'lu gang';
// console.log(obj);

// var y = obj;
// console.log(y.ddd);
// delete obj.fgfg;
// console.log(obj); // Делит удаляет только св-ва объекта
// Функция в объекте - это метод

// var obj = {
// 	fgfg : 'str',
// 	func : function () {
// 		console.log(this.fgfg);
// 	}
// };
// obj.func();

// var MYAPP = {

// };

function draw_example() {
	var example_canvas = document.getElementbyId("example");
	var example_context = example_canvas.getContext("2d");
		example_context.fillRect (50,25,100,150);
}
