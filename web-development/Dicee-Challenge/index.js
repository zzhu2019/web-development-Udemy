var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// changeDice(".img1", randomNumber1);
// changeDice(".img2", randomNumber2);

if(randomNumber1 > randomNumber2) {
	document.querySelector("div h1").textContent = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
	document.querySelector("div h1").textContent = "Player 2 Wins!";
} else {
	document.querySelector("div h1").textContent = "Draw!";
}


function changeDice(target, generatedNumber) {
	switch(generatedNumber) {
		case 1:
			document.querySelector(target).setAttribute("src", "images/dice1.png");
			break;
		case 2:
			document.querySelector(target).setAttribute("src", "images/dice2.png");
		    break;
		case 3:
			document.querySelector(target).setAttribute("src", "images/dice3.png");
			break;
		case 4:
			document.querySelector(target).setAttribute("src", "images/dice4.png");
			break;
		case 5:
			document.querySelector(target).setAttribute("src", "images/dice5.png");
			break;
		case 6:
			document.querySelector(target).setAttribute("src", "images/dice6.png");
			break;
		default:
			alert("Dice is broken :/");
			break;
	}
}