// You have a basket of apples, but you decide to give some away to your neighbor. How many apples are left in your basked?

// Challenge

// Write a function that subtracts the number of apples given away from the total apples you started with, then returns the remaining apples.

//Test Case One
totalApples(20);
givenAway(5);
// Expected output: 15

//Test Case Two
totalApples(20);
givenAway(5);
// Expected output: 15

//Test Case Three
totalApples(20);
givenAway(5);
// Expected output: 15

function remainingApples (totalApples, givenAway) {
    // Return totalApples minus givenAway
    return totalApples - givenAway;
}