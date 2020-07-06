class Projectile extends GameObject {
  constructor(game, x, y) {
    super(game, x, y, 60, 60);
    this.refreshTime = 100;
    this.lastRefresh = Date.now();
    this.maxLife = 8;
    this.life = 0;
    this.x = app.loptickaX;
    this.y = app.loptickaY;
 

  }



  ondraw(ctx) {

        var frame = Math.round((this.life/this.maxLife)*8)

        var img = new Image();
        img.src ="img/projectile.png";
        ctx.drawImage(img, 64*this.life, 0, 64, 64, this.x - 40, this.y - 40, 80, 80);

      

  }


    onupdate(dt){
      var now = Date.now();
      if(now - this.lastRefresh > this.refreshTime)
        this.life++;
      if(this.life === this.maxLife)
         app.remove(this);
    }


}


