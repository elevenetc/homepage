/**
 * Created by eleven on 14/08/2016.
 */
function Circle(x, y, maxAlpha, color) {

	this.color = color;

	const radius = 200;
	const maxScaleY = 1.1;
	const minScaleY = 0.9;
	const scaleYDiff = maxScaleY - minScaleY;
	var currentScaleY = getRandom(minScaleY, maxScaleY);

	const maxScaleX = 1.1;
	const minScaleX = 0.9;
	const scaleXDiff = maxScaleX - minScaleX;
	var currentScaleX = getRandom(minScaleX, maxScaleX);

	const scaleRateX = getRandom(0.001, 0.02);
	const scaleRateY = getRandom(0.001, 0.02);

	var xS = getRandom(1, 10);
	var yS = getRandom(1, 10);
	var alpha = 0;

	this.onDraw = function (context) {
		context.save();
		context.beginPath();
		context.setTransform(1, 0, 0, 1, x, y);
		context.scale(currentScaleX + minScaleX, currentScaleY + minScaleY);
		context.arc(0, 0, radius, 0, 2 * Math.PI);
		context.globalAlpha = alpha;
		context.fillStyle = this.color;
		context.fill();
		context.restore();

		currentScaleX = (Math.sin(xS) / 2 + 0.5) * scaleXDiff;
		currentScaleY = (Math.sin(yS) / 2 + 0.5) * scaleYDiff;
		xS += scaleRateX;
		yS += scaleRateY;

		if (alpha < maxAlpha) alpha += 0.01;
	}
}