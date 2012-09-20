/*
Christopher Rockwell
August 28, 2012
Deliverable 1
*/
//alert("JavaScript works!");

var myName = "Chris";
var gameName = "Ghost Recon Future Soldier";
var salePrice = 60;
var minSalePrice = 50;
var offer = 55;
var buyLocal = true;
var onlinePrice = 40;
var localPrice = 45;
var buyerGender = "m";
var remainder;
var diff = localPrice - onlinePrice;

console.log(myName + " is trying to buy " + gameName + " for his Xbox 360. "); 
console.log("He must first sale his Casio Keyboard on Craigslist for $"  + salePrice + " and will take no less than $" + minSalePrice + " for it." );
console.log("He meets the buyer. The buyer offers him $" + offer + ".");

if (offer >= minSalePrice){
	var sold = true;
	console.log("He said, \"We have a deal!\" *Hand Shake* ");
	console.log("Now he must decide whether to buy the game online paying less but having to wait for it to arrive, or buying it at the local GameStop store and pay more but get the game immediately.");

		if (buyLocal === true) {
			remainder = offer - localPrice;
			console.log("He chose to pay an extra $" + diff + " and purchase the game at the local GameStop for $" + localPrice + ".");
			console.log("He has $" + remainder + " left to buy some snacks and head home to enjoy his new game!");
		} else {
			remainder = offer = onlinePrice;
			console.log("He chose to save $" + diff + " and purchase the game online for $" + onlinePrice + ".");
			console.log("He has $" + remainder + " left to buy some snacks and head home to enjoy his new game!");
		}
} else {
	var sold = false;
	if (buyerGender === "m"){
		console.log("He said \"Sorry Sir, your offer is to low.\" ");
	} else {
		console.log("He said \"Sorry Ma'am, your offer is to low.\" ");
	}
	console.log("He was not able to sale the keyboard and didn't purchase the game.");
}
console.log("THE END!");
