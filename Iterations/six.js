const myNums=[1,2,3,4,5,6,7,8,9,10];
let num = myNums.filter( (num) => num > 4);
console.log(num);
 num = myNums.filter( (num)=> {
    return num>5;
})
console.log(num);
const newNums=[];
myNums.forEach( (num)=>{
    if(num > 2){
    newNums.push(num);
    }
})
console.log(newNums);


const books=[
    {
        title:'harry potter', genre:'story', publish:'1990',edition:'2023'
    },
    {
        title:'transalvania', genre:'sci-fi', publish:'1992',edition:'2005'
    },
    {
        title:'ramayana', genre:'realworld', publish:'1985',edition:'1988'

    },
    {
        title:'ikaagai', genre:'life-lesson', publish:'1990',edition:'2023'

    },
    {
        title:'Guilivers Travel', genre:'Travel', publish:'1997',edition:'2017'

    }
]
let userbooks = books.filter( (user)=> user.edition >1990);
console.log(userbooks);
