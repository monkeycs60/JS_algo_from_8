function abreviation(str) {
    let nomInit = [];
    let result = str.trim();
    let espace = result.indexOf(" ");
    let prenom = result.slice(0, espace);
    
for (let index = 0; index < result.length; index++) {
    let regexp = /[a-zA-Z]+/g;
    if (result[index] === " ") {
        nomInit.push(result[index + 1]);
    }   
}
let last = `${prenom} ${nomInit}.`;
return last
};

console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("             Alfred Hitchcock                 ")); // Alfred H.
console.log(abreviation("Jean-Michel Luc"));



// -----------------  Énoncé ------------------- //

// Créez un algorithme qui va retourner l'abréviation d'un nom et prénom, qui va retourner "John D." quand on lui passe en argument "John Doe"

// -----------------  Conseils ------------------- //