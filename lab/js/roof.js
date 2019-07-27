class roof{
    draw(pContext, matrix) {
        pContext.fillStyle = "#dedb01";
        pContext.beginPath();
        pContext.moveTo(-105,50);
        pContext.lineTo(0,- 50);
        pContext.lineTo(105,50);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
}