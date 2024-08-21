const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('src/_redirects');
	eleventyConfig.addPassthroughCopy('src/script.js');
	eleventyConfig.addPassthroughCopy('src/style.css');

	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

	eleventyConfig.addFilter('postDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	// Add a filter to format dates for structured data
	eleventyConfig.addFilter('isoDate', function (date) {
		return date.toISOString();
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
