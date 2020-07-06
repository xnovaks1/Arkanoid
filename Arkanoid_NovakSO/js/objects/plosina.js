class Plosina extends GameObject {
  constructor(x, y, width, height) {
      super(x, y, width, height);

  }

  //  plosina move

  onkey() { // ovladanie pomocou A a D
      if (app.controllAD) {
          if (app.keys["d"] === true) {
              if (this.x + this.width / 2 <= app.canvas.width + 10)
                  this.x += 10;
          }
          if (app.keys["a"] === true) {
              if (this.x - this.width / 2 >= 0)
                  this.x -= 10;
          }
      }

      // ovladanie pomocou sipiek
      if (app.controllLR) {
          if (app.keys["ArrowRight"] === true) {
              if (this.x + this.width / 2 <= app.canvas.width + 10)
                  this.x += 10;
          }
          if (app.keys["ArrowLeft"] === true) {
              if (this.x - this.width / 2 >= 0)
                  this.x -= 10;
          }
      }


  }


  ondraw(context) {
      var img = new Image();
      img.src = "img/plosina.png";
      context.drawImage(img, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }


}