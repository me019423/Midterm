var song;
var slider;
//variables for sona
let sona_xpos = 200;
let sona_ypos = 200; 

let sona_xspeed = 3.5;
let sona_yspeed = 1.5;

//variables for lulu
let lulu_xpos = 100;
let lulu_ypos = 100;

let lulu_xspeed = 0;
let lulu_yspeed = 0;
let lulu;
let sona;
let background_image;
let gotcha;

let base;
let distance;

function preload()
{
  soundFormats('ogg', 'mp3'); 
  lulu = loadImage('images/lulu.png');
  sona = loadImage('images/sona.png');
  gotcha = loadImage('images/gotcha1.png');
  background_image= loadImage('images/Background.jpg');
  
 
}

function setup() {
  
  createCanvas(600, 400);
  song = loadSound('Origami.mp3', loaded);
  slider = createSlider(0,1, 0.5, 0.01);

} function loaded(){
  
song.play();
}

function draw() 
{
  song.setVolume(slider.value() );
  image(background_image,0,0);
  image(lulu,lulu_xpos,lulu_ypos)
  image(sona,sona_xpos,sona_ypos);
  
  

  
  
  //ellipse(vel_xpos,vel_ypos,50,50); //vel
  //ellipse(rammus_xpos,rammus_ypos,60,60); 
  
  sona_xpos +=sona_xspeed;
  sona_ypos +=sona_yspeed;
  
  if (sona_xpos >=width || sona_xpos<=0)
  {
    sona_xspeed = -sona_xspeed;
  }
  if (sona_ypos >=height || sona_ypos<=0)
  {
    sona_yspeed = -sona_yspeed;
  }
  
  lulu_xpos += lulu_xspeed;
  lulu_ypos += lulu_yspeed;
  
  base = ((lulu_xpos-sona_xpos)**2) + ((lulu_ypos -sona_ypos)**2);
  distance = sqrt(base);
  
  
  if (distance <=20)
  {image(gotcha,width/2,height/2);
   noLoop();
   song.stop();
  }
  
}
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(51);
  } else {
    song.play();
    background_image;
  }
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    lulu_xspeed =1;
    lulu_yspeed = 0;
  }
  if(keyCode === LEFT_ARROW)
  {
    lulu_xspeed = -1;
    lulu_yspeed = 0;
  }
  
  if (keyCode === UP_ARROW)
  {
    lulu_yspeed = -1;
    lulu_xspeed = 0;
  }
  if (keyCode === DOWN_ARROW)
  {
    lulu_yspeed = 1;
    lulu_xspeed = 0;
  }
}