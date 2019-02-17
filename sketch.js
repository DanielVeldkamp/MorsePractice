function setup() {
  createCanvas(windowWidth, windowHeight);
  audioPlayer = new AudioPlayer();
  var textToPlay = "hello";
  audioPlayer.playMorseCode(textToPlay);
  
  volumeSlider = createSlider(0, 100, 0);
  
  muteImg = loadImage('images/mute_32px.png');
  speakerImg = loadImage('images/speaker_32px.png');
  
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