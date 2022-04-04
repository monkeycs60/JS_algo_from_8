function additioneNbPremiers(num) {
    
let decomposeNbr = [];
let decomposeOnlyPremier = [];
for (let index = num; index > 1; index--) {
    decomposeNbr.push(index);
}
for (let j = 0; j < decomposeNbr.length; j++) {
    if (decomposeNbr[j] % 2 > 0 && decomposeNbr[j] % 3 > 0 && decomposeNbr[j] % 5 > 0 && decomposeNbr[j] % 7 > 0)  {
        decomposeOnlyPremier.push(decomposeNbr[j]);
    }
    else if ( decomposeNbr[j] === 2 || decomposeNbr[j] === 3 || decomposeNbr[j] === 5 || decomposeNbr[j] === 7) {
        decomposeOnlyPremier.push(decomposeNbr[j]);
    }
}
console.log(decomposeOnlyPremier);
let result = 0;
for (let k = 0; k < decomposeOnlyPremier.length; k++) {
    result += decomposeOnlyPremier[k]
    
}
return result
}

console.log(additioneNbPremiers(10));

// additioneNbPremiers(10) = 17;

// ----------------- ÉNONCÉ -----------------

// Additione tous les nombres premiers d'un nombre donné, en comptant ce nombre.
// Les nombres premiers sont les nombres qui peuvent seulement être divisés par 1 et
// par eux-mêmes.
// 1 n'est pas un nombre premier.
// La liste des nombres premiers commencent comme cela : 
// 2, 3, 5, 7, 11, 13, 17, 19 etc ...

// ----------------- CONSEILS -----------------

// Recursion.
// Fonction dans une fonction.
// If, For ...
// Modulo (%).