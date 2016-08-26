/**
 * Created by eleven on 14/08/2016.
 */
module.exports = {
	getRandom: function (min, max) {
		return Math.random() * (max - min) + min;
	},
	getRandomColor: function () {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}
};