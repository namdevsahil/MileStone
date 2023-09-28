function mixColors(color1, color2) {
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    console.log("purple");
                    break;
                case "yellow":
                    console.log("orange");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;
        case "blue":
            switch (color2) {
                case "red":
                    console.log("purple");
                    break;
                case "yellow":
                    console.log("green");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;
        case "yellow":
            switch (color2) {
                case "red":
                    console.log("orange");
                    break;
                case "blue":
                    console.log("green");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;
        default:
            console.log("Invalid color combination");
    }
}

// Example usage:
mixColors("red", "blue"); // Output: purple
mixColors("blue", "red"); // Output: purple
mixColors("red", "yellow"); // Output: orange
mixColors("blue", "yellow"); // Output: green
mixColors("green", "yellow"); // Output: Invalid color combination
