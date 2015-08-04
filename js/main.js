// add scripts

console.log("sanity check!");


// Define a function called getStudentName that takes a single object as an argument and returns the value of the name property/key.
function getStudentName(object) {
  return object.name;
}

// Define a function called getTotalLetters that takes an array of strings as an argument and returns the total number of letters in all strings.
function getTotalLetters(array) {
  var totalLength = 0;
  for (i = 0; i < array.length; i++) {
    totalLength += array[i].length;
  }
  return totalLength;
  }

// Define a function called 'createObject' that takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
function createObject (objKey, objValue) {
    var newObj = {};
    newObj[objKey] = objValue;
    return newObj;
}

// Define a function called getNegativeIndex that takes an array and a negative number as arguments and returns the value from the array at the given negative index.
function getNegativeIndex(array, negativeNum) {
    var index = array.length + negativeNum;
    var answer = array[index];
    return answer;
}

// Define a function called removeCharacter that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed. Do not modify the original string. STRETCH: Write a test case for this last requirement.
function removeCharacter(string, char) {
    var newStr = string.slice();
    var answer = newStr.replace(char, "");
    return answer;
}

// Define a function called outputObject that takes an object as an argument and returns each key-value pair in the following format key .
function outputObject(inputObject) {
    var newArr = [];
    for (var value in inputObject) {
        var str = value + " is " + inputObject[value];
        newArr.push(str);
    }
    var answer = newArr.toString();
    return answer;
};


// Define a function called getVowels that takes a string as an argument and returns an array of all the vowels in the string. Do not include duplicates.
function getVowels(string) {
    var vowels = ["a", "e", "i", "o", "u"];
    var answer = [];
    for (i = 0; i < vowels.length; i++) {
        if (string.indexOf(vowels[i]) > -1) {
          answer.push(vowels[i])
        }
    }
    return answer;
}

// Define a function called captureTwins that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise return false.
function captureTwins(array) {
    var arrayAnswer = [];
    for (i = 0; i < array.length; i+=2) {
        if (array[i] === array[i+1]) {
            arrayAnswer.push(true);
        }
        else {
            arrayAnswer.push(false);
        }
    }
    for (i = 0; i < arrayAnswer.length; i++) {
       if (arrayAnswer.indexOf(false) > -1) {
            return false;
        }
        else {
            return true;
        }
    }
}

// Define a function called testBooleanLogic that takes an array of boolean values and returns true if any value is true.
function testBooleanLogic(array) {
    if (array.indexOf(true) > -1) {
        return true;
    }
    else {
        return false;
    }
}

// Define a function called getUniqueValues that takes an array of strings, and returns a new array consisting of the unique values.



