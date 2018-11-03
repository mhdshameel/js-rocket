var timer = null;
var countDownNumber;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	
	countDownNumber = 10;
	clearInterval(timer);
	
	if(state == 2) {
		timer = setInterval(function () {
			document.getElementById("countdown").innerHTML = countDownNumber;
			countDownNumber = countDownNumber -1;
			if(countDownNumber <= 0) {
				changeState(3);
			}
		}, 500 );
	} else if(state == 3){
		//lift off state
		var success = setTimeout(function () {
			var randomNum = Math.round(Math.random() * 10);
		
			console.log("randomNum:", randomNum);
			
			if(randomNum < 7) {
				//success case
				changeState(4);
			} else {
				//failure case
				changeState(5);
			}
		}, 2000);
	}
}