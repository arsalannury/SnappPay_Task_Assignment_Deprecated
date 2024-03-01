/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottomMd: "0 6px 0 #000",
        bottomSm: "0 3px 0 #000",
        bottomXs: "0 1px 0 #000",
      },
    },
  },
  plugins: [],
};
