const reverseString = function(string) {
    let reversedString = "";
    const stringArr = string.split("");

    for (let i = 0; i<stringArr.length; i++){
        reversedString = reversedString.concat(stringArr[stringArr.length - i - 1]);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
