function setup() {
  createCanvas(windowWidth, windowHeight);
  
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var punctuation = ".,!'()&+-/:;=?@_" + '"';
  var currentSelection = letters + numbers + punctuation;
  currentMorseCode = "";
  
  textSize(70);
  var unit = 100;
  audioPlayer = new AudioPlayer(unit);
  converter = new Converter();
  
  volumeSlider = createSlider(0, 100, 50);
  
  muteImg = loadImage('images/mute_32px.png');
  speakerImg = loadImage('images/speaker_32px.png');
  
  randomButton = createButton('Play random character');
  randomButton.position(10, 10);
  randomButton.mousePressed(function(e) {
    currentMorseCode = "";
    randomChar = currentSelection.charAt(Math.floor(Math.random() * currentSelection.length));
    console.log(randomChar);
    audioPlayer.playMorseCode(converter.convertToMorse(randomChar));
  });
  
  inputField = createInput("");
  inputField.position(20 + randomButton.width, 10);
  
  inputButton = createButton('<-- Convert input');
  inputButton.position(30 + randomButton.width + inputField.width, 10);
  inputButton.mousePressed(function(e) {
    currentMorseCode = "";
    inputText = inputField.value();
    audioPlayer.playMorseCode(converter.convertToMorse(inputText));
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
  
  if (audioPlayer.currentlyPlaying != null) {
    currentMorseCode += audioPlayer.currentlyPlaying;
    audioPlayer.setCurrentlyPlaying(null);
  }
  
  fill(0);
  text(currentMorseCode, 50, windowHeight/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}