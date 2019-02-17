function AudioPlayer() {
  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.5);
  
  this.setAmp = function(amp) {
    osc.amp(amp);
  }
  
  this.start = function() {
    osc.start();
  }
  
  this.stop = function() {
    osc.stop();
  }
  
  this.playMorseCode = function(text) {
    console.log(text);
  }
}