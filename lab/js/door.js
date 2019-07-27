class door{
    draw(pContext, matrix) {
        pContext.fillStyle = "#fe9ded";
        pContext.beginPath();
        pContext.moveTo(- 30,50);
        pContext.lineTo(- 30,-50);
        pContext.lineTo(30,-50);
        pContext.lineTo(30,50);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
}