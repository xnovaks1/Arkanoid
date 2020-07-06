function lv2() {
    var nodes = [];


    // Button menu back
    var button = new ImgButton("img/menu.png", 15, 15, 40, 80)
    button.action = function() {
        console.log("back menu button");
        app.nodes = mainMenu();
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);

    // nadpis
    var img = new Obrazok("img/nazov.png", 70, 15, 280, 80)
    nodes.push(img);

    // audio button
    var srcObrAudio
    if (app.audioZapnute)
        srcObrAudio = "img/audioON.png"
    else
        srcObrAudio = "img/audioOFF.png"
    var button = new ImgButton(srcObrAudio, 360, 30, 50, 50);
    button.action = function() {
        if (app.audioZapnute) {
            this.src = "img/audioOFF.png";
            console.log("hudba  off");
            app.audioZapnute = false;
            app.myMusic.stop();
        } else {
            this.src = "img/audioON.png";
            console.log("hudba  on");
            app.audioZapnute = true;
            app.myMusic.play();
        }
        if (app.audioZapnute)
            app.zvukButton.play();
    };

    nodes.push(button);



    // odelenie hracej plochy
    var img = new Obrazok("img/grayLine.png", 0, 110, app.canvas.width, 8)
    nodes.push(img);

    // lopticka
    var lopticka = new Lopticka(app.canvas.width / 2, app.canvas.height / 2 + 100, 20, 18);
    nodes.push(lopticka);

    // plosina						
    var plosina = new Plosina(app.canvas.width / 2, app.canvas.height - 50, 100, 17);
    nodes.push(plosina);


    // bloky



    var i, j;
    for (i = 70; i <= 70 + 140 * 2; i += 140)
        for (j = 180; j <= 180 + 50 * 2; j += 50) {
            var blok = new Blok(i, j, 80, 30);
            nodes.push(blok);

        }



    return nodes;
}