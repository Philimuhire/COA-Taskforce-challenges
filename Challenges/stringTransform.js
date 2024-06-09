function transformString(input) { //defined the function transformString 
    const length = input.length;
    let result = input;

    if (length % 15 === 0) {
        // If divisible by 15, perform both operations in the order specified.
        result = result.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If divisible by 3, reverse the entire string.
        result = result.split('').reverse().join('');
        result = result.replace(/\s+/g, '');
    } else if (length % 5 === 0) {
        // If divisible by 5, replace each character with its ASCII code.
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    return result;
}

// Examples
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"


