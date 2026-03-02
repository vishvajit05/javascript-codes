// let student={
//     name:"Vishvajit",
//     age:22,
//     marks:85
// };
// console.log(student.name); 
// console.log(student.age);
// console.log(student.marks);


// // let user={
// // name:"Alice",
// // greet(){
// //     console.log("Hello, " + this.name);
// // }
// // };
// // greet();


// function student(name, age, marks){
//     this.name=name;
//     this.age=age;
//     this.marks=marks;
// }
// let s=new s("Vishvajit", 22, 85);
// console.log(s.name);
// console.log(s.age);
// console.log(s.marks);



// student.prototype.grade=function(){
//     console.log(this.name,this.marks);
// }

class Student{
    constructor(name, age, marks){
        this.name=name; 
        this.age=age;
        this.marks=marks;
    }   
    grade(){
        console.log(this.name,this.marks);
    }
}
let s1=new Student("Vishvajit", 22, 85);
s1.grade();
