const khodam = [
  "Rawa Rontek",
  "Siluman Kodok",
  "Tapir jadi jadian",
  "Jin Sekop-sekop",
  "Nyi Blorong",
  "Mak Lampir",
];

function getRandomKhodam() {
  const randomIndex = Math.floor(Math.random() * khodam.length);
  return khodam[randomIndex];
}

function checkKhodam() {
  const name = document.getElementById("name").value;

  if (name === "") {
    alert("Nama kamu belum diinput, silakan input dulu");
    return;
  }

  const khodam = getRandomKhodam();

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = name + ", khodam kamu adalah " + khodam;
}

document.getElementById("checkButton").addEventListener("click", checkKhodam);
