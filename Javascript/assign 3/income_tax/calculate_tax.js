"use strict";
var $ = function (id) {
    return document.getElementById(id);
};



var processEntry = function(){
var income = parseInt($("income").value);
if(isNaN(income))
{
 
	alert("Sorry");
}
else
{
	get_tax(income);
}

}

function get_tax(income)
{
	var tax = 0;
	if(income >=0 && income < 9275)
	{
		tax = 0 + (0.10 * income)
	}
	else if(income >=9275 && income < 37650)
	{
		tax = 927.5 + (0.15 * (income - 9275));
	}
	else if(income >=37650 && income < 91150)
	{
		tax = 5183.5 + (0.25 * (income - 37650));
	}
	else if(income >=91150 && income < 190150)
	{
		tax = 18558.75 + (0.28 * (income - 91150));
	}
	else if(income >=190150 && income < 413350)
	{
		tax = 46278.75 + (0.33 * (income - 190150));
	}
	else if(income >=413350 && income < 415050)
	{
		tax = 119934.75 + (0.35 * (income - 413350));
	}
	else if(income >=415050)
	{
		tax = 120529.75 + (0.396 * (income - 415050));
	}
	else
	{


	}


console.log(tax);
}
window.onload = function () {
    $("calculate").onclick = processEntry;
};