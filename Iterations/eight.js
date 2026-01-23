const myNums = [1,2,3,4,5];
const num = myNums.reduce (function (acc,currval){
    console.log(`value of accumulator is ${acc} and value of current value is ${currval}`);
    return acc+currval;
},0)
const newNum = myNums.reduce((acc,currval)=> acc+currval,0);
console.log(newNum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalPrice = shoppingCart.reduce( (acc,item)=> acc + item.price,0);
console.log(totalPrice);