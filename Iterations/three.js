let arr=[1,2,3,4,5];
for(const i of arr){
    console.log(i);
}
let greetings = "Helloworld";
for(const greet of greetings){
    console.log(`char in greetings is ${greet}`);
}

//---------------------maps-------------------
const maps =  new Map();
maps.set("in","india");
maps.set("rus","russia");
maps.set("chi","china");
console.log(maps);
console.log(maps.get("chi"));
console.log(maps.size);
for (const [key, value] of maps) {
    console.log(key, ':-', value);
}