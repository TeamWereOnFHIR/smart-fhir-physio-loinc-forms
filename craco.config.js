const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/common/utils"),
    },
  },
};
