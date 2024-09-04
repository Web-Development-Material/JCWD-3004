// -- OBJECT
// create object
let person = {
  name: "John Doe", // --> "name" = property, "John Doe" = value
  age: 30, // --> "age" = property, 30 = value
};
let newPerson = { ...person }; // --> cloning object with spread operator

// add a new property
console.log("before add property : ", person);
person.gender = "male";
console.log("after add property : ", person);
console.log(
  " ----------------------------------------------------------------"
);

// modify values
console.log("before modify value : ", person);
person.age = 25;
person.name = "Jane Doe";
person.gender = "female";
console.log("after modify value : ", person);
console.log(
  " ----------------------------------------------------------------"
);

// delete property
console.log("before delete property : ", person);
delete person.gender;
console.log("after delete property : ", person);
console.log(
  " ----------------------------------------------------------------"
);

// cloning object
console.log("cloning into a new object : ", newPerson);
console.log(
  " ----------------------------------------------------------------"
);

// access property or value
console.log("origin object : ", newPerson);
console.log("access property : ", Object.keys(newPerson));
console.log("access value : ", Object.values(newPerson));
console.log(
  " ----------------------------------------------------------------"
);

// looping object
for (let key in newPerson) {
  console.log(key + " : " + newPerson[key]);
}

// destructuring assignment
const { name, age } = newPerson;
console.log(name);
console.log(age);
console.log(
  " ----------------------------------------------------------------"
);

// nested object
const member = {
  username: "John Doe",
  isVerified: false,
  address: {
    street: "Orchard Road",
    zip: 123456,
  },
};

console.log("street : ", member.address.street);
console.log("zip : ", member.address.zip);
console.log("phone : ", member?.address?.phone);
console.log(
  " ----------------------------------------------------------------"
);

// keyword "this"
const car = {
  brand: "Toyota",
  getBrand: function () {
    return this.brand;
  },
};

// console.log(car.getBrand());
const character = {
  username: "user123",
  health: 100,
  power: 100,
  attack: function () {
    return this.power - 10;
  },
  damage: function (damage) {
    return this.health - damage;
  },
};

const probabilityDamage = Math.floor(Math.random() * 5);
console.log(
  "karakter menyerang, power berkurang sebanyak : ",
  character.attack()
);
console.log(
  "health berkurang sebanyak : ",
  character.damage(probabilityDamage)
);
console.log(
  " ----------------------------------------------------------------"
);

// Object.assign()
let target = { usernameA: "John" };
let source = { usernameB: "Bob" };
let returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

// Object.entries()
// console.log(Object.entries(returnedTarget));

// -- how to access multiple array 2D
let accessTarget = Object.entries(returnedTarget);
console.log(accessTarget);
console.log(accessTarget[1]);
console.log(accessTarget[1][1]);
console.log(
  " ----------------------------------------------------------------"
);

// --- how to access triple array 3D
const listOfDevice = [
  [["TWS"], ["Headset"], ["Headphone"]],
  [["Laptop"], ["Smartphone"], ["Tablet", "iPad"]],
];

console.log(listOfDevice[1][2][0]);
console.log(listOfDevice[1][2][1]);
console.log(
  " ----------------------------------------------------------------"
);

// -- create Class
// case 1 : animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    if (!this.name === undefined || !this.age === undefined) {
      return this.name + " is " + this.age + " years old";
    } else {
      return "check your name or age";
    }
  }
}

let dog = new Animal("Buddy", 3);
let cat = new Animal("Bob", 2);
let bunny = new Animal("Loki");
// console.log(dog.describe());
// console.log(cat.describe());
// console.log(bunny.describe());

// case 2 : library management
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log("You have borrowed " + this.title + " by " + this.author);
    } else {
      console.log("Sorry, " + this.title + " is currently not available.");
    }
  }
  returnBook() {
    this.isAvailable = true;
    console.log("You have returned " + this.title + ". Thank you!");
  }
}

let book = new Book("Harry Potter", "JK Rowlings");
// book.borrowBook();
// book.borrowBook();
// book.returnBook();
// book.borrowBook();

// case 3 : f&b orders
class Order {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.totalAmount = 0;
  }
  addItem(itemName, price) {
    this.items.push({
      itemName: itemName,
      price: price,
    });
    this.totalAmount += price;
    console.log(this.items);
    console.log(
      "Added " +
        itemName +
        " to the order. Current total : " +
        this.totalAmount.toFixed(2)
    );
  }
  removeItem(itemName) {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
      if (this.items[i].itemName === itemName) {
        this.totalAmount -= this.items[i].price;
        this.items.splice(i, 1);
        console.log(
          "Removed " +
            itemName +
            " from the order. Current total : " +
            this.totalAmount.toFixed(2)
        );
      }
    }
  }
  checkout() {
    console.log(
      "Order for " +
        this.name +
        " has been completed. Total amount due : " +
        this.totalAmount.toFixed(2)
    );
    this.items = [];
    this.totalAmount = 0;
  }
}

let order = new Order("John Doe");
// order.addItem("Ayam Bakar", 25);
// order.addItem("Ketoprak", 17);
// order.removeItem("Ketoprak");
// order.checkout();

// let foods = [
//   {
//     itemName: "Ayam Bakar",
//     price: 25,
//   },
//   {
//     itemName: "Ketoprak",
//     price: 17,
//   },
// ];

// const targetName = "Ketoprak";
// for (let i = 0; i < foods.length; i++) {
//   if (foods[i].itemName === targetName) {
//     console.log("Found ketoprak");
//   }
// }
console.log(
  " ----------------------------------------------------------------"
);

// public & private property
class User {
  name; // --> public property
  #email; // --> private property (tidak bisa diakses dari luar)

  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }
}

let user = new User("John Doe", "johndoe123@example.com");
// console.log(user.name);
// console.log(user.getEmail());
// console.log(user.#email); // --> jika dipaksa dicetak, akan error

// setter & getter
class Person {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }
  get displayName() {
    return this.name;
  }
  set displayName(newName) {
    this.name = newName;
  }
  get counter() {
    return this.count - 1;
  }
  set counter(count) {
    this.count = count;
  }
}

let personObj = new Person("Bob", 10);
// console.log(personObj.displayName);
// console.log(personObj.counter);
// personObj.name = "Jane";
// console.log(personObj.displayName);

// inheritance concept
// parent class
class Mammal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  speak() {
    return this.name + " make a noise.";
  }
}

// children class -> Dog
class Dog extends Mammal {
  constructor(name, color, breed) {
    super(name, color); // memanggil constructor dari parent
    this.breed = breed;
  }
  speak() {
    return this.name + " barks, and have a color " + this.color;
  }
  detail() {
    return {
      name: this.name,
      color: this.color,
      breed: this.breed,
    };
  }
}

// children class -> Cat
class Cat extends Mammal {
  constructor(name, color, race) {
    super(name, color);
    this.race = race;
  }
  speak() {
    return this.name + " meow, and have a color " + this.color;
  }
  detail() {
    return {
      name: this.name,
      color: this.color,
      race: this.race,
    };
  }
}

let myDog = new Dog("Max", "Brown", "Golden Retriever");
console.log(myDog.speak());
console.log(myDog.detail());

let myCat = new Cat("Bob", "White", "American Shorthair");
console.log(myCat.speak());
console.log(myCat.detail());
