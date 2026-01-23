const  myNumbers =[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNumbers.map((num) => num*10);
const newNums = myNumbers
                      .map((num) => num*10)
                      .map((num) => num + 2)
                      .map((num)=> num-4)
                      .filter((num) => num >=38)
                      .filter((num)=> num<=68);
                      //isme har num ki value uske previous num ko calcualte karke ayegi //ISKO CHAINING BOLTE H MAINLY
console.log(newNums);
