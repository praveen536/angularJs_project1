let regx = /^this/; // ^ match if string start with
regx = /st$/; //$ will match if string end with
regx = /t.is/ //matches any one charachter
regx = /t*s/ //matched any 0 or more characters
regx = /th?s?/ // that char is optional
regx = /this\*/ // exact math with start
var str = "this is test";
let res = regx.test(str);
if (res) {
    console.log(`the string '${str}' matches the expression ${regx.source}`);
}else{
    console.log(`the string '${str}' not matches the expression ${regx.source}`);
}