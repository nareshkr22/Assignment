var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function(){
var cents = parseInt($("cents").value);
if(isNaN(cents) || cents <=0 || cents >=100)
{

	console.log('e');
	alert("Sorry");
}
else
{
	makeChange(cents)
}
}

function makeChange(cents)
{
var quarter = parseInt(cents/25);
console.log("quater" + quarter) ;
cents = cents - 25*quarter;
 



var dimes = parseInt(cents/10);

console.log("dimes" + dimes) ;
cents = cents - 10*dimes;

var nickel = parseInt(cents/5);
console.log("nickel" + nickel);

cents = cents - 5*nickel;
console.log("cents" + cents);




}

window.onload = function(){
	$("calculate").onclick = processEntry;
}