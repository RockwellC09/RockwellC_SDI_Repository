//alert("JavaScript works!");

var myName = "Chris";
var cost = [["Amazon",40] , ["GameStop", 45]];
var accept;
var gameName = "Ghost Recon Future Soldier";
var salePrice = 60;
var chipsCost = 5;
var minSalePrice = 55;
var offer = 55;
var buyMethod = "online";
var number;
var counter = 0;

function intro(name,gender) {
	if (gender === "m"){
		var greetGen = "Mr.";
	} else {
		var greetGen = "Ms.";
	}
	var greeting = "Hello " + greetGen + " " + name + "! *Hand Shake* ";
	return greeting;
};

function checkOffer(name, amount) {
	if (amount < minSalePrice){
		console.log("Sorry " + name + " your offer is too low. ");
		return false;
	} else {
		console.log("Great offer " + name + ", lets do business!");
		return true;
	}
};

function remainder(array, numberOptions) {
	var leftOver;
	var left = [];
	for (i = 0; i < numberOptions; i++) {
		leftOver = offer - array[i][1];
		left[i] = (leftOver);
		counter++;
		if (counter <= numberOptions) {
		console.log("If he buys from " + array[i][0] + " he will have $" + leftOver + " left over for chips.");	
		}
	}
	return left;
};

function buyingPrecedure(method) {
	if (method === "online") {
		console.log(myName + " decided to purchase the game online from Amazon which saves him money but prolongs his gameplay due to shipping.");
	} else {
		console.log(myName + " decided to purchase the game locally from GameStop which cost more but enables him to start playing immediately.")
	}
};

function numChips(moneyLeft) {
	var chips = 0;
	while (moneyLeft > 0) {
		moneyLeft = moneyLeft - 5;
		chips++;
	}
	console.log(myName + " was able to purchase " + chips + " bags of chips with his remaining money.");
	return chips;
};

console.log(myName + " is trying to buy " + gameName + " for his Xbox 360. He also want to buy a least 2 bags of chips, which cost $" + chipsCost + " a bag."); 
console.log("He must first sale his Casio Keyboard on Craigslist for $"  + salePrice + " and will take no less than $" + minSalePrice + " for it." );
console.log("He meets with the first buyer.");
console.log(intro("Ricky", "m"));
var goodOffer = checkOffer("Ricky", offer);
if (goodOffer === true){
	console.log(myName + " sales the keyboard and must now figure out where he will by the game. Either buying it online and having to wait to play due to shipping or locally and play immediately.");
	var remain = remainder(cost, 2);
	remainder(cost, 2);
	buyingPrecedure(buyMethod);
	if (buyMethod === "online") {
		number = 0;
	} else {
		number = 1;
	}
	numChips(remain[number]);
} else {
	console.log(myName + " wasn't able to sale his keyboard and can't buy the game at this time.");
}