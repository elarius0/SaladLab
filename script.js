// //condition ? expr1 : expr2;

// function isUserValid(bool) {
// 	return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access Denied";

// var automatedAnswer =
// 	"Your account # is " + ( isUserValid(false) ? "1234" : "not available");

function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
				whatHappens = "You encounter a monster";
				break;
		case "back":
				whatHappens = "tsm";
				break;
		case "right":
				whatHappens = "d0g";
				break;
		case "left":
				whatHappens = "lul";
				break;
			default:
				whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}