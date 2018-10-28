var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function(){
var cents = parseFloat($("cents").value);
if(isNaN(cents) || cents <=0 && cents >=100)
{
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
cents = cents - 25*quarter;
 

var dimes = parseInt(cents/10);
cents = cents - 10*dimes;

var nickel = parseInt(cents/5);
cents = cents - 5*nickel;

}

window.onload = function(){
	$("calculate").onclick = processEntry;
}