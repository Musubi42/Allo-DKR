const modal_landing_page = require('./src/_includes/components/modal_landing_page')
const plat_categorie = require('./src/_includes/components/plat_categorie')
const sitemap = require('@quasibit/eleventy-plugin-sitemap');

module.exports = function (config) {
  // config.addWatchTarget("./src/_includes/styles/tailwind.css");
  // config.addNunjucksAsyncFilter("postcss", postcssFilter);
  config.addPassthroughCopy("src/assets/fonts/");
  config.addPassthroughCopy("src/assets/images/");
  config.addPassthroughCopy("src/scripts/");

  config.addShortcode("modal_landing_page", modal_landing_page)
  config.addShortcode("plat_categorie", plat_categorie)
  config.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://allodkrsaveurs.fr",
    },
  });
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
