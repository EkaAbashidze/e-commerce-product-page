/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        
      },
      width: {
        
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleorange: "hsl(25, 100%, 94%)",
        darkblue: "hsl(220, 13%, 13%)",
        darkgrayblue: "hsl(219, 9%, 45%)",
        grayblue: "hsl(220, 14%, 75%)",
        lightgrayblue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)"
      },
    },
    fontFamily: {
      Kumbh: ["Kumbh Sans, sans-serif;"]
    },
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1439px" },
      lg: { min: "1440px" },
    },
  },
  plugins: [],
};
