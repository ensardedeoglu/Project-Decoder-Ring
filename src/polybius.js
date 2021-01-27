
const polybiusModule = (function () {
  /*
    This "helper" function is used to auto-generate cipher encoder/decoder
    It is not 100% complete, yet it should allow:
      different combined keys (not tested, as it is not the requirement)
      different shapy of encoder (not tested, as it is not the requirement)
      different alphabet (not tested, as it is not the requirement)
  */


  function generatePolybiusCipher(encode = true){
    const alphabet = "abcdefgh(i/j)klmnopqrstuvwxyz"; 
    let row = 1, column = 1;
    const polybiusCipher = {}    
    for (let i = 0; i < alphabet.length; i++){
      if (column == 6) { 
        column = 1;
        row+=1;
      }
      if (alphabet[i] == "("){
        polybiusCipher[alphabet.substring(i,i+5)] = `${column}${row}`;
        column +=1;
        i += 4;
      } else {
        polybiusCipher[alphabet[i]] = `${column}${row}`;
        column +=1;
      }
    }
    if(encode === true){ 
      return polybiusCipher;
    } else { 
      for(const key in polybiusCipher){
        polybiusCipher[polybiusCipher[key]] = key;
      }
      return polybiusCipher;
    }
  } 

  function polybius(input, encode = true) {
    
    if(encode===false && input.replace(" ","").length%2>0) return false;

    input = input.toLowerCase();
    const polybiusCipher = generatePolybiusCipher(encode);
    const codeMessage = [];
    const encodeFlag = ((encode === true) ? 1 : 2);

    for (let i = 0; i < input.length; i+=encodeFlag){
      const searchItem = input.slice(i,i+encodeFlag); 
      if(input[i]==" "){
        codeMessage.push(input[i]); 
        i = i + (1-encodeFlag); 
      } else if (polybiusCipher[searchItem]){
        codeMessage.push(polybiusCipher[searchItem]);
      } else { 
        const cipherGroups = Object.keys(polybiusCipher);
        const foundKey = cipherGroups.find((key) => key.includes(searchItem));
        codeMessage.push(polybiusCipher[foundKey]);
      }
    }
    return codeMessage.join("").toString();
  }
  
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;