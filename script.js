// declaring variables
let x,y;
x=6;
y=4;
let z=x+y;

function getSum(){
    window.alert( "sum is " + z )
}

// declaring string variables
let myname="Charles Ouma";

function getName() {
    console.log("goodmorning" + myname);
}
// javascript uses arithmrtic operators(+,-,*,/) to compute values
let m,n;
m=8;
n=6;
let p=m/n;

function getquotient(){
    window.alert("quotient of "+ m + " and " + n + " is "+ p);
}

// declaring varibles using VAR
var f=1.5;
var g=f*10;

// Declaring varibles using const keyword

/*
_varibles defined with const
1.Cannot be redeclared
2.Cannot be reasigned
3.Have a block scope
*/
function getVolume(){
    const PI=3.142
    let radius=14
    let height=42

    let volume=PI*(radius*radius)*height

    document.getElementById("volume").innerHTML="The volume of the cylinder is " + volume;    

}

// Javascript uses logical operators- to dtermine the logic between variables and values. The three logical operators are'and', 'or' and 'not'
let q,r;
q=9;
r=3;

function getlogic(){
    window.alert(q<10 && r>1);
}
// Logical or returns true if one or both expressions are true othnerwise it returns false
let a,b;
a=4;
b=6;

function compareNum(){
console.log("the comparisson is " + (a==5||b==5));
console.log("the comparisson is " + (a==4||b==4));
console.log("the comparisson is " + (a==4||b==6));
}

// The NOT(!) returns true for false statement and false for true statements
let u,v;
u=3;
v=3;

function notlogic(){
    window.alert(!(u===v));
}

// DATA TYPES
/* Broadly divided into primitive and non primitive
A). Primitive data types
    These are immutable(their values cannot change once assigned) eg.
   1.String-These are textual data enclosed in quotes eg."Hello world" 
   2.Number-Represents both integers and floating-point numbers eg.18 ,3.142
   3.Boolean These are logic types with only two values: True/ False
   4.Undefined-Is avariable declared but not a.ssigned eg.let x;
   5.Null-Represents the intentional abscence of any object or value eg.let y=null
   6.BigInt-Used to store integer values that are two big to be represented by a normal java script number eg.let x=BigInt("50")
   7.Symbol-A unique and immutable value often used as object property identifyer eg.let symbol("UNIQUE")

B.Non primitive data types
These are mutable and stored by reference
    1. Object-A collection of key value pairs 
        let student={
        Name:"Charles Obinju",
        Age:18,
        Course:":BMIT"
        }
    2.Array-It is a special varible which can hold more than onr value
        const shoes=["rubbers", "crocodile", "clarks","jordans","lois vitton"]
    3.Functions-A block of code designed to perform a particular task when invoked
        function getElementByid(){
        console.log("id")
        }
    4.Date-Represents date in time eg.
        let now=new Date();



*/
/*
JAVASCRIPT EVENTS
Html events are "things" that happen to html elements
Javascript allows you execute a code when events are detected eg.
   1.onchange=html element has been changed
    2.onclick-the user clicks an html element
    3.onload-The browser has finished loading the page 
    4.Onmouse over-The user moves the mouse over an html element 
    5.Onmouseout-The user moves the mouse away from an html element
    6.Onkeyterm-The user pushes a keyboard key


*/ 
/*STRING METHODS
1.String length-Returns the length of a string
2.toUpperCase()-Converts the string to uppercase
3.toLowerCase()-Converts the string to lowercase
4.charAt()-Returns the character at a specific index

*/ 