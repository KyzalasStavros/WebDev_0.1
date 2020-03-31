/* Data types:
undefined, null, bolean(true/false), string(any text), symbol, number, object
*/

var myName = "Butch";
myName = 8;
let ourName = "freeCodeCamp"
const pi=3.14

// semicolon not necessary
var a;
var b=2;

console.log(myName)

var a = 9;

var a;
var b;
var c = "I am a";

a=a+1;
b=b+5;
c=c+"string";

console.log(a,b,c);

// Variable ARE CASE SENSITIVE
var stD=5;
var std;

console.log(std,stD);
// just use camelCaseAndWeAreGoodToGo

// + - * / obvious

var sum=10+10;
console.log(sum)

// incriments ++ or --
var myVar = 87;
myVar=myVar+1;
myVar++;
console.log(myVar)

// FLOATS ARE decimal numbers e.g. 0.09

// division remainder % sign (to determine if number is even or odd)
var remainder
remainder = 11 % 3
console.log(remainder)

// quick addition a=a+10 === a+=10 (acrdngly -=, *=, /=)
a=5;b=5;
a=a+5;b+=5;
console.log(a,b)

//  string variables how to quote characters \"\"
var firstName="alan";
var lastName="turing";
var myStr = "I am a \"dog quote\" string wtf";
console.log(myStr);

// use either ' or " for strings!! use Backticks `` and inside u can use both ' and " 

// escaping things with backslash
var myStr="FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)
var str1="first"; var str2="second";
addedstrings=str1+" "+str2;
console.log(addedstrings)
// use += with strings as well

// stringVar.length to find length

var dog="dog"
console.log(dog[0], dog[1])

// strings are immutable
dog[0]="h"; // doesn't work
console.log(dog)
dog="hog";
console.log(dog)

// last char =stringVar.length-1
console.log(dog[dog.length-1])

// madlib game

function wordBlanks(myNoun,myAdjective,myVerb,myAdverb) {
    var result="";
    result+= "The "+ myAdjective +" "+myNoun+" "+myVerb+" to the store "+ myAdverb+"!"
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"))
console.log(wordBlanks("monkey","tiny","went","sneakily"))


//ARRAYS
var ourArray = ["John, 23"];
var myArray =[];
console.log(ourArray)

var ourNestedArray=[["the universe",42],["everything, 101010"]];
console.log(ourNestedArray)
console.log(ourNestedArray[0])
console.log(ourNestedArray[0][1])

// append data in the end of arrays with push

var ourArray = ["simposon","j","cat"];
ourArray.push(["dog",3]);
console.log(ourArray)

// remove item with pop() // () is function!
var removedFromArray=ourArray.pop();
console.log(removedFromArray)
console.log(ourArray)

// shift removes first
var shiftedFromArray=ourArray.shift();
console.log(shiftedFromArray)
console.log(ourArray)

// unshift adds element to the beginning
ourArray.unshift("(un)shiftsons");
console.log(ourArray)

// nested array example

var myList = [["cereal", 3], ["milk",2],["bunani",3],["juice",2],["eggs",12]]

// reusable code with functions

function ourReusableFunction() {
    console.log('WAPPA world')
}
ourReusableFunction();

// parameters in functions
function ourFuncWithArgs(a,b){
    console.log(a-b)
}

ourFuncWithArgs(10,5)

// global variables

var myGlobal = 10;

function fun1(){
    oopsGlobal=5;
}
function fun2(){
    var output="";
    if(typeof myGlobal != "undefined"){
        output+="myGlobal is:" +myGlobal;
    }
    if (typeof oopsGlobal !="undefined"){
        output+="oopsGlobal is:" +oopsGlobal;
    }
    console.log(output)
}
fun1();
fun2();

// 
function minusSeven(num){
    return num-7;
}
console.log(minusSeven(5));

var sum=0;
function addFive(){
    sum+=5;
    //return sum
}
console.log(addFive())

// queue
function nextInLine(arr,item) {
    arr.push(item);
    return arr.shift()
}

var testArr = [1,2,3,4,5];

console.log("Before:"+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:"+JSON.stringify(testArr));

// booleans
function welcomeToBooleans(){
    return true;
}
console.log(welcomeToBooleans())

// 
function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "it'strue";
    }
    return "it'sfalse";
}

console.log(ourTrueOrFalse(true))
