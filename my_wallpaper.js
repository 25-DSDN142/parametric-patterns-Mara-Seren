//your parameter variables go here!
let eyeSize = 30;
let earSize =70;
let noseLength =50;
let noseWidth =30;
let underNose =70;
let headSize =150;
let petalLength =100;

let ShowLine = true; //false removes green lines/ture adds green lines
let ShowFlower1 = true; //false removes flower 1/true adds flower1
let ShowFlower2 = true; //false removes flower2/true adds flower2
let Showbackground= true;//green background
let Showbackground2= false;//blue background
function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  if(Showbackground){

  background(162, 186, 108); //light pale green colour
  }

  if(Showbackground2){

  background(20, 63, 102); //dark blue colour
  }
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
   scale (0.6,0.6)
  drawEars () // phoebe was here (helped with getting my code on GitHub)
  bearfacecolour ()
  drawHead ()
  drawEyesandNose ()
  drawLog()
  drawFlower1()
  drawFlower2()
  }
  function bearfacecolour(){
  fill(49, 40, 40)
  noStroke(0)
  }
  function drawHead(){
  circle (100,100, headSize)
  }
  function drawEyesandNose() {
  fill(144, 81, 46)
  noStroke(0)
  ellipse (100,150, 90,underNose)
  fill(96, 158, 189)
  noStroke(0)
  ellipse(80,110, eyeSize)
  ellipse(120,110, eyeSize)
  fill(0)
  noStroke(0)
  ellipse(100,150, noseLength, noseWidth)
  }
  function drawEars(){
fill(144, 81, 46)
  noStroke(0)
  circle (40, 60, earSize)
  circle (160, 60, earSize)
  }
  
function drawLog() {

  if(ShowLine){

  fill(134,153,71)
  rect(200, 0.5, 20, 350) 
  rect(250, 0.5, 20, 350)
  rect(300, 0.5, 20, 350)
  rect(1, 200, 350, 20)
  rect(1, 250, 350, 20)
  rect(1, 300, 350, 20)
  }
}
function drawFlower1(){
  if(ShowFlower1){

  fill(138, 102, 116)
  ellipse (210, 240, petalLength, 50)
  ellipse (210, 240, 50, petalLength)
  fill(164, 154, 152)
  ellipse (210, 240, 50)
  }
}
function drawFlower2(){
  if(ShowFlower2){

 fill(138, 102, 116)
  ellipse (290, 290, petalLength, 50)
  ellipse (290, 290, 50, petalLength)
  fill(164, 154, 152)
  ellipse (290, 290, 50)
  }
}

