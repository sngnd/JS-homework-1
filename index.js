"use strict";
///// задачи в 2.1 /////
alert("Я JS");
///// задачи в 2.4 /////
let admin;
let name = "Джон";
admin = name;
alert(admin);

let planetName;
let currentUserName;

///// задачи в 2.6 /////
let userName = prompt("Input your name");
alert(userName);

///// задачи в 2.8 /////
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b);

///// задачи в 2.10 /////
let jsName = prompt("What is JS official name?");
if (jsName === "ECMAScript" || jsName === "ecmascript") alert("Right!");
else alert("You don't know? ECMAScript");

let number = prompt("Enter number");
if (number > 0) alert(1);
else if (number < 0) alert(1);
else alert(0);

let result = a + b < 4 ? "not enough" : "too much";

let message =
    login === "employee" ?
    "hi" :
    login === "director" ?
    "hello" :
    login === "" ?
    "no login" :
    "";

///// задачи в 2.11 //////
if (age >= 14 && age <= 90) alert("okay");

if (age < 14 || age > 90) alert("not okay");
if (!(age >= 14 && age <= 90)) alert("not okay");

let user = prompt("Who's there?");
if (user == null || user === "") alert("canceled");
else if (user === "admin" || user === "Admin") {
    let password = prompt("Password?");
    if (password == null || password == "") alert("canceled");
    else if (password === "admin") alert("hello");
    else alert("wrong password");
} else alert("i don't know you");