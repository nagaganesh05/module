

// 32 Food Court Bill Calculation

function foodCourtBill(subTotal,taxRate,serviceRate){
     let tax = subTotal*(taxRate/100);
     let serviceCharge = subTotal*(serviceRate/100);
     let totalBill = subTotal + tax + serviceCharge;
     return `total bill amount is ${totalBill}`;
}
let subTotal = parseInt(prompt("Enter the bill amount: "));
let taxRate = parseInt(prompt("Enter the tax rate: "));
let serviceRate = parseInt(prompt("Enter the service rate: "));
console.log(foodCourtBill(subTotal,taxRate,serviceRate))









// 33 Calculate Simple Interest


function compoundInterest(){
    const interest = (principal*rate*time)/100;
    return interest;
}
let principal = parseInt(prompt("Enter the principal amount: "));
let rate = parseInt(prompt("Enter the Interest rate: "));
let time = parseInt(prompt("Enter the time: "));
console.log(compoundInterest())


// 34 Library Late Fee


function libraryLateFee(){
       let lateFee = overDueDays * 50;
       return `late fee is ${lateFee}`;
}
const overDueDays = parseInt(prompt("Enter the over due days: "));
console.log(libraryLateFee())






// 35 Hotel Room Rent Calculation



function hotelRoomRent(){
     if(roomType === "standard"){
        let roomRent = numberOfDays * 150;
        console.log(`room rent is ${roomRent}`);
     }
     else if(roomType === "deluxe"){
        let roomRent = numberOfDays * 200;
        console.log(`room rent is ${roomRent}`);
     }
     else if(roomType === "suite"){
        let roomRent = numberOfDays * 300;
        console.log(`room rent is ${roomRent}`);
     }
     else {
        console.log("Enter correct room type");
     }
}
let roomType = prompt("Enter the room type: ");
let numberOfDays = parseInt(prompt("Enter the number of days you want: "));
hotelRoomRent()