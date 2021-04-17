function anotherEventListener(typeOfEvent, callback) {
	// Detect Event Code...
	// An event happens
	var eventThatHappented = {
		eventType: "keypress",
		key: "p",
		durationOfKeyPress: 2
	}

	// Check if the event is the target event
	if(typeOfEvent === eventThatHappented) {
		// If so, call the callback function
		callback(eventThatHappented);
	}
}


//					   eventOfType, callback
anotherEventListener("keypress", function(event) {
	console.log(event);
});

// Also, keep in mind that if the callback function is predefined,
// you cannot refer the function as func(), as this will trigger the function
// IMMEDIATELY when the code is interpreted, the program will treat this function
// as a direct call rather than a callback function. If some operations needed, please
// USE ANONYMOUS FUNCTION HERE.