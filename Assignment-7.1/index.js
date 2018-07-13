// Sample input 
var num1 = -8;
var num2 = 12.5;
var num3 = -6.769;
var num4 = 0;
var num5 = -1;

// if-else-if statements to find the greatest among the 5 given integers
if (num1>num2 && num1>num3 && num1>num4 && num1>num5) {
    console.log(`The Greatest integer from given set of numbers is ${num1}`);
}
else if (num2>num1 && num2>num3 && num2>num4 && num2>num5) {
    console.log(`The Greatest integer from given set of numbers is ${num2}`);
}
else if (num3>num1 && num3>num2 && num3>num4 && num3>num5) {
    console.log(`The Greatest integer from given set of numbers is ${num3}`);
}
else if (num4>num1 && num4>num3 && num4>num2 && num4>num5) {
    console.log(`The Greatest integer from given set of numbers is ${num4}`);
}
else {
    console.log(`The Greatest integer from given set of numbers is ${num5}`);
}
