const makeDino = function (newSpecies, newPeriod, newDiet, newExtinct = false) {

  // if( newExtinct)

  const newDino = {
    species: newSpecies,
    period: newPeriod,
    carnivore: newDiet,
    extinct: newExtinct,
  }
  return newDino
}


/********************
 * HELPER FUNCTIONS *
 ********************/
const makeSingular = function (dino) {
  //  make a dino with the 'us' at the end of the speies removed
  let newSpecies = '';
  if (dino.species.endsWith('us')) {
    newSpecies = dino.species.slice(0, -2)
  }
  else {
    newSpecies = dino.species;
  }
  let newDino = makeDino(newSpecies, dino.period, dino.carnivore, dino.extinct);

  return newDino;
}
//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


const makeExtinct = function (dino) {
  //  returns a new dinosaur with extinct set to true.
  let newExtinctDino = dino
  newExtinctDino.extinct = true
  return newExtinctDino

}

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

const isExtinct = function (dino) {
  // return whether the given dinosaur is extinct
  if (dino.extinct === true) {
    return true;
  }
  return dino.extinct = false

}


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

const isTriassic = function (dino) {
  // returns whether the given dinosaur is from the Triassic period`   
  if (dino.period === 'Triassic') {
    return true
  }
  return false
}
//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//



const isJurassic = function (dino) {
  // returns whether the given dinosaur is from the Triassic period`   
  if (dino.period === 'Jurassic') {
    return true
  }
  return false
}

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


const isCretaceous = function (dino) {
  // returns whether the given dinosaur is from the Triassic period`   
  if (dino.period === 'Cretaceous') {
    return true
  }
  return false
}
//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------/


const isCarnivore = function (dino) {

  return dino.carnivore
}

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

const carnivoresOnly = function (dinos) {
  return (dinos.filter(isCarnivore))
}

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


const herbivoresOnly = function (dino) {

  let onlyHerbivoresArray = []
  for (const obj of dino) {
    if (obj.carnivore === false) {
      onlyHerbivoresArray.push(obj)
    }

  }
  return onlyHerbivoresArray;
}

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

const extinctOnly = function (dino) {
  //  return an array of only extinct 

  return (dino.filter(isExtinct))
}


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

const notExtinct = function (dinos) {

  aliveDinos = []
  for (const dino of dinos ){
    if (dino.extinct === false){
      aliveDinos.push(dino)
    }
  }
  return aliveDinos;

}


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

const triassicOnly = function (dinos){

  return dinos.filter(isTriassic)
}




//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

const notTriassic = function (dinos){

  return !dinos.filter(isTriassic)
}




//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function (dinos) {
  const newDinos = dinos.map(makeSingular)

  return newDinos
}


const makeAllExtinct = function (dinos) {
  // returns an array 
  //an array where all dinos have been made extinct.  
  // console.log( makeExtinct(dinos))
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

if (typeof makeDino === 'undefined') {
  makeDino = undefined
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined
}

if (typeof isCarnivore === 'undefined') {
  isCarnivore = undefined
}

if (typeof isExtinct === 'undefined') {
  isExtinct = undefined
}

if (typeof isTriassic === 'undefined') {
  isTriassic = undefined
}

if (typeof isJurassic === 'undefined') {
  isJurassic = undefined
}

if (typeof isCretaceous === 'undefined') {
  isCretaceous = undefined
}

if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
  isFirstAlphabeticallyBySpecies = undefined
}

if (typeof extinctIsLast === 'undefined') {
  extinctIsLast = undefined
}

if (typeof carnivoreIsFirst === 'undefined') {
  carnivoreIsFirst = undefined
}

if (typeof isInPeriodOrder === 'undefined') {
  isInPeriodOrder = undefined
}

if (typeof singularizeDinos === 'undefined') {
  singularizeDinos = undefined
}

if (typeof truncateDinos === 'undefined') {
  truncateDinos = undefined
}

if (typeof makeAllExtinct === 'undefined') {
  makeAllExtinct = undefined
}

if (typeof carnivoresOnly === 'undefined') {
  carnivoresOnly = undefined
}

if (typeof herbivoresOnly === 'undefined') {
  herbivoresOnly = undefined
}

if (typeof extinctOnly === 'undefined') {
  extinctOnly = undefined
}

if (typeof notExtinct === 'undefined') {
  notExtinct = undefined
}

if (typeof triassicOnly === 'undefined') {
  triassicOnly = undefined
}

if (typeof notTriassic === 'undefined') {
  notTriassic = undefined
}

if (typeof bySpecies === 'undefined') {
  bySpecies = undefined
}

if (typeof byExtinctLast === 'undefined') {
  byExtinctLast = undefined
}

if (typeof byCarnivoresFirst === 'undefined') {
  byCarnivoresFirst = undefined
}

if (typeof byPeriod === 'undefined') {
  byPeriod = undefined
}



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
