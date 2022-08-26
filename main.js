
difference = 0;
rightWristX = 0; //pulso direito
leftWristX = 0;

  function setup() {
    /* function setup() {

Use a função predefinida createCapture() para acessar a webcam.

Armazene o valor na variável. Defina o tamanho do quadro de vídeo. Crie a tela usando a função predefinida createCanvas() e armazene-a dentro de uma variável. Defina a posição da tela usando a função position().

}*/
  video = createCapture(VIDEO); /*A função predefinida "createCapture()" acessa a webcam. Armazenaremos a visualização da webcam em uma variável. 
  Daremos o tamanho à visualização da webcam.*/
  video.size(550, 500);

  canvas = createCanvas(550, 500); //cria canvas
  canvas.position(560,150); /*A função "position()" é uma função predefinida de p5.js e a usamos para definir a posição de elementos como tela, vídeo, etc.
   A sintaxe da função position() é: position(margem-esquerda, margem-superior).*/

  poseNet = ml5.poseNet(video, modelLoaded); /*carregar o modelo posenet.  "poseNet()" é uma função predefinida de ml5.js. Nós a usamos para inicializar o modelo poseNet. 
  "On()" é uma função predefinida de ml5.js.*/
  poseNet.on('pose', gotPoses); //executar o modelo posenet
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    /*Então no objeto pose há duas partes importantes keypoints e 17 partes do corpo com coordenadas x e 
    leftWristX = results[0].pose.leftWrist.x;/*wrist = pulso . Agora nós buscamos o código para obter a coordenada x de leftWrist, então vamos atualizar a
    variável noseX com este código, na função gotPoses().*/
    leftWristX = results[0].pose.leftWrist.x;

    rightWristX = results[0].pose.rightWrist.x; /*Agora nós buscamos o código para obter a coordenada x de rightWrist, então 
    vamos atualizar a variável rightWristX com este código, na função gotPoses().*/

    difference = floor(leftWristX - rightWristX); /* A função floor() é uma função p5.js usada para remover todos os decimais 
    e reduzir o valor.
    Agora vamos fazer uma subtração entre as coordenadas x do pulso esquerdo e direito, e
    atualizar a variável difference (diferença) com esse valor*/

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
background('green'); //background()" é uma função predefinida de p5.js, usamos para fornecer cor à tela.

  document.getElementById("tamanhoFonte").innerHTML = "Tamanho da fonte será = " + difference +"px";
  textSize(difference);
  fill('#0057EC');
  text('Vinícius', 50, 400);
}

/*1. Adicionar código para acessar a webcam
2. Adicionar código para criar tela e dar posição a ela
3. Adicionar código para inicializar o modelo posenet
4. Adicionar código para a função modelLoaded()
5. Adicionar código para executar posenet
6. Adicionar código para a função gotPoses()

Ler o console para ibter



Vamos criar uma tela usando a função "createCanvas()" e armazená-la dentro de uma variável. Usando a variável, fornecemos largura
 como 550px e altura 550px para a tela. Colocaremos a tela ao lado da visualização da webcam. Definimos a largura como 550px.
  Portanto, a tela deve ter 550px ou mais de margem esquerda. Isso ajudará a obter a tela ao lado da visualização da webcam.
  
Não precisamos entrar em keypoints, porque também encontramos todas as coordenadas x e y das 17 partes do corpo fora de keypoints
  
  */