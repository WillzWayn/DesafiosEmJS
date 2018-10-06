/*
Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
*/

function accum(n){
    n=n.split("");
    for (i in n){
    n[i]=n[i].toUpperCase()+n[i].toLowerCase().repeat(i);
    }
    return(n.join('-'));
}


console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");


/*  Comentado em varias linhas.


function accum(n){
    // cortar n em um array.
    n=n.split("");
    //varrer array e escrever 1x grande, string*posiçãoi pequeno.
    for (i in n){
    console.log(n[i].toUpperCase());
    vet[i]=n[i].toUpperCase()+n[i].toLowerCase().repeat(i);
    console.log(vet[i]);
    }

    return(vet.join('-'));
}

console.log(accum("abc"), "A-Bb-Ccc")



*/