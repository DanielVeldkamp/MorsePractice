function Converter() {
  const lookupTable = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
  };

  this.convertToMorse = function(text) {
    var outputMorse = "";
    var text = text.toLowerCase();
    for (i = 0; i < text.length; i++) {
      if (text.charAt(i) == " ") {
        outputMorse += "/";
      } else if (lookupTable[text.charAt(i)] != undefined) {
        outputMorse += lookupTable[text.charAt(i)];
        if (text.charAt(i + 1) !== " ") {
          outputMorse += " ";
        }
      }
    }
    return outputMorse;
  }
}