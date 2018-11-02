var doCoolStuff = function () {
	var coolObj = document.getElementById('cool')
	//change className
	if(coolObj.className == 'cool')
	{
		coolObj.className = 'cool red';
		document.getElementById('cool2').className = 'cool red';
	}
	else
	{
		coolObj.className = 'cool';
		document.getElementById('cool2').className = 'cool';
	}
}

var sayMyName = function (name) {
	alert("My name is : " + name);
}

var car = {
	color: 'blue',
	make: 'VW',
	model: 'Polo',
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	isTurnedOn: false,
	turnOn : function () {
		this.isTurnedOn = true;
	},
	turnOff : function () {
		this.isTurnedOn = false;
	},
	switchCar : function (isOn) {
		console.log('car is ' + isOn);
		if (isOn == true)
			this.isTurnedOn = true;
		else
			this.isTurnedOn = false;
	},
	fly : function (){
		alert('flying car');
	}
};
console.log("hello dudes!");