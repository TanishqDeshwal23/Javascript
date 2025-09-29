let person = {
    name:"harry",
    age:50,
    isStudent: true
}
// console.log(person);
// console.log(person.age);
// console.log(person["name"]);
let user = new Object();
user.name = "bob";
user.age = 57;
user.email = "ys234@GMAIL.COM"; 
// console.log(user.email);
// console.log(user.age);
// console.log(user.name);
person.email = "Kumaoni@gmail.com";
Object.freeze(person.email);
console.log(person);
let student = {name: "david",grade :"a"};
console.log(student.name);
console.log(student["grade"]);
student.age = 20;        // Add new
student.grade = "A+";   
console.log(student.name);
console.log(student.grade);
delete student.grade();
console.log(student.grade);
console.log()