/*
Descending Order - 7kyu
Your task is to make a function that can take any non-negative integer as a argument and return it with its
digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(a){
    return(parseInt(a.toString().split('').sort().reverse().join('')));
}


/*  Comentado em varias linhas.

function descendingOrder(a){
    //transforma a em string.
    b = a.toString();
    // corta a string em um array com os numeros separados
    b=b.split('');
    //organiza o array na ordem.
    f=b.sort();
    f=f.reverse(); // Organiza o array de tras p frente
    f=f.join('')//junta o array
    parseInt(f); //transforma o texto em inteiro.

    return f;
}


*/