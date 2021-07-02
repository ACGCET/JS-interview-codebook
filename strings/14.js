
	 //Find Given strings is anagram or not/

 var str = "saravana";
 var fake = "ravanasa";

var one = str.toLowerCase().split('').sort().join();
var two = fake.toLowerCase().split('').sort().join();

 if(one == two)
 {
 	console.log("True");
 }
