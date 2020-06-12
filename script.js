var image = null;
var grey = null;
var red = null;
var microsoft = null;
var negative = null;
var fileinput;

function draw() {
  var ctx = can.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function upload(){
  fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  grey = new SimpleImage(fileinput);
  red = new SimpleImage(fileinput);
  microsoft = new SimpleImage(fileinput);
  negative = new SimpleImage(fileinput);
  var can = document.getElementById("c1");
  image.drawTo(can);
}

function makeGray(){
  if(grey == null || !grey.complete()){
    alert("Image not loaded!");
    return;
  }
   var can = document.getElementById("c1");
  var context = can.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
   for(var pixel of grey.values() ){
        var avg  =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
  grey.drawTo(can);
}

function resetCanvas(){
  var can = document.getElementById("c1");
  var context = can.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
  image.drawTo(can);
  
  image = new SimpleImage(fileinput);
  grey = new SimpleImage(fileinput);
  red = new SimpleImage(fileinput);
  microsoft = new SimpleImage(fileinput);
  negative = new SimpleImage(fileinput);
}

function makeRed(){
  var can = document.getElementById("c1");
  var context = can.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
  for(var pixel of red.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
  }
  red.drawTo(can);
}

function makeMicrosoft(){
  var can = document.getElementById("c1");
  var context = can.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
  var w = can.width;
  var h = can.height;
  for(var pixel of microsoft.values()){
    var x = pixel.getX();
    var y = pixel.getY();
            var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    
    if(x>20 && y>20 && x<(w - 20) && y<(h -20)){
      if(x<(w/2 - 20) && y<(h/2 - 20)){
        if(avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
      }
      if(x>(w/2 + 20) && y<(h/2 - 20)){
        if(avg < 128){
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(2*avg - 255);
          pixel.setGreen(255);
          pixel.setBlue((2*avg)-255);
        }
      }
      if(x>(w/2 + 20) && y>(h/2 + 20)){
        if(avg < 128){
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue((2*avg)-255);
        }
      }
      if(x<(w/2 - 20) && y>(h/2 + 20)){
        if(avg < 128){
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
        else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
        }
      }
    }
  }
  microsoft.drawTo(can);
}

function makeNegative(){
  var can = document.getElementById("c1");
  var context = can.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
  for(var pixel of negative.values()){
    var r = 255 - pixel.getRed();
    var g = 255 - pixel.getGreen();
    var b = 255 - pixel.getBlue();
    
    pixel.setRed(r);
    pixel.setGreen(g);
    pixel.setBlue(b);
  }
  negative.drawTo(can);
}