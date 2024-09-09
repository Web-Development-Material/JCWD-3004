class Ticket {
  constructor(movieTitle, seatNumber, ticketId) {
    this.movieTitle = movieTitle;
    this.seatNumber = seatNumber;
    this.ticketId = ticketId;
  }
}

class StandardTicket extends Ticket {
  constructor(movieTitle, seatNumber, ticketId, snackPackage) {
    super(movieTitle, seatNumber, ticketId);
    this.snackPackage = snackPackage;
  }
  chooseSnackPackage(snackPackage) {
    this.snackPackage = snackPackage
    return `snack package for ${this.ticketId}, is set to ${this.snackPackage}`;
  }
  displayInfo() {
    return `Movie: ${this.movieTitle}, Seat: ${this.seatNumber}, Ticket ID: ${this.ticketId}`
  }
}

class VipTicket extends Ticket {
  constructor(movieTitle, seatNumber, ticketId, loungeAccess) {
    super(movieTitle, seatNumber, ticketId)
    this.loungeAccess = loungeAccess
  }
  grantLoungeeAccess(hasAccess) {
    this.loungeAccess = hasAccess
    if(hasAccess === true) {
      return `Lounge access for Ticket ID: ${this.ticketId} is granted`
    } else {
      return `Lounge access for Ticket ID: ${this.ticketId} is Not granted`
    }
  }
  displayInfo() {
    return `Movie: ${this.movieTitle}, Seat: ${this.seatNumber}, Ticket ID: ${this.ticketId}`
  }
}

const standardTicket = new StandardTicket("Inception", "A12", "ST123")
console.log(standardTicket.displayInfo())
console.log(standardTicket.chooseSnackPackage("Popcorn & Soda"))

const vipTicket = new VipTicket("Interstellar", "B1", "VT456")
console.log(vipTicket.displayInfo())
console.log(vipTicket.grantLoungeeAccess(true))