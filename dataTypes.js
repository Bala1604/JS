// Task 1 - Employee Profile
// Create variables for an employee.
let Name = "bala";
let EmpID = "EMP100";
let Department = "Full Stack Development";
let Salary = "20000";
let isPermanent = "true";

console.log("Name:",Name);
console.log("EmpId:",EmpID);
console.log("Department:",Department);
console.log("Salary:",Salary);
console.log("isPermanent:",isPermanent);


// Task 2 - Student Details
let student = {
    name: "chandru",
    age: 22,
    course: "B.E CSE",
    college: "Paavai College Of Technology",
    passed: true
};

console.log("Student Name:", student.name);
console.log("Course:", student.course);
console.log("Passed:", student.passed);


// Task 3 - Shopping Cart

let products = ["Milk","Rice","Oil", "Sugar", "Soap"];

console.log(products[0]);
console.log(products[2]);
console.log(products[4]);
console.log(products.length);

// Task 4 - Company Employee Database
let Details={
    EmpName:"John",
    designation:"Full Stack Development",
    salary:20000,
    skills:["HTML","CSS","JAVASCRIPT"]
};

console.log("EmpName:",Details.EmpName);
console.log("designation:",Details.designation);
console.log("skills:",Details.skills[1]);

// Task 5 - Salary Calculation
let basicSal = 25000;
let bonus = 5000;
let totalSalary = basicSal + bonus;

console.log("Total Salary:",totalSalary);

// Task 6 - GST Calculator
let productPrice = 4500;
let Gst = 18;

let GstAmount = (productPrice * Gst) /100;
let finalAmount = productPrice + GstAmount;

console.log("GstAmount:",GstAmount);
console.log("finalAmount:",finalAmount);

// Task 7 - Even or Odd
let num = 25;

let check = (num % 2==0 ? "even number": "odd number");
console.log("check:",check);


// Task 8 - Login System
let userName = "admin";
let password = 12345;
let loginStatus = (userName =="admin" && password==12345 ? "login success" : "Invalid Credentials");

console.log("login Status:",loginStatus);


// Task 9 - Voting Eligibility
let age= 22;
let checkEligible = (age>=18 ? "eligible to vote" : "not eligible to vote");

console.log("checkEligible:",checkEligible);


// Task 10 - EMI Eligibility
let empSal = 40000;
let experience = 3;

let EmiEligible = (empSal >30000 && experience >=3 ? "eligible for EMI" : "not eligible for EMI");

console.log("EmiEligible: ",EmiEligible);


// Task 11 - Product Discount
let price = 5000;
let discount = 10;

let DisountAmount = (price * discount) / 100;
let FinalPrice = price + DisountAmount;

console.log("Discount Amount: ",DisountAmount);
console.log("Final Price: ",FinalPrice);


// Task 12 - User Registration
let UserName = "balamurugan";
let email = "balamurugan@gmail.com";
let phone = "9342321560";
let city = "Trichy";

console.log("----- User Details -----");
console.log("Name: ",UserName);
console.log("Email: ",email);
console.log("Phone: ",phone);
console.log("City: ",city);

// Task 13 - Social Media Profile
let profile = {
    Username: "balaaa._",
    Followers: "10k",
    Following: "600",
    Posts: "100",
    Verified: true
};

console.log("Username:", profile.Username);
console.log("Followers:", profile.Followers);
console.log("Verified Status:", profile.Verified);

// Task 14 - Restaurant Menu
let Menu = ["Idli","Dosa", "Poori", "Meals", "Parotta"];

console.log(Menu[1]);
console.log(Menu[3]);
console.log(Menu[4]);

// Task 15 - Banking System
let accountBalance = 25000;
let withdraw = 8000;

let remainingBalance = accountBalance - withdraw;

console.log("Remaining Balance :", remainingBalance);

//Task 16 - Mobile Store
let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;

let FinalAmount = mobilePrice - exchange - coupon;

console.log("Final Amount :", FinalAmount);

// Task 17 - Employee Promotion
let exp = 5;
let performance = true;

let promotion = (exp >= 5 && performance ? "Promotion Approved" : "Promotion Pending")
console.log(promotion);


// Task 18 - Movie Ticket
let ticketPrice = 180;
let people = 5;

let totalAmount = ticketPrice * people;

console.log("Total Amount :", totalAmount);

// Task 19 - Weather App
let temperature = 38;
let weatherStatus = (temperature >= 35 ? "Hot Day" : "Normal Weather");

console.log("Weather Status :", weatherStatus);



// Task 20 - Mini HR Management (Real-Time)
let employeeDetails = {
    empCode: "Emp1001",
    name: "Balamurugan S",
    department: "Full Stack Developer",
    designation: "Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("Employee Code :", employeeDetails.empCode);
console.log("Employee Name :", employeeDetails.name);
console.log("Department :", employeeDetails.department);
console.log("Salary :", employeeDetails.salary);
console.log("Last Skill :", employeeDetails.skills[employeeDetails.skills.length - 1]);
console.log("Permanent Status :", employeeDetails.permanent);














