// 1. Student Registration (Variables + Objects)
let studentInfo = {
    name : "Jeeva",
    age : 22,
    department : "Java Full Stack Developer",
    courseFee : 20000,
}
console.log(studentInfo);
studentInfo.age >= 18 ? console.log("Eligible") : console.log("Not Eligible"); 



// 2. Employee Salary Calculator (Functions)
function salaryCalculator(basicSal, bonus, deduction){
    return basicSal + bonus - deduction;
}

let totalSalary = salaryCalculator(20000,5000,1000);
console.log("Total Salary : ", totalSalary); 



// 3. Shopping Cart (Array)
let cart = ["Laptop", "Mouse", "Keyboard", "Headphone"];
cart.push("Laptop Stand");
console.log(cart)
cart.pop(); 
console.log(cart) 
console.log(cart[0]);
console.log(cart[cart.length - 1]);

// 4. Login Validation (If Else)
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Success");
} else {
  console.log("Invalid Username or Password");
}


// 5. Movie Ticket Booking (Ternary)
let age = 22;
let isEligible = age >= 18 ? "Eligible" : "Not Eligible";

console.log("Eligible or not : ", isEligible);  


// 6. Employee Search (Array + Find)
let employees = [
    {name:"Arun",salary:25000},
    {name:"Kavin",salary:40000},
    {name:"Ravi",salary:55000}
]
let emp = employees.filter((emp,i,t) => emp.name === "Kavin");
console.log(emp);


// 7. Product Filter (Filter)
let products = [
    {prodctName:"Headset", price : 450, brand : "Boat"},
    {prodctName:"Mouse", price : 900, brand : "Lenovo"},
    {prodctName:"Phone Backcover", price : 250, brand : "redmi"},
    {prodctName:"watch", price : 399, brand : "Boat"},
    {prodctName:"charger", price : 620, brand : "Samsung"}
]

let filteredProducts = products.filter((e,i,t) => e.price < 500)
console.log(filteredProducts)



// 8. Student Marks (Map)
let marks = [45,56,67,89]
let updatedMarks = marks.map((e,i,t)=> e+5);
console.log("original marks : ", marks)  
console.log("After addading Grace marks : ", updatedMarks)


// 9. Attendance Checker (Every)
let scores = [90, 85, 70, 65];

console.log(scores.every(score => score > 50));


// 10. OTP Generator (Math + String)
const otp = Math.floor(100000 + Math.random() * 900000);

console.log(otp);


//11. Password Strength Checker
let Password = "Abc@1234";

let strong =
  Password.length >= 8 &&
  /[A-Z]/.test(Password) &&
  /[0-9]/.test(Password) &&
  /[!@#$%^&*]/.test(Password);

console.log(strong ? "Strong Password" : "Weak Password");


// 12. Product Search (Includes)
let items = ["Laptop", "Mobile", "Watch", "Camera"]
let isAvailable = "Mobile";
console.log(items.includes(isAvailable) ? "available" : "not available");


//13. Current Digital Clock
setInterval(() => {
  let time = new Date();

  console.clear();

  console.log(time.toLocaleTimeString());
}, 1000);


//14. Countdown Timer
let count = 10;

let timer = setInterval(() => {
  console.log(count);

  count--;

  if (count < 0) {
    clearInterval(timer);
  }
}, 1000);



//15. Fetch API Product Viewer
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      console.log(product.title);
      console.log(product.price);
      console.log(product.image);
      console.log("----------------");
    });
  });


  //16. Employee Dashboard (Reduce)
  let Employees = [
  { name: "Arun", salary: 25000 },
  { name: "Kavin", salary: 40000 },
  { name: "Ravi", salary: 55000 }
];

let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

let average = total / employees.length;

let highest = employees.reduce((max, emp) =>
  emp.salary > max.salary ? emp : max
);

console.log("Total Salary:", total);
console.log("Average Salary:", average);
console.log("Highest Salary:", highest);


// 17. Online Food Order
let order = ["Pizza", "Burger", "Shawarma", "Fries"]

order.push("Dessert");
console.log(order);

order.splice(1,1);
console.log(order);




// 18. Bank Account
let client = {
    accHolder : "Bala",
    balance : 40000,
}
function Deposit(amount, account){
    account.balance += amount
    console.log("After Deposit balance : ", account.balance)
}
function Withdraw(amount, account){
    account.balance -= amount
        console.log("After Widhdraw balance : ", account.balance)
}
function CheckBalance(account){
    console.log("Current Balance : ",account.balance);
}
Deposit(10000, client)  
Withdraw(30000, client)
CheckBalance(client)


// 19. To-Do List
let todos = ["Running", "Reading Books", "Attending Trainig", "Complete today's Task"]
todos.push("Practice DAS")
console.log(todos) 
console.log(todos) 
todos[todos.length-1] = "Improve Java Skills"
console.log(todos)


// 20. Mini E-Commerce Product Management
let productInfo = [
    {
        name : "TV",
        price : 30000,
        category : "Electronics",
        stock : 500
    },
    {
        name : "Laptop",
        price : 90000,
        category : "Electronics",
        stock : 80
    },
    {
        name : "Tablet",
        price : 60000,
        category : "Electronics",
        stock : 20
    },
    {
        name : "Whey Protien",
        price : 2000,
        category : "Fitness",
        stock : 300
    },
    {
        name : "Creatine",
        price : 800,
        category : "Fitness",
        stock : 480
    },
    {
        name : "Running shoes",
        price : 4000,
        category : "Fintess",
        stock : 150
    }
    
]
function AddProduct(product){
    productInfo.push(product)
    console.log("Added")
    console.log(productInfo)
}
function FilterByCategory(category){
    let filterProducts = productInfo.filter((p,i,t)=>{
        return p.category === category;
    })
    console.log(filterProducts);
}
function totalStocks(){
    let stocks = productInfo.reduce((a,p) => a += p.stock, 0);
    console.log("Total Stocks : ", stocks);
}
function  InventoryValue (){ 
  let totalValue = productInfo.reduce((sum, product) => sum + product.price * product.stock,
  0
);
    console.log("Total Value : ", totalValue);

}

AddProduct({
        name : "Ear Phone",
        price : 2000,
        category : "Electronics",
        stock : 150
    })
    
FilterByCategory("Electronics");
totalStocks()
InventoryValue()
