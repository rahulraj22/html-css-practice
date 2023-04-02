// Check if two dates are equal
function myFunction(a, b){
    return a.getTime() === b.getTime();
}

// Return no. of days b/w two dates
function myFunction(a, b){
    return Math.abs(a.getTime() - b.getTime())/(1000 * 60 * 60 * 24); // a.getTime() => give time in milliseconds
}

// Check if two dates fall on the exact same day
function myFunction(a, b){
    return a.getDay() === b.getDay();
}

// Other solution
function myFunction(a, b){
    return (a.getFullYear() == b.getFullYear() && a.getMonth() == b.getMonth() && a.getDate() == b.getDate());
}

// let say today date is : a = 4/1/2023
// a.getFullYear() = 2023
// a.getDate() = 1
// a.getDay() = 5 (=> Friday) Here 0 => Sunday
// a.getMonth() = 3 implies April

// Check if two dates are within 1 hour from each other
function myFunction(a, b){
    return Math.abs(a.getTime() - b.getTime()) <= 60 * 60 * 1000;
}

// Other solution
function myFunction(a, b){
    return Math.abs(a - b) <= 60 * 60 * 1000;
}


// Check if one date is earlier than the other
function myFunction(a, b){  // return true if a is earlier than b else false
    return b.getTime() > a.getTime();
}

// Other solution
function myFunction(a, b){
    return b > a;
}


