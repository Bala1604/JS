// Task 1 - Student Registration

let studentName = "Balamurugan S";
let department = "CSE";
let cgpa = 8.9;

console.log("Student Name :", studentName);
console.log("Department :", department);
console.log("CGPA :", cgpa);
console.log("Status :", cgpa >= 8 ? "Eligible" : "Not Eligible");

// Task 2 - Online Shopping Bill

 let productPrice = 2500;
let quantity = 3;

let total = productPrice * quantity;
let discount = total > 5000 ? total * 0.10 : 0;
let finalPrice = total - discount;

console.log("Total :", total);
console.log("Discount :", discount);
console.log("Final Price :", finalPrice);

// Task 3 - Employee Salary

let basicSalary = 45000;
let bonus = 5000;
let tax = 3000;

let netSalary = basicSalary + bonus - tax;

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Net Salary :", netSalary);


// Task 4 - Movie Ticket Booking

let movie = "LIK";
let ticketPrice = 200;
let tickets = 6;

console.log("Movie :", movie);
console.log("Tickets :", tickets);
console.log("Total :", ticketPrice * tickets);


// Task 5 - Login System

let username = "admin";
let password = "123456";

if (username === "admin" && password === "12346") {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password!");
}


// Task 6 - Electricity Bill

let units = prompt("enter the unit");
let totalBill = 0;

if (units <= 100) {
    console.log("0-100 units → ₹5/unit");
    totalBill = units * 5;
} else if (units <= 200) {
    console.log("101–200 units → ₹7 / unit");
    totalBill = units * 7;
} else {
    console.log("Above 200 → ₹10 / unit");
    totalBill = units * 10;
}

console.log("Units : ", units);
console.log("Bill Amount : ", totalBill);


// Task 7 - Restaurant Order

let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("First Item :", menu[0]);
console.log("Last Item :", menu[menu.length - 1]);
console.log("Total Items :", menu.length);

menu.push("Fried Rice");
menu.splice(menu.indexOf("Idly"), 1);

console.log("Updated Menu :", menu);


//Task 8 –--> Employee Object
let employee = {
    name: "sekar",
    role: "Frontend Developer",
    salary: 40000
};

console.log(`Employee Name : ${employee.name}`);
console.log(`Role : ${employee.role}`);
console.log(`Salary : ${employee.salary}`);


// Task 9 - Product Inventory

let products = ["Mouse","Keyboard","Monitor","CPU", "Speaker"];

for (let i = 0; i < products.length; i++) {
    console.log(i + 1, products[i]);
}


//Task 10 –--> Function

function calculateArea(length, width) {
    let area = length * width;
    console.log("Area : ", area);

}
calculateArea(10, 20)


//Task 11 –--> Bank Deposit

let currentBalance = 5000;

function deposit(amnt) {
    currentBalance = currentBalance + amnt

}
function withdraw(amnt) {
    currentBalance = currentBalance - amnt
}

deposit(2000)
withdraw(1000)
console.log(`Balance Amount :  ${currentBalance}`);


//Task 12 –--> Callback Function

function add(a, b) {
    return a + b;
}
function calculate(callback, a, b) {
    console.log("callback: ", callback(a, b));
    console.log("completed");
}

calculate(add, 10, 20);


//Task 13 –--> Generator Function

function* couponCode() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let coupon = couponCode();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


//  Task 14 - Currying

function discountValue(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(discountValue(10)(20)(30));


// Task 15 - Spread Operator

let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let merged = [...frontend, ...backend];

console.log(merged);



// Task 16 - Rest Operator

 function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30, 40, 50));



// Task 17 - Array Destructuring

let colors = ["Red", "Blue", "Green", "Yellow"];

let [c1, c2, c3, c4] = colors;

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);


// Task 18 - Object Destructuring

 let user = {
    name: "Senthil",
    city: "Vadachennai",
    role: "Developer"
};
let { name, city, role } = user;

console.log(name);
console.log(city);
console.log(role);


// Task 19 - Shopping Cart

let cart = ["Mobile", "Laptop", "Watch"];

console.log(cart);

cart.push("Tablet");
console.log("After Push :", cart);

cart.pop();
console.log("After Pop :", cart);

cart.shift();
console.log("After Shift :", cart);

cart.unshift("Headphone");
console.log("After Unshift :", cart);



// Task 20 - Product Search
let productList = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];

if (productList.includes("Monitor")) {
    console.log("Product Available!");
} else {
    console.log("Out of Stock...");
} 