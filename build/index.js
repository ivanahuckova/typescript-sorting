"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Numbers Collection
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -3, -5, 0, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Characters Collection
var charactersCollection = new CharactersCollection_1.CharactersCollection('XaaaYb');
charactersCollection.sort();
console.log(charactersCollection.data);
// Linked List
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(10);
linkedList.add(-10);
linkedList.add(20);
linkedList.add(-20);
linkedList.sort();
console.log(linkedList.print());
