console.log("Hello world");
var someObject = { str: "Some text", id: 5 };
console.log(someObject);

const s = 23;
let v = 24;
v = 25;
console.log(s, v);

let name = "Star";
let age = 45;
let pass = true;
let x = null;
let y = undefined;
let z;
console.log(typeof pass);
console.log(typeof z);
console.log("My name is " + name + " and i am " + age);
const a = "hello world";
console.log(a.substring(6, 11).toLowerCase());
const b = "tech, design, marketing, finance, investors";
console.log(b.split(", "));

const fruits = ["apples", "oranges", "peas", "guvava"];
fruits[4] = "banana";
fruits.unshift("strawberrys");
fruits.push("grapes");
console.log(fruits);
let todo = [
{
id: 1,
text: "take out trash",
iscompleted: true,
},
{
id: 2,
text: "uncles marriage",
iscompleted: true,
},
{
id: 3,
text: "meeting with boss",
iscompleted: false,
},
];

// const todoJSON=JSON.stringify(todo);
// console.log(todoJSON);
// function head(){
// const title=document.getElementsByClassName('heading');
// title.style.color='red';
// title.innerHTMl='hello world'
// }

// for(let i=0; i<=todo.length;i++){
// console.log(todo[i].text);
// }
// todo.forEach(function (todos){
// console.log(todos.text);
// })
const todocomplete = todo
.filter(function (todos) {
return todos.iscompleted === true;
})
.map(function (todos) {
return todos.text;
});

console.log(todocomplete);

const addnums = (num1, num2) => {
return num1 + num2;
};
console.log(addnums(25, 55));

function person(firstname, lastname, dob){
this.firstname= firstname;
this.lastname=lastname;
this.dob=new Date(dob);
this.getBirthYear=function(){
return this.dob.getFullYear();
}
this.getFullName=function(){
return `${this.firstname} ${this.lastname}`;
}
}
//Class
class person {
constructor(firstname, lastname, dob) {
this.firstname = firstname;
this.lastname = lastname;
this.dob = new Date(dob);
}
getBirthYear() {
return this.dob.getFullYear();
}
getFullName() {
return `${this.firstname} ${this.lastname}`;
}
}
const person1 = new person("john", "doe", "12/9/2022");
const person2 = new person("dim", "doe", "12/5/2022");
const person3 = new person("light", "doe", "12/7/2022");
const person4 = new person("advance", "doe", "12/3/1992");

console.log(person4.getBirthYear(), person4.getFullName());
console.log(person2.getBirthYear(), person2.getFullName());
console.log(person3.getBirthYear(), person3.getFullName());
console.log(person1);

<!-- 30/03/2022 -->

const list = document.querySelector(".items");
// list.lastElementChild.remove();
// list.remove();
// list.remove();
list.firstElementChild.textContent = "hello";
list.children[1].innerHTML = "Hello World..!!";
list.lastElementChild.innerText = "India";

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
// e.preventDefault();
alert("Submited");
document.querySelector("#my-form").style.background = "#ccc";
document.querySelector(".items").style.background = "#ccc";

console.log("click");
});

<!-- 31/03/2022 -->

setTimeout--> Allows us to run the function once after the interval of time

clearTionout--> Allows us to run the function repeatedly after the interval of time

Browser events:

    click
    contextmenu
    mouseover/mouseout
    mousedown/mouseup

    submit
    focus

Higher Order function & Arrays:

    1.for loop
     for(let i=0; i<array.length;i++){}

    2.forEach loop
     arrays.forEach(functon(name){
         console.log(name);
     })

.PUSH()-->The push() method adds one or more elements to the end of an array and returns the new length of the array.

.filter-->The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    Syntax--> const filterItems=items=array.filter((item)=>{

        return item.price <=100
    })

.map --> map() array method में हर एक array element पर function को call करके उसका नया array return किया जाता है |
