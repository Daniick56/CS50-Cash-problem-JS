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

//creating a function that recieves the change owed and returns the maximun amount of 25$ coin that can be used
function calculate25(change) {
    let contador25 = 0;
    while (change >= 25) {
        change -= 25;
        contador25++;
    }
    return contador25;
}

//creating a function that recieves the change owed and returns the maximun amount of 25$ coin that can be used
function calculate10(change) {
    let contador10 = 0;
    while (change >= 10) {
        change -= 10;
        contador10++;
    }
    return contador10;
}
