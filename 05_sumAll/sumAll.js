const sumAll = function(numOne, numTwo) {
    var sum = 0;
    if(Number.isInteger(numOne) && Number.isInteger(numTwo) && 
       numOne > 0 && numTwo > 0){
        
        if(numOne > numTwo){
            sum = numTwo;
            for(let i = 1; i<=(numOne - numTwo);i++){
                sum += numTwo + i;
            }
        }
        else{
            sum = numOne;
            for(let i = 1; i<=(numTwo - numOne);i++){
                sum += numOne + i;
            }
        }
        return sum;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
