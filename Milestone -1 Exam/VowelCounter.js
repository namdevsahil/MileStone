function countVowels(name) {
    name = name.toLowerCase();
    let vowelCount = 0;
    for (let i = 0; i < name.length; i++) {
        const currentChar = name[i];

        if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage:
const userName = "John Doe";
const numberOfVowels = countVowels(userName);
console.log(`Number of vowels in "${userName}": ${numberOfVowels}`);
