// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function inputChecker(alphabet){
    switch(true){
      case (alphabet === undefined):
        return false;
      case (alphabet.length != 26):
        return false;
      default:
        for (letter of alphabet){
          if(alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) return false;
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    if (inputChecker(alphabet)===false) return false;
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz ";
    const codeAlphabet = [...alphabet," "];
    input = input.toLowerCase();
    const code = [];

    if (encode === true){
      for (let i = 0; i < input.length; i++){
        code.push(codeAlphabet[originalAlphabet.indexOf(input[i])]);
      }
    } else {
      for (let i = 0; i < input.length; i++){
        code.push(originalAlphabet[codeAlphabet.indexOf(input[i])]);
      }
    }
    return code.join("");
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;