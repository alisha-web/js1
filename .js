// **************************Chapter 21 (Changing Case)**************************

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
var allLower = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
y = y.toUpperCase();

// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
var newVar = someString.toLowerCase();

// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
var lowerArrayElement = myArray[0].toLowerCase();

// 6. Display in an alert the upper-case version of the string
// represented by a variable.
alert(myVar.toUpperCase());

// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// ******************************Chapter 22 - 25 (Strings)******************************

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
var sameWords = "captain";
var sliced = sameWords.slice(1, 3); // "ap"

// 2. The number of characters in the string will be assigned to the
// variable.
var charCount = myString.length;

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
var seg = animal.slice(2, 6); // "epha"

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
var charCount = myString.length;
var anotherVar = charCount;

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
var charCount = myString.length;
var newString = myString.slice(1, charCount - 3);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
var text = "To be or not to be.";
var indx = text.indexOf("be"); // 3

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.
var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); // 16

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.
var indx = text.lastIndexOf("go");

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.
if (myString.indexOf(segment, indexNum) !== -1) {

// 10. In this string "abcde", what character is at index 2? (Use
// charAt)
var char = "abcde".charAt(2); // "c"

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.
var cha = text.charAt(9);

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
var x = str.charAt(str.length - 1);

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
var cha = input.charAt(4);

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.
if (myString.charAt(2) === 'specificChar') {

// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.
var arr = [];
for (var i = 0; i < myString.length; i++) {
    arr[i] = myString.charAt(i);
}

// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.
var revisedReply = reply.replace("no", "yes");

// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");
var newStr = str.replace("1", "one");

// ******************************Chapter 26 (Rounding Numbers)******************************

// 1. Form a statement that rounds a number to the nearest integer.
var roundedNum = Math.round(num);

// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var roundNum = Math.ceil(origNum);

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var roundNum = Math.floor(origNum);

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.
var roundedVar = Math.round(origNum);

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.
var rounded = Math.floor(0.5);

// ******************************Chapter 27 (Random Numbers)******************************

// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50
var randomNum = Math.floor(Math.random() * 50) + 1;

// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
var randomNum = Math.random();

// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.
var diceRoll = Math.floor(Math.random() * 6) + 1;

// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.
var toss = Math.random() < 0.5 ? 'heads' : 'tails';

// ******************************Chapter 28, 29 (Converting Strings)******************************

// 1. How do you convert a string to an integer in JavaScript?
var intNum = parseInt("123");

// 2. Write a JavaScript function to convert the string "123" to an
// integer.
function convertToInt(str) {
    return parseInt(str);
}

// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
var floatNum = parseFloat("123.45");

// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
function canConvertToNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

// 5. How can you convert a number to a string in JavaScript?
var strNum = num.toString();

// 6. Write a JavaScript function to convert the number 42 to a string.
function convertToString(num) {
    return num.toString();
}

// 7. Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?
var intNum = parseInt("3.14");

// *********Chapter 30 (Controlling the length of decimals)******************************

// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.
var newNum = num.toFixed(4).toString();

// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.
num = parseFloat(num.toFixed(2));

// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.
if (num.toFixed(2).toString().length > 4) {

// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.
var num = 3.14159265359;
alert(num.toFixed(2).toString());

// ****************************** THE END ******************************
