class Animal {
    constructor(weight, habitat){
        this.weight = weight;
        this.habitat = habitat;
    }

    move() {
        console.log("the animal is moving");
    }
}



class Dog extends Animal{
    constructor(name, breed, weight = 10, habitat = 'street'){
        super( weight, habitat);
        this.name = name;
        this.breed= breed
        this.isGoodDog = true;
    }
}

class Cat extends Animal{
    constructor(name, breed, weight = 5, habitat = 'barn'){
        super( weight, habitat);
        this.name = name;
        this.breed= breed
        this.isCute = true;
    }
}

const anAnimal = new Animal(10.5, "terrestrial");
const aDog = new Dog("bobby", "chiuahua");
const aCat = new Cat("Gardfield", "orange");

//console.log(anAnimal);
//console.log(aDog);
//console.log(aCat);

//console.log(aCat instanceof Cat);
//console.log(aCat instanceof Animal);
//console.log(aCat instanceof Dog);

//console.log(typeof Animal);
//anAnimal.move();
//aCat.move();

function Fish(weight, habitat) {
    this.weight = weight;
    this.habitat = habitat;
}

const aFish = new Fish(0.05, "deep sea");

console.log(aCat);
console.log(aFish);

Object.setPrototypeOf(aFish, Animal);

console.log(aFish);


