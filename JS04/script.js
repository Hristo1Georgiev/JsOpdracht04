const age = 18;
let custumerAge = 29;
let custumerAge2 = 17;
if (custumerAge >= age) {
    console.log("Welcome!");
}
else {
    console.log("You are not old enough to enter the bar, sorry!");
}
if (custumerAge2 >= age) {
    console.log("Welcome!");
}
else {
    console.log("You are not old enough to enter the bar, sorry!");
}

const isFemale = true;
if (isFemale) {
    console.log("welcome to the ladiesnight!");
}
else {
    console.log("Hi, its a ladiesnight! ladies only!");
}

const driverStatus = "bob";
let driverStatusTwee = "notBob"
if (driverStatus == "bob") {
    console.log("You are 'bob', drive safely to home!")
}
if (driverStatusTwee == "notBob") {
    console.log("You are not 'bob', I will call you a taxi!")
}
if (driverStatus === "bob") {
    console.log("You are 'bob', drive safely to home!");
} else {
    console.log("You are not 'bob', I will call you a taxi!");
}

let myAge = 29;
if (myAge <= 25 && myAge >= 18) {
    console.log("You get 50% discount.")
} else { console.log("You do not get a discount.") }

const firstName = "Bram";
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("You get a free bier!")
} else { console.log("You dont get a free bier.") }

const totalAmount = 100;
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("You get bitterballen for free!")
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("You get free of chatge portion Nachos!")
} else if (totalAmount >= 100) {
    console.log("You get a bottle of champagne free of charge!")
} else { console.log("You need to order few more drinks to get free of charge bitterballen, nachos or champagne") };