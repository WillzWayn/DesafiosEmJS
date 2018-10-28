
var a = [];
function fazedor(n_linha,n_coluna,bombas){
    mat = [] //Cria uma variavel matriz
    // Primeira parte do codigo irá criar uma matriz(x,y)
    //primeiro for ira criar um vetor vazio e a segunda irá preencher o vetor com os valores das colunas.
    for(var i = 0; i < n_linha; i++){
        mat[i] = [];
        for(var j = 0; j<n_coluna;j++){
            //Poderia colocar aqui um if-else, perguntando sobre um arranjo de bombas(minas = [],[]...) pre determinados
            //minas.map(x => JSON.stringify(x).include('['+i+']'+'['+j+']'))
            mat[i][j] = 0;
        }
    }
    //segunda parte do codigo, irá colocar bombas aleatorias de valor * na matriz
    for(var i = 0; i < bombas; i++){
    var bombax;
    var bombay;
    bombax = parseInt(Math.random()*(n_coluna));
    bombay = parseInt(Math.random()*(n_linha));
    mat[bombay][bombax] = '*';
    a = mat;
    }
 
    /*terceira parte. colocar bomba
                * * * linha i-1     =>    [i-1][j-1] [i-1][ j ] [i-1][j+1]                                      a[linha][coluna]
                * ? *               =>    [ i ][j-1] [   EU   ] [ i ][j+1] 
                * * *               =>    [i+1][j-1] [i+1][ j ] [i+1][j+1]
 
   */
    for(var i = 0; i < n_linha; i++){
        for(var j = 0; j<n_coluna;j++){
            if(mat[i][j] !== '*'){
              // Parte superior ([i-1][j-1] [i-1][ j ] [i-1][j+1])
            if((i-1) >= 0){
               if((mat[i-1][j-1]) != 'undefined' && (mat[i-1][j-1]) == '*'){ (mat[i][j] += 1);}
               if((mat[i-1][j]) != 'undefined' && (mat[i-1][j]) == '*' ){ (mat[i][j] += 1);}
               if((mat[i-1][j+1]) != 'undefined' && (mat[i-1][j+1]) == '*'){ (mat[i][j] += 1);}
            }

            //Na minha linha ([ i ][j-1] [   EU   ] [ i ][j+1])
            if((mat[i][j-1] != 'undefined') && (mat[i][j-1] == '*')){(mat[i][j] += 1);}
            if((mat[i][j+1] != 'undefined') && (mat[i][j+1] == '*')){(mat[i][j] += 1);}

            //Parte inferior ([i+1][j-1] [i+1][ j ] [i+1][j+1])
            if((i+1) < mat.length){
            if((j-1) >= 0 && (mat[i+1][j-1] != 'undefined') && (mat[i+1][j-1] == '*')){mat[i][j] += 1;}
            if(((mat[i+1][j]) != 'undefined') && (mat[i+1][ j ] == '*')){mat[i][j] += 1;}
            if((mat[i+1][j+1] != 'undefined') && (mat[i+1][j+1] == '*')){mat[i][j] += 1;}
            }
        }
    }
}
    
return(mat)
}

function clicou(k){
    if(event.currentTarget.textContent === '*'){
        for(element of document.querySelectorAll('span')){
            element.setAttribute('class', '');
        }
        alert('perdeu');
        setTimeout(function(){
            location.reload();
        }, 3000);
        
    }else { k.target.firstChild.className = '';
        }
}


function preencher(mat){
    var table = document.getElementById('campo');
    for (linha of mat){
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for(coluna of linha){            
            var td = document.createElement('td');
            var span = document.createElement('span')
            span.textContent= coluna;
            span.setAttribute('class', 'invisible');
            td.appendChild(span);
            tr.appendChild(td);     
            td.addEventListener('click', clicou);
        }
        /*
        <campo>
            <tr>
                <td>
                    <span class='hidden'>

        */

    }
    console.log(mat)

}


function clickin(){
    var a = document.getElementById('x').value;
    var b = document.getElementById('y').value;
    var c = document.getElementById('bombas').value;
    if(a != isNaN && b!= isNaN && c!= isNaN){
    d = fazedor(a,b,c);
    preencher(d);} else{
        alert('Preencha os três valores com números')
    }
}
