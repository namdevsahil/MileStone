function printInvertedRightAngleTriangle() {
    for (let row = 1; row <= 6; row++) {
        let pattern = '';

        // Add spaces before asterisks
        for (let space = 1; space <= row; space++) {
            pattern += '';
        }

        // Add asterisks for the current row
        for (let asterisk = 1; asterisk < row; asterisk++) {
            pattern += '*';
        }

        console.log(pattern);
    }
}

// Example usage with i = 6
// const i = 6;
printInvertedRightAngleTriangle();
