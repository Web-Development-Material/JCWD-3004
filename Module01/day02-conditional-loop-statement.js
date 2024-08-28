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
console.log(checkShift);
