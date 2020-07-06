
function gameWin(){
	var nodes = [];
	console.log("game   win ");


    	
	var img = new Obrazok("img/celebration.png", 0, 0, 420, 300)
	nodes.push(img);

	var img = new Obrazok("img/win.png", -40, 200, 500, 100)
	nodes.push(img);
		
		// zvuk
		if(app.audioZapnute)
			app.zvukCelebrating.play();

		// Button menu back
		var button = new ImgButton("img/menuland.png",  170, 350, 80, 40)
		button.action = function() {
			console.log("back menu button");
			app.nodes = mainMenu();
			if(app.audioZapnute)
            	app.zvukButton.play(); 
		};
		nodes.push(button);

	return nodes;
}