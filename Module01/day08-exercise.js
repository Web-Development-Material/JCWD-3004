// --- task 1
class Employee {
  constructor() {
    this.hours = 0;
  }

  addWorkingHours(hours) {
    this.hours += hours;
  }
}

class FullTimeEmployee extends Employee {
  constructor() {
    super();
  }

  calculateTotalSalary() {
    if (this.hours <= 6) {
      return this.hours * 100000;
    } else {
      return 6 * 100000 + (this.hours - 6) * 75000;
    }
  }
}

class PartTimeEmployee extends Employee {
  constructor() {
    super();
  }

  calculateTotalSalary() {
    if (this.hours <= 6) {
      return this.hours * 50000;
    } else {
      return 6 * 50000 + (this.hours - 6) * 30000;
    }
  }
}

let fullTime = new FullTimeEmployee();
let partTime = new PartTimeEmployee();

// fullTime.addWorkingHours(8);
// partTime.addWorkingHours(8);

// console.log(
//   "Total salary for full-time employee: IDR ",
//   fullTime.calculateTotalSalary()
// );
// console.log(
//   "Total salary for part-time employee: IDR ",
//   partTime.calculateTotalSalary()
// );

// --- task 2
class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  damage(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      this.name +
        " (Health => " +
        this.health +
        ", Power => " +
        this.power +
        ")"
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
  }

  getRandomItem() {
    return {
      health: Math.floor(Math.random() * 2) * 10,
      power: Math.floor(Math.random() * 2) * 10,
    };
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("Current player : " + this.currentPlayer.name);
      this.player1.showStatus();
      this.player2.showStatus();

      // -- get random item
      let item1 = this.getRandomItem();
      let item2 = this.getRandomItem();

      console.log(
        this.player1.name +
          " receives +" +
          item1.health +
          " health and +" +
          item1.power +
          " power"
      );
      console.log(
        this.player2.name +
          " receives +" +
          item2.health +
          " health and +" +
          item2.power +
          " power"
      );

      this.player1.useItem(item1);
      this.player2.useItem(item2);

      this.player1.showStatus();
      this.player2.showStatus();

      // -- shooting
      if (this.currentPlayer === this.player1) {
        this.player2.damage(this.player1.power);
        this.currentPlayer = this.player2;
      } else {
        this.player1.damage(this.player2.power);
        this.currentPlayer = this.player1;
      }

      console.log("After shooting : ");
      this.player1.showStatus();
      this.player2.showStatus();
    }
    // -- announce a winner
    let winner =
      this.player1.health > 0 ? this.player1.name : this.player2.name;
    console.log(winner + " wins the game!");
  }
}

const player1 = new Player("Player A");
const player2 = new Player("Player B");
const game = new ShootingGame(player1, player2);
game.start();
