module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32CD32",
        "background-light": "#F8F9FA",
        "background-dark": "#102216",
        "neutral-text": "#495057",
        "neutral-text-dark": "#d1d5db",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};