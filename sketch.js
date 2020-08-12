var fixed_rectangle;
var moving_rectangle;


function setup() {
  createCanvas(1600,1000);
  fixed_rectangle = createSprite(400, 300, 50, 50);
  moving_rectangle = createSprite(100, 200, 50, 50);
  fixed_rectangle.debug=true;
  moving_rectangle.debug=true;
}

function draw() {
  moving_rectangle.x = mouseX;
  moving_rectangle.y = mouseY;
  background(200);  

  if (moving_rectangle.x-fixed_rectangle.x <= moving_rectangle.width/2 + fixed_rectangle.width/2 &&
    fixed_rectangle.x-moving_rectangle.x <= moving_rectangle.width/2 + fixed_rectangle.width/2 &&
    fixed_rectangle.y-moving_rectangle.y <= moving_rectangle.height/2 + fixed_rectangle.height/2 &&
    moving_rectangle.y-fixed_rectangle.y <= fixed_rectangle.height/2 + moving_rectangle.height/2) {
    
      moving_rectangle.shapeColor = "blue";
      fixed_rectangle.shapeColor = "blue";
    }
    
    else  {
    
      moving_rectangle.shapeColor = "red";
      fixed_rectangle.shapeColor = "red";

    }

  drawSprites();
}