/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'column-third');

  var secondDiv = document.createElement('div');
  secondDiv.setAttribute('class', 'pokemon-card');
  firstDiv.appendChild(secondDiv);

  var pkmImg = document.createElement('img');
  pkmImg.setAttribute('src', pokemon.imageUrl);
  secondDiv.appendChild(pkmImg);

  var thirdDiv = document.createElement('div');
  thirdDiv.setAttribute('class', 'pokemon-card-text');
  secondDiv.appendChild(thirdDiv);

  var header = document.createElement('h2');
  header.textContent = pokemon.name;
  thirdDiv.appendChild(header);

  var header3 = document.createElement('h3');
  header3.textContent = pokemon.number;
  thirdDiv.appendChild(header3);

  var paragraph = document.createElement('p');
  paragraph.textContent = pokemon.description;
  thirdDiv.appendChild(paragraph);
  return firstDiv;
}

var row = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  var pokemons = renderPokemon(pokedex[i]);
  row.appendChild(pokemons);
}
