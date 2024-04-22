/*3. Crear una función que determine si una cadena de caracteres es un palíndromo.
    a. Convertir la cadena a minúsculas y eliminar espacios en blanco.
    b. Comparar la cadena original con la cadena invertida.
    c. Mostrar un mensaje indicando si la cadena es un palíndromo o no.
*/

function polindrome(string:string): string{
    const createString = string.toLowerCase().replace(/\s/g,'');

    const reverseString = createString.split('').reverse().join('');

    if(createString == reverseString){
        return `${createString} es un palíndromo`;
    }else{
        return `${createString} no es un palíndromo`
    }
}

const text1 = "Seres";
const text2 = "Sebastian"
console.log(polindrome(text1));
console.log(polindrome(text2))



/*  
    split: Divide la cadena en un array de caracteres individuales.
    reverse: Invierte el orden de los caracteres en ese array.
    join: Une los caracteres invertidos en una sola cadena.
*/