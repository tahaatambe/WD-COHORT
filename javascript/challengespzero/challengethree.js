// You're packing choclate bars into gift boxes. Each box must contain the same number of choclate bars. How many choclate bars do you nned for all the boxes?

// Challenge

// Create a function that multiplies two numbers (choclate bars per box and the number of the boxes) and returns the total number of choclate bars needed.

//Test Case One
barsPerBox(5);
numberOfBoxes(10);
// Expected output: 50

//Test Case Two
barsPerBox(3);
numberOfBoxes(3);
// Expected output: 9

//Test Case Three
barsPerBox(9);
numberOfBoxes(4);
// Expected output: 36

function totalChoclateBars (barsPerBox, numberOfBoxes) {
    // Return barsPerBox multiplied by numberOfBoxes
    return barsPerBox * numberOfBoxes;
}