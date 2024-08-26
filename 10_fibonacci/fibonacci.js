const fibonacci = function(number) {
    const array = [1, 1];
    number = Number(number);
    if(number==0){
        return 0;
    }
    else if(number>0){
        for(let i = 1; i<number-1; i++){
            array.push(array[i]+array[i-1]);
        }
        return array[number-1];
    }
    else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
