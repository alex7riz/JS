/*
1. Напишите цикл для вывода квадратов всех чисел от 1 до 7. В итоге вы должны получить такую картину:
Квадрат 1 = 1
Квадрат 2 = 4
Квадрат 3 = 9
Квадрат 4 = 16
Квадрат 5 = 25
Квадрат 6 = 36
Квадрат 7 = 49.
*/
var i;
var result;

for (i = 1; i <= 7; i++)
{
	console.log("Квадрат" + " " + i + " " + "=" + " " + i*i);
}

/*
2. Напишите цикл для определения четных чисел от 1 до 15. Реализуйте эту задачу тремя видами циклов. Вывод цикла должен содержать:
Число 1. Нечетное;
Число 2. Четное;
Число 3. Нечетное и т.д.
*/

//1 example

var num;

for (num = 1; num <= 15; num++)
{
	if (num % 2 === 0)
	{
		console.log("Число" + " " + num + "." + "Четное" + ";");
	} 
	if (num % 2 === 1)
	{
		console.log("Число" + " " + num + "." + "Нечетное" + ";");	
	}
}

//2 example
var nom = 1;

while (nom <= 15)
{
	if (nom % 2 === 0)
	{
		console.log("Число" + " " + nom + "." + "Четное" + ";");
		
	} 
	if (nom % 2 === 1)
	{
		console.log("Число" + " " + nom + "." + "Нечетное" + ";");

	}
	nom++;
} 

//3 example
var number = 1;
do {
	if (number % 2 === 0)
		{
			console.log("Число" + " " + number + "." + "Четное" + ";");
			
		} 
		if (number % 2 === 1)
		{
			console.log("Число" + " " + number + "." + "Нечетное" + ";");

		}
		number++;
} while (number <= 15)


/*
3. Сократите код используя циклы:

elemResult.innerHTML += 'Число: <b>100</b><br>';
elemResult.innerHTML += 'Число: <b>80</b><br>';
elemResult.innerHTML += 'Число: <b>60</b><br>';
elemResult.innerHTML += 'Число: <b>50</b><br>';
elemResult.innerHTML += 'Число: <b>40</b><br>';
elemResult.innerHTML += 'Число: <b>20</b><br>';
elemResult.innerHTML += 'Число: <b>10</b><br>';
elemResult.innerHTML += 'Число: <b>0</b><br>';
*/
var twenty;

for (twenty = 100; twenty >= 0; twenty -= 20)
{
	console.log("Число:" + " " + "<b>" + twenty + "</b>" + "<br>" + ";");
}