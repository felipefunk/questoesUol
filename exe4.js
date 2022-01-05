function run (input){
input = JSON.parse(input)
input.name = "Superman"
input = JSON.stringify(input)
return input
}

let json = '{"name" : "Batman"}'

json = run(json)

console.log(json);