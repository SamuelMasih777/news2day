/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  flowbite: {
    themes: false,
  },
  plugins: [
    // require("flowbite/plugin")({
    //   charts: true,
    // }),
    require("tailwind-scrollbar"),
  ],
};
