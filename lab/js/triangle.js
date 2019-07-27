class triangle{
    draw(mainContext, pMatrix) {
        mainContext.fillStyle = "#b01b01";
        mainContext.lineWidth = 1;
        mainContext.beginPath();
        mainContext.moveTo(0, -15);
        mainContext.lineTo(10, 15);
        mainContext.lineTo(-10, 15);
        mainContext.closePath();
        mainContext.fill();
        mainContext.stroke();
    }
}