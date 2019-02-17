function AudioPlayer(unit) {
  this.unit = unit;
  osc = new p5.SinOsc();
  osc.amp(.5);
  osc.freq(800);
  
  this.setAmp = function(amp) {
    osc.amp(amp);
  }
  
  this.playNote = function(shouldPlay, duration) {
    if (shouldPlay) {
      osc.start();
    }
    setTimeout(function() {
      osc.stop();
    }, duration);
  }
  
  this.playMorseCode = function(notesToPlay) {
    console.log(notesToPlay);
    this.playNote(notesToPlay);
    for (i = 0; i < notesToPlay.length; i++) {
      var currentChar = notesToPlay[i];
      if (currentChar == ".") {
        //console.log("play note for 1 unit");
        this.playNote(true, unit * 1);
      } else if (currentChar == "-") {
        //console.log("play note for 3 units");
        this.playNote(true, unit * 3);
      } else if (currentChar == " ") {
        //console.log("wait 1 unit");
        this.playNote(false, unit * 1);
      } else if (currentChar == "/") {
        //console.log("wait 7 units");
        this.playNote(false, unit * 7);
      }
    }
  }
}