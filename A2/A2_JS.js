var x = "";

function getExpression(btn){
	var temp = document.getElementById(btn).value;
	console.log("Result:  "+x);
	console.log(x);
}

function clearAll(){
	x = "";
	console.log("x: "+x);
}

function backspace(){
  if (x.length > 0){
    x = x.substring(0, x.length-1); //remove the last character in input
  }
  console.log("Backspace:  "+x);
  console.log(x);
}

function compute(){
	var total = eval(x);
	console.log("Computer value: " + total);
	x = total;
}


