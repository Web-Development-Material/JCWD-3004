// DOM untuk mengubah teks

let originalText = "This text will change when you click the button.";
let isChanged = false;

function changeText() {
  let element = document.getElementById("text-change");

  if (isChanged) {
    element.innerHTML = originalText;
    isChanged = false;
  } else {
    element.innerHTML = "The text has been changed!";
    isChanged = true;
  }
}

// DOM untuk mengubah warna teks

let originalColor = "green";
let isColor = false;

function changeColor() {
  let element = document.getElementById("style-change");

  if (isColor) {
    element.style.color = originalColor;
    isColor = false;
  } else {
    element.style.color = "red";
    isColor = true;
  }
}
