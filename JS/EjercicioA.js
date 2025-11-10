const resultsDiv = document.getElementById("results");
let classifier;
let img;
let canvas;
let imgURL = null;
let label = null;
let confidence = null;

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
}
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("contenedor");
  background(220);
}
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    imgURL = URL.createObjectURL(file);
    img = loadImage(imgURL, afterloadImage)
  }
}
function afterloadImage() {
  img.resize(400, 400);
  crearLabel();
  classifier.classify(img, gotResult);
  background(255);
  image(img, 0, 0, width, height);
}
function crearLabel() {
  if (!label) {
    label = document.createElement("p");
    label.id = "label-result";
    resultsDiv.appendChild(label);
    confidence = document.createElement("p");
    confidence.id = "confidence-result";
    resultsDiv.appendChild(confidence);
  }
}
function gotResult(results) {
  console.log(results);
  crearLabel();
  let labelText = results[0].label;
  let confidenceValue = nf(results[0].confidence * 100, 0, 2) + "%";
  label.innerHTML = `<b>Etiqueta:</b> ${labelText}`;
  confidence.innerHTML = `<b>Confianza:</b> ${confidenceValue}`;
}
