// -- type data primitive
let numVar: number = 50;
let strVar: string = "Hello World";
let isValid: boolean | number = false; // -> untuk menambahkan tipe data menggunakan simbol '|'

// typescript menggunakan strict mode

// isValid = 50 -> tidak bisa diupdate dengan tipe data lain (ketika tidak pakai '|')
// isValid = 20; -> baru bisa diupdate dengan tipe data lain  (ketika pakai '|')

// -- type data non-primitive

// array (model biasa)
let arrVar1: number[] = [1, 2, 3, 4, 5]; // -> single element data type
let arrVar2: (number | string)[] = [1, 2, 3, 4, 5, "hello", "world"]; // -> multiple element data type

// array (model generic)
let arrVar3: Array<number> = [1, 2, 3, 4, 5];
let arrVar4: Array<number | string> = [1, 2, 3, 4, 5, "hello", "world"];

// -- interface -> untuk mendefinisikan object
interface Car {
  type: string;
  name: string;
  year?: number; // -> optional property, tidak wajib untuk diisi
}

let car1: Car = {
  type: "sedan",
  name: "bmw i5",
  year: 2022,
};

let car2: Car = {
  // -> kita bisa menggunakan object Car tanpa property "year"
  type: "mpv",
  name: "toyota avanza",
};

// interface bisa menggunakan konsep inheritance dari OOP
// -- contoh 1 --> menggunakan konsep interface

// interface Animal {
//   race: string;
//   age: number;
//   behavior: () => string;
//   feed: (food: string) => string;
// }

// interface Cat {
//   name: string;
//   color: string;
//   details: Animal;
// }

// let cat: Cat = {
//   name: "Bob",
//   color: "gray",
//   details: {
//     race: "british short-hair",
//     age: 3,
//     behavior() {
//       return "Bob can't swim";
//     },
//     feed(food: string) {
//       return "Feeding this cat with " + food;
//     },
//   },
// };

// console.log(cat.details.behavior());
// console.log(cat.details.feed("royal canin"));

// contoh 2 --> menggunakan konsep class biasa

interface Pet {
  name: string;
  age: number;
  behavior?: () => string;
  feed?: (food: string) => string;
}

class Animal {
  // constructor harus dideklarasikan dulu tipe datanya
  name: string;
  age: number;

  // memanggil constructor berdasarkan informasi dari interface Pet
  constructor(data: Pet) {
    this.name = data.name;
    this.age = data.age;
  }

  getInfo() {
    // membuat object baru untuk menampung informasi hewan
    let information: Pet = {
      name: this.name,
      age: this.age,
      behavior() {
        return "This pet can't swim";
      },
      feed(food: string) {
        return "Feeding this pet with " + food;
      },
    };
    console.log("Display information : ", information);

    if (information.behavior) {
      console.log("Behavior : ", information.behavior());
    } else {
      console.log("Behavior : No behavior available");
    }

    if (information.feed) {
      console.log("Feed : ", information.feed("royal canin"));
    } else {
      console.log("Feed : No feeding behavior available");
    }
  }
}

// let pet: Pet = {
//   name: "Bob",
//   age: 3,
// };
// let animal = new Animal(pet);
// animal.getInfo();

// -- type -> untuk mendefinisikan object juga, bedanya type tidak bisa diinheritance

type Person = {
  id: number;
  name: string;
  age: number;
  isVIP: boolean;
};

function getPerson(person: Person) {
  console.log("Checking identity ...");
  if (person.isVIP) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
}

let person: Person = {
  id: 1,
  name: "Bob",
  age: 25,
  isVIP: false,
};

// getPerson(person);

// -- enum -> bentuknya seperti object yang dibuat menggunakan Set/Map
// contoh 1
enum Direction {
  Up = 1,
  Down = 1,
  Left = 2,
  Right = 4,
}

// console.log(Direction.Up);
// console.log(Direction.Right);

// contoh 2
enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

function getHttpStatusMessage(status: HttpStatus) {
  switch (status) {
    case HttpStatus.OK:
      return "Request was successful";
    case HttpStatus.BadRequest:
      return "Bad Request";
    case HttpStatus.Unauthorized:
      return "Unauthorized Access";
    case HttpStatus.NotFound:
      return "Resource Not Found";
    default:
      return "Unknown Status";
  }
}
// console.log(getHttpStatusMessage(HttpStatus.OK));
// console.log(getHttpStatusMessage(HttpStatus.NotFound));

// contoh 3 -> enum dalam bentuk string
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}
console.log(Status);
