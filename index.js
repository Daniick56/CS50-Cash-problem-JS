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

//creating a function that recieves the change owed and returns the maximun amount of 10$ coin that can be used
function calculate10(change) {
    let contador10 = 0;
    while (change >= 10) {
        change -= 10;
        contador10++;
    }
    return contador10;
}

//creating a function that recieves the change owed and returns the maximun amount of 5$ coin that can be used
function calculate5(change) {
    let contador5 = 0;
    while (change >= 5) {
        change -= 5;
        contador5++;
    }
    return contador5;
}

//creating a function that recieves the change owed and returns the maximun amount of 1$ coin that can be used
function calculate1(change) {
    let contador1 = 0;
    while (change >= 1) {
        change -= 1;
        contador1++;
    }
    return contador1;
}

//main function that recieves the change owed and uses the previous functions to return the addition of all the counters
function coins(change) {
    let remaining = 0;
    let contador25 = calculate25(change);
    remaining = change - (contador25 * 25);

    let contador10 = calculate10(remaining);
    remaining = remaining - (contador10 * 10);

    let contador5 = calculate5(remaining);
    remaining = remaining - (contador5 * 5);

    let contador1 = calculate1(remaining);
    remaining = remaining - (contador1 * 1);

    let totalCoins = contador25 + contador10 + contador5 + contador1;

    return `The minimun amount of coins used is : ${totalCoins}`;
}

//calling the function
alert(coins(promptNaN("Enter the amount of money owed")));