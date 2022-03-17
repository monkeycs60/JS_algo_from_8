// // algo 8 SOLUCE

// function insere(arr, num) {

//     let ordreTab = arr.sort((a, b) => a - b);
//     ordreTab.push(num);
//   let ordreAddTab = ordreTab.sort((a, b) => a - b);
//   console.log(ordreAddTab);
//   for (let index = 0; index < ordreAddTab.length; index++) {
//       if (ordreAddTab[index] == num) {
//           return index  
//   }     
//   }
//   return ordreAddTab;   
//     }

// console.log(insere([30,45,87,96,54,29], 95));


function memeLettres(arr) {
  let arr0str = arr[0].toString().toLowerCase();
  let arr1str = arr[1].toString().toLowerCase();
  let arr0dest = arr0str.split("");
  let arr1dest = arr1str.split("");
 console.log(arr0dest);
 console.log(arr1dest);
 console.log((arr0dest.indexOf(arr1dest[index])));
 for (let j = 0; j < arr0dest.length; j++) {
   if (arr0dest.indexOf(arr1dest[j]) == arr1dest) {
     return true ;
   } else 
   { return false;

   }
   
 }


}
console.log(memeLettres(["concupiscence", "sens"]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.

// ----------------- CONSEILS -----------------

// Boucle "for".
// toLowerCase();
// indexOf();