/*
Christopher Rockwell
September 11, 2012
Deliverable 3
*/
//alert("JavaScript works!");
var myName = "Chris";
var cost = [["Amazon",40] , ["GameStop", 45]];
var gameName = "Ghost Recon Future Soldier";
var salePrice = 60;
var chipsCost = 5;
var minSalePrice = 55;
var offer = 55;
var number;
var counter = 0;
var buyers = {
	name: ["Ricky", "Susie", "Blake"],
	gender: ["M", "F", "M"],
	offer: [45, 55, 60],
	miles:[6, 10, 5]

};

function offers(buyersInfo) {
	var count = 0;
	var goodOffer = [];
	for (var i = 0; i < buyersInfo.name.length; i++) {
		console.log(buyersInfo.name[i] + " offered $" + buyersInfo.offer[i] + " and Chris would have to drive " + buyersInfo.miles[i] + " miles.");
	}
	for (var i = 0; i < buyersInfo.name.length; i++) {
		if (buyersInfo.offer[i] < minSalePrice){
			console.log(buyersInfo.name[i] + "'s offer is too low. ");
		} else {
			console.log(buyersInfo.name[i] + " has a solid offer. ");
			goodOffer[count] = i;
			count++; 
		}
	}
	return goodOffer;
};

function coinToss(buyersInfo, gdOffers) {
	console.log("Chris has to choose between " + buyersInfo.name[gdOffers[0]] + " and " + buyersInfo.name[gdOffers[1]] + " to sell the keyboard to. ");
	console.log("Heads for " + buyersInfo.name[gdOffers[0]] + " and Tails for " + buyersInfo.name[gdOffers[1]]);
	console.log("*Coin Tossed*");
	landedOn = Math.floor((Math.random()*2)+1);
    if (landedOn == 1) {
		console.log("\"Heads!\" So the buyer is " + buyersInfo.name[gdOffers[0]] + ".");
		console.log(myName + " sales the keyboard to " + buyersInfo.name[gdOffers[0]] + " and must now figure out where he will by the game. Either buying it online and having to wait to play due to shipping or locally and play immediately.");
		var offer = buyersInfo.offer[gdOffers[0]];
    	return offer;
    } else {
    	console.log("\"Tails!\" So the buyer is " + buyersInfo.name[gdOffers[1]] + ".");
    	console.log(myName + " sales the keyboard to " + buyersInfo.name[gdOffers[1]] + " and must now figure out where he will by the game. Either buying it online and having to wait to play due to shipping or locally and play immediately.");
    	var offer = buyersInfo.offer[gdOffers[1]];
    	return offer;
    }
};

function remainder(array, numberOptions) {
	var leftOver;
	var left = [];
	for (i = 0; i < numberOptions; i++) {
		leftOver = soldFor - array[i][1];
		left[i] = (leftOver);
		counter++;
		if (counter <= numberOptions) {
		console.log("If he buys from " + array[i][0] + " he will have $" + leftOver + " left over for chips.");	
		}
	}
	return left;
};

function buyMethod(number) {
	if (number == 1) {
	return true;
	} else {
	return false;
	}
};

function buyingPrecedure(online) {
	if (online === true) {
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
console.log("He got 3 offers all at once! ");
console.log("While choosing his offer his must keep in mind the distant he has to drive to make the sale because of the high cost of gas.");
var goodOffers = offers(buyers);
console.log("Chris couldn't make up his mind so he chose to flip a coin to determine his buyer. ");
var soldFor = coinToss(buyers, goodOffers);
if (goodOffers.length > 0){
	var remain = remainder(cost, 2);
	remainder(cost, 2);
	var randNumber = Math.floor((Math.random()*2)+1);
	buyOnline = buyMethod(randNumber);
	buyingPrecedure(buyOnline);
	if (buyOnline === true) {
		number = 0;
	} else {
		number = 1;
	}
	numChips(remain[number]);
	console.log("He heads home to eat chips and enjoy his new game.");
} else {
	console.log(myName + " wasn't able to sale his keyboard and can't buy the game at this time.");
}
console.log("The End!");