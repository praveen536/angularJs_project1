//character sets
let regx = /^t[jk]/ ; // can be j,k
regx = /^t[a-z]/ ; // can from a to z
regx = /^t[^jk]/ ; // can not be j,k
regx = /t[a-zA-Z]i[s0-9]/ ; // multiple set

regx = /^[a-z][A-Z][]/m;
// for emal  allow @  _  -  +  .
regx = /^[a-zA-Z0-9\@\._-]/g
// Modifiers g i m
var str = "ab_c.abc@gmail.com";
var result = regx.exec(str);
console.log('the result from exec is ',result);
var res = regx.test(str);
if (res) {
    console.log(`the string '${str}' matches the expression ${regx.source}`);
}else{
    console.log(`the string '${str}' not matches the expression ${regx.source}`);
}