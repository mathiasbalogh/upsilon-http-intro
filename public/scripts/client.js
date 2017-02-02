// var app = angular.module('bookApp', []);
//
// app.controller('BookController', BookController);
//   //passing in parameters to controller functions will inject that dependency
//   //into the app. Therefore, the parameter names matter.
//
// function BookController($http){
//
//   var ctrl = this;
//
//   ctrl.message = '';
//
//   $http({
//     method: 'GET',
//     url: '/books'
//   }).then(function(response){
//     console.log(response);
//     ctrl.message = response.data;
//   }).catch(function(err){
//     console.log('Error requesting data from server', err);
//   });
// }
var app = angular.module('pokeApp', []);

  app.controller('PokemonController', function(PokeService){
    console.log('controller loaded!');
    var ctrl = this;
    var currentlySelectedPokemon = {};
    ctrl.pokeList = [];
    ctrl.currentPokemon = {};
    // $http.get(API + '/pokemon').then(function(response){
    //   ctrl.pokeList = response.data.results;
    //   console.log('Got this',  response);
    // }).catch(function(err){
    //   console.log('Error getting Pokemon from API');
    // });

    PokeService.getAllPokemon().then(function(pokemonList){
      ctrl.pokeList = pokemonList;
    });

    ctrl.iChooseYou = function(pokemon){
      PokeService.getPokemon(pokemon).then(function(imageUrl){
        togglePokemon(pokemon);
        ctrl.currentPokemon.imageUrl = imageUrl;
        ctrl.currentPokemon.name = pokemon.name;
      })
    }

    function togglePokemon(pokemon){
      currentlySelectedPokemon.chosen = false;
      currentlySelectedPokemon = pokemon
      pokemon.chosen = true;
    }
});
