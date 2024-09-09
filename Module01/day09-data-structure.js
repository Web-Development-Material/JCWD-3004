// Stack -> konsep seperti piring di rumah makan padang, tumpukan piring paling atas yang dicuci terlebih dahulu

class Stack {
  constructor() {
    this.items = [];
  }

  pushItem(data) {
    this.items.push(data); // -> menambah data ke atas stack
  }

  popItem() {
    return this.items.pop(); // -> mengambil data dari atas stack dan menghapusnya
  }

  peekItem() {
    return this.items[this.items.length - 1]; // -> melihat item teratas tanpa menghapus
  }
}

const stack = new Stack();
// stack.pushItem("Piring 1");
// stack.pushItem("Piring 2");
// stack.pushItem("Piring 3");
// stack.pushItem("Piring 4");
// stack.popItem();
// console.log(stack.peekItem());

// stack.pushItem("Piring 2");
// stack.pushItem("Piring 4");
// stack.popItem();
// console.log(stack.peekItem());
// stack.pushItem("Piring 1");
// stack.pushItem("Piring 3");
// stack.popItem();
// console.log(stack.peekItem());

// let decoy = {
//   value_a: 0,
//   value_b: 1,
// };

// stack.pushItem("Piring 4");
// stack.popItem();
// stack.pushItem("Piring 1");
// stack.pushItem("Piring 3");
// if (!decoy.value_b !== 1 || decoy.value_a == 1) {
//   stack.pushItem("Piring 2");
// } else if (decoy.value_a == 0) {
//   stack.popItem();
// } else {
//   stack.pushItem("Piring 5");
// }

// console.log(stack.peekItem());

// Queue -> seperti antrian di gacoan
class Queue {
  constructor() {
    this.items = [];
  }

  enqueueItem(data) {
    this.items.push(data); // -> menambahkan data ke akhir antrian
  }

  dequeueItem() {
    return this.items.shift(); // -> mengambil data dari depan antrian dan menghapusnya
  }

  front() {
    return this.items[0];
  }
}

const queue = new Queue();
// queue.enqueueItem("Orang 1");
// queue.enqueueItem("Orang 2");
// console.log("origin queue : ", queue);
// console.log(queue.dequeueItem());
// console.log("after dequeue : ", queue);
// console.log(queue.front());

// let isDecoy1 = true;
// let isDecoy2 = !isDecoy1;

// queue.enqueueItem("Orang 1");
// queue.enqueueItem("Orang 2");
// if (!isDecoy2 && isDecoy1 === true) {
//   queue.enqueueItem("Orang 3");
// } else if (isDecoy2 === false) {
//   queue.enqueueItem("Orang 4");
// } else {
//   queue.dequeueItem();
// }
// console.log(queue);
// console.log(queue.front());

// let isDecoy2 = false;
// let isDecoy1 = !isDecoy2;

// queue.enqueueItem("Orang 1");
// queue.enqueueItem("Orang 2");
// if (!isDecoy2 && isDecoy1 === true) {
//   queue.enqueueItem("Orang 3");
// } else if (isDecoy2 === false) {
//   queue.enqueueItem("Orang 4");
// } else {
//   queue.dequeueItem();
// }
// console.log(queue);
// console.log(queue.front());

// Set -> memberikan keunikan disetiap elemen array
let mySet = new Set();
// console.log(mySet);

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add("abcd");
// console.log("before delete : ", mySet);
// mySet.delete(2);
mySet.delete("abcd");
// console.log("after delete : ", mySet);

let saveElement = [];
// mySet.forEach((value) => {
//   console.log(value);
//   saveElement.push(value);
// });
// console.log("convert to array -> " + saveElement);

let animal = new Set();
animal.add("koala");
animal.add("kangaroo");
animal.add("komodo");
animal.add("anoa");
animal.add("tapir");

let save = [];
animal.forEach((value) => {
  save.push(value);
  save.pop();
  save.unshift("bebek");
});

for (let i = 0; i < save.length; i++) {
  if (save[i] == "koala") {
    save[i] = "monkey";
  } else if (save[i] !== "bebek") {
    save[i] = "biawak";
  } else {
    save[i] = "ayam";
  }
}
// console.log(save);

// -- Hash -> memasangkan setiap elemen dengan nomor unik
let phoneContact = new Map();
phoneContact.set("Bob", "123-456-7890");
// "Bob" -> key, "123-456-7890" -> value
phoneContact.set("John", "987-654-3210");
phoneContact.set("Jane", "999-123-4567");

// console.log("list contact : ", phoneContact);
// console.log('search for "Bob" : ', phoneContact.get("Bob")); // -> untuk mendapatkan nomor telepon Bob, harus menyebut "Bob" nya dulu sebagai key

let saveContact = [];
phoneContact.forEach((value, key) => {
  saveContact.push({
    name: key,
    phone_number: value,
  });
});
// console.log("collect phone number : ", saveContact);
// console.log("----------------------------------------------------");

let employee = new Map();
employee.set("A201", "Budi");
employee.set("B022", "Joko");
employee.set("B021", "Bambang");
employee.set("B017", "Jono");

let saveEmployee = [];
employee.forEach((value, key) => {
  saveEmployee.push({
    id: key,
    name: value,
  });
});

// console.log(saveEmployee);
// console.log("search 'Jono' : ", saveEmployee[3].name);
let decoy = {
  value_a: true,
  value_b: false,
};

for (let i = 0; i < saveEmployee.length; i++) {
  if (saveEmployee[i].name === "Jono" || !decoy.value_b === true) {
    saveEmployee[i].name = "Tarno";
  } else {
    saveEmployee[i].name = "Budi";
  }
}

// console.log(saveEmployee);

// -- Single Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // jika list masih kosong, node baru menjadi head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // bergerak ke node terakhir
      }
      current.next = newNode; // menyambungkan node terakhir dengan node baru
    }
  }
}

const list = new LinkedList();
list.append("Node 1");
list.append("Node 2");
list.append("Node 3");

// --- Double Linked List
class DoubleNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new DoubleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const doublyList = new DoublyLinkedList();
doublyList.append("Node 1");
doublyList.append("Node 2");
console.log(doublyList);
