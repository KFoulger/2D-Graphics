class Vector {
    constructor(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY;
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;
    }

    add(sVector) {
        var sX = this.getX() + sVector.getX();
        var sY = this.getY() + sVector.getY();
        var sZ = this.getZ() + sVector.getZ();

        var tVector = new Vector(sX, sY, sZ);
        return tVector;
    }

    subtract(sVector) {
        var sX = this.getX() - sVector.getX();
        var sY = this.getY() - sVector.getY();
        var sZ = this.getZ() - sVector.getZ();

        var tVector = new Vector(sX, sY, sZ);
        return tVector;
    }

    multiply(scalar) {
        var sX = this.getX() * scalar;
        var sY = this.getY() * scalar;
        var sZ = this.getZ() * scalar;

        var tVector = new Vector(sX, sY, sZ);
        return tVector;
    }

    divide(scalar) {
        var sX = this.getX() / scalar;
        var sY = this.getY() / scalar;
        var sZ = this.getZ() / scalar;

        var tVector = new Vector(sX, sY, sZ);
        return tVector;
    }

    magnitude() {
        var mag = Math.pow(this.getX(), 2) + Math.pow(this.getY(), 2);
        mag = Math.sqrt(mag);
        return mag;
    }

    normalise() {
        var vector = new Vector(this.getX(), this.getY(), this.getZ());
        var mag = vector.magnitude();
        var sX = this.getX() / mag;
        var sY = this.getY() / mag;
        var sZ = this.getZ() / mag;

        var tVector = new Vector(sX, sY, sZ);
        return tVector;
    }

    limitTo(limit) {
        var vector = new Vector(this.getX(), this.getY(), this.getZ());
        var mag = vector.magnitude();
        if (mag < limit) {
            return vector
        }
        if (mag > limit) {
            var newMag = mag / limit;
            var sX = this.getX() / newMag;
            var sY = this.getY() / newMag;
            var sZ = this.getZ() / newMag;

            var tVector = new Vector(sX, sY, sZ);
            return tVector;
        }
    }

    dotProduct(sVector) {
        var dotX = this.getX() * sVector.getX();
        var dotY = this.getY() * sVector.getY();
        var dotZ = this.getZ() * sVector.getZ();

        var dot = dotX + dotY + dotZ;
        return dot;
    }

    interpolate(sVector, interp) {
        var sX = (this.getX() + sVector.getX()) * interp;
        var sY = (this.getY() + sVector.getY()) * interp;
        var sZ = (this.getZ() + sVector.getZ()) * interp;

        var tVector = new Vector(sX, sY, sZ);
        return tVector;
    }

    rotate(rotation) {
        var sX = (Math.cos(rotation) * this.getX()) - (Math.sin(rotation) * this.getY());
        var sY = (Math.sin(rotation) * this.getX()) + (Math.cos(rotation) * this.getY());
        var sZ = 1;

        var tVector = new Vector(sX, sY, sZ);
        return tVector;
    }
    angleBetween(sVector) {
        var magA = this.magnitude();
        var magB = sVector.magnitude();
        var dot = this.dotProduct(sVector);
        var angle = Math.acos(dot / (magA * magB));

        return angle;
    }
}