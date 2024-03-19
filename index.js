//creating the first function that allows the user to enter only numerical values.
function promptNaN(text) {
    let input = 0;
    do {
        input = parseInt(prompt(text));
        if (isNaN(input)) {
            alert("Enter a numerical value.");
        }
    }
    while (isNaN(input));
    return input;
}

