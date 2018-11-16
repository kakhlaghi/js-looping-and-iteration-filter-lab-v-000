// Code your solution in this file
function findMatching(someArray, name) {
  return someArray.filter(function (someName){
    return someName.lowerCase() == name.lowerCase();
  })
}
