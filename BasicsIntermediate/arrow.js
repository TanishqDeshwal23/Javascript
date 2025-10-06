const user = {
    username : "tanishq",
    price : 888,
    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
user.welcomeMessage();
user.name = "tanu";
user.welcomeMessage();

//+++++++++++++ARROW FUNCTION+++++++++++++++++++//
const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(88,45));
const Addtwo = (num1,num2)=> num1+num2;
console.log(Addtwo(44,54));

const sumandLog = (a,b)=>{
    console.log("adding numbers....");
    return a+b;
}
console.log(sumandLog(44,45));



const Testuser = {
  name: "Alice",
  regularFn: function() {
    console.log(this.name); 
  },
  arrowFn: () => {
    console.log(this.name); // bcz ye scope ke andar humne name ko define nhi kiya h , ye global scope se aaya hai iss fucntion ke 
  }
};

Testuser.regularFn();
Testuser.arrowFn();
