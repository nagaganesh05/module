// 6 Account balance status
const bankBalance = parseInt(prompt("Enter the balance: "));
if(bankBalance<100){
    console.log("Low Balance");
}
else if(bankBalance>=100 && bankBalance<=500){
    console.log("Healthy");
}
else if(bankBalance>500){
    console.log("High Balance");
}
else{
    console.log("Invalid");
}

// 7  Flight price calculator
const price = parseInt(prompt("Enter the price: "));
const classes = prompt("Enter the class: ");
if(classes === "advance") {
    discount = price*0.05;
    totalPrice = price - discount;
    console.log(`Ticket cost if booked over 30 days in advance ${totalPrice}`);
}
else if(classes === "business"){
     discount = price*0.1;
    totalPrice = price - discount;
    console.log(`Ticket cost for business class ${totalPrice}`);
}
else if(classes === "premium"){
    discount = price*0.15;
    totalPrice = price - discount;
    console.log(`Ticket cost for premium members ${totalPrice}`);
}
else{
    console.log("Invalid");
}


// 8  voting eligibility
let age = parseInt(prompt("Enter the age: "));
if(age>=18){
    console.log("Eligibile for vote");
}
else {
    console.log("not eligible for vote");
}

// 9  shopping bill calculation
let items = [];
let totalItems = parseInt(prompt("Enter the no.of items: "));
for (i = 1; i <= totalItems; i++) {
    price = parseInt(prompt(`Enter the price of item ${i}: `));
    items.push(price);
}
sum = 0;
for (j = 0; j < items.length; j++) {
    sum += items[j];
}
console.log(`Total bill of shopping is ${sum}`);



// 10 traffic light simulation
let lightColor = prompt("Enter the light color: ");
if(lightColor === "red"){
    console.log("STOP");
}
else if(lightColor === "yellow"){
    console.log("SLOW DOWN");
}
else if(lightColor === "green"){
    console.log("GO");
}
else{
    console.log("Enter correct light color")
}


// reverse integer
let num = parseInt(prompt("Enter the number: "));
rev = 0;
while(num>0){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num/10);
}
console.log(rev)


