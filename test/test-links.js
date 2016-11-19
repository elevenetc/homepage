/**
 * Created by eugene.levenetc on 26/08/16.
 */
const links = require('./links');
const assert = require('assert');

it('links should be valid', function () {
	const regex = /^(ftp|http|https):\/\/[^ "]+$/;
	for (let i = 0; i < links.length; i++) {
		if (links[i].type === 'link')
			assert.equal(regex.test(links[i].url), true, links[i].url);
	}
});
