// Task 1
// No -- the result is the same regardless of whether the else is present or not.

// Task 2

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
};

function checkAge(age) {
    return (age > 18 ) ? true : confirm("Did parents allow you?");
};

function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?");
};

// Task 3

function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
};

function min(a, b) {
    return (a > b) ? b : a;
};

// Task 4

function pow(x, n) {
    return x**n
};