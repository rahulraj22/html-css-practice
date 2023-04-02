// Check if value(any element) is present in set :--------------
function myFunction(set, val) {
    return set.has(val); // we use has() function to check element presence in set
}

// Convert set into an array :-----------------
let mySet = new Set([1, 2, 3, 4, 5]);

// Using Array.from()
let myArray1 = Array.from(mySet);
console.log(myArray1); // Output: [1, 2, 3, 4, 5]

// Using spread operator
let myArray2 = [...mySet];
console.log(myArray2); // Output: [1, 2, 3, 4, 5]

function myFunction(set) {
    return [...set];
}

// other way todo
function myFunction(set) {
    return Array.from(set);
}


// Get union of two sets :-------------
function myFunction(a, b) {
    return new Set([...a, ...b]);
}

// other way todo this
function myFunction(a, b) {
    const result = new Set(a);
    b.forEach((el) => result.add(el));
    return result;
}


// Creating JavaScript Set :------------
function myFunction(a, b, c){
    return new Set([a, b, c]);
}

// other way todo this 
function myFunction(a, b, c){
    const set = new Set();
    set.add(a);
    set.add(b);
    set.add(c);
    return set;
}


// Delete element from set
function myFunction(set, val){
    if(set.has(val)){
        set.delete(val);
    }
    return set;
}

// other way todo the same
function myFunction(set, val){
    set.delete(val);
    return set;
}