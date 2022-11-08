"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

    // Who is the Academy Member whose ID is 187?
/*
    let memberID187 = academyMembers.find(actor => actor.memID == 187)

    console.log(memberID187);

    // Who has have been in at least 3 films?

    let member3Films = academyMembers.filter(actor => actor.films.length >= 3);
    console.log(member3Films);
*/
    // Who has a name that starts with "Bob"?

    //let findBob = academyMembers.filter(actor => actor.name.substring(0,4)  == "Bob ");
    //console.log(findBob);
    
    // HARDER: Which Academy Members have been in a film
    // that starts with "A"
  
let filmstartsAtA = academyMembers.filter(actor => actor.films.forEach(filmStartsAtAFunction));


let filteredfilms = academyMembers.filter( (actor) => (actor.films.findIndex(filmStartsAtAFunction) != -1));

let filteredfilms3 = academyMembers.filter( (actor) => (actor.films.findIndex((f) => f.substring(0,1) == "A") != -1));

console.log(filteredfilms);

//let filmstartsAtA = academyMembers.filter(hasFilmThatStartsWithA);

// function hasFilmThatStartsWithA(actor){
//    return (actor.films.findIndex(filmStartsAtAFunction) != -1)
// }
let filteredfilms2 = academyMembers.filter(doesActorHaveAtLeastOneFilmWithA);

function doesActorHaveAtLeastOneFilmWithA(actor){
   
    for(let f in actor.films){
        if (f.substring(0,1) == "A"){
            return true;
        } 
    }
    return false;
}


function doesActorHaveAtLeastOneFilmWithA(actor){
    for(let f in actor.films){
        if (f.substring(0,1) == "A"){
            return true;
        } 
    }
    return false;
}

function filmStartsAtAFunction(element){
    return (element.substring(0,1) == "A");
}
    

     console.log(filmstartsAtA);