const leapYears = function(year) {
    if(Number.isInteger(year)){
        if(year>0){
            if(year % 4 === 0){
                if(year % 100 === 0){
                    if(year % 400 === 0){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return true;
                }
            }else{
                return false;
            }
        }else{
            return 'ERROR';
        }
    }else{
        return 'ERROR';
    }
};

console.log(1445);
console.log(1984);
console.log(3000);
console.log('hello');

// Do not edit below this line
module.exports = leapYears;
