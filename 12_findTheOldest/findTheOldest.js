const findTheOldest = function(array) {
    
    const age = array.map((element) => {
        if(element.yearOfDeath == undefined){
            element.yearOfDeath = 2024;
        }
        
        return element.yearOfDeath - element.yearOfBirth;

    });
    var oldest = age.reduce((accumulator, currentValue) => {
        if(accumulator>currentValue){
            return accumulator
        }
        else{
            return currentValue
        }
    })

    var oldestIndex;
    age.forEach((element, index) => {
        if(element == oldest){
            oldestIndex = index;
        }
    });

    return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
