function sortdBookPrices(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let swap = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = swap;
    }
  }
  return arr;
}

let hargaBuku = [35000, 12000, 70000, 24000, 15000, 100000];
console.log("harga buku sebelum diurutkan: ", hargaBuku);
console.log("harga buku setelah diurutkan;", sortdBookPrices(hargaBuku));
