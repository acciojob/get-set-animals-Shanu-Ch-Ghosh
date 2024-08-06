//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}

	get makeSound(){
		console.log(`The ${this.species} makes a sound.`);
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
		this.species = species;
	}

	purr(){
		console.log("purr");
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
		this.species = species;
	}

	bark(){
		console.log("woof");
	}
}

let myCat = new Cat("Mini");
myCat.makeSound;
myCat.purr();

let myDog = new Dog("Golden Retriever");
myDog.makeSound;
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
