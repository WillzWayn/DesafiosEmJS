/*
Faça uma função que leia um numero e retorne a quantidade de 1 que esse numero contem para formar seu binário.
ex. 

*/


/*

var countBits = function(n) {
    b = (n.toString(2).split(''));
    var tamanho = 0;
    for (i in b){
        if(b[i] == 1){
            tamanho += 1;
        }
    }
    return (tamanho);
  }
  */

 countBits = _n => _n.toString(2).split('0').join('').length;
  
