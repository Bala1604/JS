// Mini Projects using Date methods in JavaScript

//Task 1 - Movie Show Booking System

// Movie Details
let movieName = "Avengers: Endgame";
let ticketPrice = 180;
let tickets = 3;

// Create Date
let showDate = new Date();

// SET METHODS
// Set Show Date
showDate.setFullYear(2026);
showDate.setMonth(7);
showDate.setDate(15);

// Set Show Time
showDate.setHours(18);
showDate.setMinutes(30);
showDate.setSeconds(0);

// GET METHODS
let year = showDate.getFullYear();
let month = showDate.getMonth();
let date = showDate.getDate() + 1;
let day = showDate.getDay();

let hours = showDate.getHours();
let minutes = showDate.getMinutes();
let seconds = showDate.getSeconds();

// Calculate Total
let totalAmount = ticketPrice * tickets;

// Display Booking Details
console.log("Movie : " , movieName);
console.log("Ticket Price : " , ticketPrice);
console.log("Tickets : " , tickets);
console.log("Total Amount : " , totalAmount);

console.log("Show Year : " ,year);
console.log("Show Month : " , month);
console.log("Show Date : " ,date);
console.log("Show Day : " , day);

console.log("Show Hours : " ,hours);
console.log("Show Minutes : ", minutes);
console.log("Show Seconds : ",seconds);



// Task 2 - Employee Date Management System

// Employee Details
let empName = "Balamurugan ";

//create date
let empJoiningDate = new Date();

//Set Methods
empJoiningDate.setFullYear(2020);
empJoiningDate.setMonth(5); 
empJoiningDate.setDate(15);
empJoiningDate.setHours(10);
empJoiningDate.setMinutes(30);
empJoiningDate.setSeconds(50);

//GET METHODS
//get year
let year = empJoiningDate.getFullYear();

//get month
let month = empJoiningDate.getMonth();

//get date
let date = empJoiningDate.getDate();

//get hours
let hours = empJoiningDate.getHours();

//get minutes
let minutes = empJoiningDate.getMinutes();

//get seconds
let seconds = empJoiningDate.getSeconds();

//Display Employee Details
console.log("Employee Name:", empName);
console.log("Joining Date:", empJoiningDate);
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
// Employee Name: Balamurugan 
// Task6.js:102 Joining Date: Mon Jun 15 2020 10:30:50 GMT+0530 (India Standard Time)
// Task6.js:103 Year: 2020
// Task6.js:104 Month: 5
// Task6.js:105 Date: 15
// Task6.js:106 Hours: 10
// Task6.js:107 Minutes: 30
// Task6.js:108 Seconds: 50




//Task 3.Library Book Return System

// Student Details
let studentName = "Chandru";
let bookName = "Harry Potter";
let bookId = 100;

// Create Date
let returnDate = new Date();

// SET METHODS
// Set Return Date
returnDate.setFullYear(2020);
returnDate.setMonth(8);
returnDate.setDate(30);

// Set Return Time
returnDate.setHours(17);
returnDate.setMinutes(30);
returnDate.setSeconds(0);

// GET METHODS
let year = returnDate.getFullYear() - 6;
let month = returnDate.getMonth() + 1;
let date = returnDate.getDate() - 7;
let day = returnDate.getDay() + 5;

let hours = returnDate.getHours();
let minutes = returnDate.getMinutes();
let seconds = returnDate.getSeconds();

// Display Book Details
console.log("Student Name : " + studentName);
console.log("Book Name : " + bookName);
console.log("Book ID : " + bookId);

console.log("Return Year : " + year);
console.log("Return Month : " + month);
console.log("Return Date : " + date);
console.log("Return Day : " + day);

console.log("Return Hours : " + hours);
console.log("Return Minutes : " + minutes);
console.log("Return Seconds : " + seconds);

console.log("Book Return Date Confirmed");
//Output : Student Name : Chandru
//Book Name : Harry Potter
//Book ID : 100
//Return Year : 2014
//Return Month : 9
//Return Date : 23
//Return Day : 8
//Return Hours : 17
//Return Minutes : 30
//Return Seconds : 0
//Book Return Date Confirmed


//Task 4 - Flight Ticket Booking System

// Passenger Details
let passengerName = "Sanjay";
let flightName = "Air India";
let ticketPrice = 5000;

// Create Date
let travelDate = new Date();

// SET METHODS
// Set Travel Date
travelDate.setFullYear(2026);
travelDate.setMonth(8);
travelDate.setDate(20);

// Set Travel Time
travelDate.setHours(14);
travelDate.setMinutes(30);
travelDate.setSeconds(0);

// GET METHODS
let year = travelDate.getFullYear() - 3;
let month = travelDate.getMonth() + 1;
let date = travelDate.getDate();
let day = travelDate.getDay();

let hours = travelDate.getHours();
let minutes = travelDate.getMinutes();
let seconds = travelDate.getSeconds();

// Display Booking Details
console.log("Passenger Name : " + passengerName);
console.log("Flight Name : " + flightName);
console.log("Ticket Price : " + ticketPrice);

console.log("Travel Year : " + year);
console.log("Travel Month : " + month);
console.log("Travel Date : " + date);
console.log("Travel Day : " + day);

console.log("Travel Hours : " + hours);
console.log("Travel Minutes : " + minutes);
console.log("Travel Seconds : " + seconds);
// Passenger Name : Sanjay
// Flight Name : Air India
// Ticket Price : 5000
// Travel Year : 2023
// Travel Month : 9
// Travel Date : 20
// Travel Day : 0
// Travel Hours : 14
// Travel Minutes : 30
// Travel Seconds : 0


//Task 5 - Hotel Booking System

// Customer Details
let customerName = "Bala";
let roomType = "Deluxe Room";
let roomPrice = 5000;
let rooms = 3;

// Create Date
let bookingDate = new Date();

// SET METHODS
// Set Booking Date
bookingDate.setFullYear(2026);
bookingDate.setMonth(9);
bookingDate.setDate(10);

// Set Booking Time
bookingDate.setHours(11);
bookingDate.setMinutes(30);
bookingDate.setSeconds(0);

// GET METHODS
let year = bookingDate.getFullYear();
let month = bookingDate.getMonth();
let date = bookingDate.getDate();
let day = bookingDate.getDay();

let hours = bookingDate.getHours();
let minutes = bookingDate.getMinutes();
let seconds = bookingDate.getSeconds();

// Calculate Room Bill
let totalBill = roomPrice * rooms;

// Display Booking Details
console.log("Customer Name : " + customerName);
console.log("Room Type : " + roomType);
console.log("Room Price : " + roomPrice);
console.log("Number of Rooms : " + rooms);
console.log("Total Bill : " + totalBill);

console.log("Booking Year : " + year);
console.log("Booking Month : " + month);
console.log("Booking Date : " + date);
console.log("Booking Day : " + day);

console.log("Booking Hours : " + hours);
console.log("Booking Minutes : " + minutes);
console.log("Booking Seconds : " + seconds);
// //Output : Customer Name : Bala
//Room Type : Deluxe Room
//Room Price : 5000
//Number of Rooms : 3
//Total Bill : 15000
//Booking Year : 2026
//Booking Month : 9
//Booking Date : 10
//Booking Day : 6
//Booking Hours : 11
//Booking Minutes : 30
//Booking Seconds : 0


//Task 6. Event Registration System

// Participant Details
let participantName = "Naveen";
let eventName = "Tech Fest";
let entryFee = 350;

// Create Date
let eventDate = new Date();

// SET METHODS

// Set Event Date
eventDate.setFullYear(2026);
eventDate.setMonth(11);
eventDate.setDate(20);

// Set Event Time
eventDate.setHours(9);
eventDate.setMinutes(30);
eventDate.setSeconds(0);

// GET METHODS
let year = eventDate.getFullYear();
let month = eventDate.getMonth() + 1;
let date = eventDate.getDate();
let day = eventDate.getDay();

let hours = eventDate.getHours();
let minutes = eventDate.getMinutes();
let seconds = eventDate.getSeconds();

// Display Event Details
console.log("Participant Name : " + participantName);
console.log("Event Name : " + eventName);
console.log("Entry Fee : " + entryFee);

console.log("Event Year : " + year);
console.log("Event Month : " + month);
console.log("Event Date : " + date);
console.log("Event Day : " + day);

console.log("Event Hours : " + hours);
console.log("Event Minutes : " + minutes);
console.log("Event Seconds : " + seconds);

console.log("Registration Successful");
//Output : Participant Name : Naveen
//Event Name : Tech Fest
//Entry Fee : 350
//Event Year : 2026
//Event Month : 12
//Event Date : 20
//Event Day : 0
//Event Hours : 9
//Event Minutes : 30
//Event Seconds : 0
//Registration Successful



//task 7 - Exam Hall Ticket System

// Student Details
let studName = "Guru";
let registerNumber = 101;
let subject = "TypeScript";
let examFee = 500;

// Create Date
let examDate = new Date();

// SET METHODS
// Set Exam Date
examDate.setFullYear(2025);
examDate.setMonth(10);
examDate.setDate(15);

// Set Exam Time
examDate.setHours(10);
examDate.setMinutes(0);
examDate.setSeconds(0);

// GET METHODS
let year = examDate.getFullYear() + 1;
let month = examDate.getMonth() + 1;
let date = examDate.getDate() - 3;
let day = examDate.getDay() + 1;

let hours = examDate.getHours();
let minutes = examDate.getMinutes();
let seconds = examDate.getSeconds();

// Display Hall Ticket
console.log("Student Name : " + studName);
console.log("Register Number : " + registerNumber);
console.log("Subject : " + subject);
console.log("Exam Fee : " + examFee);

console.log("Exam Year : " + year);
console.log("Exam Month : " + month);
console.log("Exam Date : " + date);
console.log("Exam Day : " + day);

console.log("Exam Hours : " + hours);
console.log("Exam Minutes : " + minutes);
console.log("Exam Seconds : " + seconds);

console.log("Hall Ticket Generated");
// //Output : Student Name : Guru
//Register Number : 101
//Subject : TypeScript
//Exam Fee : 500
//Exam Year : 2026
//Exam Month : 11
//Exam Date : 12
//Exam Day : 7
//Exam Hours : 10
//Exam Minutes : 0
//Exam Seconds : 0
//Hall Ticket Generated



//Task 8 - Bus Ticket Booking System

// Passenger Details
let passengersName = "Pradeep";
let busName = "SETC Express";
let ticketPrice = 450;
let seats = 2;

// Create Date
let travelDate = new Date();

// SET METHODS
// Set Travel Date
travelDate.setFullYear(2026);
travelDate.setMonth(8);
travelDate.setDate(25);

// Set Travel Time
travelDate.setHours(21);
travelDate.setMinutes(30);
travelDate.setSeconds(0);

// GET METHODS
let year = travelDate.getFullYear();
let month = travelDate.getMonth() + 1;
let date = travelDate.getDate();
let day = travelDate.getDay();

let hours = travelDate.getHours();
let minutes = travelDate.getMinutes();
let seconds = travelDate.getSeconds();

// Calculate Ticket Amount
let totalAmount = ticketPrice * seats;

// Display Ticket Details
console.log("Passenger Name : " + passengersName);
console.log("Bus Name : " + busName);
console.log("Ticket Price : " + ticketPrice);
console.log("Number of Seats : " + seats);
console.log("Total Amount : " + totalAmount);

console.log("Travel Year : " + year);
console.log("Travel Month : " + month);
console.log("Travel Date : " + date);
console.log("Travel Day : " + day);

console.log("Travel Hours : " + hours);
console.log("Travel Minutes : " + minutes);
console.log("Travel Seconds : " + seconds);

console.log("Ticket Booking Successful");
//Output : Passenger Name : Pradeep
//Bus Name : SETC Express
//Ticket Price : 450
//Number of Seats : 2
//Total Amount : 900
//Travel Year : 2026
//Travel Month : 9
//Travel Date : 25
//Travel Day : 5
//Travel Hours : 21
//Travel Minutes : 30
//Travel Seconds : 0
//Ticket Booking Successful


//Task 9 - Food Delivery System

// Customer Details
let customerName = "Rajesh";
let foodName = "Biryani";
let foodPrice = 250;
let quantity = 2;

// Create Date
let deliveryDate = new Date();

// SET METHODS
// Set Delivery Date
deliveryDate.setFullYear(2026);
deliveryDate.setMonth(7);
deliveryDate.setDate(8);

// Set Delivery Time
deliveryDate.setHours(19);
deliveryDate.setMinutes(30);
deliveryDate.setSeconds(0);

// GET METHODS
let year = deliveryDate.getFullYear();
let month = deliveryDate.getMonth();
let date = deliveryDate.getDate();
let day = deliveryDate.getDay();

let hours = deliveryDate.getHours();
let minutes = deliveryDate.getMinutes();
let seconds = deliveryDate.getSeconds();

// Calculate Food Bill
let totalBill = foodPrice * quantity;

// Display Order Details
console.log("Customer Name : " + customerName);
console.log("Food Name : " + foodName);
console.log("Food Price : " + foodPrice);
console.log("Quantity : " + quantity);
console.log("Total Bill : " + totalBill);

console.log("Delivery Year : " + year);
console.log("Delivery Month : " + month);
console.log("Delivery Date : " + date);
console.log("Delivery Day : " + day);

console.log("Delivery Hours : " + hours);
console.log("Delivery Minutes : " + minutes);
console.log("Delivery Seconds : " + seconds);
//Output : Customer Name : Rajesh
//Food Name : Biryani
//Food Price : 250
//Quantity : 2
//Total Bill : 500
//Delivery Year : 2026
//Delivery Month : 7
//Delivery Date : 8
//Delivery Day : 6
//Delivery Hours : 19
//Delivery Minutes : 30
//Delivery Seconds : 0


//Task 10 - Hospital Appointment System

// Patient Details
let patientName = "Praveen";
let doctorName = "Dr.Kabilan";
let consultationFee = 500;

// Create Date
let appointmentDate = new Date();

// SET METHODS
// Set Appointment Date
appointmentDate.setFullYear(2026);
appointmentDate.setMonth(7);
appointmentDate.setDate(12);

// Set Appointment Time
appointmentDate.setHours(10);
appointmentDate.setMinutes(30);
appointmentDate.setSeconds(0);

// GET METHODS
let year = appointmentDate.getFullYear();
let month = appointmentDate.getMonth();
let date = appointmentDate.getDate();
let day = appointmentDate.getDay() + 1;

let hours = appointmentDate.getHours();
let minutes = appointmentDate.getMinutes();
let seconds = appointmentDate.getSeconds();

// Display Appointment Details
console.log("Patient Name : " + patientName);
console.log("Doctor Name : " + doctorName);
console.log("Consultation Fee : " + consultationFee);

console.log("Appointment Year : " + year);
console.log("Appointment Month : " + month);
console.log("Appointment Date : " + date);
console.log("Appointment Day : " + day);

console.log("Appointment Hours : " + hours);
console.log("Appointment Minutes : " + minutes);
console.log("Appointment Seconds : " + seconds);

console.log("Appointment Confirmed");
//Output : Patient Name : Praveen
//Doctor Name : Dr.Kabilan
//Consultation Fee : 500
//Appointment Year : 2026
//Appointment Month : 7
//Appointment Date : 12
//Appointment Day : 4
//Appointment Hours : 10
//Appointment Minutes : 30
//Appointment Seconds : 0
//Appointment Confirmed

