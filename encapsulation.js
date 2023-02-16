class Student {
    #name;

    #firstName;
    #lastName;

    get getMarks(){
        //TODO

        return [10,9,7];
        //return this.#firstName + this.#lastName;
    }    

    set setName(name){
        this.#name = name;
    }
}

const anStudent = new Student();

anStudent.setName = "my name";

console.log(anStudent.getName);

