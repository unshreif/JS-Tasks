//Task 1
var x = 1;
function test() {
    console.log(x);
    var x = 5;
    console.log(x);
}
test();
console.log(x);
//What is the output?

//undefined
//5
//1




//Task 2
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
        var a = 20;
        console.log(a);
    }
    inner();
}
outer();
console.log(a);
//What is the output?

//undefined
// 20
// a is not defined




//Task 3
console.log(foo);
var foo = "Hello";

function sayHi() {
    console.log(foo);
    var foo = "Hi";
    console.log(foo);
}
sayHi();
//What is the output?

//undefined
// undefined
// Hi