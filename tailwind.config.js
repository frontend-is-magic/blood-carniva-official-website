/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050203",
        charcoal: "#12080b",
        ivory: "#fff3ea",
        redlight: "#ff3d58",
      },
    },
  },
  plugins: [],
};
