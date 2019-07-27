class ballDrawer{
	draw(mainContext, pMatrix){
        mainContext.fillStyle = "#b01b01";
        mainContext.lineWidth = 2;
        var anglePerSegment = Math.PI * 2 / 100;
        for (var i = 0; i <= 100; i += 1) {
            var angle = anglePerSegment * i;
            var x = 0 + 50 * Math.cos(angle);
            var y = 0 + 50 * Math.sin(angle);
            if (i == 0) {
                mainContext.moveTo(x, y);
            }
            else {
                mainContext.lineTo(x, y);
            }
        }
        mainContext.fill();
        mainContext.stroke();
	}
}