class Ball{
    constructor(pPosition, pAngle, pScale, pVelocity, pYVelocity, pRSpeed, pSSpeed) {
        this.setPosition(pPosition);
        this.setAngle(pAngle);
        this.setScale(pScale);
        this.setVelocity(pVelocity);
        this.setYVelocity(pYVelocity);
        this.setRSpeed(pRSpeed);
        this.setScaleSpeed(pSSpeed);
        this.initialiseSceneGraph();
    }
    initialiseSceneGraph() {
        var rotation = Matrix.createRotation(this.getAngle());
        var translation = Matrix.createTranslation(this.getPosition());
        var scale = Matrix.createScale(this.getScale());

        var translationNode = new node(translation);
        var rotationNode = new node(rotation);
        var scaleNode = new node(scale);
        var ballNode = new node(Matrix.createTranslation(this.getPosition()));
        var triangleNode1 = new node(Matrix.createTranslation(new Vector(this.getPosition().getX() + 80, this.getPosition().getY(), this.getPosition().getZ())));
        var triangleNode2 = new node(Matrix.createTranslation(new Vector(this.getPosition().getX() - 80, this.getPosition().getY(), this.getPosition().getZ())));
        var triangleNode3 = new node(Matrix.createTranslation(new Vector(this.getPosition().getX(), this.getPosition().getY() + 80, this.getPosition().getZ())));
        var triangleNode4 = new node(Matrix.createTranslation(new Vector(this.getPosition().getX(), this.getPosition().getY() - 80, this.getPosition().getZ())));
        var triangle1Angle = new node(Matrix.createRotation(Math.PI / 2));
        var triangle2Angle = new node(Matrix.createRotation(Math.PI / -2));
        var triangle3Angle = new node(Matrix.createRotation(Math.PI / -1));
        translationNode.addChild(rotationNode);
        rotationNode.addChild(scaleNode);
        scaleNode.addChild(ballNode);
        scaleNode.addChild(triangleNode1);
        scaleNode.addChild(triangleNode2);
        scaleNode.addChild(triangleNode3);
        scaleNode.addChild(triangleNode4);
        ballNode.addChild(new ballDrawer());
        triangleNode1.addChild(triangle1Angle);
        triangleNode2.addChild(triangle2Angle);
        triangleNode3.addChild(triangle3Angle);
        triangle1Angle.addChild(new triangle());
        triangle2Angle.addChild(new triangle());
        triangle3Angle.addChild(new triangle());
        triangleNode4.addChild(new triangle());

        this.setSceneGraph(translationNode);
    }
    draw(mainContext, pMatrix) {
        this.getSceneGraph().draw(mainContext, pMatrix);
    }
    update(deltaTime) {
        if (this.getPosition().getX() > 700) {
            this.setPosition(new Vector(-300, -130, 0));
        }
        if (this.getScale().getX() > 1.5 || this.getScale().getX() < 0.5) {
 
            this.setScaleSpeed(this.getScaleSpeed() * -1);
        }
        var nRotation = Matrix.createRotation(this.getAngle() - (deltaTime * 0.01));
        var scale = this.getScale();
        var sX = scale.getX();
        var sY = scale.getY();
        var nScale = Matrix.createScale(new Vector(sX + this.getScaleSpeed(), sY + this.getScaleSpeed(), 1));
        this.setScale(new Vector(sX + this.getScaleSpeed(), sY + this.getScaleSpeed(), 1));
        this.setAngle(this.getAngle() - (this.getRSpeed()));
        var x = this.getPosition().getX();
        var altX = x + (this.getVelocity());
        var y = this.getPosition().getY();
        var altY = y + this.getYVelocity();
        this.setPosition(new Vector(altX, altY));
        var newPosition = new Vector(altX, altY, this.getPosition().getZ());
        var nMovement = Matrix.createTranslation(newPosition);
        var transform = nRotation.multiply(nMovement);
        var transform2 = nScale.multiply(transform);
        this.getSceneGraph().setMatrix(transform2);
    }
    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    getAngle() {
        return this.mAngle;
    }
    setAngle(pAngle) {
        this.mAngle = pAngle;
    }
    getScale() {
        return this.mScale;
    }
    setScale(pScale) {
        this.mScale = pScale;
    }
    getSceneGraph() {
        return this.mSceneGraph;
    }
    setSceneGraph(pSceneGraph) {
        this.mSceneGraph = pSceneGraph;
    }
    setVelocity(pVelocity) {
        this.mVelocity = pVelocity;
    }
    getVelocity() {
        return this.mVelocity;
    }
    setYVelocity(pYVelocity) {
        this.mYVelocity = pYVelocity;
    }
    getYVelocity() {
        return this.mYVelocity;
    }
    setRSpeed(pRSpeed) {
        this.mRSpeed = pRSpeed;
    }
    getRSpeed() {
        return this.mRSpeed;
    }
    setScaleSpeed(pSSpeed) {
        this.mSSpeed = pSSpeed;
    }
    getScaleSpeed() {
        return this.mSSpeed;
    }
}
