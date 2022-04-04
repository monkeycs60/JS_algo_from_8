function nbDeVoyelles(txt) {
    const reg = /[aeiouAEIOU]/gm;
  let result = txt.match(reg);
   if (result.length === null ) {
return 0;
       
   }
   else {return result.length
}
// tab = 0;
// for (let index = 0; index < txt.length; index++) {
    
//     if (txt[index] == "a" || txt[index] == "e" || txt[index] == "i" || txt[index] == "o" || txt[index] == "u") {
//         tab += 1;
//     }
// }
// return tab;
    
}



console.log(nbDeVoyelles("jdhqgdqsghdakzejamazemlqksd")); // retourne 5
console.log(nbDeVoyelles("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, aliquam?")); // retourne 28
console.log(nbDeVoyelles("L’imagination gouverne le monde.")); // retourne 13
console.log(nbDeVoyelles('zzzZZZzz'));