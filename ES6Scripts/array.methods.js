"use script"

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

//a
let itemsOnly = cart.map(searchItem);
function searchItem(array) {

    return array.item;

}

let itemSortList = itemsOnly.sort();

itemsOnly.forEach(x => console.log(x));


function getTotal(current, element){
return current + (element.price * element.quantity)
}
let cartPrice = cart.reduce(getTotal,0);
console.log(cartPrice);



