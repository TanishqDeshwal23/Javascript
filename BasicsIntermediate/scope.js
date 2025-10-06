var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    console.log("INNER: ", b);
    
}
console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = "tanishq";
    function two(){
        const website = "gfg";
        console.log(username);
    }
    two();
    // console.log(website);
}
one();
// console.log(username);


if (true){
    const username = "tanu";
    if(username === "tanu"){
        const website = "gfg";
        console.log(username  + " " + website);
    }
}
console.log(website);

// ++++++++++++++interseting methods++++++++++++++++++++++
console.log(addone(5));
function addone(num1){
    return num1 + 1;
}
addone(5)
console.log(addone(5));

console.log(addTwo(5));
const addTwo = function(num2){
    return num2 + 2;
}
addTwo(5);
console.log(addTwo(5));