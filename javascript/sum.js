let myArray = [1, 4, 2, 3, 5, 6];

// 0
sum = 0 + 1 // 1
// 1 + 4 => 5
// 5 + 2 => 7
// 7 + 3 => 10

function sumfac (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + sumbers [i];
        sum += numbers[i]; // This is a shorthand for sum = sum + numbers[i];
    }
    return sum;
}

let result = sumfac(myArray);
console.log (result);
// Output: 21

let anotherResult = sumfac ([3, 3, 2, 6, 4]);
console.log (`My result is ${anotherResult}`);
// Output: My result is 18


