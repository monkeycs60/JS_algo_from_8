function meilleurInvestissement(arr){
    
    let grandeValeur = [];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index - 1] < arr[index]) {
            grandeValeur.push(arr[index])
        }   
    }
    let bigValu = grandeValeur.sort();
    let bigValue = bigValu[bigValu.length - 1];
    console.log(bigValue);

    let petiteValeur = [];
    for (let j = 1; j < arr.length; j++) {
        if (arr[j - 1] > arr[j]) {
            petiteValeur.push(arr[j])
        }   
    }
  let minValu = petiteValeur.sort((a, b) => a - b);
  let minValue = minValu[0]
  console.log(minValue);


 let indexBig = arr.indexOf(bigValue);
 let indexSmall = arr.indexOf(minValue);
 
    

let semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

return `Le meilleur coup à faire cette semaine était d'investir le ${semaine[indexSmall]} et de revendre le ${semaine[indexBig]} pour un bénéfice de ${ bigValue - minValue} !`
//"Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."
}


console.log(meilleurInvestissement([50,10,20,2,80,60,20]));


// ----------------- ÉNONCÉ -----------------

// Vous avez 7 valeurs dans un tableau qui représente le cours de l'or pour les 
// 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et 
// le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Jeudi(4eme valeur du tableau), avec un cours
// à 2€ et le meilleur pour vendre est vendredi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
// retourner le jour d'achat, le jour de vente, et le montantdu bénéfice.

// Bon courage !


// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();