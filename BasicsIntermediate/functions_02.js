const NewArray = [100,200,500,4500];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(NewArray));

const user = {
    username:"tanu",
    price:599
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);