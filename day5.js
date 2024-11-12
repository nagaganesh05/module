
// 21 Classroom Seating Arrangement

function classRoomSeatingArrangement(students,seatsPerRow){
     const rows = Math.ceil(students/seatsPerRow);
     console.log(`rows needed is ${rows}`)
}
let students = parseInt(prompt("Enter the no.of students: "));
let seatsPerRow = parseInt(prompt("Enter the seats per row: "));
classRoomSeatingArrangement(students,seatsPerRow)



// 22 Tax Calculation 

function taxCalculation(income){
    if(income>=0 && income<50000){
        const tax = income*0.1;
        console.log(`tax is ${tax}`);
    }
    else if(income>=50000 && income<100000){
        const tax = income*0.2;
        console.log(`tax is ${tax}`);
    }
    else if(income>=100000){
        const tax = income*0.3;
        console.log(`tax is ${tax}`);
    }
}
let income = parseInt(prompt("Enter the income: "));
taxCalculation(income)




// 23 Employee Bonus Calculation

function employeeBonusCalculation(){
    if(yearsOfService >= 5 && yearsOfService < 10){
      const bonus = salary*0.05;
      console.log(`bonus amount is ${bonus}`);
    }
    else if(yearsOfService >= 10 && yearsOfService < 20){
      const bonus = salary*0.1;
console.log(`bonus amount is ${bonus}`);
    }
    else if(yearsOfService >=20){
      const bonus = salary*0.15;
  console.log(`bonus amount is ${bonus}`);
    }
    else{
      console.log("Enter correct values");
    }
}
let salary = parseInt(prompt("Enter the salary: "));
let yearsOfService = parseInt(prompt("Enter the years of Service: "));
employeeBonusCalculation()



// 24 Fuel Efficiency Check

function fuelEfficiencyCheck(distance,fuelUsed){
      const fuelEfficiency = distance/fuelUsed;
      console.log(fuelEfficiency)
}
let distance = parseInt(prompt("Enter the distance(in km): "));
let fuelUsed = parseInt(prompt("Enter the fuel used(in liters): "));
fuelEfficiencyCheck(distance,fuelUsed)



// 25 Internet Usage Alert


function dataConsumption(monthlyData,currentUsage){
        const usedPercentage = (currentUsage/monthlyData)*100;
        if(usedPercentage >= 80 && usedPercentage <100){
            console.log("you have used 80% of your monthly data")
        } 
        else if(usedPercentage == 100){
            console.log("you have used 100% of your monthly data")
        } 
        else{
            console.log("TopUp to use the internet")
        }
}
let monthlyData = parseInt(prompt("Enter the monthly data limit(in GB): "));
let currentUsage = parseInt(prompt("Enter the current used data(in GB): "));
dataConsumption(monthlyData,currentUsage)


