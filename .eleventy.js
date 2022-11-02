const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/css');
	eleventyConfig.addPassthroughCopy('./src/js');
	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('src/_redirects');

	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

	eleventyConfig.addFilter('postDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	eleventyConfig.addFilter(
		'excludeFromCollection',
		(collection = [], pageUrl = this.ctx.page.url) => {
			return collection.filter((post) => post.url !== pageUrl);
		}
	);

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
