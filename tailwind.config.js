module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "tt-color": "#33A1F2",
        "tt-white": "#D9D9D9",
        "tt-gray": "#7A7A7A",
        "tt-outlines": "#2F3336",
        "tt-primary": "#000000",
        "tt-search": "#202327",
        "tt-favorite": "#E8265E",
        "tt-rt": "#00C06B",
        "tt-secondary": "#15181C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
