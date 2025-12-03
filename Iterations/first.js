// let number = [10,20,30,40,50];
// for (let i = 0; i<=number.length(); i++) {
//     if (number == 5) {
//         console.log("number founded successfully");
//     }else{
//         console.log("number dosen't found");
//     }
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);


// }
// let text="";
// for(let i=0;i<5;i++ ){
//      text +="no is" + i ;
//      console.log(text);
// }
// for(let i=0;i<10;i++){
//     const element =i;
//     console.log(element);
// }

// for (let i=0;i<=10;i++){
//     console.log(`outer loop value ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`inner loop value ${j}`);
        
//     }
    
// }
// let array =["fish","dog","cat"];
// console.log(array.length);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
//}

// -----------------------BREAK AND CONTINUE -----------------------

for (let index = 1; index <= 20; index++) {
     if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}