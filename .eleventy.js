const tailwind = require('tailwindcss');
const postCss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const postcssFilter = (cssCode, done) => {
	// we call PostCSS here.
	postCss([tailwind(require('./tailwind.config')), autoprefixer(), cssnano({ preset: 'default' })])
		.process(cssCode, {
			// path to our CSS file
			from: './src/_includes/styles/tailwind.css'
		})
		.then(
			(r) => done(null, r.css),
			(e) => done(e, null)
		);
};

module.exports = function (config) {
  config.addWatchTarget("./src/_includes/styles/tailwind.css");
  config.addNunjucksAsyncFilter("postcss", postcssFilter);
  config.addPassthroughCopy("src/assets/fonts/");
  config.addPassthroughCopy("src/assets/images/");
  config.addPassthroughCopy("src/scripts");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
