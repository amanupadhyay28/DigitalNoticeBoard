module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#FF5722",
        darkbg: "#1E1E1E",
      },
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'],
      },
      fontWeight: {
        // Define custom weights if needed
        'custom-weight': '<weight>', // replace <weight> with the actual weight
      },
    },
  },
  darkMode: "class", // Enable dark mode
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.custom-font': {
          fontFamily: '"Noto Sans", sans-serif',
          fontOpticalSizing: 'auto',
          fontStyle: 'normal',
          fontVariationSettings: '"wdth" 100',
        },
      });
    },
  ],
};
