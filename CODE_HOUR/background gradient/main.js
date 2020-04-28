let color1 = document.querySelector(".color-one");
let color2 = document.querySelector(".color-two");

// Paragraph for displaying values of background gradient property 
let paragraph = document.createElement("p");
document.body.appendChild(paragraph);


color1.addEventListener("input", bgGradient);
color2.addEventListener("input", bgGradient);


function bgGradient(){
   document.body.style.background = "linear-gradient(to right, " + color1.value + " , " +color2.value + " )" ;
   paragraph.textContent = document.body.style.background + ";";
}

