//character sets
let regx = /^t[jk]/ ; // can be j,k
regx = /^t[a-z]/ ; // can from a to z
regx = /^t[^jk]/ ; // can not be j,k
regx = /t[a-zA-Z]i[s0-9]/ ; // multiple set

// quantifiers
regx = /har{}/ 
regx
var str = "thissa is test";
let result = regx.exec(str);
console.log('the result from exec is ',result);
let res = regx.test(str);
if (res) {
    console.log(`the string '${str}' matches the expression ${regx.source}`);
}else{
    console.log(`the string '${str}' not matches the expression ${regx.source}`);
}