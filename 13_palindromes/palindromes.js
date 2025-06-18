const palindromes = function (word) {
    const freshWord = word.toLowerCase().split('').filter(char=>/[a-z0-9]/.test(char)).join('');
    const reverseWord = freshWord.split('').reverse().join('');
    if(freshWord === reverseWord){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
