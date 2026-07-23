// Task 1: Employee Login System
let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
    alert("Login Successful");
} else {
    console.log("Invalid Username or Password");
    alert("Invalid Username or Password");
}

// Task 2: E-Commerce Discount
let amount = 4500;
let discount = 0;

if (amount >= 5000) {
    discount = 0.2 * amount;
    console.log("20% Discount Applied");
} else {
    console.log("No Discount");
}
let finalAmount = amount - discount;
console.log(discount);
console.log("Final Amount: ₹" + finalAmount);

// Task 3: ATM Withdrawal
let balance = 10000;
let withdraw = 10000;

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

// Task 4: Student Grade System
let mark = 87;

if(mark >= 90){
    console.log("Grade A");
}
else if(mark >=80){
    console.log("Grade B");
}
else if(mark >=70){
    console.log("Grade C");
}
else{
    console.log("Fail");
}

// Task 5: Traffic Signal

let signal="green";

switch(signal){

case "red":
console.log("Stop");
break;

case "yellow":
console.log("Ready");
break;

case "green":
console.log("Go");
break;

default:
console.log("Invalid");
}


// Task 6: Online Shopping Delivery Charge

let orderAmount = Number(prompt("Enter Order Amount:"));
let deliveryCharge = 0;
let total = 0;

if (orderAmount >= 1000) {
    deliveryCharge = 0;
} else {
    deliveryCharge = 80;
}

total = orderAmount + deliveryCharge;

console.log("Order Amount : ₹" + orderAmount);
console.log("Delivery : ₹" + deliveryCharge);
console.log("Total : ₹" + total);

// Task 7: User Age Verification
let age = Number(prompt("Enter Your Age:"));

if (age >= 18) {
    console.log("Eligible");
    alert("Eligible");
} else {
    console.log("Not Eligible");
    alert("Not Eligible");
}

// Task 8: Find Largest Number
let a = 10;
let b = 20;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest Number:", a);
} else if (b >= a && b >= c) {
    console.log("Largest Number:", b);
} else {
    console.log("Largest Number:", c);
}


// Task 9: Mobile Password
let pin = prompt("Enter 4-Digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}

// Task 10: Product Stock
let Stock = 0;

if (Stock === 0) {
    console.log("Out of stock");
} else {
    console.log("available");

}


// Task 11: Employee Salary Bonus
let salary = Number(prompt("Enter Employee Salary:"));
let bonus;

if (salary > 50000) {
    bonus = 10000;
} 
else if (salary > 30000) {
    bonus = 5000;
} 
else {
    bonus = 2000;
}

console.log("Employee Salary: ₹" + salary);
console.log("Bonus: ₹" + bonus);
console.log("Total Salary: ₹" + (salary + bonus));

// Task 12: Electricity Bill
let units = Number(prompt("Enter Electricity Units:"));
let bill;

if (units <= 100) {
    bill = units * 2;
}
else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 4);
}
else {
    bill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}

console.log("Units Consumed: " + units);
console.log("Electricity Bill: ₹" + bill);


// Task 13: Movie Ticket Booking

let Ages = prompt("enter the age:");
if (Ages < 5) {
    console.log("Free");
}
else if (Ages < 18) {
    console.log("Above age at 5 : ", 100);
} else {
    console.log("above the age at 18 ", 200);
}


// Task 14: Hospital Token System

let patientType = prompt("Enter Patient Type (Emergency, Senior Citizen, Normal):");

switch (patientType.toLowerCase()) {

    case "emergency":
        console.log("Token 1");
        break;

    case "senior citizen":
        console.log("Priority");
        break;

    case "normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid Patient Type");
}

// Task 15: Company Attendance

let attendance = prompt("Enter Attendance (Present, Leave, Absent):");

switch (attendance.toLowerCase()) {

    case "present":
        console.log("Working");
        break;

    case "leave":
        console.log("Leave Approved");
        break;

    case "absent":
        console.log("Salary Deduction");
        break;

    default:
        console.log("Invalid Attendance Status");
}

// Task 16: Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let groceryTotal = rice + sugar + oil;

if (groceryTotal > 1000) {
    groceryTotal = groceryTotal - (groceryTotal * 10 / 100);
    console.log("10% Discount Applied");
}

console.log("Final Total: ₹" + groceryTotal);


// Task 17: Array Task


let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + " " + products[i]);
}

// Task 18: Employee Database

let employee = {
    name: "david",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(employee[key]);
}

// Task 19: Type Casting

let num = Number("100");
let bool = Boolean("true");
let str = String(200);

console.log(num);
console.log(bool);
console.log(str);


// Task 20: Banking Menu

let choice = prompt("Enter your choice:");

switch (choice) {
    case "1":
        console.log("Deposit");
        break;
    case "2":
        console.log("Withdraw");
        break;
    case "3":
        console.log("Balance");
        break;
    case "4":
        console.log("Exit");
        break;
    default:
        console.log("Invalid choice");
}



//Mini Project (Interview Level)
// Employee Management System

let employeeDetails = {
    name: "Rahul",
    role: "Developer",
    salary: 50000,
    attendance: "Present"
};

let menuChoice = 5;

switch (menuChoice) {

    case 1:
        console.log("Employee Added");
        break;

    case 2:
        console.log("Name:", employeeDetails.name);
        console.log("Role:", employeeDetails.role);
        console.log("Salary:", employeeDetails.salary);
        break;

    case 3:
        let employeeBonus = 0;

        if (employeeDetails.salary > 50000) {
            employeeBonus = 10000;
        } else if (employeeDetails.salary > 30000) {
            employeeBonus = 5000;
        } else {
            employeeBonus = 2000;
        }

        console.log("Bonus:", employeeBonus);
        break;

    case 4:
        console.log("Attendance:", employeeDetails.attendance);
        break;

    case 5:
        console.log("Salary:", employeeDetails.salary);
        break;

    case 6:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}