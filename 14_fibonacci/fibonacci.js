const fibonacci = function(position) {
    if(typeof position === 'string'){
        position = Number(position);
    }
    let a = 0;
    let b = 1;
    let c;

    if(position === 0){
        return a;
    }else if(position === 1){
        return b;
    }else if(position > 1){
        for(let i = 0; i <= position - 2; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }else if(position < 0){
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
