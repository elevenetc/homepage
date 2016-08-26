/**
 * Created by eleven on 14/08/2016.
 */
function Text(context, text, link, fontSize) {

	Text.prototype.overColor = '#3C3C3C';
	Text.prototype.outColor = 'black';

	var textMetrics = context.measureText(text);
	const height = fontSize;
	const width = textMetrics.width;
	this.color = "black";

	this.onDraw = function (context, x, y) {
		this.x = x;
		this.y = y;
		context.save();
		context.fillStyle = this.color;
		context.fillText(text, x, y + height);
		context.restore();
	};

	this.getText = function () {
		return text;
	};

	this.getWidth = function () {
		return width;
	};

	this.getHeight = function () {
		return height;
	};

	this.contains = function (x, y) {
		if (link == null) return false;
		return x >= this.x && y >= this.y && this.x + width > x && this.y + height > y;
	};

	this.mouseOverHandler = function () {
		this.color = this.overColor;
	};

	this.mouseOutHandler = function () {
		this.color = this.outColor;
	};

	this.mouseClickHandler = function () {
		window.open(link, "_black");
	}
}

module.exports = Text;