const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const cardLocation = document.querySelector('div.card-columns');
/*
DADOS API
ex. pokemon/1
Imagem-
sprite:front_default -> https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
Stats-
    stats:stat:name -> speed
    stats:base_stat

"base_stat": 49,
"effort": 0,
"stat": {
"name": "defense",
"url": "https://pokeapi.co/api/v2/stat/3/"

"base_stat": 49,
"effort": 0,
"stat": {
"name": "attack",
"url": "https://pokeapi.co/api/v2/stat/2/"

"base_stat": 45,
"effort": 0,
"stat": {
"name": "hp",
"url": "https://pokeapi.co/api/v2/stat/1/"


TIPO-

slot:2 (significa que tem 2)
types: name: poison
types: name: grass

*/


fetch(API_URL).then(result => result.json())
    .then(i => {(i.results).forEach(j => {
        (getPokeinfos(j.url));
    });})

function getPokeinfos(url){
    fetch(url).then(result => result.json()).then(i =>{
        const nome = i.name;
        const picurl = i.sprites.front_default;
        const hp = i.stats[5].base_stat;
        const atk = i.stats[4].base_stat;
        const def =  i.stats[3].base_stat;
        const speed = i.stats[0].base_stat;
      //  const pokestype =  i.types.then( i => typePokeF(i));
      // console.log(pokestype);
        createCards(nome,picurl,hp,atk,def,speed);}
    )
};
/*
nome = 'pikachu';
picurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
hp = 30;
atk = 40;
def = 40;
speed = 50;
*/


function typePokeF(a){
    const b = 'Type: ';
    for(var i=0; i < a.length; i++){
        b += (a[i].type.name);
    }
    return b;

};

function createCards(nome,picurl,hp,atk,def,speed){

    //Creating main card
   const card = document.createElement('div');
   card.className = 'card';
   //Pokemon picture
   const img = document.createElement('img');
   img.src = picurl; img.className = 'card-img-top';
   card.appendChild(img);
   // criando card body e seus filhos.
   const cardbody = document.createElement('div');
   cardbody.className = 'card-body';

   // nome
   const card_name = document.createElement('h3');
   card_name.className = 'card-tite';
   nome = nome.charAt(0).toUpperCase() + nome.substr(1).toLowerCase();
   card_name.textContent = nome;
   cardbody.append(card_name);

   //stats

   const cardStats = document.createElement('p');
   cardStats.className = 'card-text';
   cardStats.id = 'stats';
   cardStats.textContent = 'STATS';
  


   cardbody.append(cardStats);

   //criando div, span atk def
    const hp_speed = document.createElement('div');
    hp_speed.className = 'card-text';
    // hp
    const att1 = document.createElement('span');
    att1.textContent = `HP: ${hp}`;

    //speed
    const att2 = document.createElement('span');
    att2.textContent = `Speed: ${speed}`;

    hp_speed.append(att1);
    hp_speed.append(att2);


    //criando div, span atk def
    const atk_def = document.createElement('div');
    atk_def.className = 'card-text';
    // atk
    const att3 = document.createElement('span');
    att3.textContent = `ATK: ${atk}`;
    //def
    const att4 = document.createElement('span');
    att4.textContent = `DEF: ${def}`;

    atk_def.append(att3);
    atk_def.append(att4);


    cardbody.append(hp_speed);
    cardbody.append(atk_def);
    //

/*
        const typePoke = document.createElement('div');
    typePoke.className = 'card-text';
    typePoke.innerText = typePokeF(typee);

    const typePokes2 = document.createElement('span');
    typePokes2.innerText = typePokeF(typee);

 typePoke.append(typePokes2);
 */
    //cardbody.append(typePoke);


   card.append(cardbody);

   cardLocation.append(card);

}

/*
<div class="card">
<img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
<div class="card-body">
    <h3 class="card-title">Bulbassaur</h3>            
    <p class="card-text">Stats</p>            
    <div class="card-text"><span>HP: </span><span>Speed: </span><div>            
    <div class="card-text"><span>ATK:</span><span>Def:</span></div>
    <div class="card-text">Type:</div>
</div>
</div>

*/