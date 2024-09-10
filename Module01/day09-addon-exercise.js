// task 1
class PhotoNode {
  constructor(photoUrl) {
    this.photoUrl = photoUrl;
    this.next = null;
  }
}

class Story {
  constructor() {
    this.head = null;
  }

  addPhoto(photoUrl) {
    const newPhoto = new PhotoNode(photoUrl);
    if (this.head === null) {
      this.head = newPhoto;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newPhoto;
    }
  }

  viewStory() {
    let current = this.head;
    if (current === null) {
      console.log("Story not found");
      return;
    }
    while (current !== null) {
      console.log("Viewing story : " + current.photoUrl);
      current = current.next;
    }
    console.log("You have reached the end of the story.");
  }
}

const myStory = new Story();
// myStory.addPhoto("photo1.jpg");
// myStory.addPhoto("photo2.jpg");
// myStory.addPhoto("photo3.jpg");

// myStory.viewStory();

// -- task 2
class SongNode {
  constructor(songTitle) {
    this.songTitle = songTitle;
    this.next = null;
    this.prev = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addSong(songTitle) {
    const newSong = new SongNode(songTitle);
    if (this.head === null) {
      this.head = this.tail = this.current = newSong;
    } else {
      this.tail.next = newSong;
      newSong.prev = this.tail;
      this.tail = newSong;
    }
  }

  playForward() {
    if (this.current === null) {
      console.log("Playlist is empty");
      return;
    }
    if (this.current.next === null) {
      console.log(
        "This is a last song in the playlist : ",
        this.current.songTitle
      );
      return;
    }
    this.current = this.current.next;
    console.log("Playing song : ", this.current.songTitle);
  }

  playBackward() {
    if (this.current === null) {
      console.log("Playlist is empty");
      return;
    }
    if (this.current.prev === null) {
      console.log("This is a last song in the playlist");
      return;
    }
    this.current = this.current.prev;
    console.log("Playing song : ", this.current.songTitle);
  }
}

const myPlaylist = new Playlist();
// myPlaylist.addSong("lagu 1");
// myPlaylist.addSong("lagu 2");
// myPlaylist.addSong("lagu 3");
// myPlaylist.playForward();
// myPlaylist.playForward();
// myPlaylist.playBackward();
// myPlaylist.playBackward();

// task 3
class TextEditor {
  constructor() {
    this.content = "";
    this.undoStack = [];
    this.redoStack = [];
  }

  write(text) {
    this.undoStack.push(this.content);
    this.content += text;
    this.redoStack = [];
    console.log("After write " + text + " -> Text Content : " + this.content);
  }

  undo() {
    if (this.undoStack.length > 0) {
      this.redoStack.push(this.content);
      this.content = this.undoStack.pop();
      console.log("After undo() -> Text Content : " + this.content);
    } else {
      console.log("Nothing to undo");
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      this.undoStack.push(this.content);
      this.content = this.redoStack.pop();
      console.log("After redo() -> Text Content : " + this.content);
    } else {
      console.log("Nothing to redo");
    }
  }
}

const editor = new TextEditor();
// editor.write("Hello");
// editor.write(" World");
// editor.undo();

// task 4
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}

let bookPrices = [35000, 12000, 70000, 24000, 15000, 56000, 45000];
// console.log(bubbleSort(bookPrices));
let sortedBook = bookPrices.sort((a, b) => b - a);
// console.log(sortedBook);

// task 5
function binarySearchItem(items, targetCost) {
  let low = 0;
  let high = items.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midItem = items[mid];

    if (midItem.cost === targetCost) {
      return midItem;
    } else if (midItem.cost < targetCost) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const availableGold = 2500;
const targetCost = 1400;
const items = [
  {
    name: "Magic Stick",
    cost: 200,
  },
  {
    name: "Boots of Speed",
    cost: 500,
  },
  {
    name: "Helm of Iron Will",
    cost: 925,
  },
  {
    name: "Broadsword",
    cost: 1200,
  },
  {
    name: "Claymore",
    cost: 1400,
  },
  {
    name: "Battle Fury",
    cost: 4200,
  },
];

const foundItem = binarySearchItem(items, targetCost);
console.log(foundItem);
if (foundItem && availableGold >= foundItem.cost) {
  console.log(
    "Item Found : Yes, " +
      foundItem.name +
      " is found and you have enough gold to purchase it"
  );
} else if (foundItem) {
  console.log(
    "Item Found : Yes, " +
      foundItem.name +
      " but you don't have enough gold to purchase it"
  );
} else {
  console.log("Item Found : No, the item is not available in the shop");
}
