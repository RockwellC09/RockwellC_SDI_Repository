/*
Christopher Rockwell
September 11, 2012
Deliverable 3
*/
//alert("JavaScript works!");
var myName = "Chris";
var cost = [["Amazon",40] , ["GameStop", 45]];
var accept;
var gameName = "Ghost Recon Future Soldier";
var salePrice = 60;
var chipsCost = 5;
var minSalePrice = 55;
var buyMethod = "online";
var number;
var counter = 0;
var buyer = {
	name: "Ricky",
	gender: "M",
	offer: 45,
	kid: {
		name: "Emily"},
	dogNames: ["Oreo", "Dog"],
	flexible: true,
	getName: function(){
		return this.name;
	},
	intro: function(name){
		if (this.gender === "m" || this.gender === "M"){
			var greetGen = "Mr.";
		} else {
			var greetGen = "Ms.";
		}
		var greeting = "He said, \"Hello " + greetGen + " " + name + "!\" *Hand Shake* ";
		return greeting;
	},
	offered: function(name, amount){
		if (this.offer < minSalePrice) {
			var diff = minSalePrice - amount;
			console.log("He said, \"Sorry " + name + " your offer is $" + diff + " too low.\"");
			return false;
		} else {
			console.log("He said, \"Great offer " + name + ", lets do business!\"");
			return true;
		}	
	},
	outputNames: function(){
		var names = this.kid.name + " and my 2 dogs " + this.dogNames[0] + " and " + this.dogNames[1] + ".\""; 
		return names;
	},
	added: function(amount){
		if (this.flexable === true){
			var add = Math.floor((Math.random()*10)+8);
		} else {
			var add = Math.floor((Math.random()*7)+5);
		}
		return amount + add;
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
	while (moneyLeft > 4) {
		moneyLeft = moneyLeft - 5;
		chips++;
	}
	console.log(myName + " was able to purchase " + chips + " bags of chips with his remaining money.");
	return chips;
};

var offer = buyer.offer;
console.log(myName + " is trying to buy " + gameName + " for his Xbox 360. He also want to buy a least 2 bags of chips, which cost $" + chipsCost + " a bag."); 
console.log("He must first sale his Casio Keyboard on Craigslist for $"  + salePrice + " and will take no less than $" + minSalePrice + " for it." );
console.log("Chris got an offer from many offers but decided to meet with a buyer trying to purchase the keyboard for his daughter");
console.log("He goes into this transaction planing to take whatever the buyer offers because of him buying it for his daughter");
var buyerName = buyer.getName();
console.log(buyer.intro(buyerName));
console.log(buyerName + " showed up with his daughter and 2 dogs.");
var names = buyer.outputNames();
console.log(myName + " asked, \"What's your daughter and 2 dogs name?\"");
console.log("He replied, \"" + names);
console.log(buyerName + " offered $" + buyer.offer + ".");
var goodOffer = buyer.offered(buyerName, offer);
if (goodOffer === true){
	console.log(myName + " sales the keyboard and must now figure out where he will by the game. Either buying it online and having to wait to play due to shipping or locally and play immediately.");
} else {
	console.log("Chris asked the buyer for between $5 and $10 more and they have a deal ");
	var newOffer = buyer.added(offer);
	var dif = newOffer - offer;
	var offer = newOffer;
	console.log(buyerName + " added $" + dif + " to his offer which make his offer $" + newOffer + ". "); 
}

var remain = remainder(cost, 2);
	remainder(cost, 2);
	buyingPrecedure(buyMethod);
	if (buyMethod === "online") {
		number = 0;
	} else {
		number = 1;
	}
	numChips(remain[number]);
	console.log("He heads home to eat chips and enjoy his new game.");
console.log("The End!");