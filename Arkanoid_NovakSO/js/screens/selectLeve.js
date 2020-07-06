function selectLevel() {
    var nodes = [];
    console.log("game over");




    // Button back
    var button = new ImgButton("img/back.png", 30, 30, 50, 50)
    button.action = function() {
        console.log("back button");
        app.nodes = mainMenu();
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);


    var img = new Obrazok("img/level.png", -15, 80, 450, 100)
    nodes.push(img);

    // lv 1 
    var button = new ImgButton("img/11.png", 50, app.canvas.height / 3, 80, 80);
    button.action = function() {
        console.log("level 1");
        if (app.level >= 1) {
            app.kolkoBloky = 6;
            app.nodes = lv1();
        }

        if (app.audioZapnute)
            app.zvukButton.play();


    };
    nodes.push(button);
    // lv 2
    var button = new ImgButton("img/22.png", 50 + button.width * 1.5, app.canvas.height / 3, 80, 80);
    button.action = function() {
        console.log("level 2");
        if (app.level >= 2) {
            app.kolkoBloky = 9;
            app.nodes = lv2();
        }
        if (app.audioZapnute)
            app.zvukButton.play();

    };
    nodes.push(button);
    // lv 3
    var button = new ImgButton("img/33.png", 50 + button.width * 1.5 * 2, app.canvas.height / 3, 80, 80);
    button.action = function() {
        console.log("level 3");
        if (app.level >= 3) {
            app.kolkoBloky = 16;
            app.nodes = lv3();
        }

        if (app.audioZapnute)
            app.zvukButton.play();

    };
    nodes.push(button);
    // lv 4
    var button = new ImgButton("img/44.png", 50, app.canvas.height / 3 + 100, 80, 80);
    button.action = function() {
        console.log("level 4");
        //	app.nodes = gameWin(); 
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);
    // lv 5
    var button = new ImgButton("img/55.png", 50 + button.width * 1.5, app.canvas.height / 3 + 100, 80, 80);
    button.action = function() {
        console.log("level 5");
        //	app.nodes = hlavnaHra(); 
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);
    // lv 6
    var button = new ImgButton("img/66.png", 50 + button.width * 1.5 * 2, app.canvas.height / 3 + 100, 80, 80);
    button.action = function() {
        console.log("level 6");
        //	app.nodes = hlavnaHra(); 
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);
    // lv 7
    var button = new ImgButton("img/77.png", 50, app.canvas.height / 3 + 200, 80, 80);
    button.action = function() {
        console.log("level 7");
        //	app.nodes = hlavnaHra(); 
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);
    // lv 8
    var button = new ImgButton("img/88.png", 50 + button.width * 1.5, app.canvas.height / 3 + 200, 80, 80);
    button.action = function() {
        console.log("level 8");
        //	app.nodes = hlavnaHra(); 
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);
    // lv 9
    var button = new ImgButton("img/99.png", 50 + button.width * 1.5 * 2, app.canvas.height / 3 + 200, 80, 80);
    button.action = function() {
        console.log("level 9");
        //	app.nodes = hlavnaHra(); 
        if (app.audioZapnute)
            app.zvukButton.play();
    };
    nodes.push(button);




    if (app.level == 1) {
        // lv 2 lock
        var img = new Obrazok("img/lock.png", 50 + button.width * 1.5 - 10, app.canvas.height / 3 - 10, 100, 100);
        nodes.push(img);
        // lv 3 lock
        var img = new Obrazok("img/lock.png", 50 + button.width * 1.5 * 2 - 10, app.canvas.height / 3 - 10, 100, 100);
        nodes.push(img);
    }


    if (app.level == 2) {
        // lv 3 lock
        var img = new Obrazok("img/lock.png", 50 + button.width * 1.5 * 2 - 10, app.canvas.height / 3 - 10, 100, 100);
        nodes.push(img);
    }


    // soon
    var img = new Obrazok("img/soon.png", 20, 300, 380, 200);
    nodes.push(img);


    return nodes;
}