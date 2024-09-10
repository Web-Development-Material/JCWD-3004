// Number 3 Undo - Redo Text Editor
class TextEditor {
  constructor() {
    this.words = []; //array kosong untuk menyimpan new/current word
    this.history = []; //array kosong untuk menyimpan undo/redo
  }
  pushItem(text) {
    this.words.push(text);
    this.history = []; //tambahkan new array untuk mereset history setiap new text ditambahkan
  }
  undo() {
    if (this.words.length > 0) {
      this.history.push(this.words.pop());
    } else {
      console.log("Nothing to undo.");
    }
  }
  redo() {
    if (this.history.length > 0) {
      this.words.push(this.history.pop());
    } else {
      console.log("Nothing to redo.");
    }
  }
  showString() {
    return this.words.join(" "); //mengembalikan array ke string
  };
};

let newTextEditor = new TextEditor();

newTextEditor.pushItem("Hello");
newTextEditor.pushItem("World");
newTextEditor.pushItem("Bubu");

console.log("Before Undo: " + newTextEditor.showString());
newTextEditor.undo();
console.log("After Undo: " + newTextEditor.showString());
newTextEditor.redo();
console.log("After redo: " + newTextEditor.showString());

