function anagramme(strA, strB) {
    let regexp = /[^$*^ ,]+/g;
    let firstTabA = strA.match(regexp);
    let firstTabB = strB.match(regexp);
    let makeTabA = firstTabA.join('').toString().toLowerCase().split("");
    let makeTabB = firstTabB.join('').toString().toLowerCase().split("");
    
    let check = 0;
    for (let index = 0; index < makeTabA.length; index++) {
        for (let k = 0; k < makeTabB.length; k++) {
            if (makeTabA[index] == makeTabB[k]) {
                check += 1;
            }
        }
    }
  console.log(check);
        if (check == makeTabB.length) {
            return true;
        }
        else {
            return false;
        }
  }




console.log(anagramme("Faible", " fiable")); // True
console.log(anagramme("$*^^gare", "        Rag    e")); // True
console.log(anagramme("bougie", "piano")); // False
console.log(anagramme("faible", "fiable"));






// -----------------  Énoncé ------------------- //

// Créez un algorithme qui va retourner true si le premier paramètre est un anagramme du second, false dans le cas contraire.
// Malheuresement les entrées contiennent parfois des symboles et des espaces qu'il va falloir supprimer des chaînes.


// -----------------  Conseils ------------------- //