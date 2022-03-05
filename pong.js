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


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function showball() {
  circle(xBall, yBall, diametro);
}

function moveball(){
  xBall += VelocidadeXBall
  yBall += VelocidadeYBall

}

function verifyborder() {
  
  if (xBall+raio > width || 
      xBall-raio < 0){
    VelocidadeXBall *= -1;
  }
  
  
  if (yBall+raio > height || 
      yBall-raio < 0){
    VelocidadeYBall *= -1;
  }
}

function showracket(x,y) {
  rect(x,y,lengthRacket,heightRacket);
}

function moveracket() {
  if (keyIsDown(UP_ARROW)){
    yRacket -= 10
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRacket += 10
  }
}


function verifycrash(){
  
  if (xBall- raio < xRacket + lengthRacket && 
      yBall- raio < yRacket + heightRacket && yBall+ raio> yRacket){
    VelocidadeXBall *= -1;
    raquetada.play();
  }
}

function colisaobiblioteca(x,y){
  colidiu = collideRectCircle(x,y,lengthRacket, heightRacket, xBall, yBall, raio)
  if(colidiu){
    VelocidadeXBall *= -1
    raquetada.play();
  }
}

function moveopponent(){
  VelocidadeyOpponent = yBall - yOpponent - lengthRacket/2 - 30
  yOpponent += VelocidadeyOpponent
}

function scoreboard() {
  textAlign(CENTER)
  textSize(17)
  fill(color(255,140,0))
  stroke(255)
  rect(150, 10, 40, 20)
  fill(250)
  text(mypoints,170, 26)
  fill(color(255,140,0))
  stroke(255)
  rect(450, 10, 40, 20)
  fill(250)
  text(opponentpoints, 470, 26)
}

function scorepoints () {
  if(xBall> 590){
    mypoints += 1
    ponto.play();
  } 
  
  if(xBall < 10){
    opponentpoints +=1
    ponto.play();
  }
}

function draw() {
  background(0);
  showball();
  moveball ();
  verifyborder();
  showracket(xRacket,yRacket);
  moveracket(); 
  verifycrash();
  showracket(xOpponent,yOpponent);
  moveopponent();
  colisaobiblioteca(xOpponent, yOpponent); // biblioteca de outra pressoa mesma funcao de verifycrash
  scoreboard();
  scorepoints ();

}
