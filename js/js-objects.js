// refer: https://www.jschallenger.com/javascript-practice/javascript-objects

// Accessing objects properties one
// myFunction({ continent: 'Asia', country: 'Japan' }) | Expected: Japan 
function myFunction(obj) {
    return obj.country;  // return 
}

// Accessing object properties two
function myFunction(obj) {
    return obj['prop-2']; // becoz we can't write: obj.'prop-2' like this
}


// Accessing object properties three 
function myFunction(obj, key) {
    return obj[key];
}

// check if property exist in object
function myFunction(obj, prp) {
    return obj.hasOwnProperty(prp);
}

// for example
const myObj = {
    name: "John",
    age: 30,
    city: "New York"
};
// return myObj.hasOwnProperty("age"); // returns true if present else false

// other solution
function myFunction(a, b) {
    // here a is object and b is the key or property
    return b in a;
}


// check if property exists in object and its truthy
function myFunction(a, b) {
    return b in a && (b != false && b != null && b != undefined);
}

// Other way todo the same 
function myFunction(a, b) {
    return Boolean(a[b]);
}

// console.log(Boolean(23));  // true
// console.log(Boolean(-234));  // true
// console.log(Boolean('Rahul')); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(23423.251)); // true


// Create JavaScript objects one
function myFunction(a) {
    // here a is value of the key 'key'

    // for this we first need to create an object using js inbuilt 
    const obj = new Object();
    obj.key = a;
    return obj;
}

// Other way todo the same
function myFunction(a) {
    return { key: a };
}

// Create JavaScript objects two
function myFunction(a, b) {
    // here a is key and b is value of the object
    // first create an object
    const obj = new Object();
    obj[a] = b; // why not obj.a = b; ??? becoz a can be string as well!!!!
    return obj;
}

// Other way todo the same
function myFunction(a, b) {
    return { [a]: b };
}


// Create JavaScript three
function myFunction(a, b) {

    // let a = ['a', 'b', 'c'];
    // let b = [1, 2, 3];
    // const obj = new Object();
    // for (let i = 0; i < a.length; ++i) {
    //     obj[a[i]] = b[i];
    // }
    // console.log(obj);  // O/P: {'a':1, 'b':2, 'c':3}

    // considering the above analogy, lets try todo the same
    const obj = new Object();
    for(let i = 0; i < a.length; ++i){
        obj[a[i]] = b[i];
    }
    return obj;
}

// Other way todo the same:-
function myFunction(a, b){
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}


// Extract keys from the object
function myFunction(a){
    // a is the object here
    return Object.keys(a);
}

// 





