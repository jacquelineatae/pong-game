let xBall = 300
let yBall = 200
let diametro = 20
let raio = diametro/2
let VelocidadeXBall = 6
let VelocidadeYBall = 6
let xRacket = 5
let yRacket = 150
let lengthRacket = 10
let heightRacket = 90
let xOpponent = 585
let yOpponent = 150
let VelocidadexOpponent;
let VelocidadeyOpponent;
let mypoints = 0
let opponentpoints = 0
let colidiu = false
let raquetada;
let trilha;
let ponto;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}