let personProto = {
    name: "Alex",
    greet(){
        return "Hello, I'm "+this.name;
    },
}

let john = Object.create(personProto);
john.name="john";
console.log(john.greet);
let mary={};
Object.setPrototypeOf(mary,john);

mary.name= "Mary";
console.log(mary.greet);

function inheristFrom(obj,proto){
    return (Object.getPrototypeOf(obj)=== proto);
}

console.log(inheristFrom(john,personProto));