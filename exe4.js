function run (input){
    input = JSON.parse(input)
    input.name = "Superman"
    input = JSON.stringify(input)
    return input
    }
    

const run2 = (input) => {
    input = JSON.parse(input)
    input["name"] = "Scooby-Doo"
    input = JSON.stringify(input)
    return  input
}
    let json = '{"name" : "Batman"}'
    
    json = run2(json)
    
    
    
    console.log(json);