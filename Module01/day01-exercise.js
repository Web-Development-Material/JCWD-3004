// area of rectangle
let length = 5;
let width = 3;
let areaRectangle = length * width;
// console.log("Area of rectangle : ", areaRectangle);

// perimeter of rectangle
let perimeterRectangle = 2 * (length + width);
// console.log("Perimeter of rectangle : ", perimeterRectangle);

// diameter, circumference and area of circle
let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let areaCircle = Math.PI * radius * radius;
// console.log("Diameter of circle : ", diameter);
// console.log("Circumfence of circle : ", Number(circumference.toFixed(4)));
// console.log("Area of circle : ", Number(areaCircle.toFixed(3)));

// third angle of triangle
let angleA = 80;
let angleB = 65;
let angleC = 180 - (angleA + angleB);
// console.log("Third angle of triangle : ", angleC);

// convert days to years, months, and days
let totalDays = 400;
let years = (totalDays / 365) | 0;
let remainingDays = totalDays - years * 365;
let months = (remainingDays / 30) | 0;
let days = remainingDays - months * 30;
// console.log(
//   totalDays +
//     " days -> " +
//     years +
//     " year(s), " +
//     months +
//     " month(s), " +
//     days +
//     " day(s)"
// );

// difference between dates in days
let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let differenceInTime = date2 - date1;
let differenceInDays = (differenceInTime / (1000 * 3600 * 24)) | 0;
// console.log("Difference between dates : ", differenceInDays);

let currentDate = new Date();
console.log(String(currentDate));
