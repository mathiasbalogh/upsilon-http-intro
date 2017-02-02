app.service('PokeService', function($http){
  var API = 'http://pokeapi.co/api/v2';

  this.getAllPokemon= function(){
    //return the promise to the caller
    return $http.get(API + '/pokemon').then(function(response){
      return response.data.results; //return on resolution of promise
      console.log('Got this',  response);
    }).catch(function(err){
      console.log('Error getting Pokemon from API');
    });
  }
  this.getPokemon= function(pokemon){
    return $http.get(pokemon.url).then(function(response){
      var foundPokemon = response.data;
      return foundPokemon.sprites.front_default; //image
  }).catch(function(err){
    console.log('Error getting Pokemon from API');
  });
  }

});
