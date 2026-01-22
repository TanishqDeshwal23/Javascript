const coding = ['js','cpp','pyhton','ruby','csharp'];
coding.forEach(function (val){
    console.log(val);
})
coding.forEach( (item, index, arr)=> { 
     console.log(item, index, arr);
} )
const myCoding=[
    {
        languageName:'javascript',
    },
    {
        languageName:'python',
    },
    {
        languageName:'swift',
    }
]
myCoding.forEach( item => {
    console.log(item.languageName);
})