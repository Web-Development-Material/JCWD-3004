// Sharing Photo App

// Create class for story
class Story {
  constructor() {
    this.ListPhoto = new LinkedList();
  }

  addImage(imageFile) {
    this.ListPhoto.insertNode(imageFile);
  }

  viewStory() {
    this.ListPhoto.viewLinkedList();
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create Class for linkedlist
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(value) {
    const newNode = new Node(value);

    // Check if the head is null or not
    if (!this.head) {
      this.head = newNode;
    } else {
      // Point to currentNode
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      //   Jika nextnya sudah tidak ada, maka nextnya diassign dengan new node
      currentNode.next = newNode;
    }
  }
  
  viewLinkedList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log("Viewing Image : ", currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const farelStory = new Story();

farelStory.addImage("image1.jpg");
farelStory.addImage("image2.jpg");
farelStory.addImage("image3.jpg");
farelStory.addImage("image4.jpg");
farelStory.viewStory();
