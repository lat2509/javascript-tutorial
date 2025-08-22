class Person {
    constructor(name,age){
        this.name=name;
        this.age= age;
        
    }
    get isAdult(){
        return this.age >= 18;
    }
    static compareAge(a,b){
        if (a.age>b.age){
            return a.age;
        }
        return b.age;
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age); // dung super de goi toi constructor cua Person
        this.grade=grade;
    }
    study(){
        console.log("Studying.....");
    }
}


const anotherPerson = new Student("john",18,"B");

const alice = new Student("Alice", 20, "A");
console.log(alice.isAdult);
console.log(Student.compareAge(alice, anotherPerson));

console.log(alice instanceof Person);
console.log(alice instanceof Student);