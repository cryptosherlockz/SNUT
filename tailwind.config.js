/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(10px, 7fr))",
      },
      boxShadow: {
        box: "0px 0px 101px -40px rgba(255,255,255,1)",
        roadmapbox: "0px 0px 101px -20px rgba(255,255,255,1)",
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Comfortaa: ["Comfortaa", "cursive"],
      },
      colors: {
        primary: "#FFFFFF",
        navBg: "#AA7B05",
        bgColor: "#407695",
        darkBlue: "#001B2B",
        lightGrey: "#F5F6FC",
        boxPink: "#FB118E",
        textGrey: "#7780A0",
        darkYellow: "#FFB800",
        lightYellow: "#D5FF2B",
        cardBrown: "#261B00",
      },
    },
  },

  plugins: [],
};
