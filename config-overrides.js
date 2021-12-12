const path = require("path");

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,

      // 以下に指定したいalias名と、対応パスを記述
      "@": path.resolve(__dirname, "./src"),
    },
  };

  return config;
};
