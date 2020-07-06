function settings() {
    var nodes = [];


    // Button back
    var button = new ImgButton("img/back.png", 30, 30, 50, 50)
    button.action = function() {
        console.log("back button");
        app.nodes = mainMenu();
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);


    // button audio
    var img = new Obrazok("img/audio.png", 30, 125, 150, 60)
    nodes.push(img);

    var srcObrAudio
    if (app.audioZapnute)
        srcObrAudio = "img/on.png"
    else
        srcObrAudio = "img/off.png"
    var button = new ImgButton(srcObrAudio, 280, 125, 100, 50);
    button.action = function() {
        if (app.audioZapnute) {
            this.src = "img/off.png";
            console.log("hudba  off");
            app.audioZapnute = false;
            app.myMusic.stop();
        } else {
            this.src = "img/on.png";
            console.log("hudba  on");
            app.audioZapnute = true;
            app.myMusic.play();
        }
        if (app.audioZapnute)
            app.zvukButton.play();
    };

    nodes.push(button);


    // button ricochet
    var img = new Obrazok("img/ricochet.png", 10, 210, 300, 65)
    nodes.push(img);

    var settingRicochet;
    if (app.ricochet)
        settingRicochet = "img/on.png"
    else
        settingRicochet = "img/off.png"

    var button = new ImgButton(settingRicochet, 280, 225, 100, 50);
    button.action = function() {
        if (app.ricochet) {
            this.src = "img/off.png";
            console.log("s ricochet  off");
            app.ricochet = false;
        } else {
            this.src = "img/on.png";
            console.log("s ricochet  on");
            app.ricochet = true;
        }
        if (app.ricochet)
            app.zvukButton.play();
    };
    nodes.push(button);


    // button A a D
    var img = new Obrazok("img/ad.png", 15, 310, 250, 60)
    nodes.push(img);

    var ad;
    if (app.controllAD)
        ad = "img/on.png"
    else
        ad = "img/off.png"

    var button = new ImgButton(ad, 280, 320, 100, 50);
    button.action = function() {
        if (app.controllAD) {
            this.src = "img/off.png";
            console.log("A & D  off");
            app.controllAD = false;
        } else {
            this.src = "img/on.png";
            console.log("A & D on");
            app.controllAD = true;
        }
        if (app.ricochet)
            app.zvukButton.play();
    };
    nodes.push(button);




    // button arroyw
    var img = new Obrazok("img/lr.png", 15, 400, 300, 65)
    nodes.push(img);

    var ad;
    if (app.controllLR)
        ad = "img/on.png"
    else
        ad = "img/off.png"

    var button = new ImgButton(ad, 280, 410, 100, 50);
    button.action = function() {
        if (app.controllLR) {
            this.src = "img/off.png";
            console.log("arrow off");
            app.controllLR = false;
        } else {
            this.src = "img/on.png";
            console.log("arrow on");
            app.controllLR = true;
        }
        if (app.ricochet)
            app.zvukButton.play();
    };
    nodes.push(button);




    // nadpis
    var img = new Obrazok("img/textSettings.png", 50, 0, 350, 100)
    nodes.push(img);

    return nodes;
}