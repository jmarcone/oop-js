//const objectLiteral = {
//    name: "my name",
//    study: function(){
//        console.log("I'm suffering!");
//    }
//}

class Student {
    constructor( name, age = 18, hobbies = []){
        this.name = name;
        this.age = age
        this.hobbies = hobbies;
    }

    study() {
        console.log(`${this.name} is suffering!`);
    }

    talkAboutMyHobbies() {
        //console.log(`${this.name} is talking about their hobbies!`);
        this.hobbies.forEach( function(hobby)   {
            console.log(`${this.name} looooooove to ${hobby}`)
        }.bind(this))
    }

    bindedTalkAboutMyHobbies() {
        //console.log(`${this.name} is talking about their hobbies!`);
        this.hobbies.forEach( (hobby) => {
            console.log(`${this.name} looooooove to ${hobby}`)
        })
    }
}



const newStudent = new Student('student 1', 25);
const newStudent2 = new Student('student 2');
const newStudent3 = new Student("student 3", 20, ['painting', 'hiking']);


//console.log(newStudent);
//console.log(newStudent2);
//console.log(newStudent3);

//newStudent.talkAboutMyHobbies();
//newStudent3.talkAboutMyHobbies();
//newStudent2.study();
//newStudent2.study();

//console.log(typeof newStudent);

//console.log(this);
