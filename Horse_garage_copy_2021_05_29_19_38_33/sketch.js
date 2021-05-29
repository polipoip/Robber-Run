var robber, robberImage, cop, copImage, bg, bgImage, invisibleGround

function preload(){
  robberImage = loadImage("robber.png")
  copImage = loadImage("cop.png")
  bgImage = loadImage("bg.png")
}
function setup(){
  createCanvas(600,600)
  
  bg = createSprite (425, 300)
  bg.addImage(bgImage)
  bg.scale = 1.8
  bg.velocityX = -7
  invisibleGround = createSprite (300, 395, 600, 10)
  invisibleGround.visible=false
  cop = createSprite (100, 315, 50, 50)
  cop.addImage(copImage);
  cop.scale = 0.5
  robber = createSprite (325, 320, 50);
  robber.addImage(robberImage);
  robber.scale = 0.23
}
function draw(){
  background(0)
  drawSprites();
  robber.collide(invisibleGround)
  if (bg.x<150){
    bg.x=425
  }
  if(keyDown(UP_ARROW)){
    robber.velocityY = -4
  }
  robber.velocityY+=0.5
}