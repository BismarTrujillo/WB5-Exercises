"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 2.19 },
    { product: "Fish", price: 5.09 },
    { product: "abc", price: 2.59 },
    { product: "qwe", price: 7.73 },
    { product: "fgg", price: 1.09 },
    { product: "hgs", price: 2.39 },
    { product: "jkl", price: 5.89 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

// Which candies costs less than $4.00?
//let candyLessThanFour = products.filter(element => element.price < 4.00);

//console.log(candyLessThanFour);

// Which candies has "M&M" its name?

let findMM = products.filter(obj => {
    let firstM = obj.product.indexOf("M");
    let getMandM = obj.product.substring(firstM, firstM + 3);

    if (getMandM == "M&M") {
        return true;
    }

});
console.log(findMM);

//Do we carry "Swedish Fish"?

let doWeCarryFish = products.find(obj => obj.product == "Swedish Fish");

if (doWeCarryFish != undefined) {
    console.log("Yes")
} else
    console.log("no");

console.log(doWeCarryFish);

