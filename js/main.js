/**
 * Created by eleven on 14/08/2016.
 */

function init(canvasId) {

	const canvas = document.getElementById(canvasId);
	const context = canvas.getContext('2d');
	const fontSize = 18;
	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const maxAlpha = 0.8;
	const circlesAmount = 20;

	context.font = fontSize + "px Lucida Grande";

	const texts = initTexts();
	const circles = initCircles();

	canvas.addEventListener('mousemove', function (evt) {

		const rect = canvas.getBoundingClientRect();
		const mX = evt.clientX - rect.left;
		const mY = evt.clientY - rect.top;
		var foundItem = false;

		for (var i = 0; i < texts.length; i++) {
			var text = texts[i];
			if (text.contains(mX, mY)) {
				foundItem = true;
				text.mouseOverHandler();
			} else {
				text.mouseOutHandler();
			}
		}

		document.body.style.cursor = foundItem ? 'pointer' : 'default';

	}, false);

	canvas.addEventListener('mousedown', function (evt) {
		const rect = canvas.getBoundingClientRect();
		const mX = evt.clientX - rect.left;
		const mY = evt.clientY - rect.top;
		for (var i = 0; i < texts.length; i++) {
			var text = texts[i];
			if (text.contains(mX, mY)) text.mouseClickHandler();
		}
	}, false);

	window.requestAnimationFrame(draw);

	function draw() {
		context.clearRect(0, 0, 500, 500);
		drawCircles();
		drawTexts();
		window.requestAnimationFrame(draw);
	}

	function drawTexts() {
		context.globalCompositeOperation = "source-over";
		var yOffset = 0;
		const itemDistance = 0.3;
		const listOffset = (texts.length) * fontSize / 2;

		for (var i = 0; i < texts.length; i++) {
			var text = texts[i];
			var x = centerX - text.getWidth() / 2;
			var y = centerY - text.getHeight() / 2 + yOffset;
			text.onDraw(context, x, y - listOffset, i);

			yOffset += text.getHeight() + fontSize * itemDistance;
		}
	}

	function drawCircles() {
		context.globalCompositeOperation = 'screen';
		for (var i = 0; i < circles.length; i++) circles[i].onDraw(context);
	}

	function initTexts() {
		var result = [];
		for (var i = 0; i < links.length; i++) {
			var link = links[i];
			result.push(new Text(context, link.title, link.url, fontSize));
		}
		return result;
	}

	function initCircles() {
		var result = [];
		for (var i = 0; i < circlesAmount; i++)
			result.push(new Circle(centerX, centerY, maxAlpha, getRandomColor()));
		return result;
	}
}