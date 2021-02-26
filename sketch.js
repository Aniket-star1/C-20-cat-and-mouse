var cat,cat1,cat2,mouse;


function preload() {
    //load the images here
    cat1 = loadAnimation(cat1.png)

    cat2 = loadAnimation(cat2.png) 

    mouse = loadAnimation(mouse3.png)

    bg = loadAnimation(garden.png)
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(100,770,20,20)
    mouse.addAnimation(mouse)
    cat = createSprite(900,770,20,20)
    cat.addAnimation(cat1)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === Left_ARROW){
      cat.velocityX = -3;
      cat.addAnimation("catrunning",cat2)
      cat.changeAnimation("catrunning")
  }

}
