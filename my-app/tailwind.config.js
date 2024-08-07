/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    fontFamily: {
      monument: ["Monument", "sans-serif"],
      sofachrome: ["Sofachrome", "sans-serif"],
      horizon: ["Horizon", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        htfgreen:"#03C652",
      },
      animation: {
        "intro-bounce": "bounce 2s 2",
        "other-bounce": "my_bounce 2s infinite",
        "slide-left": "slide_left 3s 1",
        "slide-right": "slide_right 3s 1",
        "intro-unhide": "unhide 4s 1",
        text: "text 5s ease infinite",
        pop: "pop 0.5s 1",
        minipop: "mini_pop 0.5s 1"
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "300% 300%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "300% 300%",
            "background-position": "right center",
          },
        },
      }
    },
  },
  plugins: [],
};
