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

the ternary operator is the only JavaScript operator that takes three operads:

a condition followed by a question mark, then an expression to execute if the condition is true
followed by a colon and finally the expression to execute if the condition is false.  The ternary
operator is often used as a shortcut for the if statement. 

function getFEE(isMember){
        return (isMember ? '$2.00' : '$10.00');
}

a common usage of the ternary operator is to handle a null value

let greeting = person => {
        let name = person ? person.name : `stranger`
        return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`})); <-- "Howdy, Alice"
console.log(greeting(null)); <-- "Howdy, stranger"

The ternary operator is right-associative which means it can be chained similar to an if else chain:

if ... else
if ... else
if ... else




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

Strings are used for storing and manipulating text, they are created by placing 0 or more characters 
inside either single or double quotes.

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

The substring() method is similar to the slice() method however the substring() method cannot accept
negative values:

<script>
    var str, res;

    str = "Apple, Banana, Kiwi";
    res = str.substring(7,13);
    document.getElementById("demo").innerHTML = res;
</script>

with the substr() method the second paramter specifies the length of the extracted part:

<p id="demo"></p>

<string>
    var str, res;

    str = "Apple, Banana, Kiwi";
    res = str.substr(7,6);
    document.getElementById("demo").innerHTML = res;
</string>

just as the slice() method, if you omit the second paramter the method will slice out 
the rest of the string.

replace() replaces a specified value with another value in a string. By default, it will
only replace the first instance of the match. 

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
    function myFunction() {
            var str, txt;

            str = document.getElementById("demo").innerHTML;
            txt = str.replace("Microsoft","W3Schools");
            document.getElementById("demo").innerHTML = txt;
    }
</script>

To replace case insensitive, use a regular expression with an /i flag (insensitive).
/g will replace all matches (global match).

toUpperCase() will convert a string to upper case
toLowerCase() will convert a string to lower case

concat() joins two or more strings together and can be used instead of the + operator:

var text1, text2, text3

text1 = "Hello"
text2 = "World"
text3 = text1.concat(" ", text2);

all string methods return a new string and do not modify the original string, strings are 
immutable meaning they cannot be changed, only replaced. 

the trim() method removes the white space from both sides of a string <-- not supported in IE 8 or lower 

To extract String Characters you could use three different methods

- charAt(position)
- charCodeAt(position)
- property access [ ]

the charAt() method returns the character at a specified index in a string:

var str = "HELLO WORLD";
str.charAt(0); <-- returns h

The charCodeAt() method returns the unicode of the character at a specified index in a string.
This method returns a UTF-16 code (an integer between 0 and 65535).

var str = "HELLO WORLD";
str.charCodeAt(0); <-- returns 72

ES5 allows property access [ ] on strings:

var str = "Hello World";
str[0]; <-- Returns H

The Property access is a little unpredictable

    - does not work with IE7 or earlier
    - makes strings look like arrays
    - if no character is found [] returns undefined
    - It is read only. 

To convert a String into an Array you could use the split() method

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
    function myFunction() {
            var str, arr;
            str = "a,b,c,d,e,f";
            arr = str.split(",");
            document.getElementById("demo").innerHTML = arr[0];
    }
</script>

if the seperator is omitted, the returned array will contain the whole string in index [0]
if the seperator is "", the returned array will be an array of single characters.
 */

 /*

 **************************************** ----- Numbers ----- ****************************************

Javascript only has one type of number (floats are not used in javascript) and they can be written
with or without decimals. 

var x = 3;
var x = 3.14;

Extra large or extra small numbers can be written with scientific notation.  

var x = 123e5;
var x = 123e-5;

Javascript numbers are ALWAYS 64 bit floating point, javascript does not define different types of numbers
like integers, short, long, floating-point etc. They are always stored as double precision floating point
numbers following the IEEE 754 standard.  

This format stores numbers in 64 bits where the number (fraction) is stored in bits 0 to 51, the exponent 
in bits 52 to 62 and the sign in bit 63:

Value (aka Fraction/Mantissa)           Exponent                Sign

52 bits (0 - 51)                        11 Bits (52 - 62)       1 bit (63)

Integers are accurate up to 15 digits

var x = 999999999999999;  <-- x will be 999999999999999
var y + 9999999999999999; <-- y will be 10000000000000000

the maximum number of decimals is 17 but floating point arithmetic is not always 100% accurate

var x = 0.2 + 0.1; <-- x will be 0.30000000000000004

to solve the problem, it helps to multiply and divie

var x = (0.2 * 10 + 0.1 * 10) / 10; <-- x will be 0.3

Javascript uses the + operator for both addition and concatenation, numbers are added while strings
are concatenated. 

var x = 10;
var y = 20;
var z = x + y;  <-- z will equal the number 30

if you add two strings the result will be a string concatenation

var x = "10";
var y = "20";
var z = x + y;  <-- the result will be "1020"

adding a number and a string will result in a string concatenation

var x = 10;
var y = "20";
var z = x + y;  <-- the result will be "1020"

The Javascript strings can have numeric content, it will try to convert strings to numbers in all numeric
operations save for the + operator. 

NaN is a Javascript reserved word to indicate that a number is not a legal number.  Trying to do arithmetic
with a non numeric string will result in NaN (Not a Number)

you can use the global Javascript function isNaN() to find out if a value is a number. NaN is considered a
number in Javascript, typeof NaN returns number. 

Infinity or -Infinity is the value Javascript will return if you calculate a number outside the largest 
possible number. 

<p id="demo"></p>

<script>
    var myNumber = 2, txt;

    txt = "";
    while (myNumber != Infinity) {
            myNumber = myNumber * myNumber;
            txt = txt + myNumber + "<br>";
    }

    document.getElementById("demo").innerHTML = txt;

</script>

the above script will return:

4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity

Division by 0 will also generate infinity

like NaN, Infinity is also considered a number in Javascript.

Javascript interprets numeric constants as hexadecimal if they are preced by 0x

var x = 0xFF; <-- x will be 255

Javascript displays numbers as base 10 decimals but you can use the toString() method to output numbers from 
base 2 to base 36.

var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

Numbers can also be objects but it is strongly recommended that you DO NOT USE NUMBERS AS OBJECTS!!!!

when using the == operator numbers are equal however when using the === operator numbers are not 
equal because the === operator expects equality in both type and value. 

Just as with strings, numbers are treated as objects when executing methods and properties in Javascript. 

Number Methods and Properties.

All number methods can be used on ANY type of number (literals, variables or expressions)

toString() - Returns a number as a string:

<p id="demo"></p>

<script>
    var x = 123;
    document.getElementById("demo").innerHTML = 
       x.toString() + "<br>" 
          (123).toString() + "<br>" +
          (100 + 23).toString();
</script>  

result converts all numbers to strings 123

toExponential() method - returns a string with a number rounded and written using exponential notation. A
parameter defines the number of characters behind the decimal point:

var x = 9.656;
x.toExponential(2);  <-- returns 9.66e+0
x.toExponential(4);  <-- returns 9.6560e+0
x.toExponential(6);  <-- returns 9.656000e+0

the paramter is optional, if you do not specify a paramter Javascript will not round the number. 

toFixed() - returns a string with the number written with a specified number of decimals:

var x = 9.656;

x.toFixed(0);  <-- returns 10
x.toFixed(2);  <-- returns 9.66 (Perfect for working with money)
x.toFixed(4);  <-- returns 9.6560
x.toFixed(6);  <-- returns 9.656000

toPrecision() method returns a string with a number written with a specified length:

var x = 9.656;

x.toPrecision();   <-- returns 9.656
x.toPrecision(2);  <-- returns 9.7
x.toPrecision(4);  <-- returns 9.656
x.toPrecision(6);  <-- returns 9.65600

valueOf() - returns a number as a number

var x = 123;

x.valueOf();          <-- returns 123 from variable x
(123).valueOf();      <-- returns 123 from literal 123
(100 + 23).valueOf(): <-- returns 123 from the expression 100 + 23

in Javascript a number can be a primitive value (typeof = number) or an object (typeof = object).

the valueOf() method is used internally in javascript to conver number objects to primitive values, 
there is no reason to use it in your code. 

There are 3 JavaScript methods that can be used to convert variables to numbers:

    - The Number() method      <-- Returns a number converted from its argument.
    - The parseInt() method    <-- Parses its argument and returns a floating point number
    - the parseFloat() method  <-- Parses its argument and returns an integer

these are not number methods, they are global JavaScript methods. 

Number() examples:

Number(true);    <-- returns 1
Number(false);   <-- returns 0
Number("10");    <-- returns 10 
Number(" 10 ");  <-- returns 10 
Number("10.33"); <-- returns 10.33
Number("10,33"); <-- returns NaN (returns NaN because the number cannot be converted)
Number("10 33"); <-- returns NaN
Number("John");  <-- returns NaN

parseInt() method

parses a string and returns a number, spaces are allowed and only the first number is returned:

parseFloat("10");        <-- returns 10
parseFloat("10.33");     <-- returns 10.33
parseFloat("10 20 30");  <-- returns 10
parseFloat("10 years");  <-- returns 10
parseFloat("years 10");  <-- returns NaN  (returns NaN as number cannot be converted) 

Number Properties

Property                 Description

MAX_VALUE                Returns the largest possible number in JavaScript
MIN_VALUE                Returns the smallest number possible in JavaScript
POSITIVE_INFINITY        Represents infinity (returned on overflow)
NEGATIVE_INFINITY        Represents negative infinity (returned on overflow)
NaN                      Represents a "Not-a-Number" value

Property                Example

MAX_VALUE               var x = Number.MAX_VALUE;
MIN_VALUE               var x = Number.MIN_VALUE;
POSITIVE_INFINITY       var x = Number.POSITIVE_INFINITY; (var x = 1 / 0);
NEGATIVE_INFINITY       var x = Number.NEGATIVE_INFINITY; (var x = -1 / 0);
NaN                     var x = Number.NaN (var x = 100 / "Apple");

Number properties cannot be used on variables, as the belong to JavaScript's number object wrapper
(called Number).  These properties can only be accessed as Number.MAX_VALUE (6.MAX_VALUE).  If you try
to use myNumber.MAX_VALUE where myNumber is a variable, expression or value, it will return undefined:

<p id="demo"></p>

<script>
    var x = 6;
    document.getElementById("demo").innerHTML = x.MAX_VALUE;
</script>

the above returns undefined as the result. 
  */