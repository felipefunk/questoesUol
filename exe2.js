function run (input){
input.power = "SuperForça"
console.log(input);
}

function run1 (input){
    input["power"] = "SuperForça"
    console.log(input);
    }

let person = {
    name: "Batman",
    power: ""
}

console.log(person);

run1 (person)

console.log(person);