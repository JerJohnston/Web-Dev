/*
****************************** Console Commands ******************************

console.log('Hello World');
console.error('This is an Error');
console.warn('This is a warning');

****************************** ----Variables---- ******************************

Javascript syntax defines two types of values: Fixed values and Variable values.

Fixed values are called "Literals"
Variable values are called "Variables" 
     (Variables are containers for storing data values 
      e.g. var y = 5; 
           var x = 6;
           var z = x + y;) <-- the variable z stores the value 11 (x + y)

Programming uses variables to hold values and to use in expressions, similar to algebra. 
        var price1 = 5; <-- Holding the value 5
        var price2 = 6; <-- Holding the value 6
        var total = price1 + price2; <--- Expression using variables

Variable Types

var <-- Globally Scoped not recommended for use, 
let, 
const <-- cannot be changed

Always use const unless you know you are going to reassign your value

const age = 30;   let score = 5;

Data Types

Primitive Values: Values that have no Properties or Methods 
Primitive Data Types - Strings, Numbers, Boolean, Null, Undefined, Symbol (added in ES6 not commonly used) 

Primitive values are "immutable" meaning they are hardcoded and therefore cannot be changed

Javascript has dynamic types, meaning the same variable can hold different data types:

let x;            <-- Undefined
x = "Jennifer";   <-- x is a String
x = 5;            <-- x is now a number

Comples Data Types: typeof - an operator that can return one of two complex types
                        - functions
                        - objects
                    the typeof operator returns "object" for objects, arrays and nulls
                    however it does NOT return "object" for functions.  
                    In Javascript, arrays are considered objects

*/

const name = 'Jennifer'; //String <-- written with either ' ' or " " quotes
                         //you may use quotes inside a string as long as they do not match the quotes surrounding the string
const age = 38; //<-- Number written WITHOUT quotes 
                //<-- Extra large or extra small numbers can be written with scientific exponential notation (var y = 123e5; var z = 123e-5)
const rating = 4.5; //Number - no float data type in Javascript
const isCool = true; //Boolean, either true or false
const x = null; //NaN
const y = undefined; 
let z;

/* 

Identifiers

Variables MUST be identified with a unique name (Identifier)

        rules for constructing an identifier
            - May contain letters, digits, underscores and dollar signs. 
            - Must begin with a letter
            - May begin with a $ or _ for other purposes
            - Identifiers are case sensitive 
            - May NOT use "Reserved Words"

*/ 


// Concatenation

console.log('My name is ' + name + ' and I am ' + age); //<-- Old way 

const hello = `My name is ${name} and I am ${age}`; //<-- Template Literals, new with ES6

console.log(hello);

/* String Properties and Methods
properties do not have paranthesis, if it has a paranthesis it is a Method

a Method is a function that is associated with an Object */

const s = 'Hello World';

console.log(s.substring(0,5));

/*
**************************************** Operators ****************************************

+       Addition                                Adds Numbers
-       Subtraction                             Subtracts Numbers
*       Multiplication                          Multiplies Numbers
**      Exponentation (ES6)                     Raises the first operand to the power of the second operand
/       Division                                Divides Numbers
%       Modulus (Division Remainder)            Returns the division remainder
++      Increment                               Increments Numbers
--      Decrement                               Decrements Numbers

A typical arithmetic operation operates on two numbers, these numbers can either be literals, variables or expressions

the numbers in an arithmetic operation are called operands, the operation (performed between two operands) is defined by the operator.

Math.pow(x,y) returns the same result as X ** y

Just as in arithmetic, Operators follow BEDMAS 

Assignment Operators

Operator        Example         Same As

=               x = y           x = y          Assigns a value to a variable     
+=              x += y          x = x + y      adds a value to a variable  
-=              x -= y          x = x - y      subtracts a value from a variable
*=              x *= y          x = x * y      multiplies a variable
/=              x /= y          x = x / y      divides a variable
%=              x %= y          x = x % y      assigns a remainder to a variable
**=             x **= y         x = x ** y <-- Experimental, doesn't work in all browsers, DO NOT USE!! 

String Operators 

The + operator can also be used to add (concatonate) strings.

*/

let txt1 = "John", txt2 = "Doe", txt3;
txt3 = txt1 + ' ' + txt2;
console.log(txt3);
// The += operator can also be used to add (Concatonate) strings. 

let txt1 = "What a very ";
txt1 += "nice day";

// when used on strings the + operator is called the concatenation operator.

// Adding a string and a number together will return a string. 

let x = "Hello" + 5; //<-- Output: Hello5

// Javascript evaluates expressions from left to right, different sequences produce different results:

let x = 5 + 10 + "Hello"; //<-- Javascript treats 5 and 10 as numbers until it reaches "Hello" 

//Output: 15Hello

let x = "Hello" + 5 + 10; //<-- Since the first operand is a string, all operands are treated as strings. 

//Output: Hello510

/*

Comparison Operators

Operator        Description

==              equal to
===             equal value and equal type
!=              not equal 
!==             not equal value or not equal type
>               greater than
<               less than
>=              greater than or equal to
<=              less than or equal to
?               ternary operator

*/

/* 

Logical Operators

Operator        Description

&&              logical and
||              logical or
!               logical not

*/

/* 

Type Operators

Operator        Description

typeof          returns the type of a variable
instanceof      returns true if an object is an instance of an object type

*/

/*

Bitwise Operators

Work on 32 bit numbers

Any numeric operand in the operation is converted into a 32 bit number. The result is converted
back into a javascript number.

Operator        Description             Example         Same As         Result          Decimal

&               AND                     5 & 1           0101 & 0001     0001            1
|               OR                      5 | 1           0101 | 001      0101            5
~               NOT                     ~ 5             ~0101           1010            10
^               XOR                     5 ^ 1           0101 ^ 0001     0100            4
<<              Zero fill left shift    5 << 1          0101 << 1       1010            10
>>              Signed right shift      5 >> 1          0101 >> 1       0010            2
>>>             Zero fill right shift   5 >>> 1         0101 >>> 1      0010            2

The above examples use 4 bit unsigned numbers, however javascript uses 32 bit signed numbers. 
Because of this, in javascript ~5 will not return 10, it will return -6.

~00000000000000000000000000000101 will return 11111111111111111111111111111010

*/

/* 
**************************************** Functions ****************************************

Function: A block of code designed to perform a certain task, in Javascript a function needs to be
"called" before it can be executed.

function myFunction(p1, p2)<-- Parameters{
        return p1 * p2; <-- myFunction returns the result of p1 * p2
}

A function is defined with the "function" keyword, followed by a name, followed by parantheses () and may
contain letters, digits, underscores, numbers, and dollar signs. (the same rules for naming variables)

The parantheses may include parameter names seperated by commas: (paramter1, parameter2)

{} <-- Curly brackets surround the code that is to be executed by the function. 

- Parameters are listed inside the parentheses in the function definition
- Arguments are the values received by the function when it is called
- Inside the function, the arguments (parameters) behave as local variables

The code inside the function will be executed when something "calls" the function:

- When an event occurs (onclick, onhover etc.)
- When it is called from the Javascript code (myFunction())
- Automatically

The "return" statement will stop the function from executing.  If the function was called from a statement, Javascript will "return" 
to execute the code AFTER calling the statement. 
Functions will often compute a "return value" which returns the value back to the caller:

E.G. - calculate the product of two numbers and return the result:

                var x

                x = myFunction(4, 3); <-- function is called, the return value will end up in the x variable

                function myFunction(a, b){
                        return a*b;   <-- function returns the value of a and b
                }

HTML

<p id="demo"></p>

<script>
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b){
        return a * b;
}
</script>

The result will be 12

Functions are valuable because with function you can resuse code(once defined the function can be used multiple times)
and you can use the same code with different arguments to produce different results

<p id="demo"></p>

<script>
function toCelsius(fahrenheit) {
        return (5/9) * (fahreneit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77)
</script>

In the above example, toCelsius refers to the function object and toCelsius() refers to the function result. you
MUST have parantheses() to return the function result or else you will the function object. 

You may use functions the same way that you use variables in all types of formulas, assignments and calculations. 

var text = "The temperature is " + toCelsius(77) + " Celsius";

Variables declared within a javascript function become "Local" to the function and may only be accessed within 
the function. 

Local variables are only recognized inside their functions so different functions can use variables with the same name
as local variables are created when a function starts and deleted when a function is completed. 

*/ 

/*

**************************************** ----- Objects ----- ****************************************

In real life a car is an object, a car has properties like weight and color and methods like start and stop:

Object                  Properties                      Methods

Car                     car.name = Fiat                 car.start()
                        car.model = 500                 car.drive()
                        car.weight = 850kg              car.brake()
                        car.color = white               car.stop()

All objects have the same properties but the values of the properties differ from object to object.

All objects have the same methods but the methods are performed at different times. 

In Javascript, Objects are variables but they may contain many values, they are containers for named values
called properties or methods. 

var car = {type:"Fiat", model:"500", color:"white"}; <-- Values are written as name:value pairs (referred to as "properties")

Object Definition

A Javascript object is created and defined using an "object literal"

<p id ="demo"></>

<script>

    var person = {firstName:"John", lastName:"Doe", age:"50", eyeColor:"blue"}; <-- Create an object

    document.getElementById("demo").innerHTML = person.firstname + " is " person.age + " years old.";
</script>

properties can be accessed in two ways:

objectName.propertyName

or

objectName["propertyName"]

Objects also have methods which are actions that can be performed on objects.  Methods are stored in properties as function
definitions (A method is a function stored as a property)

var person = {                                                  <-- Object
        firstName: "John",                                      <-- Property
        lastName : "Doe",
        id       : 5566,
        fullname: displayName() {                               <-- Method (stored as a property)
                return this.firstName + " " + this.lastName;    <-- this.firstName means the firstName property of this object (person)
        }
};

The this Keyword

in a function definition, this refers to the "owner" of the function. In the above example
this is the "person" object that owns the "fullName" function. 

To access object methods, use the following syntax

objectName.methodName() (name = person.fullName();)

!!!!DO NOT declare strings, numbers and booleans as objects!!!! They complicate your code and slow down execution speed. 

When a javascript variable is declared with the keyword "new", the variable is created as an object

var z = new Boolean() <-- declares z as a boolean object

*/
/*

**************************************** ----- Events ----- ****************************************

HTML events are things that happen to HTML elements.  When Javascript is used in HTML pages, it can "react" on these events. 

HTML events can either be something the browser does or a user does.

- An HTML webpage finishes loading <-- Browser
- An HTML input field was changed <-- User
- An HTML button was clicked <-- User

when events happen, Javascript lets you execute code when events are detected.  

<html>
<body>

    <p id="demo"></p>

    <button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button> 

</body>
</html>

Javascript code changes the content of the element with the id="demo"

it can also change the content of its own element using (this.innerHTML)

<html>
<body>

    <p id="demo"></p>

    <button onclick="this.innerHTML=Date()">The time is?</button> 

</body>
</html>

As javascriptcode is often several lines long, it is more common to see event attributes calling functions

<html>
<body>

    <p>Click the button to display the date</p>

    <p id="demo"></p>

    <button onclick="displayDate()">The time is?</button> 

    <script>
        function displayDate() {
                document.getElementById("demo").innerHTML = Date();
        };
    </script>

</body>
</html>

*/

/*

**************************************** ----- Strings ----- ****************************************

Strings are used for storing and manipulating text, they are created by placing 0 or more characters inside
either single or double quotes.

"This is a string."

'This is a string'

the length property can be used to find the length of a string

<script>
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("Demo").innerHTML = txt.length;
</script>

The backslash escape character turns special characters into string characters:

Code            Result          Description

\'              '               Single Quote
\"              "               Double Quote
\\              \               Backslash
\b              Backspace
\f              Form Feed
\n              New Line
\r              Carriage Return
\t              Horizontal Tabulator
\v              Vertical Tabulator

For Readability it is best practice to avoid lines of code longer then 80 characters, if a
Javascript statement does not fit on one line, the best place to break it is after an operator:

document.getElementById("demo").innerHTML =
"Hello Dolly!";

a single back slash will also break up a code line within a text string

document.getElementById("demo").innerHTML = "Hello \ <-- Not a preferred method as it does not have universal
Dolly!";                                                 browser support.

Strings can be defined as objects with the keyword new:

<p id="demo"></p>

<script>
    var x = "John"; <-- x is a string
    var y = new String("John") <-- y is an object

    document.getElementById("demo").innerHTML = 
    typeof x + "<br>" + typeof y;
</script>

the new keyword complicates code and can produce unexpected results, DO NOT CREATE STRINGS AS OBJECTS!!!!

String Methods

Primitive values like "I am a string" cannot have properties or methods because they are not objects however 
with Javascript, methods and properties are available to primitive values because JavaScript treats primitive 
values as objects when executing methods and properties.

String Length

<script>
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("Demo").innerHTML = txt.length;
</script>

returns the length of a string 

indexOf() returns the index of the position of the first occurrence of a specified text within a string:

<p id="demo"></p>

<script>
    var str, pos;

    str = "Please locate where 'locate' occurs!";
    pos = indexOf("locate");
    documentgetElementById("demo").innerHTML = pos;
</script>

lastIndexOf() returns the last index of the last occurence of a specified text in a string:

var str = "Please Locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

javascript counts the first position as 0, if text is not found then both indexOf and lastIndexOf 
return -1.

both methods accept a second paramter ass the starting position for the search:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);

the lastIndexOf() method searches backwards (from the end to the beginning) meaning if the second 
parameter is 15 then the search starts at position 15 and searches to the beginning of the string.

the search() method searches a string for a specified value and returns the position of the match:

var str ="Please locate where 'locate' occurs!";
var pos = str.search("locate");

the difference between search() and indexOf() is that:
        - the search() method cannot take a second start position argument
        - the indexOf() method cannot take powerful search values (regular expressions)

there are three methods for extrating a part of a string:

        - slice(start, end)
        - substring(start, end)
        - substr(start, length)

The slice() method extrats a part of a string and returns the extracted part in a new string, this 
method takes two parameters:

        - the "start" position
        - the "end" position <-- the end is not included in the slice

<p id="demo"></p>

<script>
    var str, res;

    str = "Apple, Banana, Kiwi";
    res = str.slice(7,13);
    document.getElementById("demo").innerHTML = res;
</script>

result = Banana

If a parameter is negative the position is counted from the end of the string. 
If a paramter is omitted the method will slice out the rest of the string. 


 */