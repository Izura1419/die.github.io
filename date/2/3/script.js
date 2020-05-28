let name = localStorage.getItem("name");
let user = document.querySelector(".name");
user.innerHTML = name + ",";

//самое интересное

function random(min,max) {
	let a = Math.floor(Math.random() * (max - min + 1)) + min;
	return a;
}

//готово

let day = random(1,28);
let days =  document.querySelector(".day");
days.innerHTML  = day + " ";

let month = random(1,12);
let months =  document.querySelector(".month");

if(month == 1){
	months.innerHTML = "декабря";
}
if(month == 2){
	months.innerHTML = "января";
}
if(month == 3){
	months.innerHTML = "февраля";
}
if(month == 4){
	months.innerHTML = "марта";
}
if(month == 5){
	months.innerHTML = "апреля";
}
if(month == 6){
	months.innerHTML = "мая";
}
if(month == 7){
	months.innerHTML = "июня";
}
if(month == 8){
	months.innerHTML = "июля";
}
if(month == 9){
	months.innerHTML = "августа";
}
if(month == 10){
	months.innerHTML = "сентября";
}
if(month == 11){
	months.innerHTML = "октября";
}
if(month == 12){
	months.innerHTML = "ноября";
}

let year = random(2020,2100);
let years = document.querySelector(".year");
years.innerHTML = year + " года";