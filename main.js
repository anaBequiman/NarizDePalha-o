var posicaoY = 0;
var posicaoX = 0;
function preload(){
    narizDePalhaço = loadImage("https://i.postimg.cc/jjFMv931/Nariz-de-palha-o.png");
}
function draw(){
    image(vd, 0, 0, 400,400);
    image(narizDePalhaço, posicaoX,posicaoY,40,40);
    fill(225, 14, 19);
    stroke(226, 0, 5);
    //circle(posicaoX, posicaoY, 30);
}
function setup(){
    cnv = createCanvas(400, 400);
    cnv.position(400, 160);
    vd = createCapture(VIDEO);
    vd.size(400, 400);
    vd.hide();
    poseNet = ml5.poseNet(vd, carregarModelo);
    poseNet.on('pose', pegarPoses);
}
function foto(){
    save("Nariz de palhaço.png")
}2
function carregarModelo(){
    console.log("Modelo carregado = )")
}
function pegarPoses(resultado){
    console.log(resultado)
    if(resultado.length > 0){
        posicaoX = resultado[0].pose.nose.x - 15;
        console.log("A posição X é:", posicaoX);
        posicaoY = resultado[0].pose.nose.y - 15;
        console.log("A posição Y é:", posicaoY);
    }
}