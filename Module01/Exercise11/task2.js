function findSingleDuplicate(arr) {
  
  //find duplicate and store it in array
  //test case [2,2,1]
  let duplicate = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[i] == arr[j]) {
        if (i != j) {
          duplicate.push(arr[i]);
          // console.log(duplicate);
        }
      }
    }
  }

  //differentiate between duplicate and original array

  for (let k = 0; k <= arr.length - 1; k++) {
    let isDuplicate = false;
    for (let l = 0; l <= arr.length - 1; l++) {
      if (arr[k] == duplicate[l]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      let differ = arr[k];
      console.log(differ);
    }
  }
}

//test case

findSingleDuplicate([2, 2, 1]);
findSingleDuplicate([2, 2, 1, 4, 4]);
findSingleDuplicate([5]);
