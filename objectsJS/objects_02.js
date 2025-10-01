const regularUser = {
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname : "Tanu",
            lastname:"Deshwal",
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username);
// console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};
// const obj4 = {obj1,obj2,obj3};
const obj4 = Object.assign({},obj1,obj2,obj3);
// const obj4 = Object.assign(obj1,obj2,obj3);// ye use nhi karna chaiye bina braces ke 

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
]
// console.log(users[1].email);

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser.name);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ****************Object de structure***********//

const course ={
    coursename:"highstudy",
    price:99,
    courseInstructor: "Tanishq",
    // courseInstructor: "hitesh"
}
const{ courseInstructor : Instructor} = course;
// const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(Instructor);




// const course = {
//     coursename: "js in higher",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course;

// // console.log(courseInstructor);
// console.log(instructor);