/*
const binaryArrayToNumber = arr => {
  // your code
};

codigo que receba um array de 0 e 1 e volte o binario responsável por ele
*/


function binaryArrayToNumber(a) {
    var total=0;
    a.reverse();
    for(i in a){
    total += a[i]*(2**i);
    }
    return(total);
  };

  /*
  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

  function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
  }

  const binaryArrayToNumber = arr => {
    return parseInt(Number(arr.join('')), 2)
  };

  */
 
console.log(binaryArrayToNumber([1,1,1]), 7);
