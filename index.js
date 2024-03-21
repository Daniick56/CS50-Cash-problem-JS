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
    let counter25 = 0;
    while (change >= 25) {
        change -= 25;
        counter25++;
    }
    return counter25;
}

//creating a function that recieves the change owed and returns the maximun amount of 10$ coin that can be used
function calculate10(change) {
    let counter10 = 0;
    while (change >= 10) {
        change -= 10;
        counter10++;
    }
    return counter10;
}

//creating a function that recieves the change owed and returns the maximun amount of 5$ coin that can be used
function calculate5(change) {
    let counter5 = 0;
    while (change >= 5) {
        change -= 5;
        counter5++;
    }
    return counter5;
}

//creating a function that recieves the change owed and returns the maximun amount of 1$ coin that can be used
function calculate1(change) {
    let counter1 = 0;
    while (change >= 1) {
        change -= 1;
        counter1++;
    }
    return counter1;
}

//main function that recieves the change owed and uses the previous functions to return the addition of all the counters
function coins(change) {
    let remaining = 0;
    let counter25 = calculate25(change);
    remaining = change - (counter25 * 25);

    let counter10 = calculate10(remaining);
    remaining = remaining - (counter10 * 10);

    let counter5 = calculate5(remaining);
    remaining = remaining - (counter5 * 5);

    let counter1 = calculate1(remaining);
    remaining = remaining - (counter1 * 1);

    let totalCoins = counter25 + counter10 + counter5 + counter1;

    return `The minimun amount of coins used is : ${totalCoins}`;
}

//calling the function
alert(coins(promptNaN("Enter the amount of money owed")));