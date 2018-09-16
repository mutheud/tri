function finder(){
/*var threesides = []
 threesides.push(parseInt(prompt("enter value for first side")));
threesides.push(parseInt(prompt("enter value for second side")));
threesides.push(parseInt(prompt("enter value for third side")));
*/
 var side1 = threesides[0];
var side2 = threesides[1];
var side3 = threesides[2];

if (side1===side2  &&  side2===side3 && side1===side3){
output.innerHTM=(" It is an Equilateral Triangle")
}
 else if (side1===side2  &&  side1!==side3 || side1===side3  && side1!==side2 || side2===side3  &&  side2!==side1){
output.innerHTML=("It is an Isosceles Triangle")
}
 else if(side1!==side2 && side2!==side3 && side1!==side3){
output.innerHTML=("It is a Scalene Triangle")
}
else {
alert("NOT a triangle")
}
}
