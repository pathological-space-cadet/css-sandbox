const presetEnv = require("postcss-preset-env");
const purgeCss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");
const postcssImport = require("postcss-import");

const env = process.env.NODE_ENV || "development";
const prod = env === "production";

module.exports = {
  plugins: [
    postcssImport,
    presetEnv({
      stage: 0,
      autoprefixer: { grid: true }
    }),
    tailwindcss
  ]
};
