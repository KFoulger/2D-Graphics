class Matrix{
 constructor(x0, y0, z0, x1, y1, z1, x2, y2, z2) {
    this.setVector0(x0, y0, z0);
    this.setVector1(x1, y1, z1);
    this.setVector2(x2, y2, z2);
  }
  getElement(row, col) {
    var vector0 = this.getVector0();
    var vector1 = this.getVector1();
    var vector2 = this.getVector2();

    if (row == 0) {
      if (col == 0) {
        return vector0.getX();
      }
      if (col == 1) {
        return vector0.getY();
      }
      if (col == 2) {
        return vector0.getZ();
      }
    }
    if (row == 1) {
      if (col == 0) {
        return vector1.getX();
      }
      if (col == 1) {
        return vector1.getY();
      }
      if (col == 2) {
        return vector1.getZ();
      }
    }
    if (row == 2) {
      if (col == 0) {
        return vector2.getX();
      }
      if (col == 1) {
        return vector2.getY();
      }
      if (col == 2) {
        return vector2.getZ();
      }
    }
  }

  setVector0(x0, y0, z0) {
    this.vector0 = new Vector(x0, y0, z0);
  }
  getVector0() {
    return this.vector0;
  }

  setVector1(x1, y1, z1) {
    this.vector1 = new Vector(x1, y1, z1);
  }
  getVector1() {
    return this.vector1;
  }

  setVector2(x2, y2, z2) {
    this.vector2 = new Vector(x2, y2, z2);
  }
  getVector2() {
    return this.vector2;
  }

  static createIdentity() {
    var matrix = new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return matrix;
  }

  static createTranslation(translateVector) {
    var translationMatrix = new Matrix(1,0,translateVector.getX(),0,1,translateVector.getY(),0,0,1);
    return translationMatrix;
  }

  static createScale(scaleVector) {
    var matrix = Matrix.createIdentity();
    var vector0 = matrix.getVector0();
    var vector1 = matrix.getVector1();
    var vector2 = matrix.getVector2();

    var x0 = (vector0.getX() * scaleVector.getX()) + (vector0.getY() * scaleVector.getY()) + (vector0.getZ() * scaleVector.getZ());
    var y0 = 0;
    var z0 = 0;

    var x1 = 0;
    var y1 = (vector1.getX() * scaleVector.getX()) + (vector1.getY() * scaleVector.getY()) + (vector1.getZ() * scaleVector.getZ());
    var z1 = 0;

    var x2 = 0;
    var y2 = 0;
    var z2 = (vector2.getX() * scaleVector.getX()) + (vector2.getY() * scaleVector.getY()) + (vector2.getZ() * scaleVector.getZ());

    var scale = new Matrix(x0, y0, z0, x1, y1, z1, x2, y2, z2);
    return scale;
  }
  
  static createRotation(rotation){
  var matrix = Matrix.createIdentity();
  var v0 = matrix.getVector0();
  var v1 = matrix.getVector1();
  var v2 = matrix.getVector2();
  
  var x0 = (Math.cos(rotation) * v0.getX()) - (Math.sin(rotation) * v1.getX());
  var y0 = (Math.cos(rotation) * v0.getY()) - (Math.sin(rotation) * v1.getY());
  var z0 = (Math.cos(rotation) * v0.getZ()) - (Math.sin(rotation) * v1.getZ());
  
  var x1 = (Math.sin(rotation) * v0.getX()) + (Math.cos(rotation) * v1.getX());
  var y1 = (Math.sin(rotation) * v0.getY()) + (Math.cos(rotation) * v1.getY());
  var z1 = (Math.sin(rotation) * v0.getZ()) + (Math.cos(rotation) * v1.getZ());
  
  var x2 = 0;
  var y2 = 0;
  var z2 = (1 * v2.getZ());
  
  var mRotation = new Matrix(x0,y0,z0,x1,y1,z1,x2,y2,z2);
  return mRotation;
  }
  multiplyVector(tVector) {
      var vector0 = this.getVector0();
      var vector1 = this.getVector1();
      var vector2 = this.getVector2();

      var x = (vector0.getX() * tVector.getX()) + (vector0.getY() * tVector.getY()) + (vector0.getZ() * tVector.getZ());
      var y = (vector1.getX() * tVector.getX()) + (vector1.getY() * tVector.getY()) + (vector1.getZ() * tVector.getZ());
      var z = (vector2.getX() * tVector.getX()) + (vector2.getY() * tVector.getY()) + (vector2.getZ() * tVector.getZ());

      var mVector = new Vector(x, y, z);
      return mVector;
  }
  multiply(tMatrix) {
      var vector0 = this.getVector0();
      var vector1 = this.getVector1();
      var vector2 = this.getVector2();
      var tVector0 = tMatrix.getVector0();
      var tVector1 = tMatrix.getVector1();
      var tVector2 = tMatrix.getVector2();

      var x0 = (vector0.getX() * tVector0.getX()) + (vector0.getY() * tVector1.getX()) + (vector0.getZ() * tVector2.getX());
      var y0 = (vector0.getX() * tVector0.getY()) + (vector0.getY() * tVector1.getY()) + (vector0.getZ() * tVector2.getY());
      var z0 = (vector0.getX() * tVector0.getZ()) + (vector0.getY() * tVector1.getZ()) + (vector0.getZ() * tVector2.getZ());

      var x1 = (vector1.getX() * tVector0.getX()) + (vector1.getY() * tVector1.getX()) + (vector1.getZ() * tVector2.getX());
      var y1 = (vector1.getX() * tVector0.getY()) + (vector1.getY() * tVector1.getY()) + (vector1.getZ() * tVector2.getY());
      var z1 = (vector1.getX() * tVector0.getZ()) + (vector1.getY() * tVector1.getZ()) + (vector1.getZ() * tVector2.getZ());

      var x2 = (vector2.getX() * tVector0.getX()) + (vector2.getY() * tVector1.getX()) + (vector2.getZ() * tVector2.getX());
      var y2 = (vector2.getX() * tVector0.getY()) + (vector2.getY() * tVector1.getY()) + (vector2.getZ() * tVector2.getY());
      var z2 = (vector2.getX() * tVector0.getZ()) + (vector2.getY() * tVector1.getZ()) + (vector2.getZ() * tVector2.getZ());

      var nMatrix = new Matrix(x0, y0, z0, x1, y1, z1, x2, y2, z2);
      return nMatrix;
  }
  setTransform(pContext){
	  pContext.setTransform(this.getElement(0,0), this.getElement(1,0), this.getElement(0,1), this.getElement(1,1), this.getElement(0,2), this.getElement(1,2));
}
transform(pContext){
	pContext.transform(this.getElement(0,0), this.getElement(1,0), this.getElement(0,1), this.getElement(1,1), this.getElement(0,2), this.getElement(1,2));
}
}
