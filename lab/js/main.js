//the window load event handler
function onLoad() {
    var mainCanvas, mainContext, housePosition, houseRotation, houseScale, houseVelocity, airResistance, gravity, friction, upForce, yVelocity, houses, ballPosition, ballRotation, ballScale, ballVelocity, ballYVelocity, origin, transMatrix, rootNode;

    //this function will initialise our variables
    function initialiseCanvasContext() {

        //Find the canvas element using its id attribute.
        mainCanvas = document.getElementById('mainCanvas');

        // if it couldn't be found
        if (!mainCanvas) {

            // make a message box pop up with the error
            alert('Error: I cannot find the canvas element!');
            return;
        }

        //get the 2D canvas context
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }
        housePosition = new Vector(0, 0, 0);
		houseRotation = Math.PI / 0.5;
        houseScale = new Vector(1, 1, 1);
        houseVelocity = 10;
        airResistance = 0.002;
        friction = 0.7;
        gravity = 9.81;
        upForce = 0;
        yVelocity = -13;
        houses = [];
        houses.push(new House(housePosition, houseRotation, houseScale, houseVelocity, airResistance, gravity, friction, upForce, yVelocity));

        ballPosition = new Vector(-100, -50, 0);
        ballRotation = Math.PI/0.5;
        ballScale = new Vector(1, 1, 1);
        ballVelocity = 0;
        ballYVelocity = 0
        var ballRotationSpeed = 0.05;
        var ballScaleSpeed = 0;
        balls = [];
        balls.push(new Ball(ballPosition, ballRotation, ballScale, ballVelocity, ballYVelocity, ballRotationSpeed, ballScaleSpeed));

        ballPosition = new Vector(0, 0, 0);
        ballRotation = (Math.PI / 1.5);
        ballScale = new Vector(1, 1, 1);
        ballVelocity = 0;
        ballYVelocity = 0;
        ballRotationSpeed = 0.03;
        ballScaleSpeed = 0.02;
        balls.push(new Ball(ballPosition, ballRotation, ballScale, ballVelocity, ballYVelocity, ballRotationSpeed, ballScaleSpeed));
    }
	
	function initialiseRootNode(){
		origin = new Vector(mainCanvas.width * 0.25, mainCanvas.height * 0.25);
		transMatrix = Matrix.createTranslation(origin);
		
		origin = new node(transMatrix);
		var rootNode = new node(Matrix.createIdentity());
        rootNode.addChild(origin);
        
        origin.addChild(balls[0]);
        origin.addChild(balls[1]);
        origin.addChild(houses[0]);
	}
    function drawNode() {
        origin.draw(mainContext, transMatrix);
    }
    // this function will actually draw on the canvas
    function draw() {
        mainContext.fillStyle = "#1eded0";
		mainContext.fillRect(-400, -300, mainCanvas.width * 2, mainCanvas.height * 2);
        mainContext.lineWidth = 5;
        mainContext.fillStyle = "#00b010";
        mainContext.fillRect(-400, 200, mainCanvas.width * 2, mainCanvas.height * 2);
    }
    var lastTime = Date.now();
    function animationLoop() {
        var thisTime = Date.now();
        var deltaTime = (thisTime - lastTime) / 1000;
        houses[0].update(deltaTime, mainCanvas);
        balls[0].update(deltaTime);
        balls[1].update(deltaTime);
        draw();
        drawNode();
        requestAnimationFrame(animationLoop);
    }

    initialiseCanvasContext();
    draw();
    initialiseRootNode();
    animationLoop();
}
window.addEventListener('load', onLoad, false);