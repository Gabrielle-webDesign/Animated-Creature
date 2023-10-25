let HeadY = 270;
let HeadSpeedY = 0.45;
function setup() {
  createCanvas(400, 500);
}

function draw() {

//BACKGROUND 
  { //sky
    background(11, 18, 77);
  
    //moon
    fill(225);
    noStroke();
    circle(100,50,
           50);       
    
    //moon cover
    fill(11, 18, 77);
    noStroke();
    circle(109,50,
           50);
  }
  
//GROUND 
 { //ground
    fill(112,66,20);
    rect(0,350,
         400,150);
    //tint
    fill(74,44,42,80);
    rect(0,350,
        400,150);
    //rocks
    fill(77,93,83);
    stroke(4,57,39);
    ellipse(0,350,
          60,40);
    ellipse(360,400,
          60,40);
    ellipse(400,380,
          60,90);
    ellipse(30,500,
          90,100);
 }
  
//BODY 
  {
  fill(255,255,240);
  strokeWeight(2);
  stroke(227, 230, 230);
  
  //r.foot
  rect(173,382,
       40,20,
       23);
  
  //r.arm
  rect (177,305,
        25,70,
        50);
  
  //lolipop
    fill(229,43,80);
    noStroke();
    ellipse(150,370,
           35,35);
    stroke(245, 247, 247);
    strokeWeight(3);
    line(168,370,
          200,370);
    
    noFill();
    stroke(247, 94, 94);
    strokeWeight(3);
    ellipse(150,370,
           15,15);
     
    noFill();
    stroke(247, 94, 94);
    strokeWeight(3);
    ellipse(150,370,
           25,25);
    
    fill(247, 94, 94);
    noStroke();
    ellipse(150,370,
           5,5);
  
  //torso
  fill(255,255,240);
  strokeWeight(2);
  stroke(227, 230, 230);
  rect(183,297,
         70,110,
         50);
  
  //l.foot
    rect(220,383,
         40,25,
         50);
  
  //l.arm
    rect(234,305,
          25,70,
          50);
    
  //bag 
    fill(136,6,206);
    stroke(74,0,130);
    rect(242,357,
         40,51,
          10); 
    fill(255,195,11);
    stroke(253,220,92);
    arc(262,377,
       30,30,
       0, PI +
       QUARTER_PI);
  }

HeadY = HeadY + HeadSpeedY;
if (HeadY < 240 || HeadY > 270){
  HeadSpeedY = HeadSpeedY * -1;} 
  
//HEAD: CANDLE  
  {//wick
    stroke(3);
    line(212,HeadY-75,
         212,220);

  //flicker:flame
    var fireRed = random(255);
    var fireGreen = random(fireRed);
    var fireBlue = random(fireGreen);
    fill(fireRed, fireGreen, fireBlue);
    stroke(0);
  
  //flame
    noStroke();
    ellipse(212,HeadY-73,
            9,15);
  //wax
    fill(225);
    noStroke();
    rect(205,HeadY-62,
        15,35,
        10);
  }

//HEAD: PUMPKIN 
  {fill(242,133,0);
    stroke(120, 60, 0);
    strokeWeight(2); 
  
  //head l.ridge
      ellipse(199,HeadY,
          60,70);
  
  //head r.ridge
      ellipse (230,HeadY,
           60,70);
  
  //head f.ridge
      ellipse (215,HeadY,
           60,80); 
  
  //flicker: head
    var fireRed = random(255);
    var fireGreen = random(fireRed);
    var fireBlue = random(fireGreen);
    fill(fireRed, fireGreen, fireBlue);
    stroke(0);
  }
  
//HEAD: FEATURES   
  {
let LeftX1 = 190; 
let LeftX2 = LeftX1 - 10;
let LeftX3 = LeftX1 + 10;

let LeftY1 = HeadY-24;
let LeftY2 = LeftY1 + 25;

let RightX1 = 240;
let RightX2 = RightX1 - 10;
let RightX3 = RightX1 + 10;

let RightY1 = HeadY-24;
let RightY2 = RightY1 + 25;
  
  
    noStroke();
  
  //l.eye
    triangle(
      LeftX1,LeftY1,
      LeftX2,LeftY2,
      LeftX3,LeftY2);
  
  //r.eye
    triangle(
      RightX1,RightY1,
      RightX2,RightY2,
      RightX3,RightY2);
  
 //mouth
    arc(
      215,HeadY+7,
      70,45,
      radians(0),radians(180),
      CHORD);
  }
  
//FOG
  {
let FogW = 220;
let FogH = 40;
  noStroke();
  fill(245, 247, 247,55);
let xFogSpeed = 1; 
    
let cloudaX = 100;
let cloudaY = 100;
    
  ellipse(cloudaX+30,cloudaY,
          FogW,FogH);
  ellipse(cloudaX,cloudaY+10,
          FogW,FogH);
  ellipse(cloudaX+100,cloudaY+10,
          FogW,FogH);
  ellipse(cloudaX+30,cloudaY+15,
          FogW,FogH);
    

let cloudbX = 300;
let cloudbY = 300;  
  ellipse(cloudbX+30,cloudbY,
          FogW,FogH);
  ellipse(cloudbX,cloudbY+10,
          FogW,FogH);
  ellipse(cloudbX-100,cloudbY+10,
          FogW,FogH);
  ellipse(cloudbX+30,cloudbY+15,
          FogW,FogH);
   
let cloudcX = 10;
let cloudcY = 400;  
  ellipse(cloudcX+20,cloudcY,
          FogW,FogH);
  ellipse(cloudcX,cloudcY+10,
          FogW,FogH);
  ellipse(cloudcX+6,cloudcY+10,
          FogW,FogH);
  ellipse(cloudcX+120,cloudcY+15,
          FogW,FogH);

let clouddX = 100;
let clouddY = 100;
  ellipse(clouddX+70,clouddY+80,
          FogW,FogH);
  ellipse(clouddX+300,clouddY+110,
          FogW,FogH);
 
  }

}