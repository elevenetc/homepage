/**
 * Created by eleven on 14/08/2016.
 */

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}