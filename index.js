// Code your solution in this file
function findMatching(someArray, name) {
  return someArray.filter(function (someName){
    return someName.toLowerCase() == name.toLowerCase();
  })
}


function fuzzyMatch(someArray, str){
  return someArray.fitler(function(someStr) {
    return someStr[0] == str[0];
  })
}
