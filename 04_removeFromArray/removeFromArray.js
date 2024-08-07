const removeFromArray = function(array = [],...theArgs) {
    
    for(const element of array){
        for (const argument of theArgs){
            if(element === argument){
                array = array.filter((input) => input !== element);
            }
        }
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
