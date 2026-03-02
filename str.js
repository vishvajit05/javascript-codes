
// Create Strings
let str1 = "Hello";
let str2 = 'JavaScript';
let str3 = `Welcome to JS`;

// Length
console.log("Length:", str1.length);


//substring
console.log(str2.substring(0, 4)); // "Java"
console.log(str2.substring(4));    // "Script"


// Replace
let msg = "I love Java";
console.log(msg.replace("Java", "JavaScript"));

// Split
let data = "HTML,CSS,JS";
console.log(data.split(","));

//concatenate
let fullName = str1 + " " + str2;
console.log(fullName);

//escape characters
let quote = "She said, \"Hello!\"";
console.log(quote);

//string compare
let strA = "apple";
let strB = "banana";
console.log("apple" === "banana"); // false
console.log("apple" === "apple"); // true
