let caminhões = [];

function setup() {
  createCanvas(800, 400);
  // Criando caminhões com mais espaçamento entre eles
  for (let i = 0; i < 5; i++) {
    caminhões.push(createVector(random(-600, -200), height - 70)); // Caminhões começam mais distantes
  }
}

function draw() {
  background(200, 220, 255); // Cor do céu para toda a tela
  
  // Desenhando o campo (metade esquerda) com chão marrom
  fill(139, 69, 19); // Cor marrom do chão
  noStroke();
  rect(0, height - 60, width / 2, 60); // Chão do campo (terra)

  // Céu azul na parte do campo
  fill(135, 206, 235); // Céu azul
  rect(0, 0, width / 2, height - 60); // Céu

  // Montanhas verdes no chão
  fill(34, 139, 34); // Cor das montanhas (verde)
  triangle(100, height - 60, 200, height - 150, 300, height - 60); // Montanha 1
  triangle(250, height - 60, 350, height - 150, 450, height - 60); // Montanha 2

  // Desenhando a estrada de barro no campo
  fill(139, 69, 19); // Cor da estrada (barro)
  beginShape();
  vertex(0, height - 60);
  vertex(width / 2, height - 60);
  vertex(width / 2 + 50, height);
  vertex(-50, height);
  endShape(CLOSE);

  // Desenhando a cidade (metade direita)
  fill(169, 169, 169); // Cor dos prédios
  for (let i = 0; i < 6; i++) {
    rect(width / 2 + i * 130, height - 150, 100, 150); // Prédios da cidade
  }

  // Desenhando pessoas na cidade com corpos e cabeças
  for (let i = 0; i < 10; i++) {
    desenhaPessoa(width / 2 + i * 60 + 30, height - 90 - random(20));
  }

  // Desenhando o asfalto (meio da tela)
  fill(50);
  rect(0, height - 60, width, 60); // Asfalto
  
  // Desenhando os caminhões
  for (let caminhão of caminhões) {
    desenhaCaminhão(caminhão.x, caminhão.y);
    caminhão.x += 2; // Movendo os caminhões para a direita
    if (caminhão.x > width) {
      caminhão.x = random(-600, -200); // Quando sai da tela, volta com mais distância
    }
  }
}

function desenhaCaminhão(x, y) {
  fill(255, 0, 0); // Cor do caminhão
  rect(x, y - 20, 60, 20); // Corpo do caminhão
  
  fill(0, 0, 0); // Cor das rodas
  ellipse(x + 15, y, 15, 15); // Roda 1
  ellipse(x + 45, y, 15, 15); // Roda 2
  
  fill(255, 255, 0); // Cor da cabine
  rect(x + 50, y - 15, 20, 15); // Cabine do caminhão

  // Desenhando a carga em cima do caminhão (um retângulo simples)
  fill(139, 69, 19); // Cor da carga (marrom)
  rect(x + 5, y - 40, 50, 15); // A carga (caixa ou plataforma)
}

function desenhaPessoa(x, y) {
  // Cabeça
  fill(255, 224, 189); // Cor da pele
  ellipse(x, y - 20, 15, 15); // Cabeça

  // Corpo
  fill(0, 0, 255); // Cor do corpo
  rect(x - 5, y - 10, 10, 20); // Corpo (um retângulo)

  // Braços
  stroke(0); 
  line(x - 10, y, x + 10, y); // Braços (uma linha simples)
}
