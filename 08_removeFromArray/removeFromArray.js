const removeFromArray = function(arr,...args) {
    return arr.filter(value => !args.includes(value));
};
console.log(removeFromArray([1,2,3,4,5],1,2))
// Do not edit below this line
module.exports = removeFromArray;
