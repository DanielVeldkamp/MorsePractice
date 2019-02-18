function AudioPlayer(unit) {
  this.unit = unit;
  this.currentlyPlaying = null;
  osc = new p5.SinOsc();
  osc.amp(.5);
  osc.freq(800);
  
  this.setAmp = function(amp) {
    osc.amp(amp);
  }
  
  this.setCurrentlyPlaying = function(value) {
    this.currentlyPlaying = value;
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
    } else if (currentChar == " ") {
      shouldPlay = false;
      timeout = unit * 3;
    } else if (currentChar == "/") {
      shouldPlay = false;
      timeout = unit * 7;
    } else {
      return;
    }
    
    this.playNote(shouldPlay, timeout);
    if (shouldPlay) {
      if (timeout == unit) {
        this.currentlyPlaying = ".";
      } else {
        this.currentlyPlaying = "-";
      }
    } else {
      if (timeout == unit * 3) {
        this.currentlyPlaying = " ";
      } else if (timeout == unit * 7) {
        this.currentlyPlaying = " / ";
      }
    }
    
    if (index != notesToPlay.length) {
      setTimeout(function() {
        audioPlayer.playMorseCode(notesToPlay, currentIndex + 1);
      }, timeout);
    }
  }
}