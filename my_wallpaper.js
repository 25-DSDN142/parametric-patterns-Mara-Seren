//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let eyeSize = 30;
let earSize =70;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(162, 186, 108); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawEars ()
  drawSome ()
  drawHead ()
  drawEyesandNose ()
  }
  function drawSome(){
  rect(40 ,40, rect_width, rect_height);
  fill(49, 40, 40)
  noStroke(0)
  }
  function drawHead(){
  circle (100,100, 150)
  }
  function drawEyesandNose() {
  fill(144, 81, 46)
  noStroke(0)
  ellipse (100,150, 90,70)
  fill(96, 158, 189)
  noStroke(0)
  ellipse(80,110, eyeSize)
  ellipse(120,110, eyeSize)
  fill(0)
  noStroke(0)
  ellipse(100,150, 50,30)
  }
  function drawEars(){
fill(144, 81, 46)
  noStroke(0)
  circle (40, 60, earSize)
  circle (160, 60, earSize)
  }
  

