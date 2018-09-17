function finder(){
var side1 = document.getElementById("threesides[0]").value;
var side2 = document.getElementById("threesides[1]").value;
var side3 = document.getElementById("threesides[2]").value;

if(side1===side2 && side2===side3 && side1===side3){
output.innerHTML=("It is an Equilateral Triangle")
}
else if(side1===side2 && side1!==side3 || side1===side3 && side1!==side2 || side2===side3 && side2!==side1){
output.innerHTML=("It is an Isosceles Triangle")
}
else if(side1!==side2 && side2!==side3 && side1!==side3){
output.innerHTML=("It is a Scalene Triangle")
}
else {
alert("NOT a triangle");
}
}
