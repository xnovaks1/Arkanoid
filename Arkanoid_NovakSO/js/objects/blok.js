class Blok extends GameObject {
    constructor( x, y, width, height) {
        super(x, y, width, height);

    }
    
  
    ondraw(context) {
      var img = new Image();
      img.src = "img/blockZeleny.png";
      context.drawImage(img, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    }
  
 
  }
