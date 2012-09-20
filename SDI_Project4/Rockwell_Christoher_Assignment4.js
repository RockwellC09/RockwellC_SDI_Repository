//Christopher Rockwell
//SDI 1209
//Project 4
//alert("JavaScript works!");

var myLib = function() {

	//phone number validation function
	var isPhoneNumber = function(data) {
		var ch1 = data.charAt(3);
		var ch2 = data.charAt(7);
		
		if (ch1 === "-" && ch2 === "-" && data.length == 12){
			return true;
		} else {
			return false;
		}
	};
	
	//email validation function
	var isEmail = function(data) {
		var len = data.length;
		var first = 0;
		var second = 1;
		var count = 0;
		var period = data.length - 4;
		
		//checking each character for the @
		for (i = 0; i < len; i++){
			if (data.substring(first, second) === "@"){
			count++;
			}
			first++;
			second++;
		}
		//checking for the period before the .com .net etc... and making sure
		//only 1 @ symbol if any is present
		if (data.charAt(period) === "." && count == 1){
			return true;
		} else {
			return false;
		}
	
	};
	
	//url validation function
	var isURL = function(data) {
		var check1 = data.substring(0, data.indexOf(":"));
		var check2 = data.substring(data.indexOf(":") + 1, data.indexOf(":") + 2);
		var check3 = data.substring(data.indexOf(":") + 2, data.indexOf(":") + 3);
		
		if (check1 === "http" || check1 === "https" && check2 === "/" && check3 === "/") {
			return true;
		} else {
			return false;
		}
	};
	
	//Title-case function
	var upperCase = function(data) {
		var str = data.split(" ");
		var rest = str[0].substring(1, str[0].length);
		var rest2 = str[1].substring(1, str[1].length);
		var fin = str[0].charAt(0).toUpperCase() + rest.toLowerCase() + " " + str[1].charAt(0).toUpperCase() + rest2.toLowerCase()
		return fin;
	};
	//change string separator function
	var changeSep = function(data, separator) {
		var sep = data.split(" ");
		var toStr = sep.toString();
		var str = toStr.replace(/,/g, separator);
		return str;
	};
	//turn string version number into number function
	var stringNumber = function(data) {
		var num = Number(data);
		return num;
		
	};

	return {
		"isPhoneNumber": isPhoneNumber,
		"isEmail": isEmail,
		"isURL" : isURL,
		"upperCase" : upperCase,
		"changeSep": changeSep,
		"stringNumber": stringNumber 
		
	};

};

var newLib = new myLib();

console.log(newLib.isPhoneNumber("123-456-7891"));
console.log(newLib.isEmail("Rock@gmail.com"));
console.log(newLib.isURL("http://Rockwell.com"));
console.log(newLib.upperCase("chrisTOpher rOCKWell"));
console.log(newLib.changeSep("a b c", "^"));
console.log(newLib.stringNumber("40"));

