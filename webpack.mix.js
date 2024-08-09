const mix = require("laravel-mix");

mix
  .js("src/js/app.js", "dist/js/app.js")
  .postCss("src/css/styles.css", "dist/css", [require("tailwindcss")]);
