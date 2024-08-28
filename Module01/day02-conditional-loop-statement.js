// -- single if conditional
let temperature = 29;
// if (temperature > 30) {
//   console.log("It's a hot day!");
// }

// -- double nested if conditional
let isWeekend = false;
let hasPlans = false;

// if (!isWeekend) {
//   if (!hasPlans) {
//     console.log("You have plans this weekend.");
//   } else {
//     console.log("You can relax this weekend.");
//   }
// }

// -- triple nested if conditional
let age = 30;
let hasID = true;
let isVIP = false;

// if (age > 30) {
//   if (!hasID) {
//     if (isVIP) {
//       console.log("Welcome to the VIP area");
//     } else {
//       console.log("You can enter, but no VIP access");
//     }
//   } else {
//     console.log("You need an ID to enter");
//   }
// } else {
//   console.log("You are too young to enter");
// }

// -- else if conditional
let score = 85;

// if (score >= 90) {
//   console.log("Grade : A");
// } else if (score >= 80) {
//   console.log("Grade : B");
// } else {
//   console.log("Grade : C");
// }

// -- chaining conditions
let hour = 25;
// if (hour >= 7 && hour <= 14) {
//   console.log("Morning shift");
// } else if (hour > 14 && hour < 21) {
//   console.log("Noon shift");
// } else if (hour >= 21 && hour <= 24) {
//   console.log("Night shift");
// } else {
//   console.log("Unknown shift");
// }

// -- switch case condition
let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the work week");
//     break;
//   case "Wednesday":
//     console.log("Midweek day");
//     break;
//   case "Friday":
//     console.log("End of the work week");
//     break;
//   default:
//     console.log("Another day");
// }

// -- switch case combine with if else
let trafficLight = "Yellow";

// switch (trafficLight) {
//   case "Red":
//     console.log("Stop");
//     break;
//   case "Green":
//     console.log("Go");
//     break;
//   case "Yellow":
//     if (Math.random() > 0.5) {
//       console.log("Prepare to stop");
//     } else {
//       console.log("Caution, proceed slowly");
//     }
//     break;
//   default:
//     console.log("Invalid traffic light");
// }

// -- ternary operator
let time = 20;
let greeting =
  time < 10 ? "Good Morning" : time < 16 ? "Good Afternoon" : "Good Evening";
// console.log(greeting);

let shift = 15;
let checkShift =
  shift >= 7 && shift <= 15
    ? "Morning Shift"
    : shift >= 15 && shift < 21
    ? "Noon Shift"
    : "Night Shift";
// console.log(checkShift);

// -- For Loop Statement

// for (let i = 0; i > -10; i--) {
//   console.log(i);
// }

let totalStep = 0;

// for (let day = 1; day <= 7; day++) {
//   let stepsToday = 5000 + day * 1000;
//   console.log("Steps on day " + day + " : " + stepsToday);
//   totalStep += stepsToday;
// }

// console.log("Total steps in a week : " + totalStep);
// console.log("Average steps in a week : " + totalStep / 7);

// -- Nested For Loop Statement
// case 1 :
// let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// let subjects = ["Math", "English", "Science"];

// for (let i = 0; i < daysOfWeek.length; i++) {
//   console.log("Schedule for " + daysOfWeek[i] + " : ");
//   if (daysOfWeek[i] === "Monday") {
//     console.log("Monday is a bad day");
//   }
//   for (let j = 0; j < subjects.length; j++) {
//     console.log(" " + subjects[j]);
//   }
// }

// case 2 :
// for (let i = 0; i < 5; i++) {
//   console.log("Main Number : ", i);
//   for (let j = 0; j < 2; j++) {
//     console.log(" --- Sub Number : ", j);
//     if (j % 2 == 0) {
//       console.log(" -------- ", j, " -> even number");
//     }
//   }
// }

// case 3 :
// let randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < randomNumber.length; i++) {
//   let generateNumber = Math.random() * 10;
//   if (randomNumber[i] == Math.floor(generateNumber)) {
//     console.log(randomNumber[i] + " match with " + Math.floor(generateNumber));
//   } else {
//     console.log(
//       randomNumber[i] + " not matched with " + Math.floor(generateNumber)
//     );
//   }
// }

// --- While Loop Statement
let savings = 0;
let month = 1;

// while (month <= 13) {
//   savings += 100;
//   console.log("Savings after month " + month + " : " + savings);
//   month++;
//   if (month == 10) {
//     console.log("Out of range");
//     break;
//   }
// }

// --- Nested While Loop Statement
// let i = 1;
// while (i <= 5) {
//   let j = 1;
//   while (j <= 5) {
//     if ((i * j) % 2 == 0) {
//       console.log(
//         i + " x " + j + " = " + i * j + ", this result is even number"
//       );
//     } else {
//       console.log(i + " x " + j + " = " + i * j);
//     }
//     j++;
//   }
//   i++;
// }

// --- Do While Loop Statement
let basketCapacity = 5;
let fruitsPicked = 0;

// do {
//   fruitsPicked++;
//   console.log("Picked fruit number : " + fruitsPicked);
// } while (fruitsPicked < basketCapacity);

// --- Do While Nested Loop Statement
let rows = 10;
let stars;

do {
  stars = 1;
  do {
    process.stdout.write("*");
    stars++;
  } while (stars <= rows);
  console.log();
  rows--;
} while (rows > 0);

// -- versi kebaliknya
// do {
//   stars = 10;
//   do {
//     process.stdout.write("*");
//     stars--;
//   } while (stars >= rows);
//   console.log();
//   rows--;
// } while (rows > 0);
