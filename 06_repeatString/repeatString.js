const repeatString = function(str,num) {
    if(num < 0) return 'ERROR';
    let result='';
    for(let i=0; i<num; i++){
        result+=str;
    }
    return result;
};
console.log(repeatString("abc", 3)); // Expected output: "abcabcabc"
// Do not edit below this line
module.exports = repeatString;
