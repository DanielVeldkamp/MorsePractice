function setup() {
  createCanvas(windowWidth, windowHeight);
  
  var unit = 100;
  audioPlayer = new AudioPlayer(unit);
  converter = new Converter();
  
  var morseToPlay = converter.convertToMorse("Hello world");
  audioPlayer.playMorseCode(morseToPlay);
  
  volumeSlider = createSlider(0, 100, 50);
  
  muteImg = loadImage('images/mute_32px.png');
  speakerImg = loadImage('images/speaker_32px.png');
  
  button1 = createButton('1 unit');
  button1.position(10, 10);
  button1.mousePressed(function(e) {
    audioPlayer.playNote(true, 100);
  });
  
  button2 = createButton('3 units');
  button2.position(button1.width + 20, 10);
  button2.mousePressed(function(e) {
    audioPlayer.playNote(true, 300);
  });
}

function draw() {
  background(89, 171, 227);
  image(muteImg, width - (speakerImg.width + volumeSlider.width + muteImg.width + 30), 10, muteImg.width, muteImg.height);
  image(speakerImg, width - (speakerImg.width + 10), 10, speakerImg.width, speakerImg.height);
  volumeSlider.position(width - (volumeSlider.width + speakerImg.width + 20), 14);
  
  // Set volume
  const volume = volumeSlider.value();
  var amp = map(volume, 100, 0, 1, 0);
  audioPlayer.setAmp(amp);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}