const reverseString = function(str) {
    const wordArray = str.split('');
    const reversedArray = [];
    while(wordArray.length > 0) {
        reversedArray.push(wordArray.pop());
    }
    const reversedWord = reversedArray.join('');
    return reversedWord;
};
console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
