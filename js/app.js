// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speedRange=[40,150];
}
Enemy.prototype.getRandomSpeed = function() {
    var minSpeed = this.speedRange[0],
        maxSpeed = this.speedRange[1];

    return Math.floor(Math.random() * (maxSpeed - minSpeed)) + minSpeed;
}


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.speed = this.getRandomSpeed();
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
  // all computers.
 this.x += this.speed * dt;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
}

Player.prototype.update = function(dt) {

}

    
    var STEP = 40.5; //value of each move

    


Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y );


}


Player.prototype.handleInput = function ( key ) {

 switch(key) {

          case 'up':
          if(this.y<0)
       {
          this.y-=0;
       } 
       else 
        {
          this.y-=STEP;
          die.play();
        }
        break;
          case 'down':
        if(this.y + 80 > 370)
          {
            this.y+=0;
          }
          else {
          this.y+=STEP;
          die.play();
          }
          break;
          case 'left':
       if(this.x<0)
       {
          this.x-=0;
       } 
       else if(this.x>0)
        {
          this.x-=STEP;
          die.play();
        }
        break;
        case 'right':
        if(this.x +101 > 465)
       {
        this.x+=0;
       } 
       else 
        {
          this.x+=STEP;
          die.play();
        }
        break;
        default:
        return;
      }
  
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy( -40, 60 ),
  new Enemy( -20, 148 ),
  new Enemy( Math.random()*8, 230 )]

var player = new Player(200, 400);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
