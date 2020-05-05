var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("rc");

//background: linear-gradient(to right, #ff0000, #eeff00);
let temp = "background: linear-gradient(to right, #000062, #d9d900);";

// //My Method
// let hex1 = temp.substr(38,7);
// let hex2 = temp.substr(47,7)
// color1.value = hex1;
// color2.value = hex2;

// //Susanne's Method
// let hex1 = temp.split("#")[1];
// let hex2 = temp.split("#")[2];
// color1.value = "#"+hex1.slice(0,6);
// color2.value = "#"+hex2.slice(0,6);

//
setGradient();
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomColor);
//rc.addEventListener("click", randomColor);

function randomColor(){
    let firstColor = createColor(); 
	let secondColor = createColor();
	console.log(createColor())
    body.style.background = 
	"linear-gradient(to right, " 
	+ firstColor[0]
	+ ", " 
	+ secondColor[1]
	+ ")";
	css.textContent = body.style.background + ";";
	color1.value = firstColor[1];
	color2.value = secondColor[1];

}

function createColor(){
	let rgb = [];
	let hex = [];
    for(let i = 0; i < 3; i++){
		let value = Math.floor(Math.random() * 256);
		rgb.push(value);
		let hexValue = value.toString(16);
		if(hexValue.length < 2){
			hexValue = "0" + hexValue;
		}
		hex.push(hexValue);
		
	}
	let rgbOutput = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
	let hexOutput = "#" + hex[0] + hex[1] + hex[2];
	let outputArray = [rgbOutput, hexOutput];console.log(hexOutput)
	return outputArray;
}



