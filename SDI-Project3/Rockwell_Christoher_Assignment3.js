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
var age = 21;
var married = true;
var counter = 0;

//JSON data
var chipFlav = {
	flav1: "Nacho Cheese",
	flav2: "Enchilada",
	flav3: "Cool Ranch"
};

//buyer object
var buyer = {
	name: "Ricky",
	gender: "M",
	add: 0,
	offer: 45,
	kid: {
		name: "Emily"},
	dogNames: ["Oreo", "Dog"],
	flexible: true,
	//method accessor that returns the name for use outside the object
	getName: function(){
		return this.name;
	},
	//how Chris greets the buyer Mr. for a male or Ms. for a female
	intro: function(name){
		if (this.gender === "m" || this.gender === "M"){
			if (age >= 21) {
				var greetGen = " Mr.";
			} else { 
				var greetGen = " ";
			}
		} else {
			if (this.gender === "f" || this.gender === "F") {
				if (married === true){
					var greetGen = " Mrs.";
				} else {
					var greetGen = " Ms.";
				}
			} else {var greetGen = " alien";}
		}
		console.log("He said, \"Hello" + greetGen + name + "!\" *Hand Shake* ");
	},
	//check to see if the offer meets what Chris is asking for and outputting Chris's response to the offer
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
	//outputting the names of the buyers daughter and 2 dogs
	outputNames: function(){
		var names = this.kid.name + " and my 2 dogs " + this.dogNames[0] + " and " + this.dogNames[1] + ".\""; 
		return names;
	},
	//calculating how much the buyer is willing to add to his initial offer
	added: function(){
		if (this.flexable === true){
			this.add = Math.floor((Math.random()*10)+8);
		} else {
			this.add = Math.floor((Math.random()*7)+5);
		}
	}
};
//getting the remaining amount after Chris purchases the game
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
//Chris's method of paying and the output that goes with that method
function buyingProcedure(method) {
	if (method === "online") {
		console.log(myName + " decided to purchase the game online from Amazon which saves him money but prolongs his gameplay due to shipping.");
	} else {
		console.log(myName + " decided to purchase the game locally from GameStop which cost more but enables him to start playing immediately.")
	}
};
//calculating the number of bags of chips Chris can buy with his remaining funds
function numChips(moneyLeft) {
	var chips = 0;
	while (moneyLeft > 4) {
		moneyLeft = moneyLeft - 5;
		chips++;
	}
	console.log(myName + " was able to purchase " + chips + " bags of chips with his remaining money.");
	return chips;
};

//determine chip flavor
function chipObj(flavors){
	//random number that determines the chip flavor
	chipRand = Math.floor((Math.random()* 3)+1);
	if (chipRand == 1) {
		var chipFlavor = flavors.flav1;
	} else if (chipRand == 2) {
		var chipFlavor = flavors.flav2;
	} else {
		var chipFlavor = flavors.flav3;
	}
	console.log("He heads home to eat his " + chipFlavor + " Doritos and enjoy his new game.");
	return flavors;
};

var offer = buyer.offer;
//into to the store and the plot
console.log(myName + " is trying to buy " + gameName + " for his Xbox 360. He also want to buy a least 2 bags of chips, which cost $" + chipsCost + " a bag."); 
console.log("He must first sale his Casio Keyboard on Craigslist for $"  + salePrice + " and will take no less than $" + minSalePrice + " for it." );
console.log("Chris got an offer from many offers but decided to meet with a buyer trying to purchase the keyboard for his daughter");
console.log("He goes into this transaction planing to take whatever the buyer offers because of him buying it for his daughter");
var buyerName = buyer.getName();
buyer.intro(buyerName);
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
	buyer.added(offer);
	var newOffer = buyer.add + offer;
	var dif = newOffer - offer;
	var offer = newOffer;
	console.log(buyerName + " added $" + dif + " to his offer which make his offer $" + newOffer + ". "); 
}

var remain = remainder(cost, 2);
	remainder(cost, 2);
	buyingProcedure(buyMethod);
	if (buyMethod === "online") {
		number = 0;
	} else {
		number = 1;
	}
	numChips(remain[number]);
	var flavs = chipObj(chipFlav);
	console.log(myName + "'s favorite chips are " + flavs.flav1 + ", " + flavs.flav2 + ", and " + flavs.flav3 + " flavored Doritos.");
console.log("The End!");