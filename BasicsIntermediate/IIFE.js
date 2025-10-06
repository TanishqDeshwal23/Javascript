// (function (){
//     console.log("IIFE runs immediately!");
// })();
(function(){
    let mssge = "hello form iife";
    console.log(mssge);
    
})();
// console.log(mssge); YE error show karega kyunki mssge ko humne sirf IIFE ke andar define kiya tha . ye global scope ko pollute nhi karta h
(function chai(){ //Named IIFE
    console.log("DB CONNECTED");
})();

((name) =>{ //Unamed IIFE jisme humne value bhi ek sath hi de rkahi h
    console.log(`DB CONNECTED ${name}`);
})('tanishq');