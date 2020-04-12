module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV === "production");

  const plugins = [];
  const presets = ["@babel/preset-env"];

  return {
    plugins,
    presets
  };
};
