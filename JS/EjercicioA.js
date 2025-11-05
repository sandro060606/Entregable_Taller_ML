const resultsDiv = document.getElementById("results");
let classifier;
let img;
let canvas;
let imgURL = null;
let label = null;
let confidence = null;

// 1. preload (precarga) - funcion ml5
function preload() {
  classifier = ml5.imageClassifier("MobileNet");
}

// 2. configuracion - funcion ml5
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("contenedor");
  background(220);
  noLoop();
}

// 3. Se activa al seleccionar el archivo
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    imgURL = URL.createObjectURL(file);
    img = loadImage(imgURL, function () {
      img.resize(400, 400);

      crearLabel();
      classifier.classify(img, gotResult);

      background(255);
      image(img, 0, 0, width, height);
    });
  }
}

// 4. Crea los elementos <p> y los asigna a tus variables 'label' y 'confidence'
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

// 5. Callback function
function gotResult(results) {
  console.log(results);
  crearLabel();

  let labelText = results[0].label;
  let confidenceValue = nf(results[0].confidence * 100, 0, 2) + "%";

  label.innerHTML = `<b>Etiqueta:</b> ${labelText}`;
  confidence.innerHTML = `<b>Confianza:</b> ${confidenceValue}`;
}