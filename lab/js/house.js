class House {
    constructor(pPosition, pAngle, pScale, pVelocity, pResistance, pGravity, pFriction, pUpForce, pYVelocity) {
        this.setPosition(pPosition);
		this.setAngle(pAngle);
		this.setScale(pScale);
        this.initialiseSceneGraph();
        this.setVelocity(pVelocity);
        this.setAirResistance(pResistance);
        this.setGravity(pGravity);
        this.setFriction(pFriction);
        this.setUpForce(pUpForce);
        this.setYVelocity(pYVelocity);
    }
	initialiseSceneGraph(){
	    var rotation = Matrix.createRotation(this.getAngle());
		var translation = Matrix.createTranslation(this.getPosition());
		var scale = Matrix.createScale(this.getScale());
		
		var translationNode = new node(translation);
		var rotationNode = new node(rotation);
		var scaleNode = new node(scale);
		var wallNode = new node(Matrix.createTranslation(new Vector(0,0,0)));
		var roofNode = new node(Matrix.createTranslation(new Vector(0,-126,0)));
		var doorNode = new node(Matrix.createTranslation(new Vector(0,24,0)));
		var leftWindowNode = new node(Matrix.createTranslation(new Vector(-68,10,0)));
		var rightWindowNode = new node(Matrix.createTranslation(new Vector(68,10,0)));
		
		translationNode.addChild(rotationNode);
        rotationNode.addChild(scaleNode);

		scaleNode.addChild(wallNode);
		scaleNode.addChild(roofNode);
		scaleNode.addChild(doorNode);
		scaleNode.addChild(leftWindowNode);
		scaleNode.addChild(rightWindowNode);
		
        wallNode.addChild(new wall());
        roofNode.addChild(new roof());
        doorNode.addChild(new door());
        leftWindowNode.addChild(new leftWindow());
        rightWindowNode.addChild(new rightWindow());

        this.setSceneGraph(translationNode);
	}
    draw(pContext, transMatrix) {
        pContext.lineWidth = 5;
		this.getSceneGraph().draw(pContext,transMatrix);
    }
    update(deltaTime, pCanvas) {
        if (this.getPosition().getX()+ 115 > 400 || this.getPosition().getX() -115 < -400) {
            this.setVelocity((this.getVelocity() * - 1) * 0.6);
            this.setAirResistance(this.getAirResistance() * - 1);
        }
        if (this.getVelocity() > 0 && this.getVelocity() < 0.2 || this.getVelocity < 0 && this.getVelocity() > -0.2) {
            this.setVelocity(0);
            this.setAirResistance(0);
        }
        if (this.getPosition().getY() > 225) {
            
            this.setUpForce(this.getYVelocity() * (deltaTime/2));
            this.setGravity(this.getGravity() * this.getFriction());
            this.setYVelocity(this.getYVelocity() * 0.8);
            this.setVelocity(this.getVelocity() * 0.78);
        }
        if (this.getGravity() < 0.1) {
            this.setGravity(0);
            this.setUpForce(0);
            this.setPosition(new Vector(this.getPosition().getX(), 225));

        }
        if (this.getVelocity() == 0) {
            this.setYVelocity(0);
        }

        var yAccel = 0.5 * this.getGravity() * Math.pow((deltaTime), 2);
        var x = this.getPosition().getX();
        this.setVelocity(this.getVelocity() - (deltaTime * this.getAirResistance()));
        var altX = x + (this.getVelocity());
        var y = this.getPosition().getY();
        var altY = y + yAccel + this.getUpForce();
        this.setPosition(new Vector(altX, altY));
        var newPosition = new Vector(altX, altY, this.getPosition().getZ());
        var nMovement = Matrix.createTranslation(newPosition);
        this.getSceneGraph().setMatrix(nMovement);
    }
    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
	getAngle(){
		return this.mAngle;
	}
	setAngle(pAngle){
		this.mAngle = pAngle;
	}
	getScale(){
		return this.mScale;
	}
	setScale(pScale){
		this.mScale = pScale;
	}
	getSceneGraph(){
		return this.mSceneGraph;
	}
	setSceneGraph(pSceneGraph){
		this.mSceneGraph = pSceneGraph;
    }
    setVelocity(pVelocity) {
        this.mVelocity = pVelocity;
    }
    getVelocity() {
        return this.mVelocity;
    }
    setAirResistance(pResist) {
        this.mResist = pResist;
    }
    getAirResistance() {
        return this.mResist;
    }
    setGravity(pGravity) {
        this.mGravity = pGravity;
    }
    getGravity() {
        return this.mGravity;
    }
    setFriction(pFriction) {
        this.mFriction = pFriction;
    }
    getFriction() {
        return this.mFriction;
    }
    setUpForce(pUpForce) {
        this.mUpForce = pUpForce;
    }
    getUpForce() {
        return this.mUpForce;
    }
    setYVelocity(pYVelocity) {
        this.mYVelocity = pYVelocity;
    }
    getYVelocity() {
        return this.mYVelocity;
    }
}