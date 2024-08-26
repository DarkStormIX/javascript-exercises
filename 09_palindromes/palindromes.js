const palindromes = function (string) {
    let regex = /^[a-zA-Z0-9]+$/;
    const array = string.split("");
    const letters = array.filter(element => element.match(regex));
    const finalArray = letters.map(element => element.toLowerCase());
    
    var counter = 0;

    var length = 0;
    if(finalArray.length % 2 == 0){
        length = finalArray.length;
    }
    else{
        length = finalArray.length -1;
    }
    for(let i = 0; i<length/2; i++){
        if(finalArray[i] == finalArray[finalArray.length-1-i]){
            counter++;
        }
    }

    if(counter == length/2){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
