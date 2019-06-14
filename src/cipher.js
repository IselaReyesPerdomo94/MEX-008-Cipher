window.cipher = {
  encode: (offset, string) => {
    let textCoded = '';
    let stringM = string.toUpperCase();
    for(let i = 0; i < stringM.length; i++){
      let stringInAsccii = stringM.charCodeAt(i);
      let asciiWithOffset = (stringInAsccii - 65 + offset ) % 26 + 65;
      let aOffsetToText = String.fromCharCode(asciiWithOffset);
      textCoded += aOffsetToText;
    }
    return textCoded;
  },
  decode: (offset, string) => {
    let textDecoded = '';
    let stringM = string.toUpperCase();
    for(let i = 0; i < stringM.length; i++){
      let stringInAsccii = stringM.charCodeAt(i);
      let asciiWithoutOffset = (stringInAsccii - 65 - offset + 52) % 26 + 65;
      let fromAsciiToText = String.fromCharCode(asciiWithoutOffset);
      textDecoded += fromAsciiToText;
    }return textDecoded;
  }
};
