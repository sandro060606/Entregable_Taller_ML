let classifier;
let imageModelURL = "./models/";
let video;
let flippedVideo;
let label = "";
let speakLabel = "";

const voiceOptions = document.querySelector("#voices");
const pitchInput = document.querySelector("#pitch");
const rateInput = document.querySelector("#rate");
const volumeInput = document.querySelector("#volume");
const startButton = document.querySelector("#speak");
const videoContainer = document.querySelector("#video-container");

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}
function setup() {
  canvas = createCanvas(
    videoContainer.offsetWidth,
    videoContainer.offsetHeight
  );
  canvas.parent("video-container");
  video = createCapture(VIDEO);
  video.size(videoContainer.offsetWidth, videoContainer.offsetHeight);
  video.hide();
  flippedVideo = ml5.flipImage(video);
  classifyVideo();
}

function draw() {
  background(0);
  image(flippedVideo, 0, 0);
  fill(255);
  textSize(25);
  textAlign(CENTER);
  text(label, width / 2, height - 15);
}
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  speakLabel = results[0].label;
  classifyVideo();
}
speechSynthesis.addEventListener("voiceschanged", () => {
  const voices = speechSynthesis.getVoices();
  const option = voices.map((voice, index) => {
    return `<option value='${index}'>${voice.name}</option>`;
  });
  voiceOptions.innerHTML += option.join("");
});
startButton.addEventListener("click", () => {
  const message = new SpeechSynthesisUtterance(speakLabel);
  const index = voiceOptions.selectedIndex;
  message.voice = speechSynthesis.getVoices()[index];
  message.pitch = parseFloat(pitchInput.value);
  message.rate = parseFloat(rateInput.value);
  message.volume = parseFloat(volumeInput.value);
  speechSynthesis.speak(message);
});
