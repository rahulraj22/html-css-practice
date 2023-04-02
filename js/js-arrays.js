// https://www.jschallenger.com/javascript-practice/javascript-arrays

let sample = [1, 2, 3, 4, 5]

// get nth element of the array
let n = 3;
console.log(sample[n - 1]);

// Remove first n element of the array
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3)); // [4, 5]
// works similarly as in string

// Get last n elements of the array [consider n = 3]
function myFunction(a){
    return a.slice(a.length - 3);
    // other way: return a.slice(-3);
}


// Get first n elements of an array[consider n = 3]
function myFunction(a){ // a is an array
    return a.slice(0, 3);
}


// Return last n array elements [consider n = 3]
function myFunction(a, n){
    return a.slice(a.length - n);
    // other way to do: return a.slice(-n);
}

// Remove a specific array element
function myFunction(arr, b){
    // arr = [1, 2, 3, 2, 4];
    // b = 2;
    
    // here we will user filter function
    return arr.filter(ele => ele !== b); // this will filter out all those elements from the array
}


// to find the number of elements in array
// arr.length

// Count number of negative values in array
function myFunction(arr){
    return arr.filter(ele => ele < 0).length;
}

// Sort an array of string alphabetically
function myFunction(arr){
    return arr.sort();
}

// Sort an array of numbers in descending order
function myFunction(arr){
    return arr.sort((a, b) => b - a);
    // if b - a is -ve => b should be sorted before a
    // if b - a is +ve => this does nothing since b is in correct position
    // if b - a is 0 => nothing
}

// Calculate the sum of array elements 
function myFunction(arr){
    return arr.reduce((total, ele) => total + ele, 0); // read more about it in js cheatsheet
}

// Calculate the average of array elements
function myFunction(arr){
    return arr.reduce((total, ele) => total + ele, 0)/arr.length;
}


// Return the longest string from an array of strings
function myFunction(arr){
    return arr.reduce((ans, ele) => ele.length > ans.length ? ele : ans);
}
// in reduce() we pass two arguments for callback function, one is accumulator variable[i.e ans] and other is current variable[i.e ele](jisme yek yek karke array ka elements aayega)

// Check if all the elements are equal in array
function myFunction(arr){
    // 1st way
    let a = arr[0];
    return arr.filter(ele => ele === a).length == arr.length;

    // 2nd way
    // return new Set(arr).size === 1;
}


// Merge an arbitrary number of arrays
// arr = [true, true], [1, 2], ['a', 'b'] => [true, true, 1, 2, 'a', 'b']
function myFunction(arr){
    return arr.flat();
}

// Sort array by object property
// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
// myFunction([{a:1,b:2},{a:5,b:4}])  => [{a:1,b:2},{a:5,b:4}]
function myFunction(arr){
    return arr.sort((aa, bb) => aa.b - bb.b);
}

// other way to do the same
function myFunction(arr){
    const sort = (x , y) => x.b - y.b;  // IMP***
    return arr.sort(sort);
}


// Merge two arrays with duplicate values
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) => [ -11, -10, 5, 22, 41,  42, 333]
function myFunction(a, b){ // a, b are arrays
    // there is difference b/w (a + b) and a.concat(b)  [check this!!]
    let c = a.concat(b);
    let uniqueArr = Array.from(new Set(c));
    return uniqueArr.sort((a, b) => a - b);
}

// other way todo the same
function myFunction(a, b){
    return [...new Set([...a, ...b])].sort((x, y) => x - y); // what's this 3 dots? 
}