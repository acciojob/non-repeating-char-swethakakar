function firstNonRepeatedChar(str) {
// your code here
    let freqMap = {};

    // Loop through the string to populate the frequency map
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Loop through the string again to find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
        if (freqMap[str[i]] === 1) {
            return str[i]; // Return the first non-repeating character
        }
    }
    return null; // Return null if no non-repeating character is found	
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
