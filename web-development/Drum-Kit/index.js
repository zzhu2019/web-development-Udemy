// find the button and add the event lisenter to the button
var buttons = document.querySelectorAll(".drum");

// Detecting Button Press
for(var i=0; i<buttons.length; ++i) {
	buttons[i].addEventListener("click", function() {
		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		buttonAmination(buttonInnerHTML);
	});
}

// for(var i=0; i<buttons.length; ++i) {
// 	buttons[i].addEventListener("click", function(event) {
// 		sound(event);
// 	});
// }

// Detecting key press
document.addEventListener("keydown", function(event) {
	makeSound(event.key);
	buttonAmination(event.key);
});

// function sound(event) {
// 	console.log(event);
// 	var tomn1 = new Audio("sounds/tom-1.mp3");
// 	tomn1.play();
// }


function makeSound(key) {
	switch(key) {
		case "w":
			var tomn1 = new Audio("sounds/tom-1.mp3");
			tomn1.play();
			break;
		case "a":
			var tomn2 = new Audio("sounds/tom-2.mp3");
			tomn2.play();
			break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "l":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;
		default:
			console.log(key);
	}

	// this.style.color = "white";
}


function buttonAmination(key) {
	var activeButton = document.querySelector("."+key);

	activeButton.classList.add("pressed");

	setTimeout(function() {
		activeButton.classList.remove("pressed");
	}, 100);
}


// objects explanation

// var housekeeper = {
// 	name: "Amyd",
// 	age: 25
// }

// function HouseKeeper(name, age) {
// 	this.name = name,
// 	this.age = age
// }

// var hk1 = new HouseKeeper("Elaine", 28);