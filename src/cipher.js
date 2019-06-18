window.cipher = {
  encode: (offset, string) => {
    let textCoded = '';
    for(let i = 0; i < string.length; i++){
      let stringInAsccii = string.charCodeAt(i);
      if(stringInAsccii >= 65 && stringInAsccii <=90){
        let asciiWithOffset = (stringInAsccii - 65 + offset ) % 26 + 65;
        let aOffsetToText = String.fromCharCode(asciiWithOffset);
        textCoded += aOffsetToText;
      }else if(stringInAsccii >= 97 && stringInAsccii <= 122){
        let asciiWithOffset = (stringInAsccii - 97 + offset) % 26 + 97;
        let aOffsetToText = String.fromCharCode(asciiWithOffset);
        textCoded += aOffsetToText;
      }else {
        textCoded += string[i];
      }
    }
    return textCoded;
  },
  decode: (offset, string) => {
    let textDecoded = '';
    for(let i = 0; i < string.length; i++){
        let stringInAsccii = string.charCodeAt(i);
      if(stringInAsccii >= 65 && stringInAsccii <=90){
        let asciiWithoutOffset = (stringInAsccii + 65 - offset) % 26 + 65;
        let fromAsciiToText = String.fromCharCode(asciiWithoutOffset);
        textDecoded += fromAsciiToText;
      }else if(stringInAsccii >= 97 && stringInAsccii <= 122){
        let asciiWithoutOffset = (stringInAsccii - 122 - offset) % 26 + 122;
        let aOffsetToText = String.fromCharCode(asciiWithoutOffset);
        textDecoded += aOffsetToText;
      }else{
        textDecoded += string[i];
      }
    }return textDecoded;
  }
};
