/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(accumulator, currentValue){
        accumulator.push(currentValue[key]);
        return accumulator;
    }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    let lcStr = str.toLowerCase();
    let array0 =Array.from(lcStr)
    let countA =0;
    let countE =0;
    let countI =0;
    let countO =0;
    let countU =0;
    return array0.reduce(function(totalCount, currentLetter){
        if(currentLetter === 'a'){
            countA += 1
            totalCount.a = countA;
        }
        if(currentLetter === 'e'){
            countE += 1
            totalCount.e = countE
        }
        if(currentLetter === 'i'){
            countI += 1
            totalCount.i = countI
        }
        if(currentLetter === 'o'){
            countO += 1
            totalCount.o = countO
        }
        if(currentLetter === 'u'){
            countU += 1
            totalCount.u = countU
        }
        return totalCount;
    }, {})
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(finalArray, currentObject){
        let obj ={}
        obj[key]=value;
        obj[Object.keys(currentObject)] = currentObject[Object.keys(currentObject)]
        finalArray.push(obj);
        return finalArray;
    }, [])
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(finalArray, currentValue){
        if(callback(currentValue)){
            finalArray[0].push(currentValue)
        }
        else {
            finalArray[1].push(currentValue)
        }
        return finalArray;
    }, [[],[]])
}
