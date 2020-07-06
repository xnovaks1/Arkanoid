class Lopticka extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.dx = 3;
        this.dy = 3;
        this.rof = 90
        this.fireTimer = false
    }


    move() {

        if (this.x >= app.canvas.width - this.width / 2 || this.x <= this.width / 2) {
            this.dx *= -1;
            if (app.audioZapnute)
                app.zvukKolizia.play();
            console.log("Colision with wall ");
        }

        if (this.y <= 118 + this.width / 2) {
            this.dy *= -1;
            if (app.audioZapnute)
                app.zvukKolizia.play();
            console.log("Colision with wall ");
        }




        if (this.y >= app.canvas.height - 40) { // ked sa vypisat Game over
            this.dy *= 0;
            this.dx *= 0;
            this.y -= 1;
            app.nodes = gameOver();
            if (app.audioZapnute)
                app.zvukGameOver.play();
        }




        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        app.loptickaX = this.x;
        app.loptickaY = this.y;
    }




    ondraw(context) {
        var img = new Image();
        img.src = "img/lopta.png";
        context.drawImage(img, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }



    checkColisions(nodes) {
        var lopticka = this;
        // next level 
        if (app.kolkoBloky == 0) {
            app.level++;
            app.nodes = selectLevel();
            if (app.level == 4)
                app.nodes = gameWin();
        }

        // lopticka 2 
        if (app.level == 2 && app.kolkoBloky == 6 && app.bonus1 == false) {
            var lopticka = new Lopticka(app.canvas.width / 2, app.canvas.height / 2 + 100, 20, 20, 3, 3);
            nodes.push(lopticka);
            app.bonus1 = true;

        }

        // bonus bloky lv1
        if (app.level == 1 && app.kolkoBloky == 1 && app.bonus2 == false) {
            app.kolkoBloky = 4;
            var i, j;
            for (i = 70; i <= 70 + 140 * 2; i += 140)
                for (j = 180 + 100; j <= 180 + 100; j += 50) {
                    var blok = new Blok(i, j, 80, 30);
                    nodes.push(blok);

                }
            app.bonus2 = true;
        }



        for (var object of nodes) // prejdem vsetky objekty
        {


            if (object === this) // don t check coliziou so samo sebou 
                continue




            if (object instanceof Plosina) // kolizia s plosinou
            {
                if (app.ricochet) // ricochet on
                {
                    if (((this.x >= object.x - object.width / 2 + this.width / 2 && this.x <= object.x - object.width / 4) ||
                            (this.x >= object.x + object.width / 4 && this.x <= object.x + object.width / 2 + this.width / 2)) &&
                        this.y + this.height / 2 >= object.y - object.height / 2 &&
                        this.y + this.height / 2 <= object.y) {
                        this.y -= this.width / 3;
                        this.dy *= -0.75;
                        this.dx *= 1.07
                        console.log("colison with plosina ~ s ricochet on");
                        if (app.audioZapnute)
                            app.zvukKolizia.play();
                    }

                    if ((this.x > object.x - object.width / 4 && this.x < object.x + object.width / 4) &&
                        this.y + this.height / 2 >= object.y - object.height / 2 && this.y <= object.y) {
                        this.y -= this.width / 3;
                        this.dy *= -1.25;
                        this.dx *= 0.94
                        console.log("colison with plosina ~ s ricochet on");
                        if (app.audioZapnute)
                            app.zvukKolizia.play();
                    }
                } else { // ricochet off
                    // originalne odrazanie
                    if (this.x >= object.x - object.width / 2 && this.x <= object.x + object.width / 2 &&
                        this.y + this.height / 2 >= object.y - object.height / 2 && this.y <= object.y) {
                        this.y -= this.width / 3;
                        this.dy *= -1;
                        console.log("colison with plosina ~ s ricochet off");
                        if (app.audioZapnute)
                            app.zvukKolizia.play();
                    }
                }




            }
            // kolizia s blokmy
            if (object instanceof Blok) {
                // z dola
                if (this.y - this.width <= object.y + object.height / 2 &&
                    this.y - this.width >= object.y &&
                    this.x >= object.x - object.width / 2 &&
                    this.x <= object.x + object.width / 2) {
                    app.kolkoBloky--;
                    app.remove(object);
                    this.y += this.width / 3;
                    this.dy *= -1;
                    console.log("Colision with blok ");
                    if (app.audioZapnute)
                        app.zvukKolizia.play();
                // Explosion
                var explozia = new Projectile(app, app.loptickaX ,app.loptickaY);
                app.add(explozia);

                }

                // z hora
                if (this.y + this.width <= object.y + object.height / 2 &&
                    this.y + this.width >= object.y &&
                    this.x >= object.x - object.width / 2 &&
                    this.x <= object.x + object.width / 2) {
                    app.kolkoBloky--;
                    app.remove(object);
                    this.y -= this.width / 3;
                    this.dy *= -1;
                    console.log("Colision with blok ");
                    if (app.audioZapnute)
                        app.zvukKolizia.play();
                // Explosion
                var explozia = new Projectile(app, app.loptickaX ,app.loptickaY);
                app.add(explozia);
                }

                // z hlava
                if (this.y <= object.y + object.height / 2 &&
                    this.y >= object.y - object.height / 2 &&
                    this.x + this.width >= object.x - object.width / 2 &&
                    this.x + this.width <= object.x) {
                    app.kolkoBloky--;
                    app.remove(object);
                    this.x -= this.width / 3;
                    this.dx *= -1;
                    console.log("Colision with blok ");
                    if (app.audioZapnute)
                        app.zvukKolizia.play();
                // Explosion
                var explozia = new Projectile(app, app.loptickaX ,app.loptickaY);
                app.add(explozia);
                }

                // z prava
                if (this.y <= object.y + object.height / 2 &&
                    this.y >= object.y - object.height / 2 &&
                    this.x - this.width <= object.x + object.width / 2 &&
                    this.x - this.width >= object.x) {
                    app.kolkoBloky--;
                    app.remove(object);
                    this.x += this.width / 3;
                    this.dx *= -1;
                    console.log("Colision with blok ");
                    if (app.audioZapnute)
                        app.zvukKolizia.play();
                // Explosion
                var explozia = new Projectile(app, app.loptickaX ,app.loptickaY);
                app.add(explozia);
                }

            }


        }
    }


    onupdate(dt) {
        this.checkColisions(app.nodes);
    }



}