class wall{
   draw(pContext, matrix) {
           pContext.fillStyle = '#b01fe9';
           pContext.beginPath();
           pContext.moveTo(-105,-75);
           pContext.lineTo(105,-75);
           pContext.lineTo(105,75);
           pContext.lineTo(-105,75);
           pContext.closePath();
           pContext.fill();
           pContext.stroke();
       }
}