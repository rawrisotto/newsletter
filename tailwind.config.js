/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotobold: ["Roboto-Bold", "sans-serif"],
        robotoregular: ["Roboto-Regular", "sans-serif"],
      },
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        "tomato-200": "hsl(4, 100%, 67%, 0.2)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
