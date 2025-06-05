let teas = ["masala", "ginger", "oolong", "orangs", "rose", "lemon"];


//teas[h]
teas.length //6

//let h = 5 // h <=5 || h < 6 

// loop - iteration; i , l , a

// 1. variale leke aao
// 2. limit batao kahan tak jaana hai
// 3. increment or decrement => h = h + 1 (h++)
for (let h = 0; h < teas.length; h = h++) {
    console.log(`tea at index ${h}: ${teas[h]} `);
}