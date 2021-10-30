const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '36rem',
        '144':'48rem',
      }
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
