const listaUsuarios = [
  { nombre: "elena", clave: "654321", codigo: "book" },
  { nombre: "pablito", clave: "abc12345", codigo: "rain" },
  { nombre: "pedro", clave: "pedrito01", codigo: "door" },
];

const formulario = document.querySelector("#form-login");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const mlLabelDiv = document.querySelector("#ml-label");
const clearButton = document.getElementById("clear-btn");

let classifier;
let canvas;
let CanvasLabel = "";

function preload() {
  classifier = ml5.imageClassifier("DoodleNet");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent("contenedor-canvas");
  background(255);
  classifier.classifyStart(canvas, gotResult);
  strokeWeight(12);
  stroke(0);
  clearButton.addEventListener("click", clearCanvas);
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function gotResult(results) {
  let label = results[0].label;
  let confidence = results[0].confidence;
  CanvasLabel = label;
  mlLabelDiv.innerHTML = `Dibujaste: <b>${label}</b> (${nf(
    confidence * 100,
    0,
    2
  )}%)`;
}

function clearCanvas() {
  background(255);
  CanvasLabel = "";
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const codigoDibujo = CanvasLabel.trim();
  for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].nombre === usuario.value) {
      if (
        listaUsuarios[i].clave === password.value &&
        listaUsuarios[i].codigo === codigoDibujo
      ) {
        alert(`¡Bienvenido ${listaUsuarios[i].nombre}! Acceso concedido`);
        return;
      }
    }
  }
  alert(`Login fallido. Usuario, contraseña o código incorrecto`);
});
