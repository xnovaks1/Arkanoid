function hlavnaHra() {
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
    var lopticka = new Lopticka(app.canvas.width / 2, app.canvas.height / 2 + 100, 20, 20);
    nodes.push(lopticka);

    // plosina						
    var plosina = new Plosina(app.canvas.width / 2, app.canvas.height - 60, 140, 17);
    nodes.push(plosina);


    // bloky




    var blok11 = new Blok(app.canvas.width / 5, 55 + (app.canvas.height / 2) / 3, 80, 30);
    nodes.push(blok11);

    var blok12 = new Blok((app.canvas.width / 5) * 2 + 50, 55 + (app.canvas.height / 2) / 3, 80, 30);
    nodes.push(blok12);

    var blok13 = new Blok((app.canvas.width / 5) * 3 + 100, 55 + (app.canvas.height / 2) / 3, 80, 30);
    nodes.push(blok13);


    var blok21 = new Blok(app.canvas.width / 5, 55 + (app.canvas.height / 2) / 3 + 60, 80, 30);
    nodes.push(blok21);

    var blok22 = new Blok((app.canvas.width / 5) * 2 + 50, 55 + (app.canvas.height / 2) / 3 + 60, 80, 30);
    nodes.push(blok22);

    var blok23 = new Blok((app.canvas.width / 5) * 3 + 100, 55 + (app.canvas.height / 2) / 3 + 60, 80, 30);
    nodes.push(blok23);


    var blok31 = new Blok(app.canvas.width / 5, 55 + (app.canvas.height / 2) / 3 + 120, 80, 30);
    nodes.push(blok31);

    var blok32 = new Blok((app.canvas.width / 5) * 2 + 50, 55 + (app.canvas.height / 2) / 3 + 120, 80, 30);
    nodes.push(blok32);

    var blok33 = new Blok((app.canvas.width / 5) * 3 + 100, 55 + (app.canvas.height / 2) / 3 + 120, 80, 30);
    nodes.push(blok33);



    return nodes;
}