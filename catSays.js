var catSays = function(max) {
	var catMessage = "";
	for (var i; i <= max; i++) {
		catMessage += "meow ";
	}
	return catMessage;
}

console.log(catSays(2))