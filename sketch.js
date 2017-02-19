var t;
  
function setup() {
  createCanvas(800,600)
  frameRate(2)
  noStroke()
  background(255)
  t = 0;
}

function draw() {
{
  fill(67,221,232)
  var x= random() * width;
  var y = random() *height;
  ellipse (x,y,35)
}
{
  x = width * noise(t);
  y = height * noise(t+5);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  strokeWeight(2)
  stroke(0)
  fill(r, g, b);
  background(255)
  noStroke();
  ellipse(mouseX, mouseY, 35);
  t = t + 0.5;
}

noStroke();
  
 for( x= 10; x<790 ; x+=20){
   for( y= 10; y<590; y+=20){
     
     if (random()<0.2){
     fill(255,128,0);
     }
     else{
     fill(255,241,110)
     }
     
     triangle(x,y,10+x,y,5+x,10+y);
   }
   
 }

 for(var a= 25; a<790 ; a+=20){
   for( b= 25; b<590; b+=20){
     fill(0);
     ellipse(a,b,8);
   }
 }
 
 for(a= 26; a<790 ; a+=20){
   for(b= 25; b<590; b+=20){
     
     if (random()<0.4){
     fill(255,128,0)
     ellipse(a,b,6);
     }
     else{
       fill(255)
       ellipse(a,b,5);
     }
    }
  }
}