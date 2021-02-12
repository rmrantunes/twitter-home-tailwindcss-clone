module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "tt-color": "#33A1F2",
        "tt-color-800": "#1f6191",
        "tt-color-900": "#194f77",
        "tt-white": "#D9D9D9",
        "tt-gray": "#7A7A7A",
        "tt-outlines": "#2F3336",
        "tt-primary": "#000000",
        "tt-search": "#202327",
        "tt-favorite": "#E8265E",
        "tt-rt": "#00C06B",
        "tt-secondary": "#15181C",
      },
      fontFamily: {
        sans: ["Roboto"],
      },
      gridTemplateColumns: {
        "tweet-card": "48px 1fr",
      },
      gridTemplateRows: {
        "tweet-card": "48px 1rf",
      },
      spacing: {
        100: "25rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundOpacity: ["active"],
    },
  },
  plugins: [],
};
