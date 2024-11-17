import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/swiper/css/bundle",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#E7FAFE",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [tailwindScrollbar],
};
