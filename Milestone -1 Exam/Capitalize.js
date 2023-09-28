function capitalizeFirstName(name) {
    // Check if the first letter is lowercase
    const firstLetter = name.charAt(0);
    const isFirstLetterLowercase = firstLetter === firstLetter.toLowerCase();

    // If the first letter is lowercase, capitalize it; otherwise, return the original string
    const modifiedName = isFirstLetterLowercase
        ? firstLetter.toUpperCase() + name.slice(1)
        : name;
    return modifiedName;
}

// Example usage:
const userName = "john";
const modifiedUserName = capitalizeFirstName(userName);
console.log(modifiedUserName); // Output: "John"
