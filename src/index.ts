import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList';

// Numbers Collection
const numbersCollection = new NumbersCollection([10, -3, -5, 0, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Characters Collection
const charactersCollection = new CharactersCollection('XaaaYb') 
charactersCollection.sort();
console.log(charactersCollection.data);

// Linked List
const linkedList = new LinkedList() 
linkedList.add(10);
linkedList.add(-10);
linkedList.add(20);
linkedList.add(-20);
linkedList.sort();
console.log(linkedList.print());