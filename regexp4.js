// for emal  allow @  _  -  +  
function check() {
    var regx = /^[a-zA-Z0-9\@\._-]/g 
    regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    regx = /^[a-zA-Z0-9\.\-\_\+\@]/
           
    // Modifiers g i m
    var str = document.getElementById('email').value;
    var result = regx.exec(str);
    // console.log('the result from exec is ',result);
    document.getElementById('res1').innerHTML='the result from exec is '+result;
    var res = regx.test(str);
    if (res) {
        document.getElementById('res2').innerHTML='the string '+str+' matches the expression '+regx.source;
        document.getElementById('res2').style.color='green';
        // console.log(`the string '${str}' matches the expression ${regx.source}`);
    }else{
        document.getElementById('res2').innerHTML='the string '+str+' not matches the expression '+regx.source;
        document.getElementById('res2').style.color='red';
        // console.log(`the string '${str}' not matches the expression ${regx.source}`);
    }
}