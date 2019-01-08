var total = 0;

// cycle for printing 15 times "result"
for (var i = 0; i < 15; i++)
{	
	// init first and second numbers
	var first = Math.floor((Math.random() * 6) + 1);
	var second = Math.floor((Math.random() * 6) + 1);

	total += (first + second);

	if (i === 8 || i === 13)
	{
		continue;
	}

	var str = "Первая кость: " + first + " " + "Вторая кость: " + second + "<br>";
	document.getElementById("result").innerHTML += str; 
	
	if (first === second)
	{
		document.getElementById("result").innerHTML += "Выпал дубль. Число" + " " + first + "<br>";
	} 

	if(((first < 3) && (second > 4)) || ((second < 3) && (first > 4)))
	{
		document.getElementById("result").innerHTML += "Большой разброс между костями. Разница составляет " + " " + Math.abs(second - first) + "<br>";
	}
}

(total > 100) ? (document.getElementById("result").innerHTML  += "<hr>Победа, вы набрали"  + " " + total + " " + "очков") : (document.getElementById("result").innerHTML += "<hr>Вы проиграли, у вас" + " "+ total + " " + " очков");