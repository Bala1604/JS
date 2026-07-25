// Task 1: Student Registration Form
let StdName="bala";
let Age = 22;
let Dept= "CSE";
let CGPA = 8.0;

console.log("CGPA: ",CGPA);


// Task 2: Employee Details
// Employee ID
// Employee Name
// Department
// Salary
// Print:
// Employee Name
// Salary
let employee = {
    employeeId: 101,
    employeeName: "Bala",
    department: "Full Stack Development",
    salary: 35000
};

console.log("Employee Name:", employee.employeeName);
console.log("Salary:", employee.salary);

// Task 3: Shopping Cart
let product = ["laptop","mouse","keyboard","monitor","headset"];

console.log("first product: ",product[0]);
console.log("last product: ",product[product.length-1]);
console.log("total product: ",product.length);

// Task 4: Student Marks
let english = 85;
let maths = 90;
let science = 88;
let computer = 95;
let tamil = 89;

let total = english + maths + science + computer + tamil;
let average = total / 5;

console.log("Total:", total);
console.log("Average:", average);


// Task 5: Age Checker
let checkAge = prompt("enter ur age:");

if(checkAge >= 18){
    console.log("eligible to vote");
}
else{
    console.log("not eligible to vote");
    
}


//Task 6 ---> Login System
let user = prompt("Enter username:");
let pass = prompt("Enter password:");

let obj = {
    username: "admin",
    password: "12345"
};

if (user === obj.username && pass === obj.password) {
    console.log("login success");
} else {
    console.log("invalid");
}


// Task 7: Calculator
let num1 = 25;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);


// Task 8: Electricity Bill

let customerName = "david";
let units = 150;
let billAmount;

if (units <= 100) {
    billAmount = units * 2;
} else if (units <= 200) {
    billAmount = units * 4;
} else {
    billAmount = units * 6;
}

console.log("Customer Name:", customerName);
console.log("Units Consumed:", units);
console.log("Bill Amount: ₹" + billAmount);

// Task 9: Employee Salary

let basicSalary = 30000;
let bonus = 6000;

let grossSalary = basicSalary + bonus;

console.log("Basic Salary:", basicSalary);
console.log("Bonus:", bonus);
console.log("Gross Salary:", grossSalary);


// Task 10: Movie Ticket Price

let ticketPrice = 250;
let count = 3;
let totalPrice = ticketPrice * count;

console.log("Total Amount: ", totalPrice);


// Task 11: Product Discount
let productName = "Monitor";
let price = 65000;
let discount;
let finalPrice;

if (price > 5000) {
    discount = price * 0.20;
} else {
    discount = price * 0.10;
}

finalPrice = price - discount;

console.log("Product Name:", productName);
console.log("Original Price: ₹" + price);
console.log("Discount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);

// Task 12: Function Practice

function stdDetails(name, dept, cgpa){
    console.log("std name: ",name);
    console.log("dept name: ",dept);
    console.log("cgpa: ",cgpa);
}
stdDetails("seenu","IT",8.0);


// Task 13: Bank Balance

function IB(accName, curBal, withdraw){
    let remainBal = curBal - withdraw;
    console.log("current bal: ",curBal);
    console.log("withraw: ",withdraw);
    console.log("remain balance: ",remainBal);
}
IB("Sanjay",50000,35000);


// Task 14: Mobile Recharge

function mobileRecharge(mblNum, rechargeAmt){
    if(mblNum === 9342321560 && rechargeAmt >0){
        console.log("recharge successful!");
    }
    else{
        console.log("recharge unsuccessful!");
    }
}
mobileRecharge(Number(prompt("enter mbl number: ")), Number(prompt("enter recharge amount: ")));



// Task 15: Restaurant Bill

function restaurant(foodname, quantity, price){
    console.log("=======invoice========");
    console.log("Food Name : ", foodname);
    console.log("Quantity : ", quantity);
    let totalBill = quantity * price;
    console.log("Total Amnt : ", totalBill);
}
restaurant(prompt("enter food name: "), prompt("enter quantity: "), prompt("enter price: "));



// Mini Project (Best Task)
// Employee Management System (Console Based)

function addEmploye(id, name, age, department, basicSalary, bonus, experience) {

    let skills = ["HTML", "CSS", "JavaScript", "React"];

    let employe = {
        employeId: id,
        employeName: name,
        employeAge: age,
        department: department,
        basicSalary: basicSalary,
        bonus: bonus,
        experience: experience,
        skills: skills
    };

    return employe;
}

function displayEmploye(employe) {
    console.log("========== Employe Details ==========");
    console.log("Employe ID:", employe.employeId);
    console.log("Employee Name:", employe.employeName);
    console.log("Age:", employe.employeAge);
    console.log("Department:", employe.department);
    console.log("Skills:", employe.skills);
}

function calculateSalary(employe) {
    let grossSalary = employe.basicSalary + employe.bonus;

    console.log("Basic Salary: ₹" + employe.basicSalary);
    console.log("Bonus: ₹" + employe.bonus);
    console.log("Gross Salary: ₹" + grossSalary);
}

function checkExperience(employe) {

    if (employe.experience >= 5) {
        console.log("Experience: Experience");
    } else {
        console.log("Experience: Fresher");
    }
}

let employe = addEmploye(
    100,
    "subash",
    22,
    "CSE",
    60000,
    8000,
    3
);

displayEmploye(employe);

calculateSalary(employe);

checkExperience(employe);