var shapes = [];
var maxDistance;
var spacer;
var position;

function setup() {
  createCanvas(720, 360);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < 10; x++) {
      position = {x : random(width), y: random(height)};
      append (shapes,position);

     

  }
  spacer = 10;
  noLoop();  // Run once and stop
}

// function draw() {
//   background(0);
//   // This embedded loop skips over values in the arrays based on
//   // the spacer variable, so there are more values in the array
//   // than are drawn here. Change the value of the spacer variable

  
//   for (var i = 0; i < 10; i++) {
//     //shapes[i]
//     ellipse(shapes[i].x,shapes[i].y,50,50);
//   }


// }
// var Snowspeed;

// //declare an empty array to hold the flakes
// var flakes = [];
// //declare a variable to set the number of flakes
// var limit = 500;

// function setup() {
//   canvas= createCanvas(800,800);
//   Snowspeed = 1;
//   canvas.parent("background");
//   //creating speed button
//   buttonFast =createButton ("Speed up",0);
//   buttonFast.mousePressed(setSpeed);
//   buttonFast.parent("#Speed");

//   buttonSlow = createButton('Slow down',1);
//   //buttonWhite.position(button2X + button2Y, 65);
//   buttonSlow.mousePressed(setSpeed);
//   buttonSlow.parent("#Speed");


//   noStroke();
//   //create the flake objects and fill the array with them
//   for (i=0;i<=limit;i++){
//     flakes.push(new Flake());
//   }
// }

// function draw() {
//   smooth();
//   background(0,45,34);
//   //update the position of the flakes and draw them
//   for (i=0;i<=limit;i++){
//     flakes[i].move();
//     flakes[i].draw();
//   }
// }

// //the flake object
// function Flake(){
//   //object properties
//   this.xpos = random(0,width);
//   this.ypos = random(0,height);
//   this.size = random(2,6);
//   this.speed = Snowspeed;
//   this.drift = random(-1,1);
//   this.alph = random(.5,1);
  
//   //object methods
//   this.move = function(){
//     this.speed = Snowspeed;
//     //reset the y position to 0 if the flake reaches the bottom of the canvas
//     if (this.ypos >= height){
//       this.ypos = 0;
//     }
    
//     //add the current y position to the speed value
//     this.ypos += this.speed; 
//     //add the current x position to the drift value
//     this.xpos += this.drift;
//   }
  
//   this.draw = function(){
//     //draw the flake
//     ellipse(this.xpos,this.ypos,this.size);
//   }


// }



// //Setting the speed value for Snow
// function setSpeed(){
// speed = event.target.value;
// if (speed == 0) { 
//   Snowspeed= 6;

// }else {
//   Snowspeed= 0.3;
// }
// }