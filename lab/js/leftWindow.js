class leftWindow{
draw(pContext, matrix){
    pContext.fillStyle = "#b01b01";
        pContext.beginPath();
        pContext.moveTo(-25,25);
        pContext.lineTo(-25,-25);
        pContext.lineTo(25,-25);
        pContext.lineTo(25,25);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
}