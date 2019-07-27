class node {
    constructor(pMatrix) {
        this.setMatrix(pMatrix);
        this.mChildren = [];
    }
    setMatrix(pMatrix) {
        this.mMatrix = pMatrix;
    }
    getMatrix() {
        return this.mMatrix;
    }
    getNumberOfChildren() {
        return this.mChildren.length;
    }
    getChildAt(index) {
        return this.mChildren[index];
    }
    addChild(newChild) {
        this.mChildren.push(newChild);
    }
    draw(pContext, nMatrix) {
        var i;
        var transformationMatrix = nMatrix.multiply(this.getMatrix());
        transformationMatrix.setTransform(pContext);
        for (i = 0; i < this.getNumberOfChildren(); i += 1) {

            this.getChildAt(i).draw(pContext, transformationMatrix);

        }
        nMatrix.setTransform(pContext);
    }
	
}