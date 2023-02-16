class Shape{
    #name; 
    
    get getName() {
        return this.#name;
    }

    set setName(name) {
        this.#name = name;
    }

    draw (){
        console.log("drawing a shape");
    }
}

class Circle extends Shape{
    constructor(name){
        super(name);
    }

    draw (){
        console.log("drawing a circle");
    }
}

class Square extends Shape {
    constructor(name){
        super(name);
    }

    //draw (){
    //    console.log("drawing a square");
    //}
}

const aShape = new Shape("random");
const aCircle = new Circle("circle");
const anSquare = new Square("square");

//console.log(aShape);
//console.log(aShape.draw());
//console.log(aCircle);
//console.log(aCircle.draw());
//console.log(anSquare);
//console.log(anSquare.draw());

console.log(aCircle instanceof Circle);
console.log(aCircle instanceof Shape);
console.log(aCircle instanceof Object);

