/*
*	Niroojen Thambimuthu 10153928
*	Seng513 A2 - JavaScript file
*	Feb 15, 2019
*	
*	A2_JS.js
*/


// Variables declaration
var x = "";
var total = "";
var ansTemp = "";
var loop = false;
var error = false;
var ans = false;
var operations = ["/", "*", "+", "-"];


/*
*	Function when user clicks numbers and operands button
*/
function getExpression(btn){
	var temp = document.getElementById(btn).value;
	var ops = operations.includes(temp);
	
	// Error reset
	if (error === true){
		clearAll();
		error = false;
	}
	
	// Previously computed value exist
	if (loop === true && x !== ""){
		// Clicked button is an operand, reuse previous value
		if (ops === true){
			x = x + temp;
			ansTemp = "Ans" + temp;
			document.getElementById("expression").innerHTML = "Ans:" + total;
			ans = true;
		}
		// Else reset and replace computed value
		else{
			clearAll();
			x = temp;
		}
		loop = false;
	}
	// No previously computed value
	else{
		// When user enters operands before numbers
		if (x === "" && ((ops === true) || ( temp === "."))){
			x = 0 + temp;
		}
		// Store user click inputs into string
		else{
			if (ans === true){
				ansTemp = ansTemp + temp;
			}
			x = x + temp;
		}
	}
	// call function for Print button click output
	output();
}


/*
*	Function to compute and output equation 
*/
function compute(){
	// If computation is valid
	try{
		// When user computes nothing
		if (x === ""){
			total = eval("0");
		}
		// Computes expression string
		else{
			total = eval(x);
		}
		// Output final answer, float up to 5 decimal point and trailing zeros are removed
		document.getElementById("calcBox").innerHTML = "Ans:" + total.toFixed(2);
		document.getElementById("expression").innerHTML = x;
		x = total;
		loop = true;
	}
	// Error catching for invalid computation
	catch(err){
		document.getElementById("expression").innerHTML = x;
		document.getElementById("calcBox").innerHTML = "Error!!!";
		error = true;
	}
}


/*
*	Function to clear calculator
*/
function clearAll(){
	x = "";
	total = "";
	ansTemp = "";
	document.getElementById("expression").innerHTML = 0;
	document.getElementById("calcBox").innerHTML = 0;
	loop = false;
	ans = false;
}


/*
*	Function button click output
*/
function output(){
	// If previously computed
	if(ans === true){
		document.getElementById("calcBox").innerHTML = ansTemp;

	}
	// new user input 
	else{
		document.getElementById("calcBox").innerHTML = x;
	}
}


/*
*	Function to backspace
*/
function backspace(){
	// For previously computed expression
	if(ans === true){ 
		if (ansTemp.length > 3){
			ansTemp = ansTemp.substring(0, ansTemp.length-1);
		}
		if (x.length > total.toString().length){
			x = x.substring(0, x.length-1);
		}
	}
	// For new user expression
	else{
		if (x.length > 0){
			x = x.substring(0, x.length-1);
		}
	}
	// cal function for Print button click output
	output();
}