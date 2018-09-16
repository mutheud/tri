function finder(){
var threesides = []
 threesides.push(parseInt());
threesides.push(parseInt());
threesides.push(parseInt());

 var side1 = threesides[0];
var side2 = threesides[1];
var side3 = threesides[2];

if (side1===side2  &&  side2===side3 && side1===side3){
alert(" It is an Equilateral Triangle")
}
 else if (side1===side2  &&  side1!==side3 || side1===side3  && side1!==side2 || side2===side3  &&  side2!==side1){
alert("It is an Isosceles Triangle")
}
 else if(side1!==side2 && side2!==side3 && side1!==side3){
alert("It is a Scalene Triangle")
}
else {
alert("NOT a triangle")
}
}
