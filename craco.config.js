const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/common/utils"),
    },
  },
};
