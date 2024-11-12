// 16 calculate train fare

function trainFare(distance, travelClass) {
    if (travelClass === "economy") {
        fare = distance * 12;
        console.log(fare);
    }
    else if (travelClass === "business") {
        fare = distance * 20;
        console.log(fare);
    }
}
let distance = parseInt(prompt("Enter the distance to be travelled: "));
let travelClass = prompt("Enter the class: ");
trainFare(distance, travelClass)


// 17 loan eligibility check

function loanEligibiltyCheck(monthlyIncome, creditScore) {
    if (monthlyIncome >= 200000 && creditScore >= 780) {
        console.log("Eligible for loan");
    }
    else {
        console.log("Not eligible for loan");
    }
}
let monthlyIncome = parseInt(prompt("Enter the monthly income: "));
let creditScore = parseInt(prompt("Enter your credit score: "));
loanEligibiltyCheck(monthlyIncome, creditScore)


// 18 Movie ticket price calculation

function movieTicketPrice(price, category) {
    if (category === "student") {
        discount = price * 0.1;
        ticketPrice = price - discount;
    }
    else if (category === "seniors") {
        discount = price * 0.2;
        ticketPrice = price - discount;
    }
    console.log(`ticket price for ${category} is ${ticketPrice}`);
}
let price = parseInt(prompt("Enter the price of ticket: "));
let category = prompt("Enter the category: ");
movieTicketPrice(price, category)

// 19 Game level Up

function gameLevelUp(points){
    if(points == 1000){
        console.log("Enough points to level up");
    }
    else{
        console.log("not have enough points");
    }
}
let points = parseInt(prompt("Enter the points: "));
gameLevelUp(points)

// 20 fuel cost estimation

function fuelCostEstimation(distanceTravel,fuelEfficiency,fuelCost){
   const fuelConsumed = distanceTravel/fuelEfficiency;
   totalCost = fuelConsumed * fuelCost;
   console.log(`cost for fuel is ${totalCost}`);
}
let distanceTravel = parseInt(prompt("Enter the distance to be travelled(in kilometers): "));
let fuelEfficiency = parseInt(prompt("Enter the fuel efficiency for the vehcile(in kilometers per litre): "));
let fuelCost = parseInt(prompt("Enter the fuel cost per litre: "));
fuelCostEstimation(distanceTravel,fuelEfficiency,fuelCost)