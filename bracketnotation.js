// Task 1:
let movieArray = [
    ["Toy Story", "School Rock","Happy Feet"],
    ["Harry Potter", "Star Wars","Lord of the Rings"],
    ["Kill Bill", "American Psycho", "Django Unchained"]
];

// Task 2: 
console.log("\nTask 2: ")
console.log(movieArray[0][0]);
console.log(movieArray[0][1]);
console.log(movieArray[0][2]);
console.log(movieArray[1][0]);
console.log(movieArray[1][1]);
console.log(movieArray[1][2]);
console.log(movieArray[2][0]);
console.log(movieArray[2][1]);
console.log(movieArray[2][2]);

// Task 3:
console.log("\nTask 3: ")
let row = 0;
let collumn = 0;
console.log(`${movieArray[row][collumn]}, ${movieArray[row][collumn + 1]}, ${movieArray[row][collumn + 2]}`);
row = 1;
console.log(`${movieArray[row][collumn]}, ${movieArray[row][collumn + 1]}, ${movieArray[row][collumn + 2]}`);
row = 2;
console.log(`${movieArray[row][collumn]}, ${movieArray[row][collumn + 1]}, ${movieArray[row][collumn + 2]}`);

// Task 4:
console.log("\nTask 4: ");
for (row = 0; row < movieArray.length; row ++) {
    console.log(movieArray[1][row]);
}