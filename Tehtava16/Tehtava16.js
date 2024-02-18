const prompt = require('prompt-sync')();

function getNum() {
    let luku1 = prompt("Anna 1. luku: ");
    let luku2 = prompt("Anna 2. luku: ");
    let luku;
    if(luku1 > luku2) {
        return(luku1);
    } else if(luku2 > luku1) {
        return("Suurempi luku on " + luku2);
    } else {
        return("Luvut ovat yhtä suuret");
    }
}

console.log(getNum());

function palindromi() {
    let sana1 = prompt("Anna yksi sana: ");
    let sana1Palindromi = "";

    for (i = sana1.length; i >= 0; i--) {
        sana1Palindromi += sana1.charAt(i);
    }
    console.log("Annettu sana vaarinpain on " + sana1Palindromi);
    if(sana1 == sana1Palindromi) {
        console.log("Annettu sana on palindromi.");
    } else {
        console.log("Annettu sana ei ole palindromi.");
    }
}

palindromi();