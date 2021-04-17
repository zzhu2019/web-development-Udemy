$("h1").click(function() {
	$("h1").css("color", "purple");
});

$("input").keydown(function(event) {
	$("h1").text(event.key);
})