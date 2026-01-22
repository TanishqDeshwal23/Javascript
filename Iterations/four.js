const myObejct={
    js:'javascript',
    cpp:"c++",
    rb:"ruby",
    swift:"swift by ios"

}
for (const key in myObejct) {
   console.log(`${key} is shortcut for ${myObejct[key]}`);
    
}
const language = ["js","cpp","rb"];
for (const key in language) {
    console.log(language[key]);
    
    
}
const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }----------gives no output----------