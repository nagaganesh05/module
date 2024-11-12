// 11 Electricity bill calculation
const bill = parseInt(prompt("Enter the usage in kwh : "));
if(bill>=0 && bill<=100){
    billAmount = bill*0.10;
    console.log(billAmount);
}
else if(bill>=101 && bill<=200){
    billAmount = bill*0.15;
    console.log(billAmount);
}
else if(bill>200){
    billAmount = bill*0.20;
    console.log(billAmount);
}
else {
    console.log(Invalid);
}

// 12 calculate weekly wages
const hours = parseInt(prompt("Enter the working hours: "));
let wages = parseInt(prompt("Enter the wage per hour: "));
if(hours>40){
    wage = 40*wages + (hours-40)*wages*1.5;
    console.log(`employees weekly wage based on their hours is ${wage}`);
}
else{
    console.log("invalid")
}


// 13 students grade calculation
let subject1 = parseInt(prompt("Enter the marks in subject1: "));
let subject2 = parseInt(prompt("Enter the marks in subject2: "));
let subject3 = parseInt(prompt("Enter the marks in subject3: "));
let avg = (subject1+subject2+subject3)/3;
console.log(avg)
if(avg >=90 && avg <=100){
    console.log("Grade A");
}
else if(avg >=80 && avg <90){
    console.log("Grade B");
}
else if(avg >=70 && avg <80){
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// 14 Warehouse stock update
let stock = parseInt(prompt("Enter the stock of a product: "));
if(stock == 0){
    console.log("out of stock");
}
else if(stock>0 && stock < 10){
    console.log("low stock");
}
else if(stock >=10){
    console.log("In stock");
}
else{
    console.log("Invalid");
}

// 15 Game Score Tracker

let points = parseInt(prompt("Enter the points: "));
if(points == 100){
    console.log(`you have reached ${points} points milestone`);
}
else if(points == 500){
    console.log(`you have reached ${points} points milestone`);
}
else if(points == 1000){
    console.log(`you have reached ${points} points milestone`);
}
else {
    console.log("Invalid");
}