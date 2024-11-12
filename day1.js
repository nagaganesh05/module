

// 1 Employee Shift Check

let startTime = parseInt(prompt("Enter the start time: "));
let endTime = parseInt(prompt("Enter the end time: "));
if (startTime >= 10 && endTime <= 6) {
    console.log("Night Shift");
}
else {
    console.log("Day Shift");
}



// 2 Temperature Advisory

let temperature = parseInt(prompt("Enter the temperature: "))
if (temperature >= 25) {
    console.log("Hot");
}
else if (temperature >= 10 && temperature < 25) {
    console.log("Moderate");
}
else if (temperature < 10) {
    console.log("Cold");
}


// 3 Discount Calculator


let bill = parseInt(prompt("Enter the bill amount: "));
if (bill >= 100 && bill < 200) {
    discount = bill * 0.1;
    console.log(`discount amount ${discount}`);
}
else if (bill >= 200) {
    discount = bill * 0.2;
    console.log(`discount amount ${discount}`);
}
else {
    console.log("invalid")
}

// 4 Elevator Capacity Check

let weight = [];
let people = parseInt(prompt("Enter the no.of persons: "));
for (i = 1; i <= people; i++) {
    w = parseInt(prompt(`Enter the weight of person ${i}: `));
    weight.push(w);
}
console.log(weight);
sum = 0;
for (j = 0; j < weight.length; j++) {
    sum += weight[j];
}
if (sum > 500) {
    console.log("OverLoaded");
}
else {
    console.log("Not overloaded")
}

// 5 E-commerce Order Validity

let items = parseInt(prompt("Enter the no of items: "));
if (items < 5) {
    console.log("Invalid Order")
}
else if (items >= 5 && items <= 10) {
    console.log("Standard Order")
}
else if (items > 10) {
    console.log("Bulk Order");
}
else {
    console.log("Invalid");
}


// roman to integer
function value(r) {
    if (r === 'I') return 1;
    if (r === 'V') return 5;
    if (r === 'X') return 10;
    if (r === 'L') return 50;
    if (r === 'C') return 100;
    if (r === 'D') return 500;
    if (r === 'M') return 1000;
    return -1;
}
let str = "XIX";

var num = value(str.charAt(0));
var pre, curr;


for (var i = 1; i < str.length; i++) {
    curr = value(str.charAt(i));
    pre = value(str.charAt(i - 1));
    if (curr <= pre) {
        num = num + curr;

    }
    else {
        num = num - pre * 2 + curr;
    }
}
console.log(num);




// palindrome number


let number = parseInt(prompt("Enter the number: "));
let num = number;
let reverse = 0;
while(number>0){
    rem = number%10;
    reverse = reverse * 10 + rem;
    number = Math.floor(number/10); 
     
}
  console.log(reverse);
if(num ==  reverse){
    console.log("is palindrome");
}
else{
    console.log("not palindrome")
}
