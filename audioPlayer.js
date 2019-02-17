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
  
  this.playMorseCode = function(notesToPlay, index) {
    if (!index) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    
    var currentChar = notesToPlay[currentIndex];
    
    if (currentChar == ".") {
      shouldPlay = true;
      timeout = unit;
    } else if (currentChar == "-") {
      shouldPlay = true;
      timeout = unit * 3;
    } else if (currentChar == "|") {
      shouldPlay = false;
      timeout = unit * 1;
    }else if (currentChar == " ") {
      shouldPlay = false;
      timeout = unit * 3;
    } else if (currentChar == "/") {
      shouldPlay = false;
      timeout = unit * 7;
    }
    
    this.playNote(shouldPlay, timeout);
    if (index != notesToPlay.length) {
      setTimeout(function() {
        audioPlayer.playMorseCode(notesToPlay, currentIndex + 1);
      }, timeout);
    }
  }
}